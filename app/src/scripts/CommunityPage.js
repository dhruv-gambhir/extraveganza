import { Fragment } from "react";
import PageTemplate from "./PageTemplate";

export default class CommunityPage extends PageTemplate {
	render() {
		return (
			<Fragment>
				<div className="main-content-container">
					This is definitely a community page
				</div>
			</Fragment>
		);
	}
}
