import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

var state = "map"

const bottomButtons = [
	document.getElementById("map-button"),
	document.getElementById("list-button"),
	document.getElementById("community-button")
];


root.render(
	<React.StrictMode>
		<App state={state}/>
	</React.StrictMode>
);
