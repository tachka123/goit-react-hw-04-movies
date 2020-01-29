import React, { Component } from 'react';
import T from 'prop-types';
import { getReviews } from '../../api/api';
import Style from './reviews.module.css';

class Reviews extends Component {
  static propTypes = {
    id: T.string.isRequired,
  };

  state = {
    results: [],
  };

  async componentDidMount() {
    const revId = document.getElementById('reviews');
    const { id } = this.props;
    const { results } = await getReviews(id);
    this.setState({ results });
    revId.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  render() {
    const { results } = this.state;
    return (
      <ul id="reviews" className={Style.list}>
        {results.length > 0 ? (
          results.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author}</h2> <br />
              <span>
                {content.length > 200 ? content.slice(0, 300) + '...' : content}
              </span>
            </li>
          ))
        ) : (
          <span>There no Reviews</span>
        )}
      </ul>
    );
  }
}

export default Reviews;
