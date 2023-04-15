import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SearchHome.module.scss';

import SearchBar from '../../shared/SearchBar/SearchBar';

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
];

const SearchHome = () => {
    return (
        <section id="search" className={cx('wrapperSearch')}>
            <div className={cx('searchBox')}>
                <SearchBar />
            </div>
            <div className={cx('travelBox')}>
                <h3>Treding 2023</h3>
                <div className={cx('cardBox')}>
                    {destinations.map((destinations) => (
                        <div className={cx('card')} key={destinations.id}>
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
            </div>
        </section>
    );
};

export default SearchHome;
