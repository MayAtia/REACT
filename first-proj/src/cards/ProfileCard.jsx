import React from "react";
import "./card.css";
function ProfileCard({ image, title }) {
	return (
		<>
			<div className="card">
				<h1>{title}</h1>
				<img src={image} alt="" />
			</div>
		</>
	);
}

export default ProfileCard;
// import React from "react";
// function ProfileCard(props) {
// 	return (
// 		<>
// 			<div>My favorite animal is {props.animal}</div>;
// 			<div>My email is {props.email}</div>;
// 		</>
// 	);
// }

// export default ProfileCard;