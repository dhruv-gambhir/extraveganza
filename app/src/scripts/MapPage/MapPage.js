import { Fragment } from "react";
import DietaryRestrictionsSidebar from "../Utils/DietaryRestrictionsSidebar";
import PageTemplate from "../PageTemplate";
import Search from "../Utils/Search";

export default class MapPage extends PageTemplate {
    render() {
        return (
            <Fragment>
                <div className="main-content-container">
                    <Search />
                    {/*<Map/>*/}
                    {/*Hey Google, take me to some vegatarian cafe*/}

                </div>
            </Fragment>
        );
    }
}