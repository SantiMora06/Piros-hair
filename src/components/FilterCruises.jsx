import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Adjust the path as needed
import classes from "../styles/filterplans.module.css"
import { Link } from 'react-router-dom';

const CruisesList = ({ cruises }) => {
    const [filteredCruises, setFilteredCruises] = useState(cruises);
    const [visibleCount, setVisibleCount] = useState(6);


    const handleSearch = (searchTerm, filterCriteria) => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const filtered = cruises.filter(cruise => {
            if (filterCriteria === 'name') {
                return cruise.name.toLowerCase().includes(lowercasedTerm);
            } else if (filterCriteria === 'price') {
                return cruise.price.toString().includes(lowercasedTerm);
            } else if (filterCriteria === 'days') {
                return cruise.days.toString().includes(lowercasedTerm);
            }
            return true;
        });
        setFilteredCruises(filtered);
        setVisibleCount(6)
    };

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    }

    return (
        <div>
            <h1>Travel Plans</h1>
            <SearchBar onSearch={handleSearch} />

            <div className={classes.container}>

                {filteredCruises.slice(0, visibleCount).map(cruise => (
                    <Link to={`/cruise/${cruise._id}`} key={cruise._id} className={classes.filterPlans}>
                        <p>{cruise.name}</p>
                        <div className={classes.imageContainer}>
                            <img src={cruise.image} alt={cruise.name} />
                            <div className={classes.descriptionOverlay}>
                                <p>{cruise.description}</p>
                            </div>
                        </div>
                        <p>Price: {cruise.price}€</p>
                        <p>Days: {cruise.days}</p>
                    </Link>
                ))}
            </div>
            {visibleCount < filteredCruises.length && (
                <button onClick={showMore}>Show More</button>
            )}
        </div>
    );
};

export default CruisesList;
