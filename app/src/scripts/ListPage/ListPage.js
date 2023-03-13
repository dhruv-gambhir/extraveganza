import { Component, Fragment } from "react";

/**
 * A React component to render the list page
 * @date 3/13/2023 - 2:03:52 PM
 *
 * @export
 * @class ListPage
 * @typedef {ListPage}
 * @extends {Component}
 */
export default class ListPage extends Component {
    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:51:56 PM
     *
     * @returns {*}
     */
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
