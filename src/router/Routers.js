import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../layouts/components/Header/Header';
import HeaderOnly from '../layouts/HeaderOnly/HeaderOnly';
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
         <Route path='/' element={<Navigate to={'/home/'} />} />
         <Route
            path='/home/'
            element={
               <>
                  <Header /> <Home />
               </>
            }
         />
         <Route
            path='/blogs/:blogId/details-blog/'
            element={
               <>
                  <HeaderOnly /> <BlogDetails />
               </>
            }
         />
         <Route
            path='/tours/:tourId/details-tour/'
            element={
               <>
                  <HeaderOnly /> <TourDetails />
               </>
            }
         />
         <Route
            path='/search/'
            element={
               <>
                  <HeaderOnly /> <SearchResultList />
               </>
            }
         />
         <Route
            path='/profile/'
            element={
               <>
                  <HeaderOnly /> <Profile />
               </>
            }
         />
         <Route
            path='/login/'
            element={
               <>
                  <HeaderOnly /> <Login />
               </>
            }
         />
         <Route
            path='/register/'
            element={
               <>
                  <HeaderOnly /> <Register />
               </>
            }
         />
         <Route
            path='/*'
            element={
               <>
                  <HeaderOnly /> <NotFound404 />
               </>
            }
         />
      </Routes>
   );
};

export default Routers;
