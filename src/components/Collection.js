import React from 'react'
import CollectionCover from "./CollectionCover";
import {Link} from "react-router-dom";
import comicBookService from "../services/ComicBookService";

class Collection extends React.Component {
    state = {
        searchString: '',
        sortBy: this.props.match.params.sortBy,
        searchBy: 'title',
        collection: [],
        searching: false
    }

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
        comicBookService.findComicBooksForUserSorted(this.props.userId, this.state.sortBy)
            .then(list => {
                this.setState({
                    collection: list
                })})
    }

    updateSearchString = (newString) =>
        this.setState(prevState => ({
            searchString: newString
        }))

    updateSortBy = (value) => {
        this.setState(prevState => ({
            sortBy: value,
            searching: false
        }));
        comicBookService.findComicBooksForUserSorted(this.props.userId, value)
            .then(list => {
                this.setState({
                    collection: list
                })}).then(() => this.props.history.push(`/collection&sortby=${this.state.sortBy}`));
    }

    updateSearchBy = (value) =>
        this.setState(prevState => ({
            searchBy: value
        }))

    deleteComicBook = (comicBookId) => {
        comicBookService.deleteComicBook(comicBookId)
            .then(() => comicBookService.findComicBooksForUserSorted(this.props.userId, this.state.sortBy)
                .then(list => {
                    this.setState({
                        collection: list
                    })}).then(() => this.props.history.push(`/collection&sortby=${this.state.sortBy}`)))
    }

    search = () =>
        comicBookService.findComicBooksForUserSortedSearch(this.props.userId, this.state.sortBy, this.state.searchBy, this.state.searchString)
            .then(list => {
                this.setState({
                    collection: list,
                    searching: true
                })})

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
                                Search By
                            </span>
                        </div>
                        <div className="row">
                            <span className="col-6 col-lg-2 wbdv-collection-search-col">
                                <select
                                    className="custom-select wbdv-collection-dropdown"
                                    value={this.state.sortBy}
                                    onChange={(event) => this.updateSortBy(
                                        event.target.value)}>
                                    <option value="grade">Grade</option>
                                    <option value="coverdate">Cover Date</option>
                                    <option value="timestamp">Date Added</option>
                                    <option value="title">Title</option>
                                    <option value="volume">Volume</option>
                                </select>
                            </span>
                            <span className="col-6 col-lg-2 wbdv-collection-search-col">
                                <select
                                    className="custom-select wbdv-collection-dropdown"
                                    value={this.state.searchBy}
                                    onChange={(event) => this.updateSearchBy(
                                        event.target.value)}>
                                    <option value="title">Title</option>
                                    <option value="volume">Volume</option>
                                    <option value="character">Character</option>
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
                                        <Link onClick={() => this.search()}>
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
                {
                    this.state.collection.length > 0 &&
                    <div className="row row-cols-3 row-cols-md-5 row-cols-lg-6 wbdv-cover-row">
                        {this.state.collection.map(comicBook =>
                             <CollectionCover comicBook={comicBook}
                                  deleteComicBook={this.deleteComicBook}/>)}
                    </div>
                }
                {
                    this.state.collection.length == 0 && !this.state.searching &&
                    <div className="wbdv-collection-empty">
                        Collection is empty<br/>
                        <div className="wbdv-collection-empty-sm">
                            Add comic books to your collection<br/>
                            using the <b> + Add </b>
                            button on any issue
                        </div>
                    </div>
                }
                {
                    this.state.collection.length == 0 && this.state.searching &&
                    <div className="wbdv-no-search-results">
                        No results match your search criteria
                    </div>
                }

            </div>
        )
    }
}

export default Collection;