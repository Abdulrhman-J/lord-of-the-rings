import React, { Component } from 'react';

class Movie extends Component {
    render () {
        return (
            // We will add JSX here
            <div>
                <h1> The Lord of The Rings: {this.props.title}. </h1>
                <p> {this.props.hours}h {this.props.minutes}min </p>
            </div>
        );
    }
}

export default Movie;