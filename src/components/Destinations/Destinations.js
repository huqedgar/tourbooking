import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Destinations.module.scss';

const cx = classNames.bind(styles);

const destinations = [
   {
      id: 1,
      location: 'Viet Nam',
      places: 124,
      star: 4.9,
      img: '../../assets/images/d-1.jpg'
   },
   {
      id: 2,
      location: 'New York',
      places: 45,
      star: 4.5,
      img: '../../assets/images/d-1.jpg'
   },
   {
      id: 3,
      location: 'Singapore',
      places: 52,
      star: 4.4,
      img: '../../assets/images/d-1.jpg'
   },
   {
      id: 4,
      location: 'Thailand',
      places: 63,
      star: 4.7,
      img: '../../assets/images/d-1.jpg'
   },
   {
      id: 5,
      location: 'Philippines',
      places: 52,
      star: 3.5,
      img: '../../assets/images/d-1.jpg'
   },
   {
      id: 6,
      location: 'Hong Kong',
      places: 35,
      star: 4.5,
      img: '../../assets/images/d-1.jpg'
   }
];

const Destinations = () => {
   return (
      <section id='destinations' className={cx('wrapperDestinations')}>
         <div className={cx('titleBox')}>
            <h2>Popular Destinations</h2>
            <span>Occaecat minim adipisicing deserunt excepteur nulla incididunt laboris fugiat anim ipsum.</span>
         </div>
         <div className={cx('grid')}>
            {destinations.map((destinations, index) => (
               <div className={cx('cardBox', `cardBox-${index}`)} key={destinations.id}>
                  <img src={require('../../assets/images/d-1.jpg')} alt={destinations.img} width={600} height={600} />
                  <div className={cx('card')}>
                     <span className={cx('star')}>
                        <FontAwesomeIcon className={cx('faStar')} icon={faStar} />
                        {destinations.star}
                     </span>
                     <div className={cx('title')}>
                        <strong>{destinations.location}</strong>
                        <span>
                           <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                           {destinations.places}
                           {' Places'}
                        </span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Destinations;
