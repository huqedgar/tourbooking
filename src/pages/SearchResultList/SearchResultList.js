import classNames from 'classnames/bind';
import styles from './SearchResultList.module.scss';
import SearchBar from '../../shared/SearchBar/SearchBar';
import TourCard from '../../shared/TourCard/TourCard';
import { useEffect, useState } from 'react';
import API, { endpoints } from '../../configs/API';
import { useSearchParams } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';

const cx = classNames.bind(styles);

const SearchResultList = () => {
    const [tours, setTours] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [q] = useSearchParams();
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        const loadTours = async () => {
            let endpoint = `${endpoints['tours']}?page=${page}`;

            let kw = q.get('kw');
            if (kw !== null) {
                endpoint += `&q=${kw}`;
            }

            switch (sortBy) {
                case 'newest':
                    endpoint += '&sort_by=newest';
                    break;
                case 'bestseller':
                    endpoint += '&sort_by=bestseller';
                    break;
                case 'high_price':
                    endpoint += '&sort_by=high_price';
                    break;
                case 'low_price':
                    endpoint += '&sort_by=low_price';
                    break;
                default:
                    break;
            }

            try {
                let res = await API.get(endpoint);
                setTours(res.data.results);
                setTotalPages(Math.ceil(res.data.count / 20));
            } catch (ex) {
                setPage(1);
            }
        };
        loadTours();
    }, [page, q, sortBy]);

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

    return (
        <section className={cx('searchResultWrapper')}>
            <div className={cx('searchResultHeader')}>
                <h2>Search results: "Tour"</h2>
            </div>

            <div className={cx('searchResultBody')}>
                <div className={cx('searchWrapper')}>
                    <SearchBar />

                    <div className={cx('filterBox')}>
                        <select id="slFilter" name="slFilter" onChange={(e) => setSortBy(e.target.value)}>
                            <option defaultValue disabled hidden>
                                Filter
                            </option>
                            <option value="newest">Newest</option>
                            <option value="bestseller">Bestseller</option>
                            <option value="popular">Popular</option>
                            <option value="high_price">High Price</option>
                            <option value="low_price">Low Price</option>
                        </select>
                    </div>

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

                <div className={cx('cardWrapper')}>
                    {!tours?.length ? (
                        <h4 className="relative m-auto">Không có chuyến đi nào!</h4>
                    ) : (
                        tours.map((tour) => <TourCard tour={tour} key={tour.id} />)
                    )}
                </div>
            </div>
        </section>
    );
};

export default SearchResultList;
