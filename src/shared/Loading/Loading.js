import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

const Loading = () => {
   return (
      <div className={cx('wrapperLoading')}>
         <div className={cx('loading')}>
            <div>G</div>
            <div>N</div>
            <div>I</div>
            <div>D</div>
            <div>A</div>
            <div>O</div>
            <div>L</div>
         </div>
      </div>
   );
};

export default Loading;
