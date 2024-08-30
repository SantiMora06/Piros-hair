import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/header.module.css";
import logo from "../assets/Logo.png";
import DynamicFormWithHookForm from "./AddForm";

const Header = () => {
    // State to manage the visibility of the dropdown form
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <>
            <ul className={classes.listheader}>
                <li className={classes.postHeader1}>
                    <Link to="/" className={classes.logo}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </li>
                <li className={classes.postHeader}><Link to="/">Home</Link></li>
                <li className={classes.postHeader}><Link to="/plan">Flights & Hotel</Link></li>
                <li className={classes.postHeader}><Link to="/cruises">Cruises</Link></li>
                <li className={classes.postHeader}><Link to="/islands">Islands</Link></li>
                <li className={classes.postHeader}>
                    <button onClick={toggleDropdown} className={classes.dropdownButton}>
                        {isDropdownVisible ? "Close" : "Add a route"}
                    </button>
                </li>
            </ul>

            {/* Conditionally render dropdown form */}
            {isDropdownVisible && (
                <div className={classes.dropdownMenu}>
                    <DynamicFormWithHookForm />
                </div>
            )}
        </>
    );
};

export default Header;