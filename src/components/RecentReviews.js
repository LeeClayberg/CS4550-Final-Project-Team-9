import React from 'react'
import CoverReview from "./CoverReview";

class RecentReviews extends React.Component {
    render() {
        return (
            <div className="wbdv-recent-reviews">
                <div className="wbdv-recent-reviews-header">
                    Recent Reviews
                </div>
                    <span className="row">
                            <div className="col-md-6">
                                <CoverReview
                                    cover={require("../TempCover.png")}
                                    name={"John Wigner"}
                                    stars={3}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                            <div className="col-md-6">
                                <CoverReview
                                    cover={require("../TempCover.png")}
                                    name={"John Wigner"}
                                    stars={1}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                            <div className="col-md-6">
                                <CoverReview
                                    cover={require("../TempCover.png")}
                                    name={"John Wigner"}
                                    stars={4}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                            <div className="col-md-6">
                                <CoverReview
                                    cover={require("../TempCover.png")}
                                    name={"John Wigner"}
                                    stars={3}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                    </span>
            </div>
        )
    }
}

export default RecentReviews;