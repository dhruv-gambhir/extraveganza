import { Fragment } from "react";
import PageTemplate from "../PageTemplate";

export default class ListPage extends PageTemplate {
    render() {
        return (
            <Fragment>
                {/* This will be generated automatically in the future */}
                <div className="main-content-container list-page-card-container">
                    <div className="list-page-card">
                        <div className="list-page-card-image">
                            asdas<image></image>
                        </div>
                        <div className="list-page-card-text">
                            <div className="list-page-card-text-header">
                                Restaurant name here
                            </div>
                            <div className="list-page-card-text-description">
                                Distance, rating, type here
                            </div>
                        </div>
                        <div className="list-page-card-select">
                            select
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
