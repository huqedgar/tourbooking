import { useState, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import API, { endpoints } from '../../configs/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '../../shared/Button/Button';
import InputField from '../../shared/InputField/InputField';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';

const cx = classNames.bind(styles);

const Register = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const setValue = useCallback((e) => {
        const { name, value } = e.target;
        setUser((current) => ({ ...current, [name]: value }));
    }, []);

    const handleRegister = useCallback(
        async (evt) => {
            evt.preventDefault();
            try {
                if (
                    user.firstName.trim() === '' ||
                    user.lastName.trim() === '' ||
                    user.username.trim() === '' ||
                    user.password.trim() === ''
                ) {
                    return toast.warning('Input fields cannot be left blank!');
                }
                if (user.password !== user.confirmPassword) {
                    return toast.warning('Password and confirm password do not match!');
                }
                setLoading(true);
                const form = new FormData();
                form.append('first_name', user.firstName);
                form.append('last_name', user.lastName);
                form.append('username', user.username);
                form.append('password', user.password);
                const res = await API.post(endpoints['register'], form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (res.status === 201) {
                    toast.promise(
                        () =>
                            new Promise((resolve) => {
                                setTimeout(() => resolve('Successfully!'), 1500);
                            }),
                        {
                            pending: 'Processing!',
                            success: 'Successfully!',
                            error: 'Error!',
                        },
                    );
                    setTimeout(() => navigate('/login'), 4500);
                } else {
                    return toast.error('The system is having an error! Please come back later!');
                }
            } catch (ex) {
                toast.error(ex.message);
            } finally {
                setLoading(false);
            }
        },
        [navigate, user],
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login-right')}>
                    <h1>Welcome Back!</h1>
                    <p>
                        Dolor occaecat cupidatat minim tempor pariatur veniam ex nisi exercitation nulla dolore in
                        mollit tempor. Consequat labore et nulla minim irure Lorem eiusmod culpa aute. Ad ad nisi sunt
                        mollit esse deserunt et sit veniam adipisicing do Lorem. Excepteur in pariatur proident sit
                        reprehenderit consequat non. Dolor occaecat cupidatat minim tempor.
                    </p>
                    <NavLink to={'/login/'}>
                        <Button className="border-white" primary>
                            Login
                        </Button>
                    </NavLink>
                </div>

                <div className={cx('login-left')}>
                    <h1>Register</h1>
                    <form onSubmit={handleRegister} className={cx('login-form')}>
                        <div className={cx('login-form-content')}>
                            <InputField
                                id="firstName"
                                label="First Name"
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name."
                                value={user.firstName}
                                onChange={setValue}
                                required
                            />
                            <InputField
                                id="lastName"
                                label="Last Name"
                                type="text"
                                name="lastName"
                                placeholder="Enter your last name."
                                value={user.lastName}
                                onChange={setValue}
                                required
                            />
                            <InputField
                                id="username"
                                label="Username"
                                type="text"
                                name="username"
                                placeholder="Enter your username."
                                value={user.username}
                                onChange={setValue}
                                required
                            />
                            <InputField
                                id="password"
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Enter your password."
                                value={user.password}
                                onChange={setValue}
                                required
                            />
                            <InputField
                                id="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                placeholder="Enter your confirm password."
                                value={user.confirmPassword}
                                onChange={setValue}
                                required
                            />
                            {loading ? (
                                <Button className="w-full" third disabled>
                                    <LoadingSpinner />
                                </Button>
                            ) : (
                                <Button type="submit" className="w-full" primary>
                                    Register
                                </Button>
                            )}
                            <hr />
                        </div>
                        <div className={cx('login-form-footer')}>
                            <Button
                                className="w-full font-light"
                                leftIcon={<FontAwesomeIcon icon={faFacebookF} />}
                                third
                                btnFlex
                            >
                                Facebook
                            </Button>

                            <Button
                                className="w-full font-light"
                                leftIcon={<FontAwesomeIcon icon={faGoogle} />}
                                third
                                btnFlex
                            >
                                Google
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
