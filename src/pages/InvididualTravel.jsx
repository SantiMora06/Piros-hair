import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../styles/individualPlans.module.css"

const IndividualTravelById = () => {

    const [plan, setPlan] = useState(null)
    const { planId } = useParams();

    const getPlan = async () => {
        try {
            const response = await fetch(`http://localhost:5005/api/plan/${planId}`)
            if (response.ok) {
                const data = await response.json();
                setPlan(data)
            }

        } catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        getPlan();
    }, [planId])

    return (<>
        <div className={classes.container}>
            <h1 className={classes.h1}>Current Destination</h1>
            {plan ? <div className={classes.innerContainer}>
                <p className={classes.name}>{plan.name}</p>
                <img src={plan.image} />
                <p className={classes.description}> {plan.description}</p>
                <section className={classes.div}>
                    <p className={classes.price}>Price: {plan.price} </p>
                    <p className={classes.days}>Days: {plan.days}</p>
                </section>
                <button className={classes.btn} type="button">More info</button>
            </div>
                : <p>Loading...</p>}

        </div>

    </>);
}

export default IndividualTravelById;