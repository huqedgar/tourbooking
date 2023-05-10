import { useEffect, useState } from 'react';
import { authAPI, endpoints } from '../../../configs/API';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import { NumericFormat } from 'react-number-format';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './MyWishlist.module.scss';
import Image from '../../../shared/Image/Image';
import Loading from '../../../shared/Loading/Loading';

const cx = classNames.bind(styles);

const MyWishlist = () => {
    const [myWishlist, setMyWishlist] = useState(null);
    const [sortBy, setSortBy] = useState('');
    const ITEMS_PER_PAGE = 4;
    const pageCount = Math.ceil(myWishlist?.length / ITEMS_PER_PAGE);
    const [currentPage, setCurrentPage] = useState(1);

    //--- Handle Logic
    useEffect(() => {
        const loadMyWishlist = async () => {
            let endpoint = endpoints['my-wish-list'];

            switch (sortBy) {
                case 'available':
                    endpoint += '?sort=';
                    break;
                case 'notAvailable':
                    endpoint += '?sort=0';
                    break;
                default:
                    break;
            }

            try {
                let res = await authAPI().get(endpoint);
                setMyWishlist(res.data);
            } catch (ex) {
                toast.error(ex);
            }
        };
        loadMyWishlist();
    }, [sortBy]);

    // Pagination
    const getCurrentItems = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return myWishlist?.slice(startIndex, endIndex);
    };

    if (myWishlist === null) {
        return <Loading />;
    }

    return (
        <div className={cx('myWishlist')}>
            <div className={cx('myWishlistHeader')}>
                <h3>Your Wishlist</h3>
                <select
                    className={cx('filterBox')}
                    id="slFilter"
                    name="slFilter"
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="filter" defaultValue hidden>
                        Filter
                    </option>
                    <option value="available">Available</option>
                    <option value="notAvailable">Not Available</option>
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
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody className={cx('tableBody')}>
                    {getCurrentItems()?.map((myWish, index) => (
                        <tr key={index}>
                            <td>
                                <Image src={myWish.tour.image_tour} alt={myWish.tour.image_tour} />
                            </td>
                            <td>
                                <span>{myWish.tour.name_tour}</span>
                            </td>
                            <td>
                                <span>{moment.tz('', 'UTC').format('DD/MM/YYYY')}</span>
                            </td>
                            <td>
                                {myWish.tour.remain_people > 0 ? (
                                    <span className={cx('available')}>Available</span>
                                ) : (
                                    <span className={cx('notAvailable')}>Not Available</span>
                                )}
                            </td>
                            <td>
                                <span>
                                    <NumericFormat
                                        className="bg-transparent text-center"
                                        value={myWish.tour.price_tour}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                        decimalScale={0}
                                        suffix={' VND'}
                                    />
                                </span>
                            </td>
                            <td>
                                <Link to={`/tours/${myWish.tour.id}/details-tour/`}>
                                    <FontAwesomeIcon className={cx('faCircleInfo')} icon={faCircleInfo} />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={cx('pagination')}>
                <button className="prev" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    Prev
                </button>
                {Array.from({ length: pageCount }, (_, i) => (
                    <button
                        key={i}
                        className={cx(currentPage === i + 1 ? 'pageActive' : '')}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="next"
                    disabled={currentPage === pageCount}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MyWishlist;
