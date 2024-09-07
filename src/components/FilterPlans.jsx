import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'; // Component for searching
import classes from "../styles/filterplans.module.css";
import { Link, useNavigate } from 'react-router-dom';

const PlansList = ({ plans = [] }) => {
    const [filteredPlans, setFilteredPlans] = useState(plans);
    const [visiblePlans, setVisiblePlans] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate(); // Hook to programmatically navigate

    useEffect(() => {
        setFilteredPlans(plans); // Reset filtered plans whenever the original plans data changes
    }, [plans]);

    useEffect(() => {
        setVisiblePlans(filteredPlans.slice(0, 3)); // Display only the first 3 plans initially
    }, [filteredPlans]);

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

    const handleSeeMore = () => {
        navigate('/plan'); // Redirect to the /plan route
    };

    return (
        <div className={classes.bigContainer}>
            <h1>Flight & Hotels <em>- from 650€</em></h1>
            <SearchBar onSearch={handleSearch} />

            <div className={classes.container}>
                {visiblePlans.map(plan => (
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

            {/* Display 'See More' button if there are more than 3 plans */}
            {filteredPlans.length > 3 && (
                <div className={classes.seeMoreContainer}>
                    <button onClick={handleSeeMore} className={classes.seeMoreButton}>
                        See more
                    </button>
                </div>
            )}
        </div>
    );
};

export default PlansList;
