import { Component, Fragment } from "react";

export default class OverlayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
        };
    }

    toggleOverlay = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }), () => { this.props.resetAllOverlay(); });
    };

    render() {
        const { children } = this.props;
        const { isOpen } = this.state;

        return (
            <Fragment>
                {isOpen &&
                    (<div className="overlay-container">
                        <div className="overlay-background" onClick={this.toggleOverlay}></div>
                        <div className="overlay-content-container">
                            <div className="overlay-controls">
                                <button
                                    className="overlay-close"
                                    type="button"
                                    onClick={this.toggleOverlay}
                                />
                            </div>
                            {children}
                        </div>
                    </div>)}
            </Fragment>
        );
    }
}