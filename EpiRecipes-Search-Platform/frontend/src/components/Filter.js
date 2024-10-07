// frontend/src/components/Filter.js

import React, { useState } from 'react';

const Filter = ({ onFilterChange, allIngredients }) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState('');

    const handleIngredientChange = (ingredient) => {
        setSelectedIngredients((prevSelected) => {
            if (prevSelected.includes(ingredient)) {
                return prevSelected.filter((item) => item !== ingredient);
            } else {
                return [...prevSelected, ingredient];
            }
        });
    };

    const handleCuisineChange = (e) => {
        setSelectedCuisine(e.target.value);
    };

    const applyFilters = () => {
        const filters = {
            ingredients: selectedIngredients,
            cuisine: selectedCuisine,
        };
        onFilterChange(filters);
    };

    return (
        <div className="filter">
            <h2>Filters</h2>

            <div className="filter-group">
                <h3>Ingredients</h3>
                {allIngredients.map((ingredient, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={ingredient}
                            checked={selectedIngredients.includes(ingredient)}
                            onChange={() => handleIngredientChange(ingredient)}
                        />
                        {ingredient}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h3>Cuisine</h3>
                <select value={selectedCuisine} onChange={handleCuisineChange}>
                    <option value="">All</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    {/* Add more cuisine options as needed */}
                </select>
            </div>

            <button onClick={applyFilters}>Apply Filters</button>
        </div>
    );
};

export default Filter;
