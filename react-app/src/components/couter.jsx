import React, { Component } from 'react';

class Couter extends Component {
    state = {
        count: 0
    };
    render() {
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button className="btn btn-primary">Increment</button>
            </React.Fragment>
        );
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count
    }
}

export default Couter;