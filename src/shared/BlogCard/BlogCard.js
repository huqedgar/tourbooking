import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMessage, faShoePrints, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faCompass } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './BlogCard.module.scss';
import Button from '../Button/Button';
import Image from '../Image/Image';
import moment from 'moment-timezone';
import { useState, useEffect } from 'react';
import API, { endpoints } from '../../configs/API';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const BlogCard = ({ blog }) => {
    const url = `/blogs/${blog.id}/details-blog/`;
    const [comments, setComments] = useState(null);

    useEffect(() => {
        const loadCommentsData = async () => {
            try {
                const response = await API.get(endpoints['blog-comments'](blog.id));
                setComments(response.data);
            } catch (error) {
                alert(`Error loading comments data: ${error}`);
            }
        };
        loadCommentsData();
    }, [blog.id]);

    console.log(blog);
    return (
        <div className={cx('card')}>
            <div className={cx('title')}>
                <span>
                    <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                    {moment(blog.created_date).format('DD/MM/YYYY')}
                </span>
                <span>{blog.title_blog && blog.title_blog.split(' ').slice(0, 10).join(' ') + '...'}</span>
            </div>

            <div className={cx('imgContainer')}>
                <Image src={blog.image_blog} alt={blog.image_blog} />
            </div>

            <div className={cx('text')}>
                <span>
                    <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                    {blog.count_like_blog}
                    {' liked'}
                </span>
                <span>
                    <FontAwesomeIcon className={cx('faMessage')} icon={faMessage} />
                    {comments?.length}
                    {' comments'}
                </span>
            </div>
            <p className={cx('content')}>
                {blog.content_blog && blog.content_blog.split(' ').slice(0, 30).join(' ') + '...'}
            </p>

            <hr />
            <Link to={url}>
                <Button className="text-sm mt-3 w-full" primary small>
                    Read more
                </Button>
            </Link>
        </div>
    );
};

export default BlogCard;
