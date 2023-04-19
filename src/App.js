import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

import Login from './pages/Login/Login';

function App() {
    return (
        <BrowserRouter>
            <DefaultLayout />
        </BrowserRouter>
    );
}

export default App;
