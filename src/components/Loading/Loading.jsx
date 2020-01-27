import React from 'react';
import ReactLoading from 'react-loading';
import Style from './loading.module.css';

const Loading = () => {
  return (
    <div className={Style.loading}>
      <ReactLoading
        type={'balls'}
        color={'blue'}
        height={'20%'}
        width={'20%'}
      />
    </div>
  );
};

export default Loading;
