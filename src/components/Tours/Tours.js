import classNames from 'classnames/bind';
import styles from './Tours.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCompass, faLocationDot, faShoePrints } from '@fortawesome/free-solid-svg-icons';

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

const Tours = () => {
    return (
        <section id="tours" className={cx('wrapperTrending')}>
            <div className={cx('heading')}>
                <h2>Treding 2023</h2>
                <p>Find Your Destination - The Ultimate Guide to Your Dream Destination</p>
            </div>

            <div className={cx('wrapper')}>
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
                            <a href="#">Book Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tours;
