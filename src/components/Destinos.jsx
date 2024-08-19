import classes from "../styles/destinoes.module.css"

const Destinos = () => {
    return (<>
        <h1>Destinos exóticos:</h1>
        <section className={classes.destinos}>
            <div className={classes.destinosItem}>
                <img />
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Quod numquam officia veniam,
                    ipsa consequatur,
                    a porro facilis aliquid aut itaque velit.
                    Voluptas soluta iure possimus,
                    tempore recusandae voluptatibus. Dolorem, iusto.</p>
            </div>
        </section>
    </>);
}

export default Destinos;