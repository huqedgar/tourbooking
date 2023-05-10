import { useContext, useEffect, lazy, Suspense, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import API, { authAPI, endpoints } from '../../configs/API';
import MyUserReducer from '../../reducers/MyUserReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyUserContext } from '../../contexts/MyContext';
import SkeletonDetails from '../../shared/Skeleton/SkeletonDetails/SkeletonDetails';

const TourCarousel = lazy(() => import('../../components/Tour/TourCarousel/TourCarousel'));
const TourInfo = lazy(() => import('../../components/Tour/TourInfo/TourInfo'));
const TourComments = lazy(() => import('../../components/Tour/TourComments/TourComments'));

const TourDetails = () => {
    const [user] = useContext(MyUserContext);
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
                    user ? authAPI().get(endpoints['my-wish-list']) : null,
                    API.get(endpoints['tour-comments'](tourId)),
                    API.get(endpoints['types-customer']),
                ]);
                dispatch({
                    type: 'TOUR_DETAILS',
                    payload: {
                        tour: tourResponse.data,
                        wishlist: wishlistResponse?.data ?? null,
                        comments: commentsResponse.data,
                        typesCustomer: typesCustomerResponse.data.results,
                    },
                });
            } catch (ex) {
                toast.error(ex.message);
            }
        };

        loadData();
    }, [tourId, user]);

    if (!state.tour || !state.comments || !state.typesCustomer) {
        return <SkeletonDetails />;
    }

    return (
        <Suspense fallback={<SkeletonDetails />}>
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
