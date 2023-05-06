import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const SearchBar = () => {
    const [kw, setKw] = useState('');
    const nav = useNavigate();

    const search = (e) => {
        e.preventDefault();
        if (kw.trim() !== '') {
            nav(`/search/?kw=${kw.trim()}`);
        }
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setKw(searchValue);
        }
    };

    return (
        <form onSubmit={search} className={cx('searchBarBox')}>
            <div className={cx('box')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className={cx('input')}>
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        placeholder="Where are you going?"
                        value={kw}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={cx('box')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                <div className={cx('input')}>
                    <label htmlFor="checkin">Check in</label>
                    <input type="date" id="checkin" />
                </div>
            </div>
            <div className={cx('box')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                <div className={cx('input')}>
                    <label htmlFor="checkout">Check out</label>
                    <input type="date" id="checkout" />
                </div>
            </div>
            <div className={cx('box')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className={cx('input')}>
                    <label htmlFor="travels">Travels</label>
                    <input type="number" id="travels" placeholder="How many tourists?" min={1} />
                </div>
            </div>
            <button type="submit" aria-label="search" title="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
};

export default SearchBar;
