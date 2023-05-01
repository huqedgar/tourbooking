import { useReducer } from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter } from 'react-router-dom';
import { MyUserContext } from './contexts/MyContext';
import MyUserReducer from './reducers/MyUserReducer';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import 'moment/locale/vi';
import moment from 'moment';

moment().local('vi');

function App() {
    const [user, dispatch] = useReducer(MyUserReducer, Cookies.get('current-user') || null);
    return (
        <MyUserContext.Provider value={[user, dispatch]}>
            <BrowserRouter>
                <DefaultLayout />
            </BrowserRouter>
        </MyUserContext.Provider>
    );
}

export default App;
