import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const Contact = () => {
    return (
        <section id="contact" className={cx('container')}>
            <div className={cx('titleBox')}>
                <h2>contact</h2>
                <span>contact for any query</span>
            </div>
            <div className={cx('contactBox')}>
                <div className={cx('contactLeft')}>
                    <div className={cx('contactFlex')}>
                        <div className={cx('input')}>
                            <label htmlFor="yourname">Your Name</label>
                            <input type="text" id="yourname" placeholder="Enter your name." required />
                        </div>
                        <div className={cx('input')}>
                            <label htmlFor="youremail">Your Email</label>
                            <input type="email" id="youremail" placeholder="Enter your email." required />
                        </div>
                    </div>
                    <div className={cx('contactColumn')}>
                        <div className={cx('input')}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" placeholder="Enter subject." required />
                        </div>
                        <div className={cx('input')}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Enter message" required />
                        </div>
                        <Button primary>Send Message</Button>
                    </div>
                </div>
                <div className={cx('contactRight')}>
                    <img src={require('../../assets/images/contact.jpg')} alt="about img" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
