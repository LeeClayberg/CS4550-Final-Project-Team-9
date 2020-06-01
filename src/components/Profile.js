import React from 'react'
import {Link} from "react-router-dom";

class Profile extends React.Component {

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    render() {
        return (
            <span>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="wbdv-profile-info">
                            <div className="row">
                                <span className="col-md-5 wbdv-profile-picture-surround wbdv-profile-field-labels">
                                    <div className="add-picture-btn">
                                        <input type="file" className="add-picture-input"/>
                                        <i className="fa fa-plus"/>
                                    </div>
                                    <img className="wbdv-profile-picture" src={"https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg"}
                                         alt="Card image cap"/>
                                    Profile Picture
                                </span>
                                <span className="col-md-7 wbdv-simple-info wbdv-profile-field-labels">
                                    <div className="">
                                        Username
                                        <input type="text"
                                            className="form-control wbdv-profile-field wbdv-username"
                                            placeholder="username" readOnly/>
                                    </div>
                                    <div className="wbdv-profile-field-group">
                                        Password
                                        <input type="text"
                                               className="form-control wbdv-profile-field"
                                               placeholder="password"/>
                                    </div>
                                    <div className="row wbdv-profile-row wbdv-profile-field-group">
                                        <span className="col-5 wbdv-profile-first-name-col">
                                            First
                                            <input type="text"
                                                className="form-control wbdv-profile-field"
                                                placeholder="first name"/>
                                        </span>
                                        <span className="col-7 wbdv-profile-last-name-col">
                                            Last
                                            <input type="text"
                                                   className="form-control wbdv-profile-field"
                                                   placeholder="last name"/>
                                        </span>
                                    </div>
                                    <div className="wbdv-profile-field-group">
                                        Email
                                        <input type="email"
                                               className="form-control wbdv-profile-field"
                                               placeholder="email@address.com"/>
                                    </div>
                                    <div className="wbdv-profile-field-group">
                                        Date of Birth
                                        <input type="date"
                                               className="form-control wbdv-profile-field"
                                               placeholder=""/>
                                    </div>
                                </span>
                            </div>
                            <span className="wbdv-profile-field-labels">
                                <div className="wbdv-profile-field-group">
                                    Address
                                    <input type="text"
                                           className="form-control wbdv-profile-field"
                                           placeholder="1234 Main St"/>
                                </div>
                            </span>
                            <div className="row wbdv-profile-row wbdv-profile-field-group wbdv-profile-field-labels">
                                <span className="col-7 wbdv-profile-first-name-col">
                                    City
                                    <input type="text"
                                           className="form-control wbdv-profile-field"
                                           placeholder="City"/>
                                </span>
                                <span className="col-2 wbdv-profile-last-name-col">
                                    State
                                    <input type="text"
                                           className="form-control wbdv-profile-field"
                                           maxlength="2"
                                           placeholder="State"/>
                                </span>
                                <span className="col-3 wbdv-profile-last-name-col">
                                    Zip
                                    <input type="text"
                                           className="form-control wbdv-profile-field"
                                           maxlength="5"
                                           placeholder="Zip"/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="wbdv-profile-info">
                            <span className="wbdv-profile-field-labels">
                                <div>
                                    Bio
                                    <textarea
                                           rows="8"
                                           className="form-control wbdv-profile-field"
                                           placeholder="I am a ..."/>
                                </div>
                                <div className="row wbdv-profile-row wbdv-profile-field-group">
                                    <span className="col-6 wbdv-profile-left-col">
                                        Role
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               placeholder="collector" readOnly/>
                                    </span>
                                    <span className="col-6 wbdv-profile-right-col">
                                        Level
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               placeholder="Beginner" readOnly/>
                                    </span>
                                </div>
                                <div className="row wbdv-profile-row wbdv-profile-field-group">
                                    <span className="col-6 wbdv-profile-left-col">
                                        Active Since
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               placeholder="1970-01-01" readOnly/>
                                    </span>
                                    <span className="col-6 wbdv-profile-right-col">
                                        ID Number
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               placeholder="87437537" readOnly/>
                                    </span>
                                </div>
                                <button className="btn wbdv-update-profile"
                                        onClick={() => alert("Will update the collectors information\nin the database")}>
                                    Update
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

export default Profile;