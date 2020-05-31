import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Issue from "./Issue"
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

class ComicStack extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <Route path="/search/:query" exact={true} component={SearchResults}/>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/login" exact={true} component={Login}/>
                    <Route path="/register" exact={true} component={Register}/>
                    <Route path="/issue/:id" exact={true} component={Issue}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default ComicStack