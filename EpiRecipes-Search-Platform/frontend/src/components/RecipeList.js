// frontend/src/App.js

import React, { useState } from 'react';
import Search from './components/Search';
import RecipeList from './components/RecipeList';

const App = () => {
    const [recipes, setRecipes] = useState([]);

    const handleSearchResults = (newRecipes) => {
        setRecipes(newRecipes);
    };

    return (
        <div>
            <h1>EpiRecipes Search</h1>
            <Search onSearchResults={handleSearchResults} />
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default App;
