import React from "react";

import Book from '../book'

export default function booksWrapper(props) {
    return(
        <div className="books-wrapper">
            {props.data.map(book => <Book 
                                        title={book.title}
                                        author={book.author}
                                        review={book.review}
                                    />)}
        </div>
    )
}