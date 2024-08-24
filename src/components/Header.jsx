import { Link } from "react-router-dom";
import classes from "../styles/header.module.css"
import logo from "../assets/Logo.png"

const Header = () => {
    return (<>
        <ul className={classes.listheader}>
            <li className={classes.postHeader1}><Link to="/" className={classes.logo}> <img src={logo} /> </Link> </li>
            <li className={classes.postHeader}><Link to="/"> Home </Link> </li>
            <li className={classes.postHeader}><Link to="/flightshotel">Flights & Hotel</Link></li>
            <li className={classes.postHeader}><Link to="/cruises">Cruises </Link></li>
            <li className={classes.postHeader}><Link to="/islands">Islands </Link></li>
        </ul>

    </>);
}

export default Header;