import { useEffect, useState } from "react";

const IndividualTravel = () => {

    const [place, setPlace] = useState("")


    const getPlace = async () => {
        try {
            const response = await fetch(`localhost:5005/places/${place._id}`)
            if (response.ok) {
                const data = response.json();
                setPlace(data)
            }

        } catch (error) {
            console.log("Error: ", error)
        }

    }

    useEffect(() => {
        getPlace();
    }, [])


    return (<>
        <div>
            <h1>Current Destination</h1>
            {place ? <div><p>{place.name}</p>
                <img src={place.img} />
                <p> {place.description}</p>
                <p>Price: {place.price}</p>
                <p>Days: {place.price}</p></div>
                : <p>Loading...</p>}
        </div>
    </>);
}

export default IndividualTravel;