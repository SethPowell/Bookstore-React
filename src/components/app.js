import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './navbar'
import BooksWrapper from "./pages/books-wrapper"
import AddBook from "./pages/add-book"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={BooksWrapper} />
            <Route path="/add-book" component={AddBook} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
