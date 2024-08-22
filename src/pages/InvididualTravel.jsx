import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualTravelById = () => {

    const [plan, setPlan] = useState(null)
    const { planId } = useParams();

    const getPlan = async () => {
        try {
            const response = await fetch(`http://localhost:5005/api/plan/${plan._id}`)
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
        <div>
            <h1>Current Destination</h1>
            {plan ? <div><p>{plan.name}</p>
                <img src={plan.img} />
                <p> {plan.description}</p>
                <p>Price: {plan.price}</p>
                <p>Days: {plan.days}</p></div>
                : <p>Loading...</p>}
        </div>
    </>);
}

export default IndividualTravelById;