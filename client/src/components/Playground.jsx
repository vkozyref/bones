import { Component } from 'react';

export default class Playground extends Component {
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