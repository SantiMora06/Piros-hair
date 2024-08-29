import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar'; // Adjust the path as needed
import classes from "../styles/filterplans.module.css"
import { Link } from 'react-router-dom';

const IslandsList = ({ islands }) => {
    const [filteredIsland, setFilteredIsland] = useState(islands);

    useEffect(() => {
        setFilteredIsland(islands); // Reset filtered plans whenever the original plans data changes
    }, [islands]);

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



    return (
        <div>
            <h1>Travel Plans</h1>
            <SearchBar onSearch={handleSearch} />

            <div className={classes.container}>

                {filteredIsland.map(island => (
                    <Link to={`/island/${island._id}`} key={island._id} className={classes.filterPlans}>
                        <p>{island.name}</p>
                        <div className={classes.imageContainer}>
                            <img src={island.image} alt={island.name} />
                            <div className={classes.descriptionOverlay}>
                                <p>{island.description}</p>
                            </div>
                        </div>
                        <p>Price: {island.price}€</p>
                        <p>Days: {island.days}</p>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default IslandsList;
