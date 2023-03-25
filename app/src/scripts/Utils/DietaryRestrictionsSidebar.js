import React, { Component,Fragment } from "react";
import FontAwesome from 'react-fontawesome';
import RestaurantFilter from "./RestaurantFilter"; // Import the other component

export default class DietaryRestrictionsSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {}
        };
    }

    /**
     * A Function to select the dietary restrictions
     * @param {{id: Number, title: String, selected:Boolean, key: String, imagePath:String}} item 
     */
    selectItem = (item) => {
        const { resetThenSet } = this.props;
        const { id, key } = item;
        const { selected } = this.state;

        selected[id] = !selected[id];

        this.setState({
            selected: selected
        }, () => {
            resetThenSet(id, key, selected[id]);
        });
    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:52:20 PM
     *
     * @returns {*}
     */
    render() {
        const { list } = this.props;
        const { selected } = this.state; // Get the selected items from the component's state

        return (
            <Fragment>
                <div
                    className="left-buttons">
                    {list.map((item) => (
                        <div
                            className={`left-side-button`}
                            key={item.id} >
                            <img className="left-img" src={item.imagePath} alt="vegan button"></img>
                            <div className="left-desc">{item.title}</div>
                            <div className="left-checkbox" onClick={() => this.selectItem(item)} >{selected[item.id] === true && <FontAwesome name="check" />}</div>
                        </div>
                    ))}
                </div>
                <RestaurantFilter selectedItems={selected} /> 
            </Fragment>
        );
    }
}
