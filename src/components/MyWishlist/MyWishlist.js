import moment from 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './MyWishlist.module.scss';

const cx = classNames.bind(styles);

const MyWishlist = () => {
    return (
        <div className={cx('myWishlist')}>
            <div className={cx('myWishlistHeader')}>
                <h3>Your Wishlist</h3>
                <select className={cx('filterBox')} id="slFilter" name="slFilter">
                    <option value="filter" selected disabled hidden>
                        Filter
                    </option>
                    <option value="success">Available</option>
                    <option value="pending">Not Available</option>
                </select>
            </div>
            <table className={cx('myWishlistTable')}>
                <thead className={cx('tableHead')}>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Tour</th>
                        <th scope="col">Visit Date</th>
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
                            <span>Purple polo tshirt</span>
                        </td>
                        <td>
                            <span>{moment(22 / 12 / 2012).format('DD/MM/YYYY')}</span>
                        </td>
                        <td>
                            <span>Available</span>
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

export default MyWishlist;
