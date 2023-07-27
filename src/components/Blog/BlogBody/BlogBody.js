import React, { useState, useEffect, useRef, useContext, useCallback, startTransition } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { authAPI, endpoints } from '../../../configs/API';
import { MyUserContext } from '../../../contexts/MyContext';
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './BlogBody.module.scss';
import Image from '../../../shared/Image/Image';
import Button from '../../../shared/Button/Button';
import InputField from '../../../shared/InputField/InputField';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';

const cx = classNames.bind(styles);

const BlogBody = ({ contentBlog, comments }) => {
   const [user] = useContext(MyUserContext);
   const { blogId } = useParams();
   const [content, setContent] = useState('');
   const [blogComments, setBlogComments] = useState(comments);
   const [numComments, setNumComments] = useState(3);
   const navigate = useNavigate();
   const location = useLocation();
   const sideRightRef = useRef(null);
   const [loading, setLoading] = useState(false);

   //--- Handle UI
   useEffect(() => {
      const handleScroll = () => {
         const { top } = sideRightRef.current.getBoundingClientRect();
         const card1 = document.querySelector(`.${styles.card1}`);
         card1.style.top = `${Math.max(top, 0)}px`;
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   //--- Handle Logic
   const handleContentChange = useCallback((e) => {
      setContent(e.target.value);
   }, []);

   const handleLoadMore = useCallback(() => {
      startTransition(() => {
         setNumComments(numComments + 5);
      });
   }, [numComments]);

   const handleSubmit = useCallback(
      async (evt) => {
         evt.preventDefault();
         try {
            if (!user) {
               return navigate('/login', { state: { from: location.pathname } });
            }
            if (content.trim() === '') {
               return toast.warning('Comments cannot be left blank!');
            }
            setLoading(true);
            const res = await authAPI().post(
               endpoints['add-comment-blog'](blogId),
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
               setLoading(false);
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
               setTimeout(() => setBlogComments((current) => [res.data, ...current]), 3500);
            } else {
               return toast.error('The system is having an error! Please come back later!');
            }
         } catch (ex) {
            toast.error(ex.message);
         } finally {
            setLoading(false);
         }
      },
      [blogId, content, location.pathname, navigate, user]
   );

   return (
      <>
         <section className={cx('wrapperInfo')}>
            <div className={cx('sideLeft')}>
               <h3>The Content Of The Articlee</h3>
               <p>{contentBlog}</p>
            </div>
            <div className={cx('sideRight')} ref={sideRightRef} style={{ position: 'sticky', top: '100px' }}>
               <form onSubmit={handleSubmit} className={cx('card1')} action='submit'>
                  <h3>LEAVE A COMMENT</h3>
                  <InputField
                     textarea
                     id='message'
                     label='Message'
                     placeholder='Enter message.'
                     value={content}
                     onChange={handleContentChange}
                     required
                     disabled={user ? false : true}
                  />
                  {loading ? (
                     <Button className='mt-4' primary small disabled>
                        <LoadingSpinner />
                     </Button>
                  ) : (
                     <Button type='submit' primary small>
                        Send Message
                     </Button>
                  )}
               </form>
            </div>
         </section>

         <section className={cx('wrapperComment')}>
            <div className={cx('ratingBox')}>
               <span>{blogComments.length} customer's have a lot to say about their experiences:</span>
            </div>
            {blogComments.slice(0, numComments).map((comment) => (
               <div key={comment.id} className={cx('commentBox')}>
                  {comment.user && <Image src={comment.user.avatar} alt={comment.user.avatar} />}
                  <div className={cx('commentBody')}>
                     <div className={cx('commentName')}>
                        <span>
                           {comment.user?.last_name} {comment.user?.first_name}
                        </span>
                        <span>
                           {' - '}
                           <Moment fromNow>{comment.created_date}</Moment>
                        </span>
                     </div>
                     <p>{comment.content_cmt}</p>
                     <div className={cx('commentReact')}>
                        <span className={cx('reactAction')}>
                           <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                           {comment.amount_like_cmt}
                        </span>
                        <span className={cx('reactAction')}>
                           <FontAwesomeIcon className={cx('faMessage')} icon={faMessage} />
                           {comment.amount_like_cmt}
                        </span>
                     </div>
                  </div>
               </div>
            ))}

            {numComments < blogComments.length && (
               <div className={cx('loadMore')}>
                  <Button third small onClick={handleLoadMore}>
                     See More
                  </Button>
               </div>
            )}
         </section>
      </>
   );
};

export default BlogBody;
