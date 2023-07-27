import classNames from 'classnames/bind';
import styles from './LoadingSpinner.module.scss';

const cx = classNames.bind(styles);

const LoadingSpinner = () => {
   return (
      <svg className={cx('spinner')} width='30px' height='30px' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
         <circle className={cx('path')} fill='none' strokeWidth='6' strokeLinecap='round' cx='33' cy='33' r='30' />
      </svg>
   );
};

export default LoadingSpinner;
