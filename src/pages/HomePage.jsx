import React, { useState, useEffect } from 'react';
import PlansList from '../components/FilterPlans'; // Importing the PlansList component
import PostHeader from '../components/PostHeader';
import Banner1 from '../components/Banner1';
import Banner2 from '../components/Banner2';
import IslandsList from '../components/FilterIsland';
import CruisesList from '../components/FilterCruises';
import DynamicFormWithHookForm from '../components/AddForm'

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
            <Banner1 />
            <CruisesList cruises={cruises} />
            <Banner2 />
            <IslandsList islands={islands} />
            <Banner1 />
        </>
    );
}

export default Home;
