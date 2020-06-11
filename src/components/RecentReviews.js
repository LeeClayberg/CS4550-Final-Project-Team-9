import React from 'react'
import CoverReview from "./CoverReview";
import ReviewService from "../services/ReviewService";

class RecentReviews extends React.Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        ReviewService.findRecentReviews()
            .then(reviews => {
                this.setState({
                    reviews: reviews
                })
            });
    }

    render() {
        return (
            <div className="wbdv-recent-reviews">
                <div className="wbdv-recent-reviews-header">
                    Recent Reviews
                </div>
                    <span className="row">
                        {
                            this.state.reviews.map(review =>
                                <CoverReview review={review}/>)
                        }
                    </span>
            </div>
        )
    }
}

export default RecentReviews;