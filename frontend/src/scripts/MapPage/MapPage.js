import { Component, Fragment } from "react";
import SimpleMap from "./SimpleMap";
import RestaurantDRFilter from "./RestaurantDRFilter";

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
            address: this.props.mapSearchInfo.address,
            filteredRestaurantsWithinDistance: [],
            loading: true
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            this.setState({
                ...nextProps.mapSearchInfo,
            });
            return true;
        }
        else if (nextState !== this.state) {
            return true;
        }
        return false;
    }

    setFilteredRestaurantsWithinRestaurants = (foo) => {
        this.setState({ filteredRestaurantsWithinDistance: foo, loading: false });
    };

    render() {
        return (
            <Fragment>
                <RestaurantDRFilter {...this.props} setFilteredRestaurantsWithinRestaurants={this.setFilteredRestaurantsWithinRestaurants} />
                <div className="main-content-container">
                    {!this.state.loading && <SimpleMap
                        center={{ lat: Number(this.state.lat), lng: Number(this.state.lng) }}
                        address={this.state.address}
                        filteredRestaurantsWithinDistance={this.state.filteredRestaurantsWithinDistance} />}
                </div>
            </Fragment>
        );
    }
}
