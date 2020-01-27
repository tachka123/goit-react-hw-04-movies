import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav/Nav';
import HomePage from '../views/Home';
import Movie from '../views/MovieDetailsPage';
import MovieSearch from '../views/MoviesPage';
import './variables.css';

class App extends Component {
  state = {};

  activeStyle = { color: 'green' };

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={Movie} />
          <Route path="/movies/" component={MovieSearch} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
