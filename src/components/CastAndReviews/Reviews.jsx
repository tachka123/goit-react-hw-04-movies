import React, { Component } from 'react';
import { getReviews } from '../../api/api';

class Reviews extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const { results } = await getReviews(this.props.id);
    this.setState({ results });
  }

  render() {
    const { results } = this.state;
    return (
      <ul>
        {results.length > 0 ? (
          results.map(({ author, content, id }) => (
            <li key={id}>
              {author} <br /> <span>{content}</span>
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
