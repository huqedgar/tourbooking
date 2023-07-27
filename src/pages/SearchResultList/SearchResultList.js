import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API, { endpoints } from '../../configs/API';
import classNames from 'classnames/bind';
import styles from './SearchResultList.module.scss';
import SearchBar from '../../shared/SearchBar/SearchBar';
import TourCard from '../../shared/TourCard/TourCard';
import SkeletonCard from '../../shared/Skeleton/SkeletonCard/SkeletonCard';

const cx = classNames.bind(styles);

const SearchResultList = () => {
   const [tours, setTours] = useState(null);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const [q] = useSearchParams();
   const [sortBy, setSortBy] = useState('');

   useEffect(() => {
      const loadTours = async () => {
         let endpoint = `${endpoints['tours']}?page=${page}`;

         let kw = q.get('kw');
         if (kw !== null) {
            endpoint += `&q=${kw}`;
         }

         let kwId = q.get('tour_id');
         if (kwId !== null) {
            endpoint += `&tour_id=${kwId}`;
         }

         let kwDate = q.get('date');
         if (kwDate !== null) {
            endpoint += `&date=${kwDate}`;
         }

         let kwPriceF = q.get('priceF');
         if (kwPriceF !== null) {
            endpoint += `&priceF=${kwPriceF}`;
         }

         let kwPriceTo = q.get('priceTo');
         if (kwPriceTo !== null) {
            endpoint += `&priceTo=${kwPriceTo}`;
         }

         let kwPeople = q.get('remain');
         if (kwPeople !== null) {
            endpoint += `&remain=${kwPeople}`;
         }

         switch (sortBy) {
            case 'newest':
               endpoint += '&sort_by=newest';
               break;
            case 'bestseller':
               endpoint += '&sort_by=bestseller';
               break;
            case 'high_price':
               endpoint += '&sort_by=high_price';
               break;
            case 'low_price':
               endpoint += '&sort_by=low_price';
               break;
            default:
               break;
         }

         try {
            let res = await API.get(endpoint);
            setTours(res.data.results);
            setTotalPages(Math.ceil(res.data.count / 20));
         } catch (ex) {
            setPage(1);
         }
      };
      loadTours();
   }, [page, q, sortBy]);

   const nextPage = () => {
      if (page < totalPages) {
         setPage((current) => current + 1);
      }
   };

   const prevPage = () => {
      if (page > 1) {
         setPage((current) => current - 1);
      }
   };

   return (
      <section className={cx('searchResultWrapper')}>
         <div className={cx('searchResultHeader')}>
            <h2>{`Search results: ${q.get('kw')}`}</h2>
         </div>

         <div className={cx('searchResultBody')}>
            <div className={cx('searchWrapper')}>
               <SearchBar />
               <div className={cx('filterBox')}>
                  <select id='slFilter' name='slFilter' onChange={(e) => setSortBy(e.target.value)}>
                     <option defaultValue hidden>
                        Filter
                     </option>
                     <option value='newest'>Newest</option>
                     <option value='bestseller'>Bestseller</option>
                     <option value='popular'>Popular</option>
                     <option value='high_price'>High Price</option>
                     <option value='low_price'>Low Price</option>
                  </select>
               </div>

               <div className={cx('paginationBox')}>
                  <span className={cx('numPage')}>
                     {'Page'} {page}/{totalPages}
                  </span>
                  <span className={cx('prev')} onClick={prevPage}>
                     {'<'}
                  </span>
                  <span className={cx('next')} onClick={nextPage}>
                     {'>'}
                  </span>
               </div>
            </div>

            <div className={cx('cardWrapper')}>
               {tours === null ? (
                  <SkeletonCard cards={20} />
               ) : !tours?.length ? (
                  <h4 className='relative m-auto'>Không có chuyến đi nào!</h4>
               ) : (
                  tours.map((tour) => <TourCard tour={tour} key={tour.id} />)
               )}
            </div>
         </div>
      </section>
   );
};

export default SearchResultList;
