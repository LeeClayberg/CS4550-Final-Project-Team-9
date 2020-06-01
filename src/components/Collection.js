import React from 'react'
import CollectionCover from "./CollectionCover";
import {Link} from "react-router-dom";

class Collection extends React.Component {
    state = {
        searchString: ''
    }

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    updateSearchString = (newString) =>
        this.setState(prevState => ({
            searchString: newString
        }))

    render() {
        return (
            <div className="wbdv-collection">
                <div className="wbdv-collection-header">
                    My Collection
                </div>
                <div className="row wbdv-collection-search-row">
                    <span className="col-md-1"/>
                    <span className="col-md-10">
                        <div className="row wbdv-collection-search-labels">
                            <span className="col-6 col-lg-2">
                                Sort By
                            </span>
                            <span className="col-6 col-lg-2">
                                Category
                            </span>
                        </div>
                        <div className="row">
                            <span className="col-6 col-lg-2 wbdv-collection-search-col">
                                <select
                                    className="custom-select wbdv-collection-dropdown">
                                    <option selected>Grade</option>
                                    <option>Cover Date</option>
                                    <option>Date Added</option>
                                    <option>Title</option>
                                </select>
                            </span>
                            <span className="col-6 col-lg-2 wbdv-collection-search-col">
                                <select
                                    className="custom-select wbdv-collection-dropdown">
                                    <option selected>Issue</option>
                                    <option>Volume</option>
                                    <option>Character</option>
                                </select>
                            </span>
                            <span className="col-md-8 wbdv-collection-search-col">
                                <div className="input-group wbdv-collection-search-group">
                                    <input type="text" className="form-control wbdv-search-bar"
                                           placeholder="Search Collection"
                                           onChange={(event) => this.updateSearchString(
                                               event.target.value)}
                                           value={this.state.searchString}/>
                                    <div className="input-group-append">
                                        <Link>
                                            <span
                                                className="btn input-group-text wbdv-search-button"
                                                id="basic-addon1">
                                                <i className="fa fa-search fa-lg wbdv-search-icon"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </span>
                    <span className="col-md-1"/>
                </div>
                <div className="row row-cols-3 row-cols-md-5 row-cols-lg-6 wbdv-cover-row">
                    <CollectionCover/><CollectionCover/><CollectionCover/>
                    <CollectionCover/><CollectionCover/><CollectionCover/>
                    <CollectionCover/><CollectionCover/><CollectionCover/>
                    <CollectionCover/><CollectionCover/><CollectionCover/>
                </div>
            </div>
        )
    }
}

export default Collection;