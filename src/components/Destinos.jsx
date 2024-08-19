import classes from "../styles/destinoes.module.css"
import tirana from "../assets/tirana.jpeg"
import dubrovnik from "../assets/dubrovnik.jpeg"
import tbilisi from "../assets/Tbilisi.jpeg"

const Destinos = () => {
    return (<>
        <div className={classes.container}>
            <h1 className={classes.h1}>Destinos exóticos</h1>
            <section className={classes.destinos}>
                <div className={classes.destinosItem}>
                    <h2 className={classes.h2}>Tirana, Albania</h2>
                    <img className={classes.tirana} src={tirana} alt="Tirana" />
                    <p className={classes.p}>Tirana, the vibrant capital of Albania,
                        is a city rich in history and culture,
                        nestled between mountains and the Adriatic Sea.
                        Known for its colorful buildings and lively
                        atmosphere, Tirana blends Ottoman, Fascist,
                        and Soviet-era architecture with modern
                        developments. </p>
                </div>
                <div className={classes.destinosItem}>
                    <h2 className={classes.h2}>Dubrovnik, Croacia</h2>
                    <img className={classes.dubrovnik} src={dubrovnik} alt="Tirana" />
                    <p className={classes.p}>Dubrovnik, known as the "Pearl of the Adriatic,"
                        is a stunning coastal city in Croatia, renowned for its well-preserved
                        medieval architecture and historic city walls. Nestled along the
                        Adriatic Sea, its UNESCO-listed Old Town is a maze of cobblestone
                        streets, ancient fortifications, and vibrant squares. The city is
                        famed for its breathtaking views, crystal-clear waters, and a
                        rich cultural heritage that dates back centuries. </p>
                </div>
                <div className={classes.destinosItem}>
                    <h2 className={classes.h2}>Tbilisi, Georgia</h2>
                    <img className={classes.tbilisi} src={tbilisi} alt="tbilisi" />
                    <p className={classes.p}>Tbilisi, the capital of Georgia,
                        is a city where ancient history meets modern vibrancy,
                        nestled in the scenic valley of the Mtkvari River. Its diverse
                        architecture reflects a rich past, with medieval churches,
                        Eastern Orthodox cathedrals, and colorful balconies lining the
                        old town's narrow streets. Tbilisi is renowned for its warm hospitality,
                        thriving arts scene, and dynamic blend of European and Asian influences.  </p>
                </div>
            </section>
        </div>
    </>);
}

export default Destinos;