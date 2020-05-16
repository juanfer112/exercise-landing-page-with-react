//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//const arrayCards=["Horse", "Turtle", "Elephant", "Monkey"];
import Layout from "./Layout";
//import { Home } from "./component/landingPage.js/index.js";
// import { Jumbotron } from "./component/jumbotron.js";
// import { Card } from "./component/card.js";
//import { NavBar } from "../component/navBar.js";

/*const newArrayCards = arrayCards.map((singleCards, i) =>Card() {
	return <div className="row text-center">hello</div>;*/

//render your react application
ReactDOM.render(<Layout />, document.getElementById("app"));
