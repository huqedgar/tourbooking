import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

const SearchBar = () => {
    return (
        <div className={cx('searchBar')}>
            <form>
                <div className={cx('box')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" placeholder="Where are you going?" required />
                    </div>
                </div>
                <div className={cx('box')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="checkin">Check in</label>
                        <input type="date" id="checkin" required />
                    </div>
                </div>
                <div className={cx('box')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="checkout">Check out</label>
                        <input type="date" id="checkout" required />
                    </div>
                </div>
                <div className={cx('box')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="travels">Travels</label>
                        <input type="text" id="travels" placeholder="How many tourists?" required />
                    </div>
                </div>
                <button aria-label="search" title="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
