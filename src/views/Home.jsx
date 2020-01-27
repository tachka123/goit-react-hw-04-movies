import React from 'react';
import style from './views.module.css';
import ItemList from '../components/ItemsList/ItemsList';

const Home = () => {
  return (
    <div className={style.homePage}>
      <h1>Trending today</h1>
      <ItemList />
    </div>
  );
};

export default Home;
