import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import BlogDetails from '../pages/BlogDetails/BlogDetails';
import TourDetails from '../pages/TourDetails/TourDetails';
import SearchResultList from '../pages/SearchResultList/SearchResultList';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NotFound404 from '../pages/NotFound404/NotFound404';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={'/home/'} />} />
            <Route path="/home/" element={<Home />} />
            <Route path="/blogs/:blogId/details-blog/" element={<BlogDetails />} />
            <Route path="/tours/:tourId/details-tour/" element={<TourDetails />} />
            <Route path="/search/" element={<SearchResultList />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/register/" element={<Register />} />
            <Route path="/*" element={<NotFound404 />} />
        </Routes>
    );
};

export default Routers;
