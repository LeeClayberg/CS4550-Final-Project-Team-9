import React from 'react'
import Review from "./Review";
import reviewService from "../services/ReviewService";

class Reviews extends React.Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
        reviewService.findReviewsForUser(this.props.userId)
            .then(reviews => {
                this.setState({
                    reviews: reviews
                })})
    }

    render() {
        return (
            <div className="wbdv-reviews">
                <div className="wbdv-reviews-header">
                    My Reviews
                </div>
                {
                    this.state.reviews.length > 0 &&
                    <span className="row">
                        {
                            this.state.reviews.map(review => <Review review={review}/>)
                        }
                    </span>
                }
                {
                    this.state.reviews.length == 0 &&
                    <div className="wbdv-collection-empty">
                        No reviews<br/>
                        <div className="wbdv-collection-empty-sm">
                            Add a review to any issue using the <br/>
                            <b> + </b> button under the review section<br/>
                            of any issue
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Reviews;