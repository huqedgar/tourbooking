import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Tours.module.scss';
import API, { endpoints } from '../../configs/API';
import TourCard from '../../shared/TourCard/TourCard';
import Loading from '../../shared/Loading/Loading';

const cx = classNames.bind(styles);

const Tours = () => {
    const [tours, setTours] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadTours = async () => {
            try {
                let res = await API.get(`${endpoints['tours']}?page=${page}`);
                setTours(res.data.results);
                setTotalPages(Math.ceil(res.data.count / 20));
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

    if (tours === null) {
        return <Loading />;
    }

    if (!tours?.length) {
        return <Loading />;
    }

    return (
        <section id="tours" className={cx('wrapperTrending')}>
            <div className={cx('titleBox')}>
                <h2>Tours</h2>
                <span>Occaecat minim adipisicing deserunt excepteur nulla incididunt laboris fugiat anim ipsum.</span>
                <div className={cx('paginationBox')}>
                    <span className={cx('numPage')}>
                        {'Page'} {page}/{totalPages}
                    </span>
                    <span className={cx('prev')} onClick={prevPage}>
                        {'<'}
                    </span>
                    <span className={cx('next')} onClick={nextPage}>
                        {'>'}
                    </span>
                </div>
            </div>
            <div className={cx('wrapper')}>
                {tours.map((tour) => (
                    <TourCard tour={tour} key={tour.id} />
                ))}
            </div>
        </section>
    );
};

export default Tours;
