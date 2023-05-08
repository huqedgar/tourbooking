import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const SearchBar = () => {
    const nav = useNavigate();
    const dateInputRef = useRef(null);
    const [kw, setKw] = useState('');
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setKw(searchValue);
        }
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handlePeopleChange = (e) => {
        setPeople(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        let endpoint = '/search/?kw=';
        let kwTemp = kw.trim();

        if (kwTemp !== '' && !Number.isFinite(parseInt(kwTemp))) {
            endpoint += kwTemp;
        }
        if (Number.isFinite(parseInt(kwTemp))) {
            endpoint += `&tour_id=${kwTemp}`;
        }
        if (date !== '') {
            endpoint += `&date=${date}`;
        }
        if (people !== '' && Number(people) !== 0) {
            endpoint += `&remain=${Number(people)}`;
        }

        nav(endpoint);
    };

    return (
        <form onSubmit={handleSearch} className={cx('searchBarBox')}>
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
                    <label htmlFor="visitDate">Visit Date</label>
                    <input type="date" id="visitDate" ref={dateInputRef} onChange={handleDateChange} />
                </div>
            </div>
            <div className={cx('box')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className={cx('input')}>
                    <label htmlFor="travels">Travels</label>
                    <input
                        type="number"
                        id="travels"
                        placeholder="How many tourists?"
                        value={people}
                        onChange={handlePeopleChange}
                        min={1}
                    />
                </div>
            </div>
            <div className={cx('box')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                <div className={cx('input')}>
                    <label htmlFor="returnDate">Return Date</label>
                    <input type="date" id="returnDate" />
                </div>
            </div>
            <button type="submit" aria-label="search" title="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
};

export default SearchBar;
