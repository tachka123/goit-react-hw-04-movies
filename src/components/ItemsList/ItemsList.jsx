import React, { Component } from 'react';
import T from 'prop-types';
import { getPopular, getBySearch } from '../../api/api';
import Item from './Item';
import Loading from '../Loading/Loading';

class ItemsList extends Component {
  static propTypes = {
    item: T.string.isRequired,
  };

  state = {
    itemsList: [],
  };

  async componentDidMount() {
    const { item } = this.props;
    if (item) {
      this.update();
    } else {
      const result = await getPopular();
      this.setState({ itemsList: [...result] });
    }
  }

  componentDidUpdate(prevProp) {
    const { item } = this.props;
    if (prevProp.item !== item) this.update();
  }

  async update() {
    const { item } = this.props;
    const result = await getBySearch(item);
    this.setState({ itemsList: [...result] });
  }

  render() {
    const { itemsList } = this.state;
    return (
      <ul>
        {itemsList.length ? (
          itemsList.map(item => <Item key={item.id} prop={item} />)
        ) : (
          <Loading />
        )}
      </ul>
    );
  }
}

export default ItemsList;
