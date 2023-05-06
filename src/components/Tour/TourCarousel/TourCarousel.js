import { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MyUserContext } from '../../../contexts/MyContext';
import { authAPI, endpoints } from '../../../configs/API';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './TourCarousel.module.scss';
import Image from '../../../shared/Image/Image';

const cx = classNames.bind(styles);

const TourCarousel = ({ tour, myWishList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [numLike, setNumLike] = useState(tour.amount_like);
    const [user] = useContext(MyUserContext);
    const { tourId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const incrementIndex = useCallback(() => {
        setCurrentIndex((currentIndex) => {
            return (currentIndex + 1) % tour.list_images.length;
        });
    }, [tour.list_images.length]);

    const decrementIndex = useCallback(() => {
        setCurrentIndex((currentIndex) => {
            return currentIndex === 0 ? tour.list_images.length - 1 : currentIndex - 1;
        });
    }, [tour.list_images.length]);

    useEffect(() => {
        if (myWishList) {
            const wishListTour = myWishList.find((wishListItem) => wishListItem.tour.id === Number(tourId));
            if (wishListTour && wishListTour.is_like) {
                setIsLiked(true);
            }
        }
    }, [myWishList, tourId]);

    const handleClickLike = useCallback(async () => {
        if (!user) {
            return navigate('/login', { state: { from: location.pathname } });
        }
        try {
            const res = await authAPI().post(endpoints['add-wish-list'](tourId));
            if (res.status === 200) {
                setIsLiked((isLiked) => !isLiked);
                setNumLike((numLike) => (isLiked ? numLike - 1 : numLike + 1));
                toast.promise(() => new Promise((resolve) => setTimeout(() => resolve('Successfully!'), 1000)), {
                    pending: 'Processing!',
                    success: 'Successfully!',
                    error: 'Error!',
                });
            } else {
                toast.error('The system is having an error! Please come back later!');
            }
        } catch (ex) {
            console.error(ex);
        }
    }, [tourId, isLiked, user, location.pathname, navigate]);

    return (
        <section className={cx('wrapperCarousel')}>
            <Image src={tour.list_images[currentIndex].image_tour} alt={tour.list_images[currentIndex].image_tour} />
            <div
                onClick={decrementIndex}
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded p-1 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-12"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div
                onClick={incrementIndex}
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded p-1 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-12"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className={cx('title')}>
                <h2>{tour.name_tour}</h2>
                <span>
                    <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                    {tour.address_tour} , {tour.country_tour}
                </span>
            </div>
            <div className={cx('interaction')}>
                <span className={cx('likeHeader', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                    <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                    {numLike}
                </span>
                <span className={cx('starHeader')}>
                    <FontAwesomeIcon className={cx('faStar')} icon={faStar} />
                    {tour.rating_count_tour}
                </span>
            </div>
        </section>
    );
};

export default TourCarousel;
