import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import API, { endpoints } from '../../configs/API';
import Loading from '../../shared/Loading/Loading';

const TourCarousel = lazy(() => import('../../components/TourCarousel/TourCarousel'));
const TourInfo = lazy(() => import('../../components/TourInfo/TourInfo'));
const TourComments = lazy(() => import('../../components/TourComments/TourComments'));

const TourDetails = () => {
    const { tourId } = useParams();

    const [tour, setTour] = useState(null);
    const [comments, setComments] = useState(null);

    const loadTourData = async () => {
        try {
            const response = await API.get(endpoints['tour-details'](tourId));
            setTour(response.data);
            console.log(response.data);
        } catch (error) {
            alert(`Error loading tour data: ${error}`);
        }
    };

    const loadCommentsData = async () => {
        try {
            const response = await API.get(endpoints['tour-comments'](tourId));
            setComments(response.data);
            console.log(response.data);
        } catch (error) {
            alert(`Error loading comments data: ${error}`);
        }
    };

    useEffect(() => {
        loadTourData();
        loadCommentsData();
    }, [tourId]);

    return (
        <Suspense fallback={<Loading />}>
            <TourCarousel />
            <TourInfo />
            <TourComments />
        </Suspense>
    );
};

export default TourDetails;
