import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;

// The Advantage of the card element here is that playing an important role, It is combining all the components and extracting the duplication of the Css, Jsx and Html code and making the tree of components look more clean.