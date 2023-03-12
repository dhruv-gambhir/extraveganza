import { Fragment } from "react";
import PageTemplate from "../PageTemplate";
import Search from "../Utils/Search";
import SimpleMap from "./SimpleMap";

export default class MapPage extends PageTemplate {
    render() {
        return (
            <Fragment>
                <div className="main-content-container">
                    <Search />
                    <SimpleMap/>
                </div>
            </Fragment>
        );
    }
}