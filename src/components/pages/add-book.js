import React, {Component} from 'react'

export default class AddBook extends Component {
    constructor() {
        super()

        this.state= {
            title: '',
            author: '',
            review: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClear() {
        this.setState({
            title:'',
            author:'',
            review:''
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        fetch("http://127.0.0.1:5000/book/add", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                review: this.state.review
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data !== "Book added successfully") {
                console.log('error adding book',data)
            }
            else {
                fetch(`http://127.0.0.1:5000/book/get/title/${this.state.title}`)
                .then(response => response.json())
                .then(data => {
                    this.props.handleSuccessfulAddBook(data)
                    this.handleClear()
                    this.props.history.push("/")
                })
                .catch(console.log("Error getting new book: ", error))
            }
        })
        .catch(error => console.log("Error adding book: ", error))
    }

    render() {
        return(
            <div className="add-book-form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Title" name='title' value={this.state.title} onChange={this.handleChange}/>
                    <input type="text" placeholder="Author" name='author' value={this.state.author} onChange={this.handleChange}/>
                    <textarea placeholder="Review" name='review' value={this.state.review} onChange={this.handleChange}></textarea>
                    <button type="submit">Submit</button>
                    <button type='button'onClick={this.handleClear}>Clear</button>
                </form>
            </div>
        )
    }
}