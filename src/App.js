import { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MyUserContext } from './contexts/MyContext';
import { SkeletonTheme } from 'react-loading-skeleton';
import MyUserReducer from './reducers/MyUserReducer';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Cookies from 'js-cookie';
import 'moment/locale/vi';
import moment from 'moment';
moment().local('vi');

function App() {
   const [user, dispatch] = useReducer(
      MyUserReducer,
      Cookies.get('current-user') ? JSON.parse(Cookies.get('current-user')) : null
   );

   return (
      <SkeletonTheme baseColor='var(--bg)' highlightColor='var(--bg-hover)'>
         <BrowserRouter>
            <MyUserContext.Provider value={[user, dispatch]}>
               <DefaultLayout />
            </MyUserContext.Provider>
         </BrowserRouter>
      </SkeletonTheme>
   );
}

export default App;
