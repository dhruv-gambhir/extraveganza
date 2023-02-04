import './App.css';
import React from 'react';

function App() {
	return (
		<div>
			{createHeaderHTML()}
			<div className="middle-container">
				{createMiddleContentMap()}
			</div>

			{createFooterHTML()}
		</div>
	);
}

function createHeaderHTML() {
	return (
		<div className="top-container">
			<div className="top-title"><span style={{ color: "white" }}>EXTRA</span><span style={{ color: "#0B963A" }}>VEGAN</span><span
				style={{ color: "black" }}>ZA</span>
			</div>
		</div>);
}

function createMiddleContent(props) {
	if (props.state === "map") {
		return createMiddleContentMap();
	}
}

function createMiddleContentMap(props) {
	return <React.Fragment>
		<div className="middle-container-left-side">
			<div className="left-buttons">
				<div className="left-side-button">
					<img className="left-img" src="images/vegan.png" alt="button 1"></img>
					<div className="left-desc">vegan</div>
					<input className="left-checkbox" type="checkbox"></input>
				</div>
				<div className="left-side-button">
					<img className="left-img" src="images/vegetarian.png" alt="button 2"></img>
					<div className="left-desc">vegetarian</div>
					<input className="left-checkbox" type="checkbox"></input>
				</div>
				<div className="left-side-button">
					<img className="left-img" src="images/lactose-free.png" alt="button 3"></img>
					<div className="left-desc">lactose-free</div>
					<input className="left-checkbox" type="checkbox"></input>
				</div>
				<div className="left-side-button">
					<img className="left-img" src="images/gluten-free.png" alt="button 4"></img>
					<div className="left-desc">gluten-free</div>
					<input className="left-checkbox" type="checkbox"></input>
				</div>
			</div>
		</div>

		<div className="middle-container-right-side">
			<div className="nav-container">
				<div className="searchbar-container">
					<input className="searchbar" type="text" placeholder="Search"></input>
				</div>
				<div className="right-buttons">
					<div className="right-sidebar-button">
						<img className="right-img" src="images/account.png" alt="button 1"></img>
					</div>
					<div className="right-sidebar-button">
						<img className="right-img" src="images/help.png" alt="button 1"></img>
					</div>
					<div className="right-sidebar-button">
						<img className="right-img" src="images/settings.png" alt="button 1"></img>
					</div>
				</div>
			</div>

			<div className="main-content-container">
				google map
				<br></br>
				list of stuff
				<br></br>
				others idk
			</div>
		</div>
	</React.Fragment>;
}

function createMiddleContentList() {

}

function createMiddleContentCommunity() {

}

function createMiddleContentLogin() {
	return (
		<div>
			LOGIN HERE pwease
		</div>
	);
}


function createFooterHTML() {
	return (<div className="bottom-container">
		<div className="bottom-button-container">
			<div className="bottom-button">
				<img className="bot-img map" src="images/map.png" alt="map button" id="map-button"></img>
			</div>

			<div className="bottom-button">
				<img className="bot-img network" src="images/list.png" alt="list button" id="list-button"></img>
			</div>

			<div className="bottom-button">
				<img className="bot-img search" src="images/community.png" alt="community button" id="community-button"></img>
			</div>
		</div>
	</div>);
}

export default App;
