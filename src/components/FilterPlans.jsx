import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Adjust the path as needed

const PlansList = ({ plans }) => {
    const [filteredPlans, setFilteredPlans] = useState(plans);

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
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div>
                {filteredPlans.map(plan => (
                    <div key={plan._id}>
                        <p>{plan.name}</p>
                        <p>Price: {plan.price}€</p>
                        <p>Days: {plan.days}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlansList;
