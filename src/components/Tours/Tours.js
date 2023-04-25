import classNames from 'classnames/bind';
import styles from './Tours.module.scss';
import TourCard from '../TourCard/TourCard';

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
            <div className={cx('titleBox')}>
                <h2>Tours</h2>
                <span>Occaecat minim adipisicing deserunt excepteur nulla incididunt laboris fugiat anim ipsum.</span>
            </div>
            <div className={cx('wrapper')}>
                {trends.map((trend) => (
                    <TourCard tour={trend} key={trend.id} />
                ))}
            </div>
        </section>
    );
};

export default Tours;
