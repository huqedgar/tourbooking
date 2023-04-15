import Banner from '../../components/Banner/Banner';
import SearchHome from '../../components/SearchHome/SearchHome';
import Tours from '../../components/Tours/Tours';
import Destinations from '../../components/Destinations/Destinations';
import About from '../../components/About/About';

const Home = () => {
    return (
        <>
            <Banner />
            <SearchHome />
            <Tours />
            <Destinations />
            <About />
        </>
    );
};

export default Home;
