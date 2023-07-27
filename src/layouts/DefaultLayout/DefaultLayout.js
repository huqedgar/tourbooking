import Footer from '../../layouts/components/Footer/Footer';
import Routers from '../../router/Routers';
import ScrollToTop from '../../shared/ScrollToTop/ScrollToTop';

const DefaultLayout = () => {
   return (
      <>
         <Routers></Routers>
         <Footer></Footer>
         <ScrollToTop />
      </>
   );
};

export default DefaultLayout;
