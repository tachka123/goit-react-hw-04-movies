import React, { Component } from 'react';
import { getPopular, getBySearch } from '../../api/api';
import Item from './Item';

class ItemsList extends Component {
  state = {
    itemsList: [],
    item: '',
  };

  async componentDidMount() {
    const { item } = this.props;
    if (item) {
      this.setState({ item });
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
        {itemsList.map(item => (
          <Item key={item.id} prop={item} />
        ))}
      </ul>
    );
  }
}

export default ItemsList;
