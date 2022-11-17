import { useReducer } from "react"
import DigitButton from "./DigitButton"
import OperationButton  from "./OperationButton "
import "./styles.css"

export const ACTIONS ={
    ADD_DIGIT :'add-digit',
    CHOOSE_OPERATION:'choose_operation',
    CLEAR:'clear',
    DELETE_DIGIT:'delete-digit',
    EVALUATE:'evaluate'
}


function reducer(state, {type, payload}){
switch(type){
    case ACTIONS.ADD_DIGIT:
        if(state.overwrite){
            return{
                ...state,
                currentOperand: payload.digit,
                overwrite:false,
            }
        }
        if (payload.digit ==="0 "&& state.currentOperand==="0"){
            return state
        }
        if (payload.digit ==="0" && state.currentOperand.includes (".")){
            return state
        }

        return {
            ...state,
            currentOperand: `${state.currentOperand || ""}${payload.digit}`
        }
        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null){
                return state
            }

            if (state.currentOperand ==null){
                return{
                    ...state,
                    operation:payload.operation
                }
                
            }
            if (state.previousOperand== null){
                return{
                    ...state,
                    operation: payload.operation,
                    previousOperand:state.currentOperand,
                    currentOperand:null,
                }
            }

            return {
                ...state, 
                previousOperand:evaluate(state),
                operation: payload.operation,
            currentOperand:null
            }

        case ACTIONS.CLEAR:
           return{} 
        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite){
                return{
                    ...state,
                    overwrite:false,
                    currentOperand:null
                }
            }
            if(state.currentOperand==null) return state
            if(state.currentOperand.length === 1){
                return {...state, currentOperand:null}
            }
            return{
                ...state,
                currentOperand:state.currentOperand.slice(0, -1)
            }
        case ACTIONS.EVALUATE:
            if(
                state.operation == null ||
                state.currentOperand == null ||
                state.previousOperand == null
            ){
                return state
            }
            return {
                ...state,
                overwrite:true,
                previousOperand:null,
                operation:null,
                currentOperand :evaluate(state),
            }

    }
} 

function evaluate({currentOperand,previousOperand,operation}){
const prev = parseFloat (previousOperand)
const Current =parseFloat(currentOperand)
if(isNaN(prev)|| isNaN (Current)) return ""  
let computation =""
switch (operation){
    case "+":
        computation = prev + Current
        break

    case "-":
        computation = prev - Current
        break

    case "*":
        computation = prev * Current
        break
    
    case "÷":
        computation = prev / Current
        break    

}
return computation.toString()  
}
 
const INTEGER_FORMATTER = new Intl.NumberFormat("en-us",{
  maximumFractionDigits:0,  
})

function fromOperand(Operand){
    if (Operand == null) return
    const [integer,decimal]= Operand.split('.')
    if (decimal==null) return INTEGER_FORMATTER.format(integer)
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}
function App() {
        const[{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
    
        return (
        <div className="Calculator-Grid">
            <div className="Output">
                <div className="Previous-Operand">{fromOperand(previousOperand)} {operation}</div>
                <div className="Current-Operand">{fromOperand (currentOperand)}</div>  
            </div>
            <button className="Span-Tow" onClick={() => dispatch ({type: ACTIONS.CLEAR})}>AC</button>
            <button onClick={() => dispatch ({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
           <OperationButton operation ="÷" dispatch={dispatch}/>
           <DigitButton digit ="7" dispatch={dispatch}/>
           <DigitButton digit ="8" dispatch={dispatch}/>
           <DigitButton digit ="9" dispatch={dispatch}/>          
           <OperationButton operation ="*" dispatch={dispatch}/>
           <DigitButton digit ="4" dispatch={dispatch}/>
           <DigitButton digit ="5" dispatch={dispatch}/>
           <DigitButton digit ="6" dispatch={dispatch}/>
           <OperationButton operation ="+" dispatch={dispatch}/>
           <DigitButton digit ="1" dispatch={dispatch}/>
           <DigitButton digit ="2" dispatch={dispatch}/>
           <DigitButton digit ="3" dispatch={dispatch}/>
           <OperationButton operation ="-" dispatch={dispatch}/>
           <DigitButton digit ="." dispatch={dispatch}/>
           <DigitButton digit ="0" dispatch={dispatch}/>
            <button className="Span-Tow" onClick={() => dispatch ({type: ACTIONS.EVALUATE})}>=</button>
        </div>
    )
}

export default App