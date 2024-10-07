// frontend/src/components/Search.js

import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearchResults }) => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.get(`/api/search?q=${encodeURIComponent(query)}`);
            onSearchResults(response.data);
        } catch (err) {
            setError('Error fetching recipes. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for recipes..."
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default Search;
