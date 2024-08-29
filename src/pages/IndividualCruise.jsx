
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../styles/individualPlans.module.css"

const IndividualCruise = () => {


    const [cruise, setCruise] = useState(null)
    const { cruiseId } = useParams();

    const getCruise = async () => {
        try {
            const response = await fetch(`http://localhost:5005/api/cruise/${cruiseId}`)
            if (response.ok) {
                const data = await response.json();
                setCruise(data)
            }

        } catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        getCruise();
    }, [cruiseId])

    return (<>
        <div className={classes.container}>
            <h1 className={classes.h1}>Current Destination</h1>
            {cruise ? <div className={classes.innerContainer}>
                <p className={classes.name}>{cruise.name}</p>
                <img src={cruise.image} />
                <p className={classes.description}> {cruise.description}</p>
                <section className={classes.div}>
                    <p className={classes.price}>Price: {cruise.price} </p>
                    <p className={classes.days}>Days: {cruise.days}</p>
                </section>
                <button className={classes.btn} type="button">More info</button>
            </div>
                : <p>Loading...</p>}

        </div>

    </>);
}

export default IndividualCruise;