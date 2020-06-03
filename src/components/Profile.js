import React from 'react'
import ProfileCover from "./ProfileCover";
import ProfileReview from "./ProfileReview";
import {Link} from "react-router-dom";
import AdminRow from "./AdminRow";

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
                                    <div className="btn add-picture-btn">
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
                                               value="John Wigner"
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
                                        Email (recovery)
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
                                           maxLength="2"L
                                           placeholder="State"/>
                                </span>
                                <span className="col-3 wbdv-profile-last-name-col">
                                    Zip
                                    <input type="text"
                                           className="form-control wbdv-profile-field"
                                           maxLength="5"
                                           placeholder="Zip"/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="wbdv-profile-info">
                            <span className="wbdv-profile-field-labels">
                                <div>
                                    Bio (220 characters max)
                                    <textarea
                                           rows="8"
                                           maxlength="220"
                                           className="form-control wbdv-profile-field wbdv-profile-textarea"
                                           placeholder="I am a ..."/>
                                </div>
                                <div className="row wbdv-profile-row wbdv-profile-field-group">
                                    <span className="col-6 wbdv-profile-left-col">
                                        Role
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               value={this.props.match.params.type} readOnly/>
                                    </span>
                                    <span className="col-6 wbdv-profile-right-col">
                                        Level
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               value="Beginner" readOnly/>
                                    </span>
                                </div>
                                <div className="row wbdv-profile-row wbdv-profile-field-group">
                                    <span className="col-6 wbdv-profile-left-col">
                                        Active Since
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               value="1970-01-01" readOnly/>
                                    </span>
                                    <span className="col-6 wbdv-profile-right-col">
                                        ID Number
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               value="87437537" readOnly/>
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
                {
                    this.props.match.params.type == 'collector' &&
                    <div className="row">
                        <div className="col-lg-8">
                            <Link to={`/profile/collection`}>
                                <div className="wbdv-profile-collection overflow-hidden">
                                    <div className="wbdv-profile-collection-header">
                                        My Collection
                                    </div>
                                    <div className="row row-cols-5 wbdv-cover-row">
                                        <ProfileCover/><ProfileCover/><ProfileCover/>
                                        <ProfileCover/><ProfileCover/><ProfileCover/>
                                        <ProfileCover/><ProfileCover/><ProfileCover/>
                                        <ProfileCover/><ProfileCover/><ProfileCover/>
                                        <ProfileCover/><ProfileCover/><ProfileCover/>
                                        <ProfileCover/><ProfileCover/><ProfileCover/>
                                        <ProfileCover/><ProfileCover/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link to={`/profile/reviews`}>
                                <div className="wbdv-profile-reviews overflow-hidden">
                                    <div className="wbdv-profile-review-header">
                                        My Reviews
                                    </div>
                                    <ProfileReview
                                        cover={require("../TempCover.png")}
                                        name={"John Wigner"}
                                        stars={3}
                                        text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                                    <ProfileReview
                                        cover={require("../TempCover.png")}
                                        name={"John Wigner"}
                                        stars={5}
                                        text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                                    <ProfileReview
                                        cover={require("../TempCover.png")}
                                        name={"John Wigner"}
                                        stars={4}
                                        text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                }
                {
                    this.props.match.params.type == 'admin' &&
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="wbdv-profile-admin-list">
                                <div className="wbdv-profile-admin-list-header">
                                    User Information
                                </div>
                                <div className="row wbdv-admin-row">
                                    <div className="col-3 wbdv-admin-field-group">
                                        Username
                                    </div>
                                    <div className="col-3 wbdv-admin-field-group">
                                        Password
                                    </div>
                                    <div className="col-2 wbdv-admin-field-group">
                                        Role
                                    </div>
                                    <div className="col-2 d-none d-md-block wbdv-admin-field-group">
                                        ID
                                    </div>
                                    <div className="col-2 wbdv-admin-field-group"/>
                                </div>
                                <span>
                                     <AdminRow username="Johnny" password="kajshdk345" role="Admin" id="87437537"/>
                                     <AdminRow username="Johnny" password="kajshdk345" role="Admin" id="87437537"/>
                                     <AdminRow username="Johnny" password="kajshdk345" role="Collector" id="87437537"/>
                                     <AdminRow username="Johnny" password="kajshdk345" role="Collector" id="87437537"/>
                                     <AdminRow username="Johnny" password="kajshdk345" role="Collector" id="87437537"/>
                                     <AdminRow username="Johnny" password="kajshdk345" role="Collector" id="87437537"/>
                                     <AdminRow username="Johnny" password="kajshdk345" role="Collector" id="87437537"/>
                                     <AdminRow username="Johnny" password="kajshdk345" role="Collector" id="87437537"/>
                                     <AdminRow username="Johnny" password="kajshdk345" role="Collector" id="87437537"/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="wbdv-profile-admin-history">
                                <div className="wbdv-profile-admin-history-header">
                                    User History
                                </div>
                                <div className="wbdv-profile-admin-history-text" align="left">
                                    <p className="wbdv-admin-history-p">
                                        013439 -- logout<br/>
                                        013439 -- updated profile<br/>
                                        013439 -- removed -- 548579<br/>
                                        013439 -- added -- 968060<br/>
                                        013439 -- added -- 548579<br/>
                                        013439 -- login<br/>
                                        017483 -- logout<br/>
                                        017483 -- added -- 545235<br/>
                                        017483 -- added -- 843994<br/>
                                        017483 -- updated profile<br/>
                                        017483 -- added -- 237287<br/>
                                        017483 -- added -- 948293<br/>
                                        017483 -- added -- 159905<br/>
                                        017483 -- login
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </span>
        )
    }
}

export default Profile;