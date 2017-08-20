import React from 'react';

export default class Playground extends React.Component {
    render() {
        return (
                <div class="playground">
                    <div className="playground-content"></div>
                    <button>Throw</button>
                    <button>Stop</button>
                </div> 
        )
    }
}