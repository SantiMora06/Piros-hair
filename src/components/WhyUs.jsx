import classes from "../styles/whyus.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons"
import { faUserShield } from "@fortawesome/free-solid-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const WhyUs = () => {
    return (<>

        <ul className={classes.ul}>

            <li className={classes.listItems}> <FontAwesomeIcon icon={faMedal} />The best and more qualified team!</li>
            <li className={classes.listItems}><FontAwesomeIcon icon={faUserNinja} />24/7 of assistance</li>
            <li className={classes.listItems}><FontAwesomeIcon icon={faUserShield} />Safe and easy to programm</li>
            <li className={classes.listItems}><FontAwesomeIcon icon={faGlobe} />The biggest catalog in Europe!</li>

        </ul>

    </>);
}

export default WhyUs;