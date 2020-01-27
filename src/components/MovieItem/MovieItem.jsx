import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import T from 'prop-types';
import Style from './movieItem.module.css';
import Cast from '../CastAndReviews/Cast';
import Reviews from '../CastAndReviews/Reviews';

const MovieItem = ({
  match: { url, params },
  result: { poster_path, original_title, overview },
}) => {
  const { movieId } = params;
  return (
    <div className={Style.item}>
      <h2 className={Style.h2}>{original_title}</h2>
      <img src={`http://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
      <span className={Style.mainInfo}>{overview}</span>
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
};

MovieItem.propTypes = {
  match: T.shape({ url: T.string, params: T.shape({ movieId: T.string }) })
    .isRequired,
  result: T.shape({
    poster_path: T.string,
    original_title: T.string,
    overview: T.string,
  }).isRequired,
};

export default MovieItem;
