import axios from 'axios';
import Cookies from 'js-cookie';

export const endpoints = {
    // comments: (lessonId) => `/lessons/${lessonId}/comments/`,
    // 'rating-lesson': (lessonId) => `/lessons/${lessonId}/rating/`,
    'current-user': '/users/current-user/',
    login: '/o/token/',
    register: '/users/',
    tours: '/tours/',
    'tour-details': (tourId) => `/tours/${tourId}/details-tour/`,
    'tour-comments': (tourId) => `/tours/${tourId}/comments/`,
    'types-customer': '/types-customer/',
    'create-ticket': '/tickets/create-ticket/',
    'my-wish-list': '/wishlist/my-wish-list/',
    'add-wish-list': (tourId) => `/wishlist/${tourId}/add-wish-list/`,
    blogs: '/blogs/',
    'blog-details': (blogId) => `/blogs/${blogId}/details-blog/`,
    'blog-comments': (blogId) => `/blogs/${blogId}/comments/`,
    'my-like-blog': '/likes-blog/my-like-blog/',
    'add-like-blog': (blogId) => `/likes-blog/${blogId}/add-like-blog/`,
    'add-comment-blog': (blogId) => `/comments-blog/${blogId}/add-comment-blog/`,
};

export const authAPI = () =>
    axios.create({
        baseURL: 'https://thuctran2207.pythonanywhere.com/',
        headers: {
            Authorization: `Bearer ${Cookies.get('access-token')}`,
        },
    });

export default axios.create({
    baseURL: 'https://thuctran2207.pythonanywhere.com/',
});
