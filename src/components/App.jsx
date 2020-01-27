import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loading from './Loading/Loading';
import Nav from './Nav/Nav';
import './variables.css';

const HomePage = lazy(() => import('../views/Home'));
const Movie = lazy(() => import('../views/MovieDetailsPage'));
const MovieSearch = lazy(() => import('../views/MoviesPage'));

class App extends Component {
  state = {};

  activeStyle = { color: 'green' };

  render() {
    return (
      <div>
        <Nav />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={Movie} />
            <Route path="/movies/" component={MovieSearch} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
