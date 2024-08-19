import { Link } from "react-router-dom";
import classes from "../styles/header.module.css"

const PreHeader = () => {
    return (<section className={classes.header}>
        <ul className={classes.list}>
            <li className={classes.listItems}> <Link to="/planify">Planifica aquí </Link></li>

        </ul> </section>);
}

export default PreHeader;