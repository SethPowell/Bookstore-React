import React from 'react';
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <div className="navbar-wrapper">
            <Link to="/">
                <button>View Books</button>
            </Link>

            <Link to="/add-book">
                <button>Add Book</button>
            </Link>
        </div>
    )
}