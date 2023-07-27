import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import useDebounce from '../../hooks/useDebounce';
import { useCallback } from 'react';

const cx = classNames.bind(styles);

const SearchBar = () => {
   const nav = useNavigate();
   const [isClickPrice, setIsClickPrice] = useState(false);
   const dateInputRef = useRef();
   const [kw, setKw] = useState('');
   const debouncedValue = useDebounce(kw, 700);
   const [isSuggest, setIsSuggest] = useState(false);
   const [listPlace, setListPlace] = useState([]);
   const [showSuggest, setShowSuggest] = useState(false);
   const [date, setDate] = useState('');
   const [price, setPrice] = useState({ min: 0, max: 10000000 });
   const [people, setPeople] = useState('');

   const fetchApi = useCallback(async () => {
      console.log(debouncedValue);
      const params = {
         q: debouncedValue,
         format: 'json',
         addressdetails: 1,
         polygon_geojson: 0
      };
      const queryString = new URLSearchParams(params).toString();
      const requestOptions = {
         method: 'GET',
         redirect: 'follow'
      };
      fetch(`${process.env.REACT_APP_NOMINATIM_BASE_URL}${queryString}`, requestOptions)
         .then((response) => response.text())
         .then((result) => {
            console.log(JSON.parse(result));
            setListPlace(JSON.parse(result));
         })
         .catch((err) => {
            console.log(err);
         });
   }, [debouncedValue]);

   useEffect(() => {
      if (!debouncedValue.trim()) {
         setListPlace([]);
         return;
      }
      if (!isSuggest) {
         fetchApi();
      }
   }, [debouncedValue, fetchApi, isSuggest]);

   useEffect(() => {
      setShowSuggest(listPlace.length !== 0);
   }, [listPlace]);

   const clearSuggest = () => {
      setListPlace([]);
      setShowSuggest(false);
      setIsSuggest(true);
   };

   const handleSuggestClick = (display_name) => {
      clearSuggest();
      setKw(display_name);
   };

   const handleOnBlur = () => {
      setTimeout(() => {
         clearSuggest();
      }, 100);
   };

   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setKw(searchValue);
         if (isSuggest) {
            setIsSuggest(false);
         }
      }
   };

   const handleDateChange = (e) => {
      setDate(e.target.value);
   };

   const handlePriceClick = () => {
      setIsClickPrice(!isClickPrice);
   };

   const handlePriceRangeChange = (value) => {
      let min = value.min;
      let max = value.max;
      if (min < 0) {
         min = 0;
      }
      if (max > 10000000) {
         max = 10000000;
      }
      if (max < min) {
         [min, max] = [max, min];
      }
      setPrice({ min, max });
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
      if (price.min > 0 || price.max < 10000000) {
         endpoint += `&priceF=${price.min}&priceTo=${price.max}`;
      }
      if (people !== '' && Number(people) !== 0) {
         endpoint += `&remain=${Number(people)}`;
      }
      clearSuggest();
      nav(endpoint);
   };

   return (
      <form onSubmit={handleSearch} className={cx('searchBarBox')}>
         <div className={cx('box')}>
            <div className={cx('icon')}>
               <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className={cx('input', 'relative')}>
               <label htmlFor='location'>Location</label>
               <input
                  type='text'
                  id='location'
                  placeholder='Where are you going?'
                  value={kw}
                  onChange={handleChange}
                  onBlur={handleOnBlur}
               />
               <ul className={cx('autoCompleteBox', showSuggest ? 'show' : 'hide')}>
                  {listPlace.map((item, index) => {
                     return (
                        <li key={index} onClick={() => handleSuggestClick(item.display_name)}>
                           <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                           <span>{item.display_name}</span>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
         <div className={cx('box')}>
            <div className={cx('icon')}>
               <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <div className={cx('input')}>
               <label htmlFor='visitDate'>Visit Date</label>
               <input type='date' id='visitDate' ref={dateInputRef} value={date} onChange={handleDateChange} />
            </div>
         </div>
         <div className={cx('box')}>
            <div className={cx('icon')}>
               <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <div className={cx('input', 'relative')}>
               <label htmlFor='price'>Price</label>
               <div className={cx('priceBox')} onClick={handlePriceClick}>
                  Price range?
               </div>
               <div className={cx('priceRangeBox', isClickPrice ? 'show' : 'hide')}>
                  <InputRange
                     draggableTrack
                     maxValue={10000000}
                     minValue={0}
                     onChange={handlePriceRangeChange}
                     value={price}
                  />
               </div>
            </div>
         </div>
         <div className={cx('box')}>
            <div className={cx('icon')}>
               <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className={cx('input')}>
               <label htmlFor='travels'>Travels</label>
               <input
                  type='number'
                  id='travels'
                  placeholder='How many tourists?'
                  value={people}
                  onChange={handlePeopleChange}
                  min={1}
               />
            </div>
         </div>
         <button type='submit' aria-label='search' title='search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
         </button>
      </form>
   );
};

export default SearchBar;
