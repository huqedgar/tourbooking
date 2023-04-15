import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Routers from '../../router/Routers';

const DefaultLayout = () => {
    return (
        <>
            <Header></Header>
            <Routers></Routers>
            <Footer></Footer>
        </>
    );
};

export default DefaultLayout;
