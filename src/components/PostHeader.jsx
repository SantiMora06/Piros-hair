import classes from "../styles/header.module.css"
import LandingImg from "../assets/LogoO.png"

const PostHeader = () => {
    return (<><section className={classes.header}>
        <img src={LandingImg} alt="Landing image" />
    </section></>);
}

export default PostHeader;