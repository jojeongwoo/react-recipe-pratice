import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// components
import Recipe from './Recipe';

function App() {
  const APP_ID = 'cca0af2b';
  const APP_KEY = '347c786fbfcd4ad51910c243fb512fb4';

  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(response => {
      console.log(response.data.hits);
      setRecipes(response.data.hits);
    });
  }, [query]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

    return (
    <div className="App">
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text" 
          className="search-input" 
          onChange={searchHandler}
        />
        <button className="search-button">search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
      

    </div>
  );
}

export default App; 
