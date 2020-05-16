import React from "react";
import ReactDOM from "react-dom";
//import "../../styles/index.scss";

export class Card extends React.Component {
	constructor() {
		super();
		/*	this.state = {
			visible: null*/
	}
	render() {
		return (
			<div className="container">
				<div className="card col-3" style={{ width: 18 + "rem" }}>
					<img
						className="card-img-top"
						src="https://via.placeholder.com/500x325.png?text=prueba"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		);
	}
}
