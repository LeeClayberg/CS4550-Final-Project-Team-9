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
                        <CoverReview
                            cover={require("../TempCover.png")}
                            issueId={""}
                            name={"John Wigner"}
                            stars={3}
                            text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                        <CoverReview
                            cover={require("../TempCover.png")}
                            issueId={""}
                            name={"John Wigner"}
                            stars={3}
                            text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                        <CoverReview
                            cover={require("../TempCover.png")}
                            issueId={""}
                            name={"John Wigner"}
                            stars={3}
                            text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                        <CoverReview
                            cover={require("../TempCover.png")}
                            issueId={""}
                            name={"John Wigner"}
                            stars={3}
                            text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                    </span>
            </div>
        )
    }
}

export default RecentReviews;