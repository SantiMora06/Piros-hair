import React, { useState, useEffect } from 'react';
import PlansList from './PlansList'; // Adjust the path as needed

const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch('http://localhost:5005/plan'); // Replace with your API endpoint
                const data = await response.json();
                setPlans(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching plans:", error);
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Travel Plans</h1>
            <PlansList plans={plans} />
        </div>
    );
};

export default Plans;
