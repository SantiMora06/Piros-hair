import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar'; // Adjust the path as needed
import classes from "../styles/filtercruises.module.css"
import { Link } from 'react-router-dom';

const CruisesList = ({ cruises }) => {
    const [filteredCruises, setFilteredCruises] = useState(cruises);

    useEffect(() => {
        setFilteredCruises(cruises); // Reset filtered plans whenever the original plans data changes
    }, [cruises]);

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



    return (
        <div>
            <h1>Cruises</h1>
            <SearchBar onSearch={handleSearch} />

            <div className={classes.container}>

                {filteredCruises.map(cruise => (
                    <div key={cruise._id} className={classes.filterPlans}>
                        <Link to={`/cruise/${cruise._id}`} >

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
        </div>
    );
};

export default CruisesList;
