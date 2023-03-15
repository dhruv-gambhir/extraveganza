import { Component } from "react";
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

/**
 * A React Component for Dropdown menu
 * @date 3/13/2023 - 2:05:54 PM
 *
 * @export
 * @class DropdownMenu
 * @typedef {DropdownMenu}
 * @extends {Component}
 */
export default class DropdownMenu extends Component {
    /**
     * Creates an instance of DropdownMenu.
     * @date 3/13/2023 - 1:52:33 PM
     *
     * @constructor
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            isListOpen: false,
            headerTitle: this.props.title
        };
    }

    /**
     * Closes the dropdown menu
     */
    close = () => {
        this.setState({
            isListOpen: false,
        });
    };

    /** 
     * @override
     * Closes the menu whenever a click is registered
     */
    componentDidUpdate() {
        const { isListOpen } = this.state;

        setTimeout(() => {
            if (isListOpen) {
                window.addEventListener('click', this.close);
            }
            else {
                window.removeEventListener('click', this.close);
            }
        }, 0);
    }

    /**
     * Toggles the dropdown menu to be open and closed
     */
    toggleList = () => {
        this.setState(prevState => ({
            isListOpen: !prevState.isListOpen
        }));
    };

    /**
     * Selects the item to be set
     * @param {{id: Number, title: String, selected:Boolean, key: String, imagePath:String}} item 
     */
    selectItem = (item) => {
        const { resetThenSet } = this.props;
        const { title, id, key } = item;

        this.setState({
            headerTitle: title,
            isListOpen: false,
        }, () => resetThenSet(id, key));
    };

    /**
     * Renders the component
     * @date 3/13/2023 - 1:52:33 PM
     *
     * @returns {*}
     */
    render() {
        const { isListOpen, headerTitle } = this.state;
        const { list } = this.props;

        return (
            <div className='dropdown-wrapper'>
                <div className='dropdown-header' onClick={this.toggleList}>
                    <div className='dropdown-header-title'>{headerTitle}</div>
                    {isListOpen
                        ? <FontAwesome name="angle-up" size="lg" />
                        : <FontAwesome name="angle-down" size="lg" />}
                </div>
                {isListOpen && (
                    <div
                        role="list"
                        className="dropdown-list">
                        {list.map((item) => (
                            <div
                                className={`dropdown-list-item  ${item.selected ? 'dropdown-list-item-selected' : ''}`}
                                key={item.id}
                                onClick={() => this.selectItem(item)} >
                                {item.title}
                                {' '}
                                {item.selected && <FontAwesome name="check" />}
                            </div>
                        ))}
                    </div>
                )}
            </div>);
    }
}

DropdownMenu.propType = {
    list: PropTypes.arrayOf(PropTypes.shape({ id: Number, title: String, selected: Boolean, key: String, imagePath: String })).isRequired,
    headerTitle: PropTypes.string.isRequired
};