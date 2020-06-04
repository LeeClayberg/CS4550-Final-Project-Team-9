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
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/search/:query" exact={true} component={SearchResults}/>
                    <Route path="/issue/:id" exact={true} component={Issue}/>
                    <Route path="/character/:id" exact={true} component={Character}/>
                    <Route path="/login" exact={true} component={Login}/>
                    <Route path="/register" exact={true} component={Register}/>
                    <Route path="/profile/:type" exact={true} component={Profile}/>
                    <Route path="/user/:id" exact={true} component={PublicProfile}/>
                    <Route path="/collection" exact={true} component={Collection}/>
                    <Route path="/reviews" exact={true} component={Reviews}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default ComicStack