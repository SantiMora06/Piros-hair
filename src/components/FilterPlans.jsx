import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Adjust the path as needed
import classes from "../styles/filterplans.module.css"
import { Link } from 'react-router-dom';

const PlansList = ({ plans }) => {
    const [filteredPlans, setFilteredPlans] = useState(plans);
    const [visibleCount, setVisibleCount] = useState(6);


    const handleSearch = (searchTerm, filterCriteria) => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const filtered = plans.filter(plan => {
            if (filterCriteria === 'name') {
                return plan.name.toLowerCase().includes(lowercasedTerm);
            } else if (filterCriteria === 'price') {
                return plan.price.toString().includes(lowercasedTerm);
            } else if (filterCriteria === 'days') {
                return plan.days.toString().includes(lowercasedTerm);
            }
            return true;
        });
        setFilteredPlans(filtered);
        setVisibleCount(6)
    };

    const showMorePlans = () => {
        setVisibleCount(prevCount => prevCount + 6);
    }

    return (
        <div>
            <h1>Travel Plans</h1>
            <SearchBar onSearch={handleSearch} />

            <div className={classes.container}>

                {filteredPlans.slice(0, visibleCount).map(plan => (
                    <Link to={`/plan/${plan._id}`} key={plan._id} className={classes.filterPlans}>
                        <p>{plan.name}</p>
                        <div className={classes.imageContainer}>
                            <img src={plan.image} alt={plan.name} />
                            <div className={classes.descriptionOverlay}>
                                <p>{plan.description}</p>
                            </div>
                        </div>
                        <p>Price: {plan.price}€</p>
                        <p>Days: {plan.days}</p>
                    </Link>
                ))}
            </div>
            {visibleCount < filteredPlans.length && (
                <button onClick={showMorePlans}>Show More</button>
            )}
        </div>
    );
};

export default PlansList;
