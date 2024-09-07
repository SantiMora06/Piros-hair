import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar'; // Adjust the path as needed
import classes from "../styles/filterisland.module.css";
import { Link, useNavigate } from 'react-router-dom';

const IslandsList = ({ islands }) => {
    const [filteredIsland, setFilteredIsland] = useState(islands);
    const [visibleIslands, setVisibleIslands] = useState([]);
    const navigate = useNavigate(); // Hook to programmatically navigate

    useEffect(() => {
        setFilteredIsland(islands); // Reset filtered islands whenever the original islands data changes
    }, [islands]);

    useEffect(() => {
        setVisibleIslands(filteredIsland.slice(0, 3)); // Display only the first 3 islands initially
    }, [filteredIsland]);

    const handleSearch = (searchTerm, filterCriteria) => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const filtered = islands.filter(island => {
            if (filterCriteria === 'name') {
                return island.name.toLowerCase().includes(lowercasedTerm);
            } else if (filterCriteria === 'price') {
                return island.price.toString().includes(lowercasedTerm);
            } else if (filterCriteria === 'days') {
                return island.days.toString().includes(lowercasedTerm);
            }
            return true;
        });
        setFilteredIsland(filtered);
    };

    const handleSeeMore = () => {
        navigate('/island'); // Redirect to the /island route
    };

    return (
        <div className={classes.bigContainer}>
            <h1>Islands <em>- from 1000€</em></h1>
            <SearchBar onSearch={handleSearch} />

            <div className={classes.container}>
                {visibleIslands.map(island => (
                    <Link to={`/island/${island._id}`} key={island._id} className={classes.filterPlans}>
                        <p>{island.name}</p>
                        <div className={classes.imageContainer}>
                            <img src={island.image} alt={island.name} className={classes.img} />
                        </div>
                        <p>Price: {island.price}€</p>
                        <p>Days: {island.days}</p>
                    </Link>
                ))}
            </div>

            {/* Display 'See More' button if there are more than 3 islands */}
            {filteredIsland.length > 3 && (
                <div className={classes.seeMoreContainer}>
                    <button onClick={handleSeeMore} className={classes.seeMoreButton}>
                        See more
                    </button>
                </div>
            )}
        </div>
    );
};

export default IslandsList;
