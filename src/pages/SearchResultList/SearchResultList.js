import classNames from 'classnames/bind';
import styles from './SearchResultList.module.scss';
import SearchBar from '../../shared/SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCompass, faLocationDot, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';

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
                        <div className={cx('card')} key={trend.id}>
                            <div className={cx('title')}>
                                <span>
                                    <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                                    {trend.location}
                                </span>
                                <a href="#">{trend.name}</a>
                            </div>

                            <div className={cx('imgContainer')}>
                                <img
                                    src={require('../../assets/images/t-1.png')}
                                    alt={trend.img}
                                    width={350}
                                    height={170}
                                />
                            </div>

                            <div className={cx('text')}>
                                <span>
                                    <FontAwesomeIcon className={cx('faShoePrints')} icon={faShoePrints} />
                                    {trend.activities}
                                    {' Activities'}
                                </span>
                                <span>
                                    <FontAwesomeIcon className={cx('faCompass')} icon={faCompass} />
                                    {trend.places}
                                    {' Places'}
                                </span>
                                <span>
                                    <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                                    {trend.days}
                                    {' Days'}
                                </span>
                            </div>

                            <hr />

                            <div className={cx('price')}>
                                <p>
                                    From ${trend.price}
                                    <span>{' /Person'}</span>
                                </p>
                                <Button className="text-sm" secondary small>
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SearchResultList;
