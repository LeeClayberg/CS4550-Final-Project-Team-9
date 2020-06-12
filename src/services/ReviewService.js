
const server = "http://localhost:8080/api";

const createReview = (review) =>
    fetch(server + "/reviews", {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteReview = (reviewId) =>
    fetch(server + "/reviews/" + reviewId, {
        method: 'DELETE'
    })

const findAllReviews = () =>
    fetch(server + "/reviews")
        .then(response => response.json())

const findReviewById = (reviewId) =>
    fetch(server + "/reviews/" + reviewId)
        .then(response => response.json())

const findReviewsForUser = (userId) =>
    fetch(server + "/users/" + userId + "/reviews")
        .then(response => response.json())

const findReviewsForIssue = (issueId) =>
    fetch(server + "/issues/" + issueId + "/reviews")
        .then(response => response.json())

const findRecentReviews = () =>
    fetch(server + "/reviews/recent")
        .then(response => response.json())

export default {
    createReview,
    deleteReview,
    findAllReviews,
    findReviewById,
    findReviewsForUser,
    findReviewsForIssue,
    findRecentReviews
}