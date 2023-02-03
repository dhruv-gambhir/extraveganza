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

function createMiddleContentMap() {
	return (<React.Fragment>
		<div class="middle-container-left-side">
			<div class="left-buttons">
				<div class="left-side-button">
					<img class="left-img" src="images/vegan.png" alt="button 1"></img>
					<div class="left-desc">vegan</div>
					<input class="left-checkbox" type="checkbox"></input>
				</div>
				<div class="left-side-button">
					<img class="left-img" src="images/vegetarian.png" alt="button 2"></img>
					<div class="left-desc">vegetarian</div>
					<input class="left-checkbox" type="checkbox"></input>
				</div>
				<div class="left-side-button">
					<img class="left-img" src="images/lactose-free.png" alt="button 3"></img>
					<div class="left-desc">lactose-free</div>
					<input class="left-checkbox" type="checkbox"></input>
				</div>
				<div class="left-side-button">
					<img class="left-img" src="images/gluten-free.png" alt="button 4"></img>
					<div class="left-desc">gluten-free</div>
					<input class="left-checkbox" type="checkbox"></input>
				</div>
			</div>
		</div>

		<div class="middle-container-right-side">
			<div class="nav-container">
				<div class="searchbar-container">
					<input class="searchbar" type="text" placeholder="Search"></input>
				</div>
				<div class="right-buttons">
					<div class="right-sidebar-button">
						<img class="right-img" src="images/account.png" alt="button 1"></img>
					</div>
					<div class="right-sidebar-button">
						<img class="right-img" src="images/help.png" alt="button 1"></img>
					</div>
					<div class="right-sidebar-button">
						<img class="right-img" src="images/settings.png" alt="button 1"></img>
					</div>
				</div>
			</div>

			<div class="main-content-container">
				google map
				<br></br>
				list of stuff
				<br></br>
				others idk
			</div>
		</div>
	</React.Fragment>);
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
	)
}


function createFooterHTML() {
	return (<div class="bottom-container">
		<div class="bottom-buttons">
			<div class="right-side-button">
				<img class="bot-img map" src="images/map.png" alt="map button"></img>
			</div>

			<div class="right-side-button">
				<img class="bot-img network" src="images/list.png" alt="list button"></img>
			</div>

			<div class="right-side-button">
				<img class="bot-img search" src="images/community.png" alt="community button"></img>
			</div>
		</div>
	</div>);
}

export default App;
