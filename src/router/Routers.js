import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import SearchResultList from '../pages/SearchResultList/SearchResultList';
import TourDetails from '../pages/TourDetails/TourDetails';
import NotFound404 from '../pages/NotFound404/NotFound404';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={'/home'} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<SearchResultList />} />
            <Route path="/404" element={<NotFound404 />} />
        </Routes>
    );
};

export default Routers;
