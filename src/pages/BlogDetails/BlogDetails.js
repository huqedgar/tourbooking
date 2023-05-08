import { useEffect, lazy, Suspense, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import API, { authAPI, endpoints } from '../../configs/API';
import MyUserReducer from '../../reducers/MyUserReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../shared/Loading/Loading';
import { useContext } from 'react';
import { MyUserContext } from '../../contexts/MyContext';

const BlogCarousel = lazy(() => import('../../components/Blog/BlogCarousel/BlogCarousel'));
const BlogBody = lazy(() => import('../../components/Blog/BlogBody/BlogBody'));

const BlogDetails = () => {
    const [user] = useContext(MyUserContext);
    const { blogId } = useParams();
    const [state, dispatch] = useReducer(MyUserReducer, {
        blog: null,
        likesblog: null,
        comments: null,
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const [blogResponse, likesblogResponse, commentsResponse] = await Promise.all([
                    API.get(endpoints['blog-details'](blogId)),
                    user ? authAPI().get(endpoints['my-like-blog']) : null,
                    API.get(endpoints['blog-comments'](blogId)),
                ]);
                dispatch({
                    type: 'BLOG_DETAILS',
                    payload: {
                        blog: blogResponse.data,
                        likesblog: likesblogResponse?.data ?? null,
                        comments: commentsResponse.data,
                    },
                });
            } catch (ex) {
                toast.error(ex.message);
            }
        };

        loadData();
    }, [blogId, user]);

    if (!state.blog || !state.comments) {
        return <Loading />;
    }

    return (
        <Suspense fallback={<Loading />}>
            <BlogCarousel blog={state.blog} likesblog={state.likesblog} />
            <BlogBody contentBlog={state.blog.content_blog} comments={state.comments} />
            <ToastContainer />
        </Suspense>
    );
};

export default BlogDetails;
