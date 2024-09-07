import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar'; // Adjust the path as needed
import classes from "../styles/filtercruises.module.css";
import { Link, useNavigate } from 'react-router-dom';

const CruisesList = ({ cruises }) => {
    const [filteredCruises, setFilteredCruises] = useState(cruises);
    const [visibleCruises, setVisibleCruises] = useState([]);
    const navigate = useNavigate(); // Hook to programmatically navigate

    useEffect(() => {
        setFilteredCruises(cruises); // Reset filtered cruises whenever the original cruises data changes
    }, [cruises]);

    useEffect(() => {
        setVisibleCruises(filteredCruises.slice(0, 3)); // Display only the first 3 cruises initially
    }, [filteredCruises]);

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
    };

    const handleSeeMore = () => {
        navigate('/cruise'); // Redirect to the /cruise route
    };

    return (
        <div className={classes.bigContainer}>
            <h1>Cruises <em>- from 1200€</em></h1>
            <SearchBar onSearch={handleSearch} />

            <div className={classes.container}>
                {visibleCruises.map(cruise => (
                    <div key={cruise._id} className={classes.filterPlans}>
                        <Link to={`/cruise/${cruise._id}`}>
                            <p>{cruise.name}</p>
                            <div className={classes.imageContainer}>
                                <img src={cruise.image} alt={cruise.name} className={classes.img} />
                                <p>Price: {cruise.price}€</p>
                                <p>Days: {cruise.days}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Display 'See More' button if there are more than 3 cruises */}
            {filteredCruises.length > 3 && (
                <div className={classes.seeMoreContainer}>
                    <button onClick={handleSeeMore} className={classes.seeMoreButton}>
                        See more
                    </button>
                </div>
            )}
        </div>
    );
};

export default CruisesList;
