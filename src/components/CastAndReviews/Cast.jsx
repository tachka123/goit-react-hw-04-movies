import React, { Component } from 'react';
import ReactImageAppear from 'react-image-appear';
import { getCast } from '../../api/api';
import Style from './cast.module.css';

class Сast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const castId = document.getElementById('cast');
    const { cast } = await getCast(this.props.id);
    this.setState({ cast });
    castId.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <ul id="cast" className={Style.listOfCast}>
        {cast.length > 0 ? (
          cast.map(({ character, cast_id, profile_path }) => (
            <li className={Style.item} key={cast_id}>
              <br />
              {profile_path ? (
                <ReactImageAppear
                  src={`http://image.tmdb.org/t/p/w200/${profile_path}`}
                  showLoader={false}
                />
              ) : (
                <ReactImageAppear
                  src="https://www.barcamania.com/sites/default/files/no_avatar.jpg"
                  showLoader={false}
                />
              )}
              <br />
              {character}
              <br />
            </li>
          ))
        ) : (
          <span>There are no info about casts</span>
        )}
      </ul>
    );
  }
}

export default Сast;
