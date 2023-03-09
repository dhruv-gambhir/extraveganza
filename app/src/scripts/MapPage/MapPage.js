import { Fragment } from "react";
import DietaryRestrictionsSidebar from "../Utils/DietaryRestrictionsSidebar";
import PageTemplate from "../PageTemplate";
import Search from "../Utils/Search";

export default class MapPage extends PageTemplate {
    render() {
        return (
            <Fragment>
                <div className='middle-container'>
                    <div className="middle-container-left-side">
                        <DietaryRestrictionsSidebar
                            className='uid'
                            list={this.props.dietaryRestrictions}
                            resetThenSet={this.props.setDietaryRestrictions}>
                        </DietaryRestrictionsSidebar>
                    </div>

                    <div className="middle-container-right-side">
                        <div className="nav-container">
                            <div className="searchbar-container">
                                <input className="searchbar" type="text" placeholder="Search"></input>
                            </div>
                            <div className="right-buttons">
                                <div className="right-sidebar-button">
                                    <img className="right-img" src="images/account.png" alt="account button" id="account-button" onClick={this.props.handleAccountButton}></img>
                                </div>
                                <div className="right-sidebar-button">
                                    <img className="right-img" src="images/help.png" alt="help button" id="help-button" onClick={this.props.handleHelpButton}></img>
                                </div>
                                <div className="right-sidebar-button">
                                    <img className="right-img" src="images/settings.png" alt="settings button" id="settings-button" onClick={this.props.handleSettingsButton}></img>
                                </div>
                            </div>
                        </div>

                        <div className="main-content-container">
                            <Search />
                            {/*<Map/>*/}
                            {/*Hey Google, take me to some vegatarian cafe*/}
                         
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}