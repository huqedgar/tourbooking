import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCompass, faLocationDot, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './TourCard.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const TourCard = ({ tour }) => {
    return (
        <div className={cx('card')}>
            <div className={cx('title')}>
                <span>
                    <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                    {tour.location}
                </span>
                <a href="#">{tour.name}</a>
            </div>

            <div className={cx('imgContainer')}>
                <img src={require('../../assets/images/t-1.png')} alt={tour.img} width={350} height={170} />
            </div>

            <div className={cx('text')}>
                <span>
                    <FontAwesomeIcon className={cx('faShoePrints')} icon={faShoePrints} />
                    {tour.activities}
                    {' Activities'}
                </span>
                <span>
                    <FontAwesomeIcon className={cx('faCompass')} icon={faCompass} />
                    {tour.places}
                    {' Places'}
                </span>
                <span>
                    <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                    {tour.days}
                    {' Days'}
                </span>
            </div>

            <hr />

            <div className={cx('price')}>
                <p>
                    From ${tour.price}
                    <span>{' /Person'}</span>
                </p>
                <Button className="text-sm" primary small>
                    Book Now
                </Button>
            </div>
        </div>
    );
};

export default TourCard;
