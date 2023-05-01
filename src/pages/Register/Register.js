import { useRef, useState } from 'react';
import API, { endpoints } from '../../configs/API';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '../../shared/Button/Button';
import InputField from '../../shared/InputField/InputField';

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
                            <InputField id="name" label="Name" type="text" placeholder="Enter your name." required />
                            <InputField
                                id="emailAddress"
                                label="Email Address"
                                type="email"
                                placeholder="Enter your email address."
                                required
                            />
                            <InputField
                                id="username"
                                label="Username"
                                type="text"
                                placeholder="Enter your username."
                                required
                            />
                            <InputField
                                id="password"
                                label="Password"
                                type="password"
                                placeholder="Enter your password."
                                required
                            />
                            <InputField
                                id="repeatPassword"
                                label="Repeat Password"
                                type="password"
                                placeholder="Enter your repeat password."
                                required
                            />
                            <Button type="submit" className="w-full" primary>
                                Register
                            </Button>
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
