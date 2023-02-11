import { Component } from "react";
import FontAwesome from 'react-fontawesome';

export default class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isListOpen: false,
            headerTitle: this.props.title
        };
    }

    close = () => {
        this.setState({
            isListOpen: false,
        });
    };

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

    toggleList = () => {
        this.setState(prevState => ({
            isListOpen: !prevState.isListOpen
        }));
    };

    selectItem = (item) => {
        const { resetThenSet } = this.props;
        const { title, id, key } = item;

        this.setState({
            headerTitle: title,
            isListOpen: false,
        }, () => resetThenSet(id, key));
    };

    render() {
        const { isListOpen, headerTitle } = this.state;
        const { list } = this.props;

        return (
            <div className='dropdown-wrapper'>
                <div className='dropdown-header' onClick={this.toggleList}>
                    <div className='dropdown-header-title'>{headerTitle}</div>
                    {isListOpen
                        ? <FontAwesome name="angle-up" size="1x" />
                        : <FontAwesome name="angle-down" size="1x" />}
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