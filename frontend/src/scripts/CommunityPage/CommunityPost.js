import { Component } from "react";

/**
 * Community post
 * @date 3/13/2023 - 1:54:12 PM
 *
 * @export
 * @class CommunityPost
 * @typedef {CommunityPost}
 * @extends {Component}
 */
export default class CommunityPost extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            this.forceUpdate();
            return true;
        }
        return false;
    }

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:54:12 PM
     *
     * @returns {*}
     */
    render() {
        return (
            <div className='community-page-card'>
                <div className="community-page-card-text">
                    <div className="community-page-card-text-header">
                        {this.props.children[0]}
                    </div>
                    <div className="community-page-card-text-description">
                        {this.props.children[1]}
                    </div>
                    <div className="community-page-card-text-description">
                        {'★'.repeat(Math.round(this.props.rating)) + '☆'.repeat(Math.round(5 - this.props.rating))}
                    </div>
                    <div className="community-page-card-text-content">
                        {this.props.children[2]}
                    </div>
                </div>
            </div>);
    }
}