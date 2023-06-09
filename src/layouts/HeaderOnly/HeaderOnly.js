import { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faRightFromBracket, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
import { MyUserContext } from '../../contexts/MyContext';
import Button from '../../shared/Button/Button';
import Image from '../../shared/Image/Image';

const cx = classNames.bind(styles);

const navBar = [
    {
        link: 'home',
        name: 'home',
    },
    {
        link: 'tours',
        name: 'tours',
    },
    {
        link: 'destinations',
        name: 'destinations',
    },
    {
        link: 'blogs',
        name: 'blogs',
    },
    {
        link: 'about',
        name: 'about',
    },
    {
        link: 'contact',
        name: 'contact',
    },
];

const HeaderOnly = () => {
    const [user, dispatch] = useContext(MyUserContext);
    const [visible, setVisible] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [id, setId] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();

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

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleMouseEnter = () => {
        setIsClicked(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsClicked(false);
        }, 500);
    };

    const handleClickLogin = () => {
        navigate('/login', { state: { from: location.pathname } });
    };

    const handleClickLogout = () => {
        setIsClicked(!isClicked);
        navigate('/login', { state: { from: location.pathname } });
        dispatch({
            type: 'logout',
        });
    };

    return (
        <header
            style={{
                backgroundColor: visible || showMenu ? 'background-color: rgba(0, 0, 0, 0.5)' : 'transparent',
                backdropFilter: visible || showMenu ? 'saturate(180%) blur(10px)' : '',
                boxShadow: visible ? 'var(--box-shadow-primary)' : 'none',
            }}
        >
            <nav className={cx('navBar')}>
                <NavLink to={'/home/'}>
                    <h3>Tour Booking</h3>
                </NavLink>
                <div className={cx('btnMenu')} onClick={() => setShowMenu((value) => !value)}>
                    {showMenu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
                </div>
                <ul style={{ height: showMenu ? 360 : 0 }}>
                    {navBar.map((nav, index) => (
                        <li key={index}>
                            <Link
                                to={'/home/'}
                                className={
                                    id === nav.name
                                        ? visible || showMenu
                                            ? cx('navLink', 'navLinkScroll', 'active')
                                            : cx('navLink', 'active')
                                        : visible || showMenu
                                        ? cx('navLink', 'navLinkScroll')
                                        : cx('navLink')
                                }
                            >
                                {nav.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                {user !== null ? (
                    <div className={cx('userAvatarBox')}>
                        <Button
                            btnFlex
                            third
                            small
                            leftIcon={<Image className={cx('userAvatar')} src={user.avatar} alt={user.avatar} />}
                            rightIcon={<FontAwesomeIcon className={cx('faChevronDown')} icon={faChevronDown} />}
                            className="font-semithin"
                            onMouseEnter={handleMouseEnter}
                        >
                            {user.last_name}
                        </Button>
                        <div
                            className={cx('userSelectBox', isClicked ? 'userSelectBoxShow' : 'userSelectBoxHide')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <ul className={cx('userSelect')}>
                                <li onClick={handleClick}>
                                    <NavLink className={cx('userSelectItem')} to={'/profile/'}>
                                        <FontAwesomeIcon className={cx('faUser')} icon={faUser} />
                                        Profile
                                    </NavLink>
                                </li>
                                <li className={cx('userSelectItem')} onClick={handleClickLogout}>
                                    <FontAwesomeIcon className={cx('faRightFromBracket')} icon={faRightFromBracket} />
                                    Log Out
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <Button primary small onClick={handleClickLogin}>
                        Login / Register
                    </Button>
                )}
            </nav>
        </header>
    );
};

export default HeaderOnly;
