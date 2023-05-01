import axios from 'axios';
import Cookies from 'js-cookie';

export const endpoints = {
    // categories: '/categories/',
    // courses: '/courses/',
    // lessons: (courseId) => `/courses/${courseId}/lessons/`,
    // 'lesson-details': (lessonId) => `/lessons/${lessonId}/`,
    login: '/o/token/',
    'current-user': '/users/current-user/',
    register: '/users/',
    // comments: (lessonId) => `/lessons/${lessonId}/comments/`,
    // 'like-lesson': (lessonId) => `/lessons/${lessonId}/like/`,
    // 'rating-lesson': (lessonId) => `/lessons/${lessonId}/rating/`,
    tours: '/tours/',
    'tour-details': (tourId) => `/tours/${tourId}/details-tour/`,
};

export const authAPI = axios.create({
    baseURL: 'https://thuctran2207.pythonanywhere.com/',
    headers: {
        Authorization: `Bearer ${Cookies.get('access-token')}`,
    },
});

export default axios.create({
    baseURL: 'https://thuctran2207.pythonanywhere.com/',
});
