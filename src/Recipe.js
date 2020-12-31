import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({ title, calories, image }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <p>{calories} calories</p>
      <img src={image} className={style.image} />
    </div>
  );
}

export default Recipe;