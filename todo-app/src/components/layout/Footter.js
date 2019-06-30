import React, { Component } from 'react';

class Footter extends Component {
    render() {
        return (
            <footer style={footStyle}>
                <div>
                    Devloper By Phù Tường Bảo
                </div>
                <div>
                    Contact: 0921006940
                </div>
            </footer>
        );
    }
}

const footStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-around'
}

export default Footter;