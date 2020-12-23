import React, { useState, useEffect } from 'react';
import style from './Recipe.module.css';

const Recipe = ({ title, calories, image }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img className={style.image} src={image} alt=''/>
    </div>
  );
}

export default Recipe;