import { Fragment } from "react";
import PageTemplate from "../PageTemplate";
import Search from "../Utils/Search";
import SimpleMap from "./SimpleMap";

export default class MapPage extends PageTemplate {
    constructor(props) {
      super(props);
      this.state = {
        latitude: 1.3521,
        longitude: 103.8198,
      };
      this.handleCoordinatesChange = this.handleCoordinatesChange.bind(this);
    }
  
    handleCoordinatesChange(latitude, longitude) {
      this.setState({
        latitude: latitude,
        longitude: longitude,
      });
    }
  
    render() {
      return (
        <Fragment>
          <div className="main-content-container">
            <Search onCoordinatesChange={this.handleCoordinatesChange} />
            {            console.log(this.state.latitude)}
            <SimpleMap
              latitude={this.state.latitude}
              longitude={this.state.longitude}
            />
          </div>
        </Fragment>
      );
    }
  }
  