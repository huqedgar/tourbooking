import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMessage, faShoePrints, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faCompass } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './BlogCard.module.scss';
import Button from '../Button/Button';
import moment from 'moment-timezone';

const cx = classNames.bind(styles);

const BlogCard = ({ blog }) => {
    return (
        <div className={cx('card')}>
            <div className={cx('title')}>
                <span>
                    <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                    {moment(blog.date).format('DD/MM/YYYY')}
                </span>
                <a href="#">{blog.title}</a>
            </div>

            <div className={cx('imgContainer')}>
                <img src={require('../../assets/images/t-1.png')} alt={blog.img} width={350} height={170} />
            </div>

            <div className={cx('text')}>
                <span>
                    <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                    {blog.liked}
                    {' liked'}
                </span>
                <span>
                    <FontAwesomeIcon className={cx('faMessage')} icon={faMessage} />
                    {blog.comments}
                    {' comments'}
                </span>
            </div>

            <p className={cx('content')}>{blog.content}</p>

            <hr />

            <Button className="text-sm mt-3 w-full" primary small>
                Read more
            </Button>
        </div>
    );
};

export default BlogCard;
