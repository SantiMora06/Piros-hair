import React, { useState, useEffect } from 'react';
import PlansList from '../components/FilterPlans'; // Importing the PlansList component
import PostHeader from '../components/PostHeader';
import IslandsList from '../components/FilterIsland';
import CruisesList from '../components/FilterCruises';
import WhyUs from '../components/WhyUs';

const Home = () => {
    const [plans, setPlans] = useState([]);
    const [cruises, setCruises] = useState([])
    const [islands, setIslands] = useState([])
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

    useEffect(() => {
        const fetchCruises = async () => {
            try {
                const response = await fetch('http://localhost:5005/api/cruise'); // Replace with your API endpoint
                const data = await response.json();
                setCruises(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching plans:", error);
                setLoading(false);
            }
        };

        fetchCruises();
    }, []);

    useEffect(() => {
        const fetchIslands = async () => {
            try {
                const response = await fetch('http://localhost:5005/api/island'); // Replace with your API endpoint
                const data = await response.json();
                setIslands(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching plans:", error);
                setLoading(false);
            }
        };

        fetchIslands();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <PostHeader />
            <PlansList plans={plans} />

            <CruisesList cruises={cruises} />

            <IslandsList islands={islands} />
            <WhyUs />
        </>
    );
}

export default Home;
