import { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MyUserContext } from '../../../contexts/MyContext';
import { authAPI, endpoints } from '../../../configs/API';
import moment from 'moment-timezone';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './BlogCarousel.module.scss';
import Image from '../../../shared/Image/Image';

const cx = classNames.bind(styles);

const BlogCarousel = ({ blog, likesblog }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [numLike, setNumLike] = useState(blog.count_like_blog);
    const [user] = useContext(MyUserContext);
    const { blogId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const incrementIndex = useCallback(() => {
        setCurrentIndex((currentIndex) => {
            return (currentIndex + 1) % blog.list_images.length;
        });
    }, [blog.list_images.length]);

    const decrementIndex = useCallback(() => {
        setCurrentIndex((currentIndex) => {
            return currentIndex === 0 ? blog.list_images.length - 1 : currentIndex - 1;
        });
    }, [blog.list_images.length]);

    useEffect(() => {
        if (likesblog) {
            const wishListBlog = likesblog.find((wishListItem) => wishListItem.blog.id === Number(blogId));
            if (wishListBlog && wishListBlog.is_like) {
                setIsLiked(true);
            }
        }
    }, [likesblog, blogId]);

    const handleClickLike = useCallback(async () => {
        if (!user) {
            return navigate('/login', { state: { from: location.pathname } });
        }
        try {
            const res = await authAPI().post(endpoints['add-like-blog'](blogId));
            console.log(res.status);
            console.log(res.data);
            if (res.status === 200) {
                setIsLiked((isLiked) => !isLiked);
                setNumLike((numLike) => (isLiked ? numLike - 1 : numLike + 1));
                toast.promise(() => new Promise((resolve) => setTimeout(() => resolve('Successfully!'), 1000)), {
                    pending: 'Processing!',
                    success: 'Successfully!',
                    error: 'Error!',
                });
            } else {
                toast.error('The system is having an error! Please come back later!');
            }
        } catch (ex) {
            console.error(ex);
        }
    }, [blogId, isLiked, user, location.pathname, navigate]);

    return (
        <section className={cx('wrapperCarousel')}>
            <Image
                src={blog.list_images[currentIndex].image_content_blog}
                alt={blog.list_images[currentIndex].image_content_blog}
            />
            <div
                onClick={decrementIndex}
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded p-1 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-12"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div
                onClick={incrementIndex}
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded p-1 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-12"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className={cx('title')}>
                <h2>{blog.title_blog}</h2>
                <span>
                    <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                    {moment.tz(blog.created_date, 'UTC').format('DD/MM/YYYY')}
                </span>
            </div>
            <span className={cx('likeHeader', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                {numLike}
            </span>
        </section>
    );
};

export default BlogCarousel;
