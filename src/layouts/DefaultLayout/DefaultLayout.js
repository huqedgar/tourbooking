import Header from '../../layouts/components/Header/Header';
import Footer from '../../layouts/components/Footer/Footer';
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
