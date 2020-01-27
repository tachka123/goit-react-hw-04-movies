import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import style from './items.module.css';

const Item = ({ prop }) => {
  const { original_title, id } = prop;
  return (
    <Link
      to={{
        pathname: `movies/${id}`,
      }}
    >
      <li className={style.item}>{original_title}</li>
    </Link>
  );
};

Item.propTypes = {
  prop: T.shape({
    original_title: T.string,
    id: T.number,
  }).isRequired,
};

export default Item;
