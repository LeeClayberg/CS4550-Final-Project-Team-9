import React from 'react'
import RecentReview from "./RecentReview";

class RecentReviews extends React.Component {
    render() {
        return (
            <div className="wbdv-recent-reviews">
                <div className="wbdv-recent-reviews-header">
                    Recent Reviews
                </div>
                {
                    this.props.issues.length > 0 &&
                    <span className="row">
                            <div className="col-md-6">
                                <RecentReview
                                    cover={this.props.issues[0].image.super_url}
                                    name={"John Wigner"}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                            <div className="col-md-6">
                                <RecentReview
                                    cover={this.props.issues[1].image.super_url}
                                    name={"John Wigner"}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                            <div className="col-md-6">
                                <RecentReview
                                    cover={this.props.issues[2].image.super_url}
                                    name={"John Wigner"}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                            <div className="col-md-6">
                                <RecentReview
                                    cover={this.props.issues[3].image.super_url}
                                    name={"John Wigner"}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                        </span>
                }
            </div>
        )
    }
}

export default RecentReviews;