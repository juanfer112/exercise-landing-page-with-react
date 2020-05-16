import React from "react";
import { Jumbotron } from "./component/jumbotron";
import { Card } from "./component/card";

class Layout extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Jumbotron />
				<Card />
			</React.Fragment>
		);
	}
}

export default Layout;
