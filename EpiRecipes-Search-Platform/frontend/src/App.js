// frontend/src/App.js

import React, { useState } from 'react';
import Search from './components/Search';
import RecipeList from './components/RecipeList';
import Filter from './components/Filter';
import './styles.css'; // Import your styles if you have any

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [filters, setFilters] = useState({});

    const handleSearchResults = (newRecipes) => {
        setRecipes(newRecipes);
    };

    const handleFilterChange = (selectedFilters) => {
        setFilters(selectedFilters);
        // Implement filtering logic based on selected filters
        // For example:
        // const filteredRecipes = applyFilters(recipes, selectedFilters);
        // setRecipes(filteredRecipes);
    };

    const allIngredients = ['Chicken', 'Beef', 'Vegetables', 'Spices']; // Example ingredients list
    const cuisines = ['Italian', 'Mexican', 'Indian', 'Chinese']; // Example cuisine list

    return (
        <div className="app">
            <h1>EpiRecipes Search</h1>
            <Search onSearchResults={handleSearchResults} />
            <Filter onFilterChange={handleFilterChange} allIngredients={allIngredients} />
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default App;
