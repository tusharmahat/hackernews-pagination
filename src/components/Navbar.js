import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div>
                    <span className="logo">Y</span>
                </div>
                <span>Hacker News</span>
                <Link to="/top">
                    Top|
                </Link>
                <Link to="/Jobs">
                    Jobs|
                </Link>
                <Link to="/latest">
                    Latest|
                </Link>
                <Link to="#">Login</Link>

            </div>
        )
    }
}
