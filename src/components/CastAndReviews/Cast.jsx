import React, { Component } from 'react';
import { getCast } from '../../api/api';

class Сast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { cast } = await getCast(this.props.id);
    this.setState({ cast });
  }

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast.length > 0 ? (
          cast.map(({ character, cast_id, profile_path }) => (
            <li key={cast_id}>
              <br />
              <img
                src={`http://image.tmdb.org/t/p/w200/${profile_path}`}
                alt=""
              />
              <br />
              {character}
              <br />
            </li>
          ))
        ) : (
          <span>There no info about casts</span>
        )}
      </ul>
    );
  }
}

export default Сast;
