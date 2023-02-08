import { Component } from "react";

export default class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isListOpen: false,
            headerTitle: this.props.title
        };
    }

    toggleList = () => {
        this.setState(prevState => ({
            isListOpen: !prevState.isListOpen
        }));
    };

    render() {
        const { isListOpen, headerTitle } = this.state;
        const { list } = this.props;

        return (
            <div className='dropdown-wrapper'>
                <button className='dropdown-header' onClick={this.toggleList}>
                    <div className='dropdown-header-title'>{headerTitle}</div>
                </button>
                {isListOpen && (
                    <div
                        role="list"
                        className="dropdown-list">
                        {list.map((item) => (
                            <button
                                type="button"
                                className="dropdwon-list-item"
                                key={item.id}
                                onClick={() => this.selectItem(item)} >
                                {item}
                                {' '}
                                {/* {item.selected && <FontAwesome name="check" />} */}
                            </button>
                        ))}
                    </div>
                )}
            </div>);
    }
}