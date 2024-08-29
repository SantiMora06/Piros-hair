import classes from "../styles/banner.module.css"
import Banner from "../assets/Banner.jpeg"

const Banner1 = () => {
    return (<>
        <div className={classes.Banner1}>
            <img src={Banner} />
            <h1 className={classes.Title}>Book your trip to Berna now!</h1>
            <p className={classes.paragraph}>*Days and prices may vary depending on Season</p>
        </div>
    </>);
}

export default Banner1;