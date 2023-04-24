import Banner from '../../components/Banner/Banner';
import SearchHome from '../../components/SearchHome/SearchHome';
import Tours from '../../components/Tours/Tours';
import Destinations from '../../components/Destinations/Destinations';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

const Home = () => {
    return (
        <>
            <Banner />
            <SearchHome />
            <Tours />
            <Destinations />
            <About />
            <Contact />
        </>
    );
};

export default Home;
