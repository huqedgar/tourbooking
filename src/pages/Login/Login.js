import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const Login = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login-left')}>
                    <h1>Login</h1>
                    <form className={cx('login-form')}>
                        <div className={cx('login-form-content')}>
                            <div className={cx('form-item')}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" />
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                            </div>
                            <div className={cx('form-item', 'checkbox')}>
                                <input type="checkbox" id="rememberMeCheckbox" />
                                <label htmlFor="rememberMeCheckbox" className={cx('checkboxLabel')}>
                                    Remember me
                                </label>
                            </div>
                            <div className={cx('form-item')}>
                                <Button type="submit" className="w-full" primary>
                                    Login
                                </Button>
                            </div>
                            <hr />
                        </div>
                        <div className={cx('login-form-footer')}>
                            <Button
                                className="w-full font-light"
                                leftIcon={<FontAwesomeIcon icon={faFacebookF} />}
                                secondary
                            >
                                Facebook
                            </Button>

                            <Button
                                className="w-full font-light"
                                leftIcon={<FontAwesomeIcon icon={faGoogle} />}
                                secondary
                            >
                                Google
                            </Button>
                        </div>
                    </form>
                </div>
                <div className={cx('login-right')}>
                    <h1>Hello, Friend!</h1>
                    <p>
                        Dolor occaecat cupidatat minim tempor pariatur veniam ex nisi exercitation nulla dolore in
                        mollit tempor. Consequat labore et nulla minim irure Lorem eiusmod culpa aute. Ad ad nisi sunt
                        mollit esse deserunt et sit veniam adipisicing do Lorem. Excepteur in pariatur proident sit
                        reprehenderit consequat non. Dolor occaecat cupidatat minim tempor.
                    </p>
                    <NavLink to={'/register'}>
                        <Button className="border-white" primary>
                            Register
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;
