import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const categories = [
    {
        link: '#',
        name: 'home',
    },
    {
        link: '#tours',
        name: 'tours',
    },
    {
        link: '#destinations',
        name: 'destinations',
    },
    {
        link: '#about',
        name: 'about us',
    },
];

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [id, setId] = useState('home');

    const touggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const sections = document.querySelectorAll('section');

        if (scrolled > 0) {
            setVisible(true);
        } else {
            setVisible(false);
        }

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 75) {
                setId(section.getAttribute('id'));
            }
        });
    };

    useEffect(() => {
        touggleVisible();
        window.addEventListener('scroll', touggleVisible);

        return () => {
            window.removeEventListener('scroll', touggleVisible);
        };
    }, []);

    return (
        <header
            style={{
                backgroundColor: visible || showMenu ? '#232730' : 'transparent',
                boxShadow: visible ? '2px 20px 30px var(--shadow-color)' : 'none',
            }}
        >
            <nav className={cx('navBar')}>
                <NavLink to={'/home'}>
                    <h3>Tour Booking</h3>
                </NavLink>
                <div className={cx('btnMenu')} onClick={() => setShowMenu((value) => !value)}>
                    {showMenu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
                </div>
                <ul style={{ height: showMenu ? 360 : 0 }}>
                    {categories.map((category, index) => (
                        <li key={index}>
                            <a
                                href={category.link}
                                className={id === category.name ? cx('navLink', 'active') : cx('navLink')}
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                    <NavLink className={cx('margin')} to={'/login'}>
                        <Button secondary>Login</Button>
                    </NavLink>
                    <NavLink to={'/register'}>
                        <Button secondary>Register</Button>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
