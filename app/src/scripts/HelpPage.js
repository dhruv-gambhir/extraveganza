import { Fragment } from "react";
import PageTemplate from './PageTemplate';

export default class HelpPage extends PageTemplate {
	render() {
		return (
			<Fragment>

				<div className='overlay-content'>
					<div className="overlay-content-header">
						Help
					</div>
					<div className="overlay-content-body">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, iure. Corrupti voluptatum ad quo totam tempore nostrum. Ipsa dolores quod esse sunt aliquid cupiditate nemo, atque pariatur labore molestiae iure?
					</div>
				</div>

			</Fragment>
		);
	}
}