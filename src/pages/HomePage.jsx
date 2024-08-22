import Destinos from "../components/Destinos";
import Offers from "../components/Offers";
import PreHeader from "../components/preHeader";
import SearchBar from "../components/SearchBar";

const Home = () => {
    return (<>
        <PreHeader />
        <SearchBar />
        <Offers />
        <Destinos />
    </>);
}

export default Home;