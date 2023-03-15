import { Component, Fragment } from "react";
import Search from "../Utils/Search";
import SimpleMap from "./SimpleMap";

/**
 * A React component to render the map page
 * @date 3/13/2023 - 2:04:02 PM
 *
 * @export
 * @class MapPage
 * @typedef {MapPage}
 * @extends {Component}
 */

export default class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 1.3402,
            lng: 103.6755
        };
        this.handleCoordinatesChange = this.handleCoordinatesChange.bind(this);
    }

    handleCoordinatesChange(lat, lng) {
        this.setState({
            lat: lat,
            lng: lng
        });
    }

    render() {
        return (
            <Fragment>
                <div className="main-content-container">
                    <Search onCoordinatesChange={this.handleCoordinatesChange} />
                    {console.log("Passed in lat and lng" + this.state.lat)}
                    <SimpleMap center={{ lat: Number(this.state.lat), lng: Number(this.state.lng) }} />
                </div>
            </Fragment>
        );
    }
}
