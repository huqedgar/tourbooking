import classNames from 'classnames/bind';
import styles from './Blogs.module.scss';
import BlogCard from '../BlogCard/BlogCard';

const cx = classNames.bind(styles);

const blogs = [
    {
        id: 1,
        title: 'Du lịch Đà Lạt – Cẩm nang từ A đến Z',
        date: '2023-04-21T12:59-0500',
        img: '../../assets/images/t-1.jpg',
        content: 'Ipsum proident veniam deserunt commodo sit irure adipisicing enim est excepteur sunt ex.',
        liked: 132,
        comments: 212,
    },
    {
        id: 2,
        title: 'Du lịch Đà Lạt – Cẩm nang từ A đến Z',
        date: '2023-04-21T12:59-0500',
        img: '../../assets/images/t-1.jpg',
        content: 'Ipsum proident veniam deserunt commodo sit irure adipisicing enim est excepteur sunt ex.',
        liked: 132,
        comments: 212,
    },
    {
        id: 3,
        title: 'Du lịch Đà Lạt – Cẩm nang từ A đến Z',
        date: '2023-04-21T12:59-0500',
        img: '../../assets/images/t-1.jpg',
        content: 'Ipsum proident veniam deserunt commodo sit irure adipisicing enim est excepteur sunt ex.',
        liked: 132,
        comments: 212,
    },
    {
        id: 4,
        title: 'Du lịch Đà Lạt – Cẩm nang từ A đến Z',
        date: '2023-04-21T12:59-0500',
        img: '../../assets/images/t-1.jpg',
        content: 'Ipsum proident veniam deserunt commodo sit irure adipisicing enim est excepteur sunt ex.',
        liked: 132,
        comments: 212,
    },
];

const Blogs = () => {
    return (
        <section id="blogs" className={cx('wrapperBlogs')}>
            <div className={cx('titleBox')}>
                <h2>Blogs</h2>
                <span>Occaecat minim adipisicing deserunt excepteur nulla incididunt laboris fugiat anim ipsum.</span>
            </div>
            <div className={cx('wrapper')}>
                {blogs.map((blog) => (
                    <BlogCard blog={blog} key={blog.id} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
