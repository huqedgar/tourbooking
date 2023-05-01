import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Button from '../../shared/Button/Button';
import InputField from '../../shared/InputField/InputField';

const cx = classNames.bind(styles);

const Contact = () => {
    return (
        <section id="contact" className={cx('container')}>
            <div className={cx('titleBox')}>
                <h2>contact</h2>
                <span>contact for any query</span>
            </div>
            <div className={cx('contactBox')}>
                <form className={cx('contactLeft')}>
                    <div className={cx('contactFlex')}>
                        <InputField
                            id="yourname"
                            label="Your Name"
                            type="text"
                            placeholder="Enter your name."
                            required
                        />
                        <InputField
                            id="youremail"
                            label="Your Email"
                            type="email"
                            placeholder="Enter your email."
                            required
                        />
                    </div>
                    <div className={cx('contactColumn')}>
                        <InputField id="subject" label="Subject" type="text" placeholder="Enter subject." required />
                        <InputField
                            textarea
                            id="message"
                            label="Message"
                            placeholder="Enter message."
                            className="mb-4"
                            required
                        />
                    </div>
                    <Button type="submit" primary>
                        Send Message
                    </Button>
                </form>
                <div className={cx('contactRight')}>
                    <img src={require('../../assets/images/contact.jpg')} alt="about img" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
