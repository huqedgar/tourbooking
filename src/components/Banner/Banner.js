import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

import Button from '../Button/Button';

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <section id="home" className={cx('wrapperHome')}>
            <div className={cx('videos')}>
                <video
                    src={require('../../assets/videos/vid-2.mp4')}
                    className={cx('video', 'live')}
                    id="video2"
                    autoPlay
                    muted
                    loop
                ></video>
            </div>

            <div className={cx('videoControls')}>
                <svg
                    className={cx('prev')}
                    data-id="video"
                    xmlns="http://www.w3.org/2000/svg"
                    width="86.742"
                    height="73.216"
                    viewBox="0 0 86.742 73.216"
                >
                    <path d="M22.897 73.216L0 48.158 44.032 0v6.983L27.159 25.498l17.248 18.94L84.897 0v6.985L68.533 24.942l18.209 19.961v7.01L65.35 28.435 47.593 47.931l16.681 18.304v6.981l-40.299-44.22L6.468 48.207l16.429 18.028z"></path>
                </svg>
                <h1>Dubai</h1>
                <svg
                    className={cx('next')}
                    data-id="video"
                    xmlns="http://www.w3.org/2000/svg"
                    width="86.742"
                    height="73.216"
                    viewBox="0 0 86.742 73.216"
                >
                    <path d="M63.845 73.216l22.897-25.058L42.71 0v6.983l16.873 18.515-17.248 18.94L1.845 0v6.985l16.364 17.957L0 44.903v7.01l21.392-23.478 17.757 19.496-16.681 18.304v6.981l40.299-44.22 17.507 19.211-16.429 18.028z"></path>
                </svg>
            </div>

            {/* Title home */}
            <div className={cx('contentBox')}>
                <strong>Explore The World</strong>
                <h1>The right destination for you and your family</h1>
                <p>Ut quis ipsum incididunt id pariatur aliquip laboris dolore non.</p>
                <Button style={{ marginTop: '20px' }} primary>
                    Explore Now
                </Button>
            </div>
        </section>
    );
};

export default Banner;
