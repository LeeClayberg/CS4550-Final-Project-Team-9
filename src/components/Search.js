import React from 'react'
import SearchResults from "./SearchResults";

class Search extends React.Component {
    render() {
        return (
            <div className="container">
                <SearchResults
                    page={this.state.page}
                    pageCount={this.state.pageCount}
                    issues={this.state.issues}
                    search={this.search}/>
            </div>
        )
    }
}

export default Search