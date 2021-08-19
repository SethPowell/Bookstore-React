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

    render() {
        return(
            <div className="add-book-form-wrapper">
                <form>
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