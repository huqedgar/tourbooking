import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import {
    faCreditCard,
    faListCheck,
    faRectangleList,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import MyBookings from '../../components/MyBookings/MyBookings';
import MyWishlist from '../../components/MyWishlist/MyWishlist';
import MyAccount from '../../components/MyAccount/MyAccount';
import MyCards from '../../components/MyCards/MyCards';

const cx = classNames.bind(styles);

const Profile = () => {
    const [activeTab, setActiveTab] = useState('myBooking');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className={cx('wrapperProfile')}>
            <div className={cx('sideLeft')}>
                <div className={cx('avatarBox')}>
                    <img src={require('../../assets/images/t-1.png')} alt="" />
                    <div className={cx('nameBox')}>
                        <span>Võ Văn Hưng</span>
                        <span>vhung6252@gmail.com</span>
                    </div>
                </div>

                <ul className={cx('chooseBox')}>
                    <li className={cx('chooseItem')} onClick={() => handleTabClick('myBooking')}>
                        <FontAwesomeIcon className={cx('faListCheck')} icon={faListCheck} />
                        My Booking
                    </li>
                    <li className={cx('chooseItem')} onClick={() => handleTabClick('myWishlist')}>
                        <FontAwesomeIcon className={cx('faRectangleList')} icon={faRectangleList} />
                        My Wishlist
                    </li>
                    <li className={cx('chooseItem')} onClick={() => handleTabClick('myAccount')}>
                        <FontAwesomeIcon className={cx('faUser')} icon={faUser} />
                        My Account
                    </li>
                    <li className={cx('chooseItem')} onClick={() => handleTabClick('myCards')}>
                        <FontAwesomeIcon className={cx('faCreditCard')} icon={faCreditCard} />
                        My Cards
                    </li>
                    <li className={cx('chooseItem')}>
                        <FontAwesomeIcon className={cx('faRightFromBracket')} icon={faRightFromBracket} />
                        Log Out
                    </li>
                </ul>
            </div>
            <div className={cx('sideRight')}>
                {activeTab === 'myBooking' && <MyBookings />}
                {activeTab === 'myWishlist' && <MyWishlist />}
                {activeTab === 'myAccount' && <MyAccount />}
                {activeTab === 'myCards' && <MyCards />}
            </div>
        </section>
    );
};

export default Profile;
