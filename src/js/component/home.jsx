import React from "react";
import MyNavBar from "./navbar.jsx";
import MyCard from "./card.jsx";
import MyJumbo from "./jumbotron.jsx";
import MyFooter from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<MyNavBar/>
			<div className="container">
			<MyJumbo/>
			</div>
			<div className="container d-flex flex-wrap">
			<MyCard/>
			<MyCard/>
			<MyCard/>
			<MyCard/>
			</div>			
			<MyFooter/>			
		</div>
	
	);
};

export default Home;
