import React, { Component } from 'react';
import T from 'prop-types';
import ItemList from '../components/ItemsList/ItemsList';
import Style from './views.module.css';

class MoviesPage extends Component {
  static propTypes = {
    location: T.shape({ search: T.string }).isRequired,
    history: T.shape({ push: T.func }).isRequired,
  };

  state = {
    change: '',
    itemToFind: null,
  };

  componentDidMount() {
    const {
      location: { search },
    } = this.props;
    if (search) {
      this.setState({
        itemToFind: search.slice(search.indexOf('=') + 1, search.length),
      });
    }
  }

  onChange = e => {
    this.setState({ change: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { history, location } = this.props;
    const { change, itemToFind } = this.state;
    if (change === itemToFind || change === '') return;
    this.setState({ itemToFind: change, change: '' });
    history.push({ ...location, search: `?movie=${change}` });
  };

  render() {
    const { itemToFind, change } = this.state;

    return (
      <div className={Style.homePage}>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={change}
            placeholder="Enter film to find"
            type="text"
          />
          <button type="submit">Find</button>
        </form>
        {itemToFind && <ItemList item={itemToFind} />}
      </div>
    );
  }
}

export default MoviesPage;
