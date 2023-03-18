import { Component, Fragment } from "react";
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
            lat: this.props.mapSearchInfo.lat,
            lng: this.props.mapSearchInfo.lng,
            address: this.props.mapSearchInfo.address
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.forceUpdate();
            console.log(this.props.data)
        }
    }

    render() {
        return (
            <Fragment>
                <div className="main-content-container">
                    {console.log(this.state)}
                    <SimpleMap center={{ lat: Number(this.state.lat), lng: Number(this.state.lng) }} address={this.state.address} />
                </div>
            </Fragment>
        );
    }
}
