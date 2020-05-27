import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import SearchResults from "./SearchResults";

class ComicStack extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <Route path="/search/:query" exact={true} component={SearchResults}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default ComicStack