import classes from "../styles/banner.module.css"


const Baner2 = () => {
    return (<>
        <div className={classes.Banner2}>
            <img src="https://media.gettyimages.com/id/186560724/photo/chicago-skyline.jpg?s=612x612&w=0&k=20&c=RL-XFld2w-M_wR3y-pP1YL2ZdgUMwnTQt037wnMQitQ=" />
            <h1 className={classes.Title}>Book your trip to Chicago now!</h1>
            <p className={classes.paragraph}>*Days and prices may vary depending on Season</p>
        </div>
    </>);
}

export default Baner2
    ;