import Header from '../../layouts/components/Header/Header';
import Footer from '../../layouts/components/Footer/Footer';
import Routers from '../../router/Routers';
import ScrollToTop from '../../shared/ScrollToTop/ScrollToTop';

const DefaultLayout = () => {
    return (
        <>
            <Header></Header>
            <Routers></Routers>
            <Footer></Footer>
            <ScrollToTop />
        </>
    );
};

export default DefaultLayout;
