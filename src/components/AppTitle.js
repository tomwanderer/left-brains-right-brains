import React from 'react';

const AppTitle = props => {
  return (
    <div className="title">
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
    </div>
  );
};

export default AppTitle;
