import { useEffect, lazy, Suspense, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import API, { authAPI, endpoints } from '../../configs/API';
import MyUserReducer from '../../reducers/MyUserReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../shared/Loading/Loading';

const TourCarousel = lazy(() => import('../../components/TourCarousel/TourCarousel'));
const TourInfo = lazy(() => import('../../components/TourInfo/TourInfo'));
const TourComments = lazy(() => import('../../components/TourComments/TourComments'));

const TourDetails = () => {
    const { tourId } = useParams();
    const [state, dispatch] = useReducer(MyUserReducer, {
        tour: null,
        wishlist: null,
        comments: null,
        typesCustomer: null,
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const [tourResponse, wishlistResponse, commentsResponse, typesCustomerResponse] = await Promise.all([
                    API.get(endpoints['tour-details'](tourId)),
                    authAPI().get(endpoints['my-wish-list']),
                    API.get(endpoints['tour-comments'](tourId)),
                    API.get(endpoints['types-customer']),
                ]);
                dispatch({
                    type: 'TOUR_DETAILS',
                    payload: {
                        tour: tourResponse.data,
                        wishlist: wishlistResponse.data,
                        comments: commentsResponse.data,
                        typesCustomer: typesCustomerResponse.data.results,
                    },
                });
            } catch (ex) {
                toast.error(ex.message);
            }
        };

        loadData();
    }, [tourId]);

    if (!state.tour || !state.comments || !state.typesCustomer) {
        return <Loading />;
    }

    // console.log(state.wishlist);

    return (
        <Suspense fallback={<Loading />}>
            <TourCarousel tour={state.tour} myWishList={state.wishlist} />
            <TourInfo
                tour={state.tour}
                descriptions={JSON.parse(state.tour.description_tour)}
                typesCustomer={state.typesCustomer}
            />
            <TourComments tour={state.tour} comments={state.comments} />
            <ToastContainer />
        </Suspense>
    );
};

export default TourDetails;
