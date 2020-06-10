import React from 'react'
import ProfileCover from "./ProfileCover";
import ProfileReview from "./ProfileReview";
import {Link} from "react-router-dom";
import AdminRow from "./AdminRow";
import userService from "../services/UserService";
import comicBookService from "../services/ComicBookService";

class Profile extends React.Component {
    state = {
        picture: "",
        userHistory: [],
        allUsers: [],
        collection: [],
        user: {},
        password: '', first: '', last: '', email: '', dob: '',
        address: '', city: '', state: '', zip: '', bio: ''
    }

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
        userService.findUserById(this.props.userId)
            .then(user => {
                this.setState({
                     user: user,
                     password: user.password,
                     first: user.first,
                     last: user.last,
                     email: user.email,
                     dob: user.dob,
                     address: user.address,
                     city: user.city,
                     state: user.state,
                     zip: user.zip,
                     bio: user.bio,
                     picture: user.pictureURL
                })
            }).then(() => {
                if (this.state.user.role == 'admin') {
                userService.findUserHistory()
                    .then(list => {
                        this.setState({
                            userHistory: list
                        })});
                userService.findAllUsers()
                    .then(users => {
                        this.setState({
                            allUsers: users
                        })})}
                else {
                    comicBookService.findComicBooksForUser(this.props.userId)
                        .then(list => {
                            this.setState({
                                 collection: list
                            })})
                }})
    }

    updateProfilePicture(event) {
        this.setState({
             picture: URL.createObjectURL(event.target.files[0])
        })
    }

    updatePassword = (newString) =>
        this.setState(prevState => ({
            password: newString
        }))

    updateFirst = (newString) =>
        this.setState(prevState => ({
            first: newString
        }))

    updateLast = (newString) =>
        this.setState(prevState => ({
            last: newString
        }))

    updateEmail = (newString) =>
        this.setState(prevState => ({
            email: newString
        }))

    updateDOB = (newString) =>
        this.setState(prevState => ({
            dob: newString
        }))

    updateAddress = (newString) =>
        this.setState(prevState => ({
            address: newString
        }))

    updateCity = (newString) =>
        this.setState(prevState => ({
            city: newString
        }))

    updateState = (newString) =>
        this.setState(prevState => ({
            state: newString
        }))

    updateZip = (newString) =>
        this.setState(prevState => ({
            zip: newString
        }))

    updateBio = (newString) =>
        this.setState(prevState => ({
            bio: newString
        }))

    calcLevel = () => {
        if(!this.state.user.collection) {return ""}
        if(this.state.user.collection.length < 10) {return "Beginner"}
        if(this.state.user.collection.length < 25) {return "Intermediate"}
        if(this.state.user.collection.length < 50) {return "Seasoned"}
        if(this.state.user.collection.length < 100) {return "Proficient"}
        if(this.state.user.collection.length < 200) {return "Experienced"}
        if(this.state.user.collection.length < 500) {return "Advanced"}
        return "Expert";
    }

    updateUser = (role) =>
        userService.updateUser(this.props.userId, {
            password: this.state.password,
            first: this.state.first,
            last: this.state.last,
            email: this.state.email,
            dob: this.state.dob,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            bio: this.state.bio,
            pictureURL: this.state.picture,
            role: 'admin'
        })

    adminUpdateUser = (user, role) =>
        userService.updateUser(user.id, {
            password: user.password,
            first: user.first,
            last: user.last,
            email: user.email,
            dob: user.dob,
            address: user.address,
            city: user.city,
            state: user.state,
            zip: user.zip,
            bio: user.bio,
            pictureURL: user.picture,
            role: role
        }).then(() =>
            userService.findAllUsers()
                .then(users => {
                    this.setState({
                        allUsers: users
                    })}))

    deleteUser = (userId) => {
        userService.deleteUser(userId)
            .then(users => {
                this.setState({
                    allUsers: users
                })})
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
                                        <input type="file" className="add-picture-input" onChange={(event) => this.updateProfilePicture(event)}/>
                                        <i className="fa fa-plus"/>
                                    </div>
                                    {
                                        this.state.picture != "https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg" &&
                                        <div className="btn remove-picture-btn"
                                             onClick={() => this.setState({
                                                  picture: "https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
                                             })}>
                                            <i className="fa fa-trash"/>
                                        </div>
                                    }
                                    <img className="wbdv-profile-picture" src={this.state.picture}/>
                                    Profile Picture
                                </span>
                                <span className="col-md-7 wbdv-simple-info wbdv-profile-field-labels">
                                    <div className="">
                                        Username
                                        <input type="text"
                                            className="form-control wbdv-profile-field wbdv-username"
                                               value={this.state.user.username}
                                            placeholder="username" readOnly/>
                                    </div>
                                    <div className="wbdv-profile-field-group">
                                        Password
                                        <input type="text"
                                               className="form-control wbdv-profile-field"
                                               value={this.state.password}
                                               onChange={(event) => this.updatePassword(
                                                   event.target.value)}
                                               placeholder="password"/>
                                    </div>
                                    <div className="row wbdv-profile-row wbdv-profile-field-group">
                                        <span className="col-5 wbdv-profile-first-name-col">
                                            First
                                            <input type="text"
                                                className="form-control wbdv-profile-field"
                                                value={this.state.first}
                                                onChange={(event) => this.updateFirst(
                                                    event.target.value)}
                                                placeholder="first name"/>
                                        </span>
                                        <span className="col-7 wbdv-profile-last-name-col">
                                            Last
                                            <input type="text"
                                                   className="form-control wbdv-profile-field"
                                                   value={this.state.last}
                                                   onChange={(event) => this.updateLast(
                                                       event.target.value)}
                                                   placeholder="last name"/>
                                        </span>
                                    </div>
                                    <div className="wbdv-profile-field-group">
                                        Email (recovery)
                                        <input type="email"
                                               className="form-control wbdv-profile-field"
                                               value={this.state.email}
                                               onChange={(event) => this.updateEmail(
                                                   event.target.value)}
                                               placeholder="email@address.com"/>
                                    </div>
                                    <div className="wbdv-profile-field-group">
                                        Date of Birth
                                        <input type="date"
                                               className="form-control wbdv-profile-field"
                                               value={this.state.dob}
                                               onChange={(event) => this.updateDOB(
                                                   event.target.value)}
                                               placeholder=""/>
                                    </div>
                                </span>
                            </div>
                            <span className="wbdv-profile-field-labels">
                                <div className="wbdv-profile-field-group">
                                    Address
                                    <input type="text"
                                           className="form-control wbdv-profile-field"
                                           value={this.state.address}
                                           onChange={(event) => this.updateAddress(
                                               event.target.value)}
                                           placeholder="1234 Main St"/>
                                </div>
                            </span>
                            <div className="row wbdv-profile-row wbdv-profile-field-group wbdv-profile-field-labels">
                                <span className="col-7 wbdv-profile-first-name-col">
                                    City
                                    <input type="text"
                                           className="form-control wbdv-profile-field"
                                           value={this.state.city}
                                           onChange={(event) => this.updateCity(
                                               event.target.value)}
                                           placeholder="City"/>
                                </span>
                                <span className="col-2 wbdv-profile-last-name-col">
                                    State
                                    <input type="text"
                                           className="form-control wbdv-profile-field"
                                           maxLength="2"
                                           value={this.state.state}
                                           onChange={(event) => this.updateState(
                                               event.target.value)}
                                           placeholder="State"/>
                                </span>
                                <span className="col-3 wbdv-profile-last-name-col">
                                    Zip
                                    <input type="text"
                                           className="form-control wbdv-profile-field"
                                           maxLength="5"
                                           value={this.state.zip}
                                           onChange={(event) => this.updateZip(
                                               event.target.value)}
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
                                           value={this.state.bio}
                                           onChange={(event) => this.updateBio(
                                               event.target.value)}
                                           placeholder="I am a ..."/>
                                </div>
                                <div className="row wbdv-profile-row wbdv-profile-field-group">
                                    <span className="col-6 wbdv-profile-left-col">
                                        Role
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               value={this.state.user.role} readOnly/>
                                    </span>
                                    <span className="col-6 wbdv-profile-right-col">
                                        Level
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               value={"Beginner"} readOnly/>
                                    </span>
                                </div>
                                <div className="row wbdv-profile-row wbdv-profile-field-group">
                                    <span className="col-6 wbdv-profile-left-col">
                                        Active Since
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               value={this.state.user.startDate} readOnly/>
                                    </span>
                                    <span className="col-6 wbdv-profile-right-col">
                                        ID Number
                                        <input type="text"
                                               className="form-control wbdv-profile-field wbdv-added-info"
                                               value={this.state.user.id} readOnly/>
                                    </span>
                                </div>
                                <button className="btn wbdv-update-profile"
                                        onClick={() => this.updateUser(this.props.userId, this.state.user.role)}>
                                    Update
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                {
                    this.state.user.role == 'collector' &&
                    <div className="row">
                        <div className="col-lg-8">
                            <Link to={`/collection`}>
                                <div className="wbdv-profile-collection overflow-hidden">
                                    <div className="wbdv-profile-collection-header">
                                        My Collection
                                    </div>
                                    <div className="row row-cols-5 wbdv-cover-row">
                                        {this.state.collection.map(comicBook =>
                                             <ProfileCover comicBook={comicBook}/>)}
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link to={`/reviews`}>
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
                    this.state.user.role == 'admin' &&
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
                                    {this.state.allUsers.map(user =>
                                         <AdminRow user={user}
                                                   currentUser={this.state.user}
                                                   deleteUser={this.deleteUser}
                                                   updateUser={this.adminUpdateUser}/>)}
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
                                        {this.state.userHistory.map(row =>
                                                                        <span>{row}<br/></span>)}
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