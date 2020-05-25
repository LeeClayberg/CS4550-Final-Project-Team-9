import React from 'react'

class ComicStack extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar fixed-top navbar-size">
                    <div className="long-bar">
                        <div className="logo-section">
                            <img className="logo align-middle" src={require('../ComicStack.png')}
                                 alt="Card image cap"/>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default ComicStack