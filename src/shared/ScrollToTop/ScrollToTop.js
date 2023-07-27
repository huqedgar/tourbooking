import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const ScrollToTop = () => {
   const [backToTop, setBackToTop] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 100) {
            setBackToTop(true);
         } else {
            setBackToTop(false);
         }
      });
   }, []);

   const handleScrollUp = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };

   return (
      <Button third small className={cx('wrapperScroll', backToTop ? 'show' : 'hide')} onClick={handleScrollUp}>
         <FontAwesomeIcon icon={faArrowUp} />
      </Button>
   );
};

export default ScrollToTop;
