import React from "react";
import { Component } from "react";

class Footer extends Component {
    render() {
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
}

export default Footer;