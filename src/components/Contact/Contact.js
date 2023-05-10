import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Button from '../../shared/Button/Button';
import InputField from '../../shared/InputField/InputField';

const cx = classNames.bind(styles);

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_374175s', 'template_0gdog76', form.current, '6uPsaCp_ILJ7p9IYD').then(
            (result) => {
                console.log(result.text);
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
            },
            (error) => {
                toast.error(error.text);
            },
        );
    };
    return (
        <>
            <section id="contact" className={cx('container')}>
                <div className={cx('titleBox')}>
                    <h2>contact</h2>
                    <span>contact for any query</span>
                </div>
                <div className={cx('contactBox')}>
                    <form ref={form} onSubmit={sendEmail} className={cx('contactLeft')}>
                        <div className={cx('contactFlex')}>
                            <InputField
                                id="yourname"
                                label="Your Name"
                                type="text"
                                name="user_name"
                                placeholder="Enter your name."
                                required
                            />
                            <InputField
                                id="youremail"
                                label="Your Email"
                                type="email"
                                name="user_email"
                                placeholder="Enter your email."
                                required
                            />
                        </div>
                        <div className={cx('contactColumn')}>
                            <InputField
                                id="subject"
                                label="Subject"
                                type="text"
                                name="user_subject"
                                placeholder="Enter subject."
                                required
                            />
                            <InputField
                                textarea
                                id="message"
                                label="Message"
                                name="message"
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
            <ToastContainer />
        </>
    );
};

export default Contact;
