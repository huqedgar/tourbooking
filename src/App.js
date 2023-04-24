import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import 'moment/locale/vi';
import moment from 'moment';

moment().local('vi');

function App() {
    return (
        <BrowserRouter>
            <DefaultLayout />
        </BrowserRouter>
    );
}

export default App;
