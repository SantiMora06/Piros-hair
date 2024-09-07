import classes from "../styles/footer.module.css"

const Footer = () => {
    return (<>
        <div className={classes.bigContainer}>
            <ul className={classes.List}>
                <li className={classes.listitem1}>Information</li>
                <li className={classes.listitem}>VISA</li>
                <li className={classes.listitem}>Insurance</li>
                <li className={classes.listitem}>Contract and conditions</li>
            </ul>
            <ul className={classes.List}>
                <li className={classes.listitem2}>Contact</li>
                <li className={classes.listitem}>About us</li>
                <li className={classes.listitem}>Contact us</li>
                <li className={classes.listitem}>Work with us</li>
            </ul>
            <ul className={classes.List}>
                <li className={classes.listitem3}>Follow us</li>
                <li className={classes.listitem}>Instagram</li>
                <li className={classes.listitem}>Facebook</li>
                <li className={classes.listitem}>TikTok</li>
                <li className={classes.listitem}> <a href="mailto:name@email.com">Mail</a></li>
            </ul>
            <ul className={classes.List}>
                <li className={classes.listitem4}>Subscribe to our Newsletter</li>
                <button className={classes.button} type="button"> Subscribe </button>
            </ul></div>
        <p className={classes.paragraph}>Copyright © Santi Mora. All rights reserved.</p>
    </>)
}

export default Footer;