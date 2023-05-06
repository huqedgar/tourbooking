import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faShoePrints, faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './TourCard.module.scss';
import Button from '../Button/Button';
import Moment from 'react-moment';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

const cx = classNames.bind(styles);

const TourCard = ({ tour }) => {
    const url = `/tours/${tour.id}/details-tour/`;
    return (
        <div className={cx('card')} key={tour.id}>
            <div className={cx('title')}>
                <span>
                    <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                    {tour.address_tour} {', '} {tour.country_tour}
                </span>
                <span>{tour.name_tour}</span>
            </div>

            <div className={cx('imgContainer')}>
                <Image src={tour.image_tour} alt={tour.image_tour} />
            </div>

            <div className={cx('text')}>
                <span>
                    <FontAwesomeIcon className={cx('faStar')} icon={faStar} />
                    {tour.rating_count_tour}
                </span>
                <span>
                    <FontAwesomeIcon className={cx('faShoePrints')} icon={faShoePrints} />
                    {tour.remain_people}
                    {' Left'}
                </span>
                <span>
                    <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                    <Moment format="DD/MM/YYYY">{tour.date_begin_tour}</Moment>
                </span>
            </div>
            <hr />
            <div className={cx('price')}>
                <NumericFormat
                    className="w-3/5"
                    value={tour.price_tour}
                    allowLeadingZeros
                    thousandSeparator=","
                    decimalScale={0}
                    suffix={' VND'}
                />
                <Link to={url}>
                    <Button className="text-sm" primary small>
                        Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default TourCard;
