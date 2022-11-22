import "./App.css";
import ProfileCard from "./cards/ProfileCard";
import AlexaImage from "./components/image/alexa.png";
import CortanaImage from "./components/image/cortana.png";
import SiriImage from "./components/image/siri.png";

function App() {
	return (
		<div className="App">
			{/* <h1>
				<NavBar className="NavBar" />
			</h1>
			<h2>
				<Header />
			</h2> */}
			<h3>
				<ProfileCard image={AlexaImage} title="Alexa" />
			</h3>
			<h3>
				<ProfileCard image={CortanaImage} title="Cortana" />
			</h3>
			<h3>
				<ProfileCard image={SiriImage} title="Siri" />
			</h3>
		</div>
	);
}

export default App;
// import logo from './logo.svg';
// import "./App.css";
// import Header from "./components/Header";
// import NavBar from "./components/NavBar";
// import ProfileCard from "./cards/ProfileCard";
// function App() {
// 	return (
// 		<div className="App">
// 			<h1>
				
// 				<NavBar className="NavBar" />
// 			</h1>
// 			<h2>
// 				<Header />
// 			</h2>
// 			<h3>
				
// 				<ProfileCard animal="cat" email="ari@gmail.com" />
// 			</h3>
// 			<h3>
// 				<ProfileCard animal="lion" />
// 			</h3>
// 			<h3>
// 				<ProfileCard animal="dog" />
// 			</h3>
// 		</div>
// 	);
// }
// export default App;
