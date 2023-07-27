import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faBarcode,
   faCalendarDays,
   faEnvelope,
   faEye,
   faLocationDot,
   faMoneyBill,
   faPhone,
   faUser,
   faUsers
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './MyBookings.module.scss';
import Image from '../../../shared/Image/Image';
import { NumericFormat } from 'react-number-format';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyUserContext } from '../../../contexts/MyContext';
import Button from '../../../shared/Button/Button';
import moment from 'moment-timezone';
import { Rating } from 'react-simple-star-rating';
import InputField from '../../../shared/InputField/InputField';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { authAPI, endpoints } from '../../../configs/API';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';
import Loading from '../../../shared/Loading/Loading';

const cx = classNames.bind(styles);

const MyBookings = () => {
   const [user] = useContext(MyUserContext);
   const [myTickets, setMyTickets] = useState(null);
   const [ticket, setTicket] = useState(null);
   const [sortBy, setSortBy] = useState('');
   const ITEMS_PER_PAGE = 4;
   const pageCount = Math.ceil(myTickets?.length / ITEMS_PER_PAGE);
   const [currentPage, setCurrentPage] = useState(1);
   const [showModal, setShowModal] = useState(false);
   const [loading, setLoading] = useState(false);

   //--- Handle UI

   const handleModalClick = useCallback(() => {
      setShowModal((prevState) => !prevState);
   }, []);

   const handleViewTicket = (ticket) => {
      setTicket(ticket);
      setShowModal(!showModal);
   };

   //--- Handle Logic
   const loadMyTickets = useCallback(async () => {
      let endpoint = endpoints['user-ticket'];

      switch (sortBy) {
         case 'success':
            endpoint += '?stt=Success';
            break;
         case 'pending':
            endpoint += '?stt=Pending';
            break;
         case 'cancel':
            endpoint += '?stt=Cancel';
            break;
         case 'expired':
            endpoint += '?stt=Expired';
            break;
         default:
            break;
      }

      try {
         let res = await authAPI().get(endpoint);
         setMyTickets(res.data);
      } catch (ex) {
         toast.error(ex);
      }
   }, [sortBy]);

   useEffect(() => {
      loadMyTickets();
   }, [sortBy, loadMyTickets]);

   // Pagination
   const getCurrentItems = () => {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      return myTickets?.slice(startIndex, endIndex);
   };

   // Rate - Comment
   const [rating, setRating] = useState(0);
   const handleRating = (rate) => {
      setRating(Number(rate));
   };

   const [content, setContent] = useState('');
   const handleContentChange = useCallback((e) => {
      setContent(e.target.value);
   }, []);

   const handleSubmit = async (evt) => {
      evt.preventDefault();
      let isSuccess = false;
      const handleSubmitRate = async () => {
         try {
            if (content.trim() === '') {
               return toast.warning('Comments cannot be left blank!');
            }
            setLoading(true);
            const res = await authAPI().post(
               endpoints['add-rating-tour'](ticket.tour.id),
               {
                  amount_star_voting: rating
               },
               {
                  headers: {
                     'Content-Type': 'application/x-www-form-urlencoded'
                  }
               }
            );
            if (res.status === 200) {
               isSuccess = true;
            }
         } catch (ex) {
            toast.error(ex.message);
            setLoading(false);
         }
      };
      const handleSubmitComment = async () => {
         try {
            const res = await authAPI().post(
               endpoints['add-comment-tour'](ticket.tour.id),
               {
                  content_cmt: content
               },
               {
                  headers: {
                     'Content-Type': 'application/x-www-form-urlencoded'
                  }
               }
            );
            setContent('');
            if (res.status === 200) {
               isSuccess = true;
               setLoading(false);
            }
         } catch (ex) {
            toast.error(ex.message);
            isSuccess = false;
         } finally {
            setLoading(false);
         }
      };
      await handleSubmitRate();
      if (isSuccess) {
         await handleSubmitComment();
      }
      if (isSuccess) {
         toast.promise(
            () =>
               new Promise((resolve) => {
                  setTimeout(() => resolve('Successfully!'), 1500);
               }),
            {
               pending: 'Processing!',
               success: 'Successfully!',
               error: 'Error!'
            }
         );
      }
   };

   const handleUpdateTicket = useCallback(
      async (evt) => {
         evt.preventDefault();
         try {
            setLoading(true);
            const formData = new FormData();
            formData.append('code_bill', ticket.bill.code_bill);
            formData.append('status_ticket', 'Cancel');
            const res = await authAPI().patch(endpoints['user-update-ticket'], formData, {
               headers: {
                  'Content-Type': 'multipart/form-data'
               }
            });
            if (res.status === 200) {
               toast.promise(
                  () =>
                     new Promise((resolve) => {
                        setTimeout(() => resolve('Successfully!'), 1500);
                     }),
                  {
                     pending: 'Processing!',
                     success: 'Successfully!',
                     error: 'Error!'
                  }
               );
               handleModalClick();
               loadMyTickets();
            }
         } catch (ex) {
            toast.error(ex.message);
         } finally {
            setLoading(false);
         }
      },
      [ticket?.bill?.code_bill, handleModalClick, loadMyTickets]
   );

   if (myTickets === null) {
      return <Loading />;
   }

   return (
      <>
         <div className={cx('myBooking')}>
            <div className={cx('myBookingHeader')}>
               <h3>Your Booking</h3>
               <select
                  className={cx('filterBox')}
                  id='slFilter'
                  name='slFilter'
                  onChange={(e) => setSortBy(e.target.value)}
               >
                  <option value='filter' defaultValue hidden>
                     Filter
                  </option>
                  <option value='success'>Success</option>
                  <option value='pending'>Pending</option>
                  <option value='cancel'>Cancel</option>
                  <option value='expired'>Expired</option>
               </select>
            </div>
            <table className={cx('myBookingTable')}>
               <thead className={cx('tableHead')}>
                  <tr>
                     <th scope='col'>Image</th>
                     <th scope='col'>Bill Code</th>
                     <th scope='col'>Ticket</th>
                     <th scope='col'>Status</th>
                     <th scope='col'>Total</th>
                     <th scope='col'>View</th>
                  </tr>
               </thead>
               <tbody className={cx('tableBody')}>
                  {getCurrentItems()?.map((ticket, index) => (
                     <tr key={index}>
                        <td>
                           <Image src={ticket.tour.image_tour} alt={ticket.tour.image_tour} />
                        </td>
                        <td>
                           <span>{ticket.bill.code_bill}</span>
                        </td>
                        <td>
                           <span>{ticket.tour.name_tour.split(' ').slice(0, 5).join(' ') + '...'}</span>
                        </td>
                        <td>
                           <span className={cx(ticket.status_ticket)}>{ticket.status_ticket}</span>
                        </td>
                        <td>
                           <span>
                              <NumericFormat
                                 className='bg-transparent text-center'
                                 value={ticket.bill.totals_bill}
                                 allowLeadingZeros
                                 thousandSeparator=','
                                 decimalScale={0}
                                 suffix={' VND'}
                              />
                           </span>
                        </td>
                        <td>
                           <FontAwesomeIcon
                              className={cx('faEye')}
                              icon={faEye}
                              onClick={() => handleViewTicket(ticket)}
                           />
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
            <div className={cx('pagination')}>
               <button className='prev' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
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
                  className='next'
                  disabled={currentPage === pageCount}
                  onClick={() => setCurrentPage(currentPage + 1)}
               >
                  Next
               </button>
            </div>
         </div>
         {ticket && showModal && (
            <div className={cx('modalBackground')}>
               <div className={cx('modalContent')}>
                  <h2>Tour Booking</h2>
                  <div className={cx('closeBtn')}>
                     <Button className='w-full' third verysmall onClick={handleModalClick}>
                        Close
                     </Button>
                  </div>
                  <div className={cx('orderDetails')}>
                     <h3>Order Details</h3>
                     <div className={cx('orderTour')}>
                        <Image src={ticket.tour.image_tour} alt={ticket.tour.image_tour} />
                        <div className={cx('orderTourInfo')}>
                           <Link to={`/tours/${ticket.tour.id}/details-tour/`}>
                              <h4>{ticket.tour.name_tour}</h4>
                           </Link>
                           <span>
                              <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                              {ticket.tour.address_tour} , {ticket.tour.country_tour}
                           </span>
                           <span>
                              <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                              {moment.tz(ticket.tour.date_begin_tour, 'UTC').format('DD/MM/YYYY')}
                           </span>
                        </div>
                     </div>
                     <ul className={cx('billDetails')}>
                        <li>
                           <span>
                              <FontAwesomeIcon className={cx('faBarcode')} icon={faBarcode} />
                              Bill Code:
                           </span>
                           <span>{ticket.bill.code_bill}</span>
                        </li>
                        <li>
                           <span>
                              <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                              Visit Date:
                           </span>
                           <span>{moment.tz(ticket.tour.date_begin_tour, 'UTC').format('DD/MM/YYYY')}</span>
                        </li>
                        <li>
                           <span>
                              <FontAwesomeIcon className={cx('faUsers')} icon={faUsers} />
                              Total Visitors:
                           </span>
                           <span>{ticket.amount_ticket} visitors</span>
                        </li>
                        <li>
                           <span>
                              <FontAwesomeIcon className={cx('faMoneyBill')} icon={faMoneyBill} />
                              Total Price:
                           </span>
                           <span className='font-semibold text-blue-400'>
                              <NumericFormat
                                 value={ticket.bill.totals_bill}
                                 allowLeadingZeros
                                 thousandSeparator=','
                                 decimalScale={0}
                                 suffix={' VND'}
                              />
                           </span>
                        </li>
                     </ul>
                  </div>
                  <div className={cx('orderDetails')}>
                     <h3>Contact Info</h3>
                     <ul className={cx('billDetails')}>
                        <li>
                           <span>
                              <FontAwesomeIcon className={cx('faUser')} icon={faUser} />
                              Fullname:
                           </span>
                           <span>
                              {user.last_name} {user.first_name}
                           </span>
                        </li>
                        <li>
                           <span>
                              <FontAwesomeIcon className={cx('faEnvelope')} icon={faEnvelope} />
                              Email:
                           </span>
                           <span>{user.email}</span>
                        </li>
                        <li>
                           <span>
                              <FontAwesomeIcon className={cx('faPhone')} icon={faPhone} />
                              Phone Number:
                           </span>
                           <span>{user.phone_number}</span>
                        </li>
                     </ul>
                  </div>
                  {ticket.status_ticket === 'Success' && (
                     <form onSubmit={handleSubmit} className={cx('orderDetails')}>
                        <h3 className='!pb-2'>Your review</h3>
                        <Rating className={cx('rating')} initialValue={rating} onClick={handleRating} />
                        <InputField
                           textarea
                           id='message'
                           label='Message'
                           placeholder='Enter message.'
                           value={content}
                           onChange={handleContentChange}
                           required
                        />
                        <div className={cx('sendBtn')}>
                           {loading ? (
                              <Button className='w-full' third small disabled>
                                 <LoadingSpinner />
                              </Button>
                           ) : (
                              <Button className='w-full' type='submit' primary small>
                                 Send
                              </Button>
                           )}
                        </div>
                     </form>
                  )}
                  {ticket.status_ticket === 'Pending' && (
                     <div className={cx('cancelBtn')}>
                        {loading ? (
                           <Button className='w-full' third small disabled>
                              <LoadingSpinner />
                           </Button>
                        ) : (
                           <Button className='w-full' third small onClick={handleUpdateTicket}>
                              Cancel Ticket
                           </Button>
                        )}
                     </div>
                  )}
               </div>
            </div>
         )}
      </>
   );
};

export default MyBookings;
