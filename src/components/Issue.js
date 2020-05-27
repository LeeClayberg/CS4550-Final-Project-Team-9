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
                                <img className="wbdv-issue-cover" src={"https://comicvine1.cbsistatic.com/uploads/scale_large/11/117763/2403520-ss16.png"}
                                     alt="Card image cap"/>
                            </div>
                            <span className="col-7 wbdv-basic-top-outer">
                                <div className="wbdv-top-add-area">
                                    <div className="wbdv-add-btn float-right">
                                        + Add
                                    </div>
                                </div>
                                <div className="wbdv-top-spacer"/>
                                <div className="wbdv-top-info">
                                    <div className="row wbdv-info-row">
                                        <div className="col-3 wbdv-info-row-column font-weight-bold">
                                            Name:
                                        </div>
                                        <div className="col-9 wbdv-info-row-column text-right">
                                            In the Hands of ... Mephisto!
                                        </div>
                                    </div>
                                    <div className="row wbdv-info-row">
                                        <div className="col-4 wbdv-info-row-column font-weight-bold">
                                            Volume:
                                        </div>
                                        <div className="col-8 wbdv-info-row-column text-right">
                                            The Silver Surfer
                                        </div>
                                    </div>
                                    <div className="row wbdv-info-row">
                                        <div className="col-4 wbdv-info-row-column font-weight-bold">
                                            Issue:
                                        </div>
                                        <div className="col-8 wbdv-info-row-column text-right">
                                            16
                                        </div>
                                    </div>
                                    <div className="row wbdv-info-row">
                                        <div className="col-4 wbdv-info-row-column font-weight-bold">
                                            Cover Date:
                                        </div>
                                        <div className="col-8 wbdv-info-row-column text-right">
                                            May 1970
                                        </div>
                                    </div>
                                    <div className="row wbdv-info-row">
                                        <div className="col-4 wbdv-info-row-column font-weight-bold">
                                            In Store Date:
                                        </div>
                                        <div className="col-8 wbdv-info-row-column text-right">
                                             N/A
                                        </div>
                                    </div>
                                </div>
                                <div className="wbdv-top-spacer"/>
                                <div className="wbdv-top-chars">
                                    <div className="font-weight-bold wbdv-section-title">Characters</div>
                                     Dum Dum Dugan, Mephisto, Nick Fury, Shalla Bal, Silver Surfer
                                </div>
                            </span>
                        </span>
                        <div className="wbdv-issue-description">
                            <div className="font-weight-bold wbdv-section-title">Description</div>
                            <p><em>Will Mephisto finally make an offer Silver Surfer can’t refuse?!</em></p><p>Mephisto has yet another plan to obtain the Silver Surfer's soul. He disguises himself and walks among the humans. He now comes up with another plan.</p><p>He transports the Surfer to him. This time he claims to be a friend to the Surfer. He allows the Surfer to pass through the barrier and return home to Zenn-La. But when the Surfer arrives, Shalla Bal is missing, taken by Mephisto himself.</p><p>He returns back to Earth and is trapped once again. Mephisto revels in his frustration. They battle but the Surfer is no match for him. Above the planet they create giant surges of energy. This attracts the attention of SHIELD.</p><p>Mephisto finally reveals his plan to the Surfer and shows him the image of Shalla Bal, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him that he must destroy SHIELD.</p>
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