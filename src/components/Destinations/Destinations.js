import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Destinations.module.scss';

const cx = classNames.bind(styles);

const destinations = [
    {
        id: 1,
        name: 'vinpearl',
        location: 'nha trang',
        star: 4.8,
        price: 99,
        img: '../../assets/images/d-1.jpg',
    },
    {
        id: 2,
        name: 'vinpearl',
        location: 'nha trang',
        star: 4.8,
        price: 99,
        img: '../../assets/images/d-2.jpg',
    },
    {
        id: 3,
        name: 'vinpearl',
        location: 'nha trang',
        star: 4.8,
        price: 99,
        img: '../../assets/images/d-3.jpg',
    },
    {
        id: 4,
        name: 'vinpearl',
        location: 'nha trang',
        star: 4.8,
        price: 99,
        img: '../../assets/images/d-4.jpg',
    },
    {
        id: 5,
        name: 'vinpearl',
        location: 'nha trang',
        star: 4.8,
        price: 99,
        img: '../../assets/images/d-5.jpg',
    },
    {
        id: 6,
        name: 'vinpearl',
        location: 'nha trang',
        star: 4.8,
        price: 99,
        img: '../../assets/images/d-6.jpg',
    },
];

const Destinations = () => {
    return (
        <section id="destinations" className={cx('wrapperDestinations')}>
            <div>
                <h2>Popular Destinations</h2>
                <p>Occaecat minim adipisicing deserunt excepteur nulla incididunt laboris fugiat anim ipsum.</p>
            </div>
            <div className={cx('grid')}>
                {destinations.map((destinations, index) => (
                    <div className={cx('card', `card-${index}`)} key={destinations.id}>
                        <img
                            src={require('../../assets/images/d-1.jpg')}
                            alt={destinations.img}
                            width={600}
                            height={600}
                        />
                        <div className={cx('box')}>
                            <span className={cx('star')}>
                                <FontAwesomeIcon className={cx('faStar')} icon={faStar} />
                                {destinations.star}
                            </span>
                            <div className={cx('group')}>
                                <div className={cx('text')}>
                                    <strong>{destinations.name}</strong>
                                    <span>
                                        <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                                        {destinations.location}
                                    </span>
                                </div>
                                <span className={cx('price')}>${destinations.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;
