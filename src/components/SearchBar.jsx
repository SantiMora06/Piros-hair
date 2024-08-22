import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCriteria, setFilterCriteria] = useState('name'); // Default to 'name'

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        // Pass search term and filter criteria to the parent component
        onSearch(event.target.value, filterCriteria);
    };

    const handleCriteriaChange = (event) => {
        setFilterCriteria(event.target.value);
        // Pass search term and new criteria to the parent component
        onSearch(searchTerm, event.target.value);
    };

    return (
        <div>
            <select onChange={handleCriteriaChange} value={filterCriteria}>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="days">Days</option>
            </select>
            <input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
