import { useEffect, useState } from 'react';
import API, { endpoints } from '../../configs/API';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './Blogs.module.scss';
import BlogCard from '../../shared/BlogCard/BlogCard';
import SkeletonCard from '../../shared/Skeleton/SkeletonCard/SkeletonCard';

const cx = classNames.bind(styles);

const Blogs = () => {
   const [blogs, setBlogs] = useState(null);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);

   useEffect(() => {
      const loadBlogs = async () => {
         try {
            let res = await API.get(`${endpoints['blogs']}?page=${page}`);
            setBlogs(res.data.results);
            setTotalPages(Math.ceil(res.data.count / 20));
         } catch (ex) {
            setPage(1);
         }
      };
      loadBlogs();
   }, [page]);

   const nextPage = () => {
      if (page < totalPages) {
         setPage((current) => current + 1);
      }
   };

   const prevPage = () => {
      if (page > 1) {
         setPage((current) => current - 1);
      }
   };

   return (
      <section id='blogs' className={cx('wrapperBlogs')}>
         <div className={cx('titleBox')}>
            <h2>Blogs</h2>
            <span>Occaecat minim adipisicing deserunt excepteur nulla incididunt laboris fugiat anim ipsum.</span>
            <div className={cx('paginationBox')}>
               <span className={cx('numPage')}>
                  {'Page'} {page}/{totalPages}
               </span>
               <span className={cx('prev')} onClick={prevPage}>
                  {'<'}
               </span>
               <span className={cx('next')} onClick={nextPage}>
                  {'>'}
               </span>
            </div>
         </div>
         <div className={cx('wrapper')}>
            {blogs === null ? (
               <SkeletonCard cards={20} />
            ) : !blogs?.length ? (
               <h4 className='relative m-auto'>Không có chuyến đi nào!</h4>
            ) : (
               blogs.map((blog) => <BlogCard blog={blog} key={blog.id} />)
            )}
         </div>
         <ToastContainer />
      </section>
   );
};

export default Blogs;
