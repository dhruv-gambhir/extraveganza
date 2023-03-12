import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';

/**
 * A React component to render the Dietary Restrictions Sidebar
 */
export default class DietaryRestrictionsSidebar extends Component {
    /**
     * A Function to select the dietary restrictions
     * @param {{id: Number, title: String, selected:Boolean, key: String, imagePath:String}[]} item 
     */
    selectItem = (item) => {
        const { resetThenSet } = this.props;
        const { id, key } = item;

        this.setState({}, () => { resetThenSet(id, key); });
    };

    render() {
        const { list } = this.props;

        return (
            <React.Fragment>
                <div
                    className="left-buttons">
                    {list.map((item) => (
                        <div
                            className={`left-side-button`}
                            key={item.id} >
                            <img className="left-img" src={item.imagePath} alt="vegan button"></img>
                            <div className="left-desc">{item.title}</div>
                            <div className="left-checkbox" onClick={() => this.selectItem(item)} >{item.selected === true && <FontAwesome name="check" />}</div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}