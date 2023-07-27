import { useContext, useState, useCallback, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { MyUserContext } from '../../contexts/MyContext';
import API, { authAPI, endpoints } from '../../configs/API';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '../../shared/Button/Button';
import InputField from '../../shared/InputField/InputField';

const cx = classNames.bind(styles);

const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [remember, setRemember] = useState(false);
   const [user, dispatch] = useContext(MyUserContext);
   const navigate = useNavigate();
   const location = useLocation();

   const handleUsernameChange = useCallback((e) => {
      setUsername(e.target.value);
   }, []);

   const handlePasswordChange = useCallback((e) => {
      setPassword(e.target.value);
   }, []);

   const handleRememberChange = useCallback(() => {
      setRemember(!remember);
   }, [remember]);

   const handleLogin = useCallback(
      async (evt) => {
         evt.preventDefault();
         if (username.trim() === '' || password.trim() === '') {
            return toast.warning('Must enter username and password!');
         }
         try {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);
            formData.append('client_id', process.env.REACT_APP_CLIENT_ID);
            formData.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
            formData.append('grant_type', 'password');

            const res = await API.post(endpoints['login'], formData, {
               headers: {
                  'Content-Type': 'multipart/form-data;'
               }
            });

            var date = new Date();
            date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

            if (remember) {
               Cookies.set('access-token', res.data.access_token, { expires: date });
            } else {
               Cookies.set('access-token', res.data.access_token);
            }

            const user = await authAPI().get(endpoints['current-user']);

            if (remember) {
               Cookies.set('current-user', JSON.stringify(user.data), { expires: date });
            } else {
               Cookies.set('current-user', JSON.stringify(user.data));
            }

            dispatch({
               type: 'login',
               payload: JSON.stringify(user.data)
            });
         } catch (ex) {
            toast.error(ex.message);
         }
      },
      [dispatch, username, password, remember]
   );

   useEffect(() => {
      if (user !== null) {
         if (location.state && location.state.from) {
            navigate(location.state.from);
         } else {
            navigate('/');
         }
      }
   }, [user, navigate, location]);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <div className={cx('login-left')}>
               <h1>Login</h1>
               <form onSubmit={handleLogin} className={cx('login-form')}>
                  <div className={cx('login-form-content')}>
                     <InputField
                        id='username'
                        label='Username'
                        type='text'
                        placeholder='Enter your username.'
                        onChange={handleUsernameChange}
                        required
                     />
                     <InputField
                        id='password'
                        label='Password'
                        type='password'
                        placeholder='Enter your password.'
                        onChange={handlePasswordChange}
                        required
                     />
                     <InputField
                        id='rememberMeCheckbox'
                        label='Remember me'
                        type='checkbox'
                        defaultChecked={remember}
                        onChange={handleRememberChange}
                     />
                     <Button type='submit' primary>
                        Login
                     </Button>
                     <hr />
                  </div>
                  <div className={cx('login-form-footer')}>
                     <Button
                        className='w-full font-light'
                        leftIcon={<FontAwesomeIcon icon={faFacebookF} />}
                        third
                        btnFlex
                     >
                        Facebook
                     </Button>

                     <Button className='w-full font-light' leftIcon={<FontAwesomeIcon icon={faGoogle} />} third btnFlex>
                        Google
                     </Button>
                  </div>
               </form>
            </div>
            <div className={cx('login-right')}>
               <h1>Hello, Friend!</h1>
               <p>
                  Dolor occaecat cupidatat minim tempor pariatur veniam ex nisi exercitation nulla dolore in mollit
                  tempor. Consequat labore et nulla minim irure Lorem eiusmod culpa aute. Ad ad nisi sunt mollit esse
                  deserunt et sit veniam adipisicing do Lorem. Excepteur in pariatur proident sit reprehenderit
                  consequat non. Dolor occaecat cupidatat minim tempor.
               </p>
               <NavLink to={'/register/'}>
                  <Button className='border-white' primary>
                     Register
                  </Button>
               </NavLink>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Login;
