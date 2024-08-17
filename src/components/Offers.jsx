import classes from "../styles/offers.module.css"
import londoneye from "../assets/londoneye.jpeg"
import alexanderplatz from "../assets/alexanderplatz.jpeg"
import paris from "../assets/paris.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

const Offers = () => {
    return (<>
        <section className={classes.bigsection}>
            <div className={classes.offer}>
                <h3>Londres, Inglaterra</h3>
                <img src={londoneye} />
                <p>Descripción del lugar</p>
                <p>Precio €</p>
                <p>14 días</p>
            </div>
            <div className={classes.offer}>
                <h3>Berlin, Alemania</h3>
                <img src={alexanderplatz} />
                <p>Descripción del lugar</p>
                <p>Precio €</p>
                <p>10 días</p>
            </div>
            <div className={classes.offer}>
                <h3>Paris, Francia</h3>
                <img src={paris} />
                <p>Descripción del lugar</p>
                <p>Precio €</p>
                <p>14 días</p>
                <div />
            </div>

        </section>
        <div className={classes.buttondiv}>
            <button type="button" className={classes.boton}>Ver más
                <FontAwesomeIcon icon={faEarthEurope} className={classes.icono}
                /></button>
        </div>
    </>);
}

export default Offers;