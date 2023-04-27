import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard,
    faEye,
    faPlus,
    faRectangleList,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

const Profile = () => {
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
                    <li className={cx('chooseItem')}>
                        <FontAwesomeIcon className={cx('faRectangleList')} icon={faRectangleList} />
                        My Booking
                    </li>
                    <li className={cx('chooseItem')}>
                        <FontAwesomeIcon className={cx('faUser')} icon={faUser} />
                        My Account
                    </li>
                    <li className={cx('chooseItem')}>
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
                <div className={cx('myBooking')}>
                    <div className={cx('myBookingHeader')}>
                        <h3>Your Booking</h3>
                        <select className={cx('filterBox')} id="slFilter" name="slFilter">
                            <option value="" selected disabled hidden>
                                Filter
                            </option>
                            <option value="">Success</option>
                            <option value="">Paid</option>
                            <option value="">Processed</option>
                            <option value="">Failure</option>
                            <option value="">Expired</option>
                        </select>
                    </div>
                    <table className={cx('myBookingTable')}>
                        <thead className={cx('tableHead')}>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Order Id</th>
                                <th scope="col">Ticket Details</th>
                                <th scope="col">Status</th>
                                <th scope="col">Price</th>
                                <th scope="col">View</th>
                            </tr>
                        </thead>
                        <tbody className={cx('tableBody')}>
                            <tr>
                                <td>
                                    <img src={require('../../assets/images/t-1.png')} alt="" />
                                </td>
                                <td>
                                    <span>125021</span>
                                </td>
                                <td>
                                    <span>Purple polo tshirt</span>
                                </td>
                                <td>
                                    <span>Success</span>
                                </td>
                                <td>
                                    <span>945.000 {' VNĐ'}</span>
                                </td>
                                <td>
                                    <FontAwesomeIcon className={cx('faEye')} icon={faEye} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={require('../../assets/images/t-1.png')} alt="" />
                                </td>
                                <td>
                                    <span>125021</span>
                                </td>
                                <td>
                                    <span>Purple polo tshirt</span>
                                </td>
                                <td>
                                    <span>Success</span>
                                </td>
                                <td>
                                    <span>945.000 {' VNĐ'}</span>
                                </td>
                                <td>
                                    <FontAwesomeIcon className={cx('faEye')} icon={faEye} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={cx('myAccount')}>
                    <h3>Personal Data</h3>
                    <hr />
                    <div className={cx('changeAvatarBox')}>
                        <img src={require('../../assets/images/t-1.png')} alt="" />
                        <Button primary small>
                            Change Avatar
                        </Button>
                    </div>
                    <div className={cx('infoBox')}>
                        <div className={cx('input')}>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" placeholder="Enter your full name." required />
                        </div>
                        <div className={cx('inputFlex')}>
                            <div className={cx('input')}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter your email." required />
                            </div>
                            <div className={cx('input')}>
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input type="number" id="phoneNumber" placeholder="Enter your phone number." required />
                            </div>
                        </div>
                        <div className={cx('inputFlex')}>
                            <div className={cx('input')}>
                                <span>Gender</span>
                                <select className={cx('genderBox')} id="slGender" name="slGender">
                                    <option value="" selected disabled hidden>
                                        Gender
                                    </option>
                                    <option value="">Female</option>
                                    <option value="">Male</option>
                                    <option value="">Other</option>
                                </select>
                            </div>
                            <div className={cx('input')}>
                                <label htmlFor="birthdate">Birthdate</label>
                                <input type="date" id="birthdate" required />
                            </div>
                        </div>
                        <div className={cx('input')}>
                            <label htmlFor="address">Your Address</label>
                            <input type="text" id="address" placeholder="Enter your address." required />
                        </div>
                    </div>
                    <div className={cx('infoBottom')}>
                        <Button secondary small className="text-black">
                            Cancel
                        </Button>
                        <Button primary small>
                            Save
                        </Button>
                    </div>
                </div>

                <div className={cx('myCards')}>
                    <div className={cx('myCardsHeader')}>
                        <h3>Your Cards</h3>
                        <Button third small leftIcon={<FontAwesomeIcon className={cx('faPlus')} icon={faPlus} />}>
                            Add New
                        </Button>
                    </div>
                    <div className={cx('myCardsList')}>
                        <div className={cx('card')}>
                            <div className={cx('cardIcon')}>
                                <img src={require('../../assets/icons/mbbank.png')} alt="" />
                                <img src={require('../../assets/icons/visa.png')} alt="" />
                            </div>
                            <div className={cx('cardInfo')}>
                                <span>Card Number</span>
                                <span>6262 **** **** 1515</span>
                            </div>
                            <div className={cx('cardFlex')}>
                                <div className={cx('cardInfo')}>
                                    <span>Name On Card</span>
                                    <span>Vo Hung</span>
                                </div>
                                <div className={cx('cardInfo')}>
                                    <span>Validity</span>
                                    <span>04/27</span>
                                </div>
                            </div>
                            <hr />
                            <div className={cx('cardAction')}>
                                <Button third small className="w-full">
                                    Edit
                                </Button>
                                <Button third small className="w-full">
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
