import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import T from 'prop-types';
import ReactImageAppear from 'react-image-appear';
import Skeleton from 'react-loading-skeleton';
import Style from './movieItem.module.css';
import Cast from '../CastAndReviews/Cast';
import Reviews from '../CastAndReviews/Reviews';

export default class MovieItem extends Component {
  static propTypes = {
    history: T.shape({ goBack: T.func }).isRequired,
    match: T.shape({ url: T.string, params: T.shape({ movieId: T.string }) })
      .isRequired,
    result: T.shape({
      poster_path: T.string,
      original_title: T.string,
      overview: T.string,
    }).isRequired,
  };

  state = {};

  onGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { url, params } = this.props.match;
    const { poster_path, original_title, overview } = this.props.result;
    const { movieId } = params;
    const poster = `http://image.tmdb.org/t/p/w200${poster_path}`;
    return (
      <div className={Style.item}>
        <button onClick={this.onGoBack} className={Style.button} type="button">
          Back
        </button>
        <h2 className={Style.h2}>{original_title}</h2>
        <ReactImageAppear
          placeholderStyle={{ width: '200px', height: '300px' }}
          src={poster}
          showLoader={false}
        />
        <h3>About</h3>
        <span className={Style.mainInfo}>
          {overview || <Skeleton duration={2} count={4} />}
        </span>
        <div>Additional information</div>
        <Link to={`${url}/reviews`}>
          <button type="button">Reviews</button>
        </Link>
        <Link to={`${url}/cast`}>
          <button type="button">Cast</button>
        </Link>
        <Switch>
          <Route exact path={`${url}`} />
          <Route
            path={`${url}/cast`}
            render={props => <Cast {...props} id={movieId} />}
          />
          <Route
            path={`${url}/reviews`}
            render={props => <Reviews {...props} id={movieId} />}
          />
        </Switch>
      </div>
    );
  }
}
