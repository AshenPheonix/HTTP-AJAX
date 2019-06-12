import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <Link to="/"><section>List</section></Link>
                <Link to="/add"><section className="right">Add</section></Link>
            </nav>
        )
    }
}
