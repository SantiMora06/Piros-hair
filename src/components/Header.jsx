import { Link } from "react-router-dom";
import classes from "../styles/header.module.css"

const Header = () => {
    return (<>
        <ul className={classes.listheader}>
            <li className={classes.postHeader}><Link to="/"> Home </Link> </li>
            <li className={classes.postHeader}><Link to="/flightshotel">Flights & Hotel</Link></li>
            <li className={classes.postHeader}><Link to="/cruises">Cruises </Link></li>
        </ul>
    </>);
}

export default Header;