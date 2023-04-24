import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

const About = () => {
    return (
        <section id="about" className={cx('container')}>
            <div className={cx('titleBox')}>
                <h2>our story</h2>
                <span>things to know about us</span>
            </div>
            <div className={cx('aboutBox')}>
                <div className={cx('aboutLeft')}>
                    <img src={require('../../assets/images/d-1.jpg')} alt="about img" />
                </div>
                <div className={cx('aboutRight')}>
                    <h2>15 Years of Experience</h2>
                    <p>
                        Ea ut eu duis mollit. Consectetur aliqua dolore deserunt veniam magna esse elit qui. Pariatur
                        ullamco enim exercitation amet minim dolore. Aliquip laborum quis ipsum in. Voluptate veniam sit
                        Lorem excepteur eu commodo esse quis aute. Quis amet Lorem duis reprehenderit commodo anim
                        laboris aliqua deserunt dolore minim aliquip.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique explicabo blanditiis quidem
                        consequuntur qui quaerat fuga iste tenetur consequatur porro. Aliquam maiores alias doloribus at
                        quisquam quo numquam perferendis. Odit!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
