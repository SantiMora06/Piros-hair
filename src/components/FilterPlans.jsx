import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'; // Component for searching
import classes from "../styles/filterplans.module.css";
import { Link } from 'react-router-dom';

const PlansList = ({ plans = [] }) => {
    const [filteredPlans, setFilteredPlans] = useState(plans);

    useEffect(() => {
        setFilteredPlans(plans); // Reset filtered plans whenever the original plans data changes
    }, [plans]);

    const handleSearch = (searchTerm, filterCriteria) => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const filtered = plans.filter(plan => {
            if (filterCriteria === 'name') {
                return plan.name.toLowerCase().includes(lowercasedTerm);
            } else if (filterCriteria === 'price') {
                return plan.price <= Number(lowercasedTerm);
            } else if (filterCriteria === 'days') {
                return plan.days <= Number(lowercasedTerm);
            }
            return true;
        });
        setFilteredPlans(filtered);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />

            <div className={classes.container}>
                {filteredPlans.map(plan => (
                    <div key={plan._id} className={classes.filterPlans}>
                        <Link to={`/plan/${plan._id}`}>
                            <p>{plan.name}</p>

                            <img src={plan.image} alt={plan.name} className={classes.img} />

                            <p>Price: {plan.price}€</p>
                            <p>Days: {plan.days}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlansList;
