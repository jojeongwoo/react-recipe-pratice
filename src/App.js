import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// components
import Recipe from './Recipe';

function App() {

  const APP_ID = 'cca0af2b';
  const APP_KEY = '347c786fbfcd4ad51910c243fb512fb4';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  
  useEffect(async () => {
    getRecipes();
  },[query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

    return (
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>
        <input type='text' className='search-bar' value={search} onChange={updateSearch}/>
        <button type='submit' className='search-button'>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe =>(
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))};
      </div>
    </div>
  );
}

export default App; 
