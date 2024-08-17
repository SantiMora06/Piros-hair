import { Link } from "react-router-dom";
import classes from "../styles/header.module.css"

const Header = () => {
    return (<>
        <section className={classes.header}>
            <ul className={classes.list}>
                <li className={classes.listItems}> <Link to="/planify">Planifica aquí </Link></li>

            </ul> </section>
        <ul>
            <li className={classes.postHeader}><Link to="/budget"> Budget </Link><span />   <Link to="/flightshotel">Flights & Hotel</Link><span /> <Link to="/cruises">Cruises </Link></li>
        </ul>
    </>);
}

export default Header;