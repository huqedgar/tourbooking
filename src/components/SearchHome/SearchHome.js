import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API, { endpoints } from '../../configs/API';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SearchHome.module.scss';
import SearchBar from '../../shared/SearchBar/SearchBar';
import Image from '../../shared/Image/Image';
import SkeletonTrendCard from '../../shared/Skeleton/SkeletonTrendCard/SkeletonTrendCard';

const cx = classNames.bind(styles);

const SearchHome = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    const [tours, setTours] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadTours = async () => {
            try {
                let res = await API.get(`${endpoints['tours']}?page=${page}`);
                setTours(res.data.results);
                setTotalPages(Math.ceil(res.data.count / 20));
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
            } catch (ex) {
                setPage(1);
            }
        };
        loadTours();
    }, [page]);

    const nextPage = () => {
        if (page < totalPages) {
            setPage((current) => current + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage((current) => current - 1);
        }
    };

    return (
        <section id="search" className={cx('wrapperSearch')}>
            <div className={cx('searchBox')}>
                <SearchBar />
            </div>
            <div className={cx('travelBox')}>
                <h3>Treding</h3>
                <motion.div ref={carousel} whileHover={{ cursor: 'grabbing' }} className={cx('carousel')}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={cx('cardBox')}>
                        {tours === null ? (
                            <SkeletonTrendCard cards={5} />
                        ) : !tours?.length ? (
                            <h4 className="relative m-auto">Không có chuyến đi nào!</h4>
                        ) : (
                            tours.map((tour) => (
                                <motion.div className={cx('card')} key={tour.id}>
                                    <Image src={tour.image_tour} alt={tour.image_tour} />
                                    <div className={cx('box')}>
                                        <span className={cx('star')}>
                                            <FontAwesomeIcon className={cx('faStar')} icon={faStar} />
                                            {tour.rating_count_tour}
                                        </span>
                                        <div className={cx('group')}>
                                            <div className={cx('text')}>
                                                <Link to={`/tours/${tour.id}/details-tour/`}>
                                                    <strong>{tour.address_tour}</strong>
                                                </Link>
                                                <span>
                                                    <FontAwesomeIcon
                                                        className={cx('faLocationDot')}
                                                        icon={faLocationDot}
                                                    />
                                                    {tour.country_tour}
                                                </span>
                                            </div>
                                            <span className={cx('price')}>
                                                {Number(tour.price_tour / 1000000)}
                                                {' tr'}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                </motion.div>
                <div className={cx('paginationBox')}>
                    <span className={cx('prev')} onClick={prevPage}>
                        {'<'}
                    </span>
                    <span className={cx('next')} onClick={nextPage}>
                        {'>'}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default SearchHome;
