import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BlogDetails.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faMessage, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Button from '../../shared/Button/Button';
import InputField from '../../shared/InputField/InputField';
import Moment from 'react-moment';
import moment from 'moment-timezone';

const cx = classNames.bind(styles);

const CAROUSEL_DATA = [
    {
        url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        url: 'https://images.unsplash.com/photo-1681826415794-847bf97ad644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    },
    {
        url: 'https://images.unsplash.com/photo-1681549734363-5c8a06428d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    },
];

const BlogDetails = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [numLike, setNumLike] = useState(43);
    const sideRightRef = useRef(null);

    const incrementIndex = () => {
        console.log(currentIndex);
        setCurrentIndex((currentIndex) => {
            return (currentIndex + 1) % CAROUSEL_DATA.length;
        });
    };

    const decrementIndex = () => {
        console.log(currentIndex);
        setCurrentIndex((currentIndex) => {
            return currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1;
        });
    };

    const handleClickLike = () => {
        setIsLiked(!isLiked);
        if (isLiked) {
            setNumLike(numLike - 1);
        } else {
            setNumLike(numLike + 1);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const { top } = sideRightRef.current.getBoundingClientRect();
            const card1 = document.querySelector(`.${styles.card1}`);
            card1.style.top = `${Math.max(top, 0)}px`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section className={cx('wrapperCarousel')}>
                <img src={CAROUSEL_DATA[currentIndex].url} alt="" />
                <div
                    onClick={decrementIndex}
                    className="absolute left-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded p-1 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-12"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>

                <div
                    onClick={incrementIndex}
                    className="absolute right-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded p-1 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-12"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>

                <div className={cx('title')}>
                    <h2>Phu Quoc Sunset Viewing and Night Squid Fishing</h2>
                    <span>
                        <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                        {moment('2023-04-21T12:59-0500').format('DD/MM/YYYY')}
                    </span>
                </div>

                <span className={cx('likeHeader', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                    <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                    {numLike}
                </span>
            </section>

            <section className={cx('wrapperInfo')}>
                <div className={cx('sideLeft')}>
                    <h3>What You’ll Experience</h3>
                    <p>
                        This picturesque sunset cruise in Phu Quoc Island is a real joy for sun-seeking tourists. As the
                        sun starts to slowly sink into the sea, we will then anchor down so you can appreciate the
                        stunning sunset and begin squid fishing. Not only that, you'll also learn professional squid
                        fishing techniques from fishermen and try your hand at it. And as the boat heads back to shore,
                        you'll enjoy a tasty seafood dinner. Make the most of your time at Phu Quoc, and you will have
                        an experience that's truly unforgettable!
                    </p>
                    <p>
                        This picturesque sunset cruise in Phu Quoc Island is a real joy for sun-seeking tourists. As the
                        sun starts to slowly sink into the sea, we will then anchor down so you can appreciate the
                        stunning sunset and begin squid fishing. Not only that, you'll also learn professional squid
                        fishing techniques from fishermen and try your hand at it. And as the boat heads back to shore,
                        you'll enjoy a tasty seafood dinner. Make the most of your time at Phu Quoc, and you will have
                        an experience that's truly unforgettable!
                    </p>
                    <p>
                        This picturesque sunset cruise in Phu Quoc Island is a real joy for sun-seeking tourists. As the
                        sun starts to slowly sink into the sea, we will then anchor down so you can appreciate the
                        stunning sunset and begin squid fishing. Not only that, you'll also learn professional squid
                        fishing techniques from fishermen and try your hand at it. And as the boat heads back to shore,
                        you'll enjoy a tasty seafood dinner. Make the most of your time at Phu Quoc, and you will have
                        an experience that's truly unforgettable!
                    </p>
                    <p>
                        This picturesque sunset cruise in Phu Quoc Island is a real joy for sun-seeking tourists. As the
                        sun starts to slowly sink into the sea, we will then anchor down so you can appreciate the
                        stunning sunset and begin squid fishing. Not only that, you'll also learn professional squid
                        fishing techniques from fishermen and try your hand at it. And as the boat heads back to shore,
                        you'll enjoy a tasty seafood dinner. Make the most of your time at Phu Quoc, and you will have
                        an experience that's truly unforgettable!
                    </p>
                    <p>
                        This picturesque sunset cruise in Phu Quoc Island is a real joy for sun-seeking tourists. As the
                        sun starts to slowly sink into the sea, we will then anchor down so you can appreciate the
                        stunning sunset and begin squid fishing. Not only that, you'll also learn professional squid
                        fishing techniques from fishermen and try your hand at it. And as the boat heads back to shore,
                        you'll enjoy a tasty seafood dinner. Make the most of your time at Phu Quoc, and you will have
                        an experience that's truly unforgettable!
                    </p>
                </div>
                <div className={cx('sideRight')} ref={sideRightRef} style={{ position: 'sticky', top: '100px' }}>
                    <form className={cx('card1')} action="submit">
                        <h3>LEAVE A COMMENT</h3>
                        <InputField textarea id="message" label="Message" placeholder="Enter message." required />
                        <Button type="submit" primary small>
                            Send Message
                        </Button>
                    </form>
                </div>
            </section>

            <section className={cx('wrapperComment')}>
                <div className={cx('ratingBox')}>
                    <span className={cx('likeFooter', isLiked ? 'liked' : 'unlike')}>
                        <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                        {numLike}
                    </span>
                    <span>2 customer's have a lot to say about their experiences:</span>
                </div>

                <div className={cx('commentBox')}>
                    <img src={require('../../assets/images/d-1.jpg')} alt="" />
                    <div className={cx('commentBody')}>
                        <div className={cx('commentName')}>
                            <span>huycacto0109</span>
                            <span>
                                {'- '}
                                <Moment clas fromNow>
                                    2023-04-21T12:59-0500
                                </Moment>
                            </span>
                        </div>
                        <p>
                            Consequat labore pariatur ipsum aliquip eu. Esse eu id aute nostrud reprehenderit sit ea.
                            Excepteur ut veniam tempor et do elit. Veniam sit aliquip do consectetur et laborum eu qui
                            dolor sit aliquip incididunt aliquip veniam. Quis laborum dolor et exercitation excepteur
                            mollit elit aliqua tempor incididunt laboris sunt.
                        </p>
                        <div className={cx('commentReact')}>
                            <span className={cx('reactAction', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                                <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                                {numLike}
                            </span>
                            <span className={cx('reactAction', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                                <FontAwesomeIcon className={cx('faMessage')} icon={faMessage} />
                                {numLike}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={cx('commentBox')}>
                    <img src={require('../../assets/images/d-1.jpg')} alt="" />
                    <div className={cx('commentBody')}>
                        <div className={cx('commentName')}>
                            <span>huycacto0109</span>
                            <span>
                                {'- '}
                                <Moment clas fromNow>
                                    2023-04-21T12:59-0500
                                </Moment>
                            </span>
                        </div>
                        <p>
                            Consequat labore pariatur ipsum aliquip eu. Esse eu id aute nostrud reprehenderit sit ea.
                            Excepteur ut veniam tempor et do elit. Veniam sit aliquip do consectetur et laborum eu qui
                            dolor sit aliquip incididunt aliquip veniam. Quis laborum dolor et exercitation excepteur
                            mollit elit aliqua tempor incididunt laboris sunt.
                        </p>
                        <div className={cx('commentReact')}>
                            <span className={cx('reactAction', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                                <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                                {numLike}
                            </span>
                            <span className={cx('reactAction', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                                <FontAwesomeIcon className={cx('faMessage')} icon={faMessage} />
                                {numLike}
                            </span>
                        </div>
                    </div>
                </div>

                {/* <PaginatedItems itemsPerPage={4} /> */}
            </section>
        </>
    );
};

export default BlogDetails;
