import classNames from 'classnames/bind';
import styles from './SearchResultList.module.scss';
import SearchBar from '../../shared/SearchBar/SearchBar';
import TourCard from '../../components/TourCard/TourCard';

const cx = classNames.bind(styles);

const trends = [
    {
        id: 1,
        name: 'vinpearl nha trang',
        location: 'nha trang, vn',
        img: '../../assets/images/t-1.jpg',
        activities: 10,
        places: 12,
        days: 1,
        price: 1.2,
    },
    {
        id: 2,
        name: 'vinpearl nha trang',
        location: 'nha trang, vn',
        img: '../../assets/images/t-1.jpg',
        activities: 10,
        places: 12,
        days: 1,
        price: 1.2,
    },
    {
        id: 3,
        name: 'vinpearl nha trang',
        location: 'nha trang, vn',
        img: '../../assets/images/t-1.jpg',
        activities: 10,
        places: 12,
        days: 1,
        price: 1.2,
    },
    {
        id: 4,
        name: 'vinpearl nha trang',
        location: 'nha trang, vn',
        img: '../../assets/images/t-1.jpg',
        activities: 10,
        places: 12,
        days: 1,
        price: 1.2,
    },
];

const SearchResultList = () => {
    return (
        <section className={cx('searchResultWrapper')}>
            <div className={cx('searchResultHeader')}>
                <h2>Search results: "Tour"</h2>
            </div>

            <div className={cx('searchResultBody')}>
                <div className={cx('searchWrapper')}>
                    <SearchBar />

                    <div className={cx('filterBox')}>
                        <select id="slFilter" name="slFilter">
                            <option value="" selected disabled hidden>
                                Filter
                            </option>
                            <option value="">Newest</option>
                            <option value="">Bestseller</option>
                            <option value="">Popular</option>
                            <option value="">High Price</option>
                            <option value="">Low Price</option>
                        </select>
                    </div>

                    <div className={cx('paginationBox')}>
                        <span className={cx('numPage')}>Pages 1/16</span>
                        <span className={cx('prev')}>{'<'}</span>
                        <span className={cx('next')}>{'>'}</span>
                    </div>
                </div>

                <div className={cx('cardWrapper')}>
                    {trends.map((trend) => (
                        <TourCard tour={trend} key={trend.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SearchResultList;
