import React, { useState, useEffect } from 'react';
import classes from "../styles/plans.module.css"
import { Link } from 'react-router-dom';

const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch('http://localhost:5005/api/plan'); // Replace with your API endpoint
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
            {plans.map(plan => (
                <div key={plan._id} className={classes.container}>
                    <Link to={`/plan/${plan._id}`} >
                        <h1>{plan.name}</h1>
                        <img src={plan.image} />
                        <p className={classes.description}>{plan.description}</p>
                        <p className={classes.pricedays}> {plan.price} € - {plan.days}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Plans;
