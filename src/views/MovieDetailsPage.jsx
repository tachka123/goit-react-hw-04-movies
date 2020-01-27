import React, { Component } from 'react';
import T from 'prop-types';
import { getById } from '../api/api';
import MovieItem from '../components/MovieItem/MovieItem';

class MovieDetailsPage extends Component {
  static propTypes = {
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
    const { match } = this.props;
    return <MovieItem match={match} result={result} />;
  }
}

export default MovieDetailsPage;
