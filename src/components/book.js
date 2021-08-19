import React from 'react';

export default function book(props) {
    return(
        <div className="book-wrapper">
            <h3>{props.title}</h3>
            <h4>{props.author}</h4>
            <p>{props.review}</p>
        </div>
    )
}