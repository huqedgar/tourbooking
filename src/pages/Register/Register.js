import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const Register = () => {
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
                    <NavLink to={'/login'}>
                        <Button className="border-white" primary>
                            Login
                        </Button>
                    </NavLink>
                </div>

                <div className={cx('login-left')}>
                    <h1>Register</h1>
                    <form className={cx('login-form')}>
                        <div className={cx('login-form-content')}>
                            <div className={cx('form-item')}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Enter your name." />
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="emailAddress">Email Address</label>
                                <input type="email" id="emailAddress" placeholder="Enter your email address." />
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" placeholder="Enter your username." />
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password." />
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="repeatPassword">Repeat Password</label>
                                <input type="password" id="repeatPassword" placeholder="Enter your repeat password." />
                            </div>
                            <div className={cx('form-item')}>
                                <Button type="submit" className="w-full" primary>
                                    Register
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
            </div>
        </div>
    );
};

export default Register;
