import React, { Component } from 'react';
import Couter from './couter';

class Couters extends Component {
    state = {
        couters: [
            { id: 1, value: 3 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }

        ]
    }
    render() {
        return (
            <div>
                { this.state.couters.map(couter => 
                    <Couter 
                        key={couter.id} 
                        value={couter.value} 
                    />
                )}
            </div>
        );
    }
}

export default Couters;