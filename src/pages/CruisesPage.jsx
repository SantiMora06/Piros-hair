import React, { useState, useEffect } from 'react';
import classes from "../styles/plans.module.css"
import { Link } from 'react-router-dom';

const CruisesPage = () => {
    const [cruises, setCruises] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchCruises = async () => {
        try {
            const response = await fetch('http://localhost:5005/api/cruise'); // Replace with your API endpoint
            const data = await response.json();
            setCruises(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching cruises:", error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchCruises();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {cruises.map(cruise => (
                <div key={cruise._id} className={classes.container}>
                    <Link to={`/cruise/${cruise._id}`} >
                        <h1>{cruise.name}</h1>
                        <img src={cruise.image} />
                        <p className={classes.description}>{cruise.description}</p>
                        <p className={classes.pricedays}> {cruise.price} € - {cruise.days}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CruisesPage;
