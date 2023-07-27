import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import Image from '../Image/Image';

const cx = classNames.bind(styles);

function Modal({ infoUpdate = false, onClick, ...passProps }) {
   const props = {
      onClick,
      ...passProps
   };

   if (infoUpdate) {
      return (
         <div className={cx('modalBackground')} {...props}>
            <div className={cx('modalContent')}>
               <h2>Notification</h2>
               <Image src={require('../../assets/images/error1.png')} alt='error1' />
               <p>You need to update your personal information to perform this action.</p>
            </div>
         </div>
      );
   }

   return (
      <div className={cx('modalBackground')} {...props}>
         <div className={cx('modalContent')}>
            <h3>Tour Booking would like to thank you!</h3>
            <Image src={require('../../assets/images/confirm.png')} alt='confirm' />
            <p>
               We are processing your order and will contact you as soon as possible to complete the transaction. For
               any questions, please contact the hotline: 0344564075 or email: vhung6252@gmail.com for timely support.
            </p>
         </div>
      </div>
   );
}

Modal.propTypes = {
   infoUpdate: PropTypes.bool,
   onClick: PropTypes.func
};

export default Modal;
