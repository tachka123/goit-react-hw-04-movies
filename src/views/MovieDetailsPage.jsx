import React, { Component } from 'react';
import T from 'prop-types';
import { getById } from '../api/api';
import MovieItem from '../components/MovieItem/MovieItem';
import Loading from '../components/Loading/Loading';

class MovieDetailsPage extends Component {
  static propTypes = {
    location: T.shape({}).isRequired,
    history: T.shape({}).isRequired,
    match: T.shape({
      params: T.shape({
        movieId: T.string,
      }),
      url: T.string,
    }).isRequired,
  };

  state = {
    result: {},
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const result = await getById(movieId);
    this.setState({ result });
  }

  render() {
    const { result } = this.state;
    const { match, location, history } = this.props;
    return Object.keys(result).length ? (
      <MovieItem
        match={match}
        result={result}
        location={location}
        history={history}
      />
    ) : (
      <Loading />
    );
  }
}

export default MovieDetailsPage;
