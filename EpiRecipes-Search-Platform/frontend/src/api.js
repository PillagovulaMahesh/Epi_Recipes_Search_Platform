// frontend/src/api.js

import axios from 'axios';

const API_URL = '/api'; // Base URL for your API

export const searchRecipes = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search?q=${encodeURIComponent(query)}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};

// You can add more functions for other API endpoints as needed
