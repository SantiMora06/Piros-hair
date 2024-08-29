
import React, { useState, useEffect } from 'react';
import classes from "../styles/plans.module.css"
import { Link } from 'react-router-dom';

const IslandsPage = () => {
    const [islands, setIslands] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIslands = async () => {
            try {
                const response = await fetch('http://localhost:5005/api/island'); // Replace with your API endpoint
                const data = await response.json();
                setIslands(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching cruises:", error);
                setLoading(false);
            }
        };

        fetchIslands();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {islands.map(island => (
                <div key={island._id} className={classes.container}>
                    <Link to={`/island/${island._id}`} >
                        <h1>{island.name}</h1>
                        <img src={island.image} />
                        <p className={classes.description}>{island.description}</p>
                        <p className={classes.pricedays}> {island.price} € - {island.days}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default IslandsPage;
