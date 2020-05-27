import React from 'react'
import SearchService from "../services/SearchService";

class Issue extends React.Component {
    state = {
        issue: null
    }

    /*componentDidMount() {
        SearchService.findIssueById(this.props.match.params.id)
            .then(issue => {
                console.log(issue.results);
                this.setState({
                    issue: issue.results
                })})
    }*/

    render() {
        /*if(!this.state.issue) {
            return (<div/>)
        }*/
        return (
            <div className="row">
                <div className="col-8">
                    <div className="wbdv-issue-info">
                        <span className="row">
                            <div className="col-5">
                                <img className="wbdv-issue-cover" src={"https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7100380-16.jpg"}
                                     alt="Card image cap"/>
                            </div>
                            <span className="col-7 wbdv-basic-top-outer">
                                <div className="wbdv-top-add-area">
                                    <div className="wbdv-add-btn float-right font-weight-bold">
                                        +Add
                                    </div>
                                </div>
                                <div className="wbdv-top-spacer"/>
                                <div className="wbdv-top-info">
                                    dsff
                                </div>
                                <div className="wbdv-top-spacer"/>
                                <div className="wbdv-top-chars">
                                    dsff
                                </div>
                            </span>
                        </span>
                        <div className="wbdv-issue-description">
                            adklsfsd
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="wbdv-issue-reviews">
                        world
                    </div>
                </div>
            </div>
        )
    }
}

export default Issue