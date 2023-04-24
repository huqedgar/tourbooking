import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    <strong>Travel</strong>
                    <p>Quis ex minim ut reprehenderit ea dolor cillum non in velit non.</p>
                    <div className={cx('social')}>
                        <a href="https://www.facebook.com/huqedgar/" aria-label="facebook" title="facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com/huqedgar" aria-label="twitter" title="twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com/huqedgar/" aria-label="instagram" title="instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://github.com/huqedgar" aria-label="github" title="github">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                <div className={cx('subscribe')}>
                    <h2>Subscribe</h2>
                    <p>
                        Lorem tempor labore fugiat quis anim occaecat occaecat laborum occaecat sit. Fugiat eiusmod sint
                        excepteur consequat ipsum qui.
                    </p>
                    <div className={cx('input')}>
                        <input type="email" placeholder="Enter your Email Address" />
                        <Button primary>Subscribe</Button>
                    </div>
                    <ul>
                        <li>
                            2362 <h6>Years Serving the travel Industry</h6>
                        </li>
                        <li>
                            4568 <h6>Global Patnership</h6>
                        </li>
                        <li>
                            5682 <h6>Industry Awards since 2023</h6>
                        </li>
                        <li>
                            67988 <h6>Subscribe</h6>
                        </li>
                    </ul>
                </div>
                <div className={cx('box')}>
                    <strong>Contact</strong>
                    <span>
                        <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                        Ho Chi Minh City, VN
                    </span>
                    <span>
                        <FontAwesomeIcon className={cx('faSquareEnvelope')} icon={faSquareEnvelope} />
                        1951012044hung@ou.edu.vn
                    </span>
                    <span>
                        <FontAwesomeIcon className={cx('faPhone')} icon={faPhone} />
                        034.456.4075
                    </span>
                </div>
            </div>
            <span className={cx('copyright')}>Created by huqedgar</span>
        </footer>
    );
};

export default Footer;
