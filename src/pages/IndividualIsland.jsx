
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../styles/individualPlans.module.css"

const IndividualIsland = () => {

    const [island, setIsland] = useState(null)
    const { islandId } = useParams();

    const getIsland = async () => {
        try {
            const response = await fetch(`http://localhost:5005/api/island/${islandId}`)
            if (response.ok) {
                const data = await response.json();
                setIsland(data)
            }

        } catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        getIsland();
    }, [islandId])

    return (<>
        <div className={classes.container}>
            <h1 className={classes.h1}>Current Destination</h1>
            {island ? <div className={classes.innerContainer}>
                <p className={classes.name}>{island.name}</p>
                <img src={island.image} />
                <p className={classes.description}> {island.description}</p>
                <section className={classes.div}>
                    <p className={classes.price}>Price: {island.price} </p>
                    <p className={classes.days}>Days: {island.days}</p>
                </section>
                <button className={classes.btn} type="button">More info</button>
            </div>
                : <p>Loading...</p>}

        </div>

    </>);
}

export default IndividualIsland;