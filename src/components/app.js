import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './navbar'
import BooksWrapper from "./pages/books-wrapper"
import AddBook from "./pages/add-book"

export default class App extends Component {
  constructor() {
    super();

    this.state={
      data: []
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/book/get")
    .then(response => response.json())
    .then(data => this.setState({ data }))
    .catch(error => console.log("Error fetching books", error))
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Switch>
            <Route exact path='/' render={(props) => <BooksWrapper data={this.state.data} {...props}/>} />
            <Route path="/add-book" component={AddBook} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
