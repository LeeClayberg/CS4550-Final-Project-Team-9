import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Issue from "./Issue"
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Collection from "./Collection";
import Reviews from "./Reviews";
import Character from "./Character";
import PublicProfile from "./PublicProfile";

class ComicStack extends React.Component {
    state = {
        userId: null
    }

    loginUser = (userId) => {
        console.log(userId);
        this.setState(prevState => ({
            userId: userId
        }));
        return userId}

    logoutUser = () =>
        this.setState(prevState => ({
            userId: null
        }))

    render() {
        return (
            <BrowserRouter>
                <Header logoutUser={this.logoutUser} userId={this.state.userId}/>
                <div className="container">
                    <Route path="/" exact={true} render={(props) =>
                        <Home {...props} loginUser={this.loginUser} logoutUser={this.logoutUser} userId={this.state.userId}/>}/>
                    <Route path="/search/:query" exact={true} component={SearchResults}/>
                    <Route path="/issue/:id" exact={true} render={(props) =>
                        <Issue {...props} userId={this.state.userId} />}/>
                    <Route path="/character/:id" exact={true} component={Character}/>
                    <Route path="/login" exact={true} render={(props) =>
                        <Login {...props} loginUser={this.loginUser} />}/>
                    <Route path="/register" exact={true} render={(props) =>
                        <Register {...props} loginUser={this.loginUser} />}/>
                    <Route path="/profile" exact={true} render={(props) =>
                        <Profile {...props} userId={this.state.userId} />}/>
                    <Route path="/user/:id" exact={true} component={PublicProfile}/>
                    <Route path="/collection" exact={true} render={(props) =>
                        <Collection {...props} userId={this.state.userId} />}/>
                    <Route path="/reviews" exact={true} component={Reviews}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default ComicStack