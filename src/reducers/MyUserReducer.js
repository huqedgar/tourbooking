import Cookies from 'js-cookie';

const MyUserReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return JSON.parse(action.payload);
        case 'logout':
            Cookies.remove('access-token');
            Cookies.remove('current-user');
            return null;
        case 'TOUR_DETAILS':
            return { ...state, ...action.payload };
        case 'BLOG_DETAILS':
            return { ...state, ...action.payload };
        case 'UPDATE_USER':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default MyUserReducer;
