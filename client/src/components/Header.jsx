import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Bones</h1>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/rules'>Rules</Link>
                </div>
            </div>
        )
    }
}