import Banner from '../../components/Banner/Banner';
import SearchHome from '../../components/SearchHome/SearchHome';
import Tours from '../../components/Tours/Tours';
import Destinations from '../../components/Destinations/Destinations';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Blogs from '../../components/Blogs/Blogs';

const Home = () => {
    return (
        <>
            <Banner />
            <SearchHome />
            <Tours />
            <Destinations />
            <Blogs />
            <About />
            <Contact />
        </>
    );
};

export default Home;
