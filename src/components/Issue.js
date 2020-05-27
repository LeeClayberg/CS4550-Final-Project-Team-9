import React from 'react'

class Issue extends React.Component {
    render() {
        return (
            <h1>
                {this.props.match.params.id};
            </h1>
        )
    }
}

export default Issue