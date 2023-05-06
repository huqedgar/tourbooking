import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './MyBookings.module.scss';

const cx = classNames.bind(styles);

const MyBookings = () => {
    return (
        <div className={cx('myBooking')}>
            <div className={cx('myBookingHeader')}>
                <h3>Your Booking</h3>
                <select className={cx('filterBox')} id="slFilter" name="slFilter">
                    <option value="filter" defaultValue disabled hidden>
                        Filter
                    </option>
                    <option value="success">Success</option>
                    <option value="pending">Pending</option>
                    <option value="failure">Failure</option>
                    <option value="expired">Expired</option>
                </select>
            </div>
            <table className={cx('myBookingTable')}>
                <thead className={cx('tableHead')}>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Bill</th>
                        <th scope="col">Ticket</th>
                        <th scope="col">Status</th>
                        <th scope="col">Price</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody className={cx('tableBody')}>
                    <tr>
                        <td>
                            <img src={require('../../assets/images/d-1.jpg')} alt="" />
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
    );
};

export default MyBookings;
