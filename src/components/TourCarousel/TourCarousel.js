import classNames from 'classnames/bind';
import styles from './TourCarousel.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const CAROUSEL_DATA = [
    {
        url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        url: 'https://images.unsplash.com/photo-1681826415794-847bf97ad644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    },
    {
        url: 'https://images.unsplash.com/photo-1681549734363-5c8a06428d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    },
];

const TourCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isLiked, setIsLiked] = useState(false);

    const [numLike, setNumLike] = useState(43);

    const incrementIndex = () => {
        console.log(currentIndex);
        setCurrentIndex((currentIndex) => {
            return (currentIndex + 1) % CAROUSEL_DATA.length;
        });
    };

    const decrementIndex = () => {
        console.log(currentIndex);
        setCurrentIndex((currentIndex) => {
            return currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1;
        });
    };

    const handleClickLike = () => {
        setIsLiked(!isLiked);
        if (isLiked) {
            setNumLike(numLike - 1);
        } else {
            setNumLike(numLike + 1);
        }
    };

    return (
        <section className={cx('wrapperCarousel')}>
            <img src={CAROUSEL_DATA[currentIndex].url} alt="" />
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
                <h2>Phu Quoc Sunset Viewing and Night Squid Fishing</h2>
                <span>
                    <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                    Phu Quoc, Vietnam
                </span>
            </div>
            <div className={cx('interaction')}>
                <span className={cx('likeHeader', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                    <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                    {numLike}
                </span>
                <span className={cx('starHeader')}>
                    <FontAwesomeIcon className={cx('faStar')} icon={faStar} />
                    4.8
                </span>
            </div>
        </section>
    );
};

export default TourCarousel;
