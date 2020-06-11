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
                <span className="row">
                    {
                        this.state.reviews.map(review => <Review review={review}/>)
                    }
                </span>
            </div>
        )
    }
}

export default Reviews;