import React from 'react'
import Review from "./Review";

class Reviews extends React.Component {

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    render() {
        return (
            <div className="wbdv-reviews">
                <div className="wbdv-reviews-header">
                    My Reviews
                </div>
                <span className="row">
                    <div className="col-md-6">
                        <Review
                            cover={require("../TempCover.png")}
                            name={"John Wigner"}
                            stars={3}
                            text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                    </div>
                    <div className="col-md-6">
                        <Review
                            cover={require("../TempCover.png")}
                            name={"John Wigner"}
                            stars={1}
                            text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                    </div>
                    <div className="col-md-6">
                        <Review
                            cover={require("../TempCover.png")}
                            stars={4}
                            text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                    </div>
                    <div className="col-md-6">
                        <Review
                            cover={require("../TempCover.png")}
                            stars={3}
                            text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                    </div>
                    <div className="col-md-6">
                        <Review
                            cover={require("../TempCover.png")}
                            stars={2}
                            text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                    </div>
                    <div className="col-md-6">
                        <Review
                            cover={require("../TempCover.png")}
                            stars={5}
                            text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                    </div>
                </span>
            </div>
        )
    }
}

export default Reviews;