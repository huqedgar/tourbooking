import axios from 'axios';
import Cookies from 'js-cookie';

export const endpoints = {
    // categories: '/categories/',
    // courses: '/courses/',
    // lessons: (courseId) => `/courses/${courseId}/lessons/`,
    // 'lesson-details': (lessonId) => `/lessons/${lessonId}/`,
    // comments: (lessonId) => `/lessons/${lessonId}/comments/`,
    // 'like-lesson': (lessonId) => `/lessons/${lessonId}/like/`,
    // 'rating-lesson': (lessonId) => `/lessons/${lessonId}/rating/`,
    'current-user': '/users/current-user/',
    login: '/o/token/',
    register: '/users/',
    tours: '/tours/',
    'tour-details': (tourId) => `/tours/${tourId}/details-tour/`,
    'tour-comments': (tourId) => `/tours/${tourId}/comments/`,
    blogs: '/blogs/',
    'blog-details': (blogId) => `/blogs/${blogId}/details-blog/`,
    'blog-comments': (blogId) => `/blogs/${blogId}/comments/`,
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
