import React from 'react'
import RecentReview from "./RecentReview";

class RecentReviews extends React.Component {
    render() {
        return (
            <div className="wbdv-recent-reviews">
                <div className="wbdv-recent-reviews-header">
                    Recent Reviews
                </div>
                    <span className="row">
                            <div className="col-md-6">
                                <RecentReview
                                    cover={"https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7100380-16.jpg"}
                                    name={"John Wigner"}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                            <div className="col-md-6">
                                <RecentReview
                                    cover={"https://comicvine1.cbsistatic.com/uploads/scale_large/11112/111121983/6947553-7122432330-Super.jpg"}
                                    name={"John Wigner"}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                            <div className="col-md-6">
                                <RecentReview
                                    cover={"https://comicvine1.cbsistatic.com/uploads/scale_large/11112/111121983/7005411-3864603466-15621.jpg"}
                                    name={"John Wigner"}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                            <div className="col-md-6">
                                <RecentReview
                                    cover={"https://comicvine1.cbsistatic.com/uploads/scale_large/11112/111121983/6933997-1894713916-SUPER.jpg"}
                                    name={"John Wigner"}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                    </span>
            </div>
        )
    }
}

export default RecentReviews;