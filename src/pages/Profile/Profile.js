import { lazy, useEffect, useState, useContext, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MyUserContext } from '../../contexts/MyContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard,
    faListCheck,
    faLock,
    faRectangleList,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Image from '../../shared/Image/Image';
import Loading from '../../shared/Loading/Loading';

const MyBookings = lazy(() => import('../../components/Profile/MyBookings/MyBookings'));
const MyWishlist = lazy(() => import('../../components/Profile/MyWishlist/MyWishlist'));
const MyAccount = lazy(() => import('../../components/Profile/MyAccount/MyAccount'));
const MyPassword = lazy(() => import('../../components/Profile/MyPassword/MyPassword'));
const MyCards = lazy(() => import('../../components/Profile/MyCards/MyCards'));

const cx = classNames.bind(styles);

const Profile = () => {
    const [user] = useContext(MyUserContext);
    const [activeTab, setActiveTab] = useState('myBooking');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!user) {
            navigate('/login', { state: { from: location.pathname } });
        }
    }, [user, location.pathname, navigate]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Suspense fallback={<Loading />}>
            <section className={cx('wrapperProfile')}>
                <div className={cx('sideLeft')}>
                    <div className={cx('avatarBox')}>
                        <Image src={user?.avatar} alt={user?.avatar} />
                        <div className={cx('nameBox')}>
                            <span>
                                {user?.last_name} {user?.first_name}
                            </span>
                            <span>{user?.email}</span>
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
                        <li className={cx('chooseItem')} onClick={() => handleTabClick('myPassword')}>
                            <FontAwesomeIcon className={cx('faLock')} icon={faLock} />
                            My Password
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
                    {activeTab === 'myPassword' && <MyPassword />}
                    {activeTab === 'myCards' && <MyCards />}
                </div>
            </section>
            <ToastContainer />
        </Suspense>
    );
};

export default Profile;
