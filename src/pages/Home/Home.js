import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '../../components/Button/Button';
import SearchBar from '../../shared/SearchBar/SearchBar';
import CardHorizontal from '../../components/CardHorizontal/CardHorizontal';
import Destinations from '../../components/Destinations/Destinations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faShoePrints, faCompass, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

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

const Home = () => {
    return (
        <>
            <section id="home" className={cx('wrapperHome')}>
                <div className={cx('videos')}>
                    <video src={''} className={cx('video', 'live')} id="video2" autoPlay muted loop></video>
                </div>

                <div className={cx('videoControls')}>
                    <svg
                        className={cx('prev')}
                        data-id="video"
                        xmlns="http://www.w3.org/2000/svg"
                        width="86.742"
                        height="73.216"
                        viewBox="0 0 86.742 73.216"
                    >
                        <path d="M22.897 73.216L0 48.158 44.032 0v6.983L27.159 25.498l17.248 18.94L84.897 0v6.985L68.533 24.942l18.209 19.961v7.01L65.35 28.435 47.593 47.931l16.681 18.304v6.981l-40.299-44.22L6.468 48.207l16.429 18.028z"></path>
                    </svg>
                    <h1>Dubai</h1>
                    <svg
                        className={cx('next')}
                        data-id="video"
                        xmlns="http://www.w3.org/2000/svg"
                        width="86.742"
                        height="73.216"
                        viewBox="0 0 86.742 73.216"
                    >
                        <path d="M63.845 73.216l22.897-25.058L42.71 0v6.983l16.873 18.515-17.248 18.94L1.845 0v6.985l16.364 17.957L0 44.903v7.01l21.392-23.478 17.757 19.496-16.681 18.304v6.981l40.299-44.22 17.507 19.211-16.429 18.028z"></path>
                    </svg>
                </div>

                {/* Title home */}
                <div className={cx('contentBox')}>
                    <strong>Explore The World</strong>
                    <h1>The right destination for you and your family</h1>
                    <p>Ut quis ipsum incididunt id pariatur aliquip laboris dolore non.</p>
                    <Button style={{ marginTop: '20px' }} primary>
                        Explore Now
                    </Button>
                </div>
            </section>

            <section id="search" className={cx('wrapperSearch')}>
                <div className={cx('searchBox')}>
                    <SearchBar />
                </div>
                <div className={cx('travelBox')}>
                    <h3>Treding 2023</h3>
                    <div className={cx('cardBox1')}>
                        <CardHorizontal
                            country="Viet Nam"
                            place="Ho Chi Minh City"
                            price="$500"
                            src={require('../../assets/images/t-1.png')}
                        />
                    </div>
                </div>
            </section>

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

            <Destinations />
        </>
    );
};

export default Home;
