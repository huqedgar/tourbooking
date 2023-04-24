import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TourDetails.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarDays,
    faCaretDown,
    faLocationDot,
    faMoneyBillTransfer,
    faPhone,
    faStar,
    faThumbsUp,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import { Rating } from 'react-simple-star-rating';
import Moment from 'react-moment';
import PaginatedItems from '../../components/PaginatedItems/PaginatedItems';

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

const TourDetails = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isLiked, setIsLiked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const [numLike, setNumLike] = useState(43);

    const sideRightRef = useRef(null);

    const [numAdult, setNumAdult] = useState(1);
    const [numChild, setNumChild] = useState(0);

    const [priceAdult, setPriceAdult] = useState('645.000');
    const [priceChild, setPriceChild] = useState('345.000');
    const [priceTotal, setPriceTotal] = useState(
        Number(priceAdult) * numAdult + Number(priceChild) * numChild + '.000',
    );

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

    const handleClick = () => {
        setIsClicked(!isClicked);
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
        const total = Number(priceAdult) * numAdult + Number(priceChild) * numChild;
        setPriceTotal(total + '.000');
    }, [numAdult, numChild, priceAdult, priceChild]);

    useEffect(() => {
        const handleScroll = () => {
            const { top } = sideRightRef.current.getBoundingClientRect();
            const card = document.querySelector(`.${styles.card}`);
            card.style.top = `${Math.max(top, 0)}px`;
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
                        <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                        Phu Quoc, Vietnam
                    </span>
                </div>

                <div className={cx('interaction')}>
                    <span className={cx('likeHeader', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                        <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                        {numLike}
                    </span>

                    <span className={cx('starHeader')}>
                        <FontAwesomeIcon className={cx('faStar')} icon={faStar} />
                        4.8
                    </span>
                </div>
            </section>

            <section className={cx('wrapperInfo')}>
                <div className={cx('sideLeft')}>
                    <div className={cx('info')}>
                        <div className={cx('highlight')}>
                            <h3>Hightlights</h3>
                            <ul>
                                <li>
                                    Non culpa velit ea incididunt ut Lorem exercitation nulla est reprehenderit ipsum.
                                </li>
                                <li>Cillum id voluptate dolor excepteur non cupidatat sit Lorem in in do eiusmod.</li>
                                <li>In magna sit tempor et dolor duis deserunt laboris.</li>
                                <li>
                                    Sunt anim sit voluptate nisi sint exercitation enim in reprehenderit consectetur
                                    nostrud do irure sit.
                                </li>
                            </ul>
                        </div>
                        <div className={cx('timeline')}>
                            <h3>Tour Itinerary</h3>
                            <Button primary small disabled>
                                Day 1
                            </Button>
                            <ul>
                                <li>Pick up at hotels located in Duong Dong Town or at a requested location.</li>
                                <li>Enjoy sunset.</li>
                                <li>Go squid fishing.</li>
                                <li>Have dinner.</li>
                                <li>Drop off and end of tour.</li>
                            </ul>
                            <Button primary small disabled>
                                Day 2
                            </Button>
                            <ul>
                                <li>Pick up at hotels located in Duong Dong Town or at a requested location.</li>
                                <li>Enjoy sunset.</li>
                                <li>Go squid fishing.</li>
                                <li>Have dinner.</li>
                                <li>Drop off and end of tour.</li>
                            </ul>
                        </div>
                        <div className={cx('experience')}>
                            <h3>What You’ll Experience</h3>
                            <p>
                                This picturesque sunset cruise in Phu Quoc Island is a real joy for sun-seeking
                                tourists. As the sun starts to slowly sink into the sea, we will then anchor down so you
                                can appreciate the stunning sunset and begin squid fishing. Not only that, you'll also
                                learn professional squid fishing techniques from fishermen and try your hand at it. And
                                as the boat heads back to shore, you'll enjoy a tasty seafood dinner. Make the most of
                                your time at Phu Quoc, and you will have an experience that's truly unforgettable!
                            </p>
                        </div>
                    </div>
                    <div className={cx('location')}>
                        <span>143 Trần Hưng Đạo, KP 7, TT Dương Đông, H.Phú Quốc, tỉnh Kiên Giang, Vietnam</span>
                        <div>Google Map</div>
                        <div className={cx('locationFooter')}>
                            <span>
                                <FontAwesomeIcon className={cx('faPhone')} icon={faPhone} />
                                Contact Partner: +84344564075
                            </span>
                            <Button
                                leftIcon={<FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />}
                                primary
                                small
                                className="flex items-center"
                            >
                                View Map
                            </Button>
                        </div>
                    </div>
                    <div className={cx('additional')}>
                        <h3>Note</h3>
                        <ul>
                            <li>The timing provided for the itinerary may be changed without prior notice.</li>
                            <li>
                                In the wet season (from May to November), the tour will depart from An Thoi Harbor or
                                Sao Beach and there will be no sunset viewing.
                            </li>
                            <li>
                                Free pickup and drop-off service is only available for hotels located in Duong Dong
                                Town.
                            </li>
                            <li>
                                Please advise in the Additional requests section if you have any food allergy or any
                                specific dietary requirements.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('sideRight')} ref={sideRightRef} style={{ position: 'sticky', top: '90px' }}>
                    <form className={cx('card')} action="submit">
                        <div className={cx('featureBox')}>
                            <span>
                                <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                                Valid on <h4 style={{ color: 'var(--text-light)' }}>25 Apr 2023</h4>
                            </span>
                            <span>
                                <FontAwesomeIcon className={cx('faPhone')} icon={faPhone} />
                                No Need to Reverve
                            </span>
                            <span>
                                <FontAwesomeIcon className={cx('faMoneyBillTransfer')} icon={faMoneyBillTransfer} />
                                Refundable until <h4>23 Apr 2023</h4>
                            </span>
                        </div>

                        <div className={cx('inputBox')}>
                            <label htmlFor="checkin">Visit Date</label>
                            <div className={cx('dateBox')}>
                                <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                                <input type="date" id="checkin" required />
                            </div>
                        </div>

                        <div className={cx('selectBox')}>
                            <h4>Total Visitors</h4>
                            <div className={cx('visitorBox')}>
                                <FontAwesomeIcon className={cx('faUsers')} icon={faUsers} />
                                <span>
                                    {numAdult} Adult - {numChild} Child
                                </span>
                                <FontAwesomeIcon
                                    className={cx('faCaretDown')}
                                    icon={faCaretDown}
                                    onClick={handleClick}
                                />
                            </div>
                            <div
                                className={cx(
                                    'visitorBoxSelect',
                                    isClicked ? 'visitorBoxSelectShow' : 'visitorBoxSelectHide',
                                )}
                            >
                                <div className={cx('visitorSelect')}>
                                    <div className={cx('visitorSelectTitle')}>
                                        <label htmlFor="Adult">Adult</label>
                                        <span>{priceAdult} VND</span>
                                    </div>
                                    <div className={cx('visitorSelectCounter')}>
                                        <Button
                                            type="button"
                                            primary
                                            small
                                            style={{
                                                color: 'var(--black)',
                                                backgroundColor: 'var(--primary)',
                                                border: '1px solid transparent',
                                            }}
                                            onClick={() => {
                                                if (numAdult > 1) {
                                                    setNumAdult(numAdult - 1);
                                                }
                                            }}
                                        >
                                            -
                                        </Button>
                                        <input
                                            type="number"
                                            id="Adult"
                                            min={0}
                                            value={numAdult}
                                            onFocus={(e) => {
                                                e.target.value = '';
                                            }}
                                            onChange={(e) => {
                                                if (e.target.value >= 1) {
                                                    setNumAdult(Number(e.target.value));
                                                }
                                            }}
                                            required
                                        />
                                        <Button
                                            type="button"
                                            primary
                                            small
                                            style={{
                                                color: 'var(--black)',
                                                backgroundColor: 'var(--primary)',
                                                border: '1px solid transparent',
                                            }}
                                            onClick={() => {
                                                if (numAdult < 999) {
                                                    setNumAdult(numAdult + 1);
                                                    console.log(numAdult);
                                                }
                                            }}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </div>

                                <div className={cx('visitorSelect')}>
                                    <div className={cx('visitorSelectTitle')}>
                                        <label htmlFor="Child">Child</label>
                                        <span>{priceChild} VND</span>
                                    </div>
                                    <div className={cx('visitorSelectCounter')}>
                                        <Button
                                            type="button"
                                            primary
                                            small
                                            style={{
                                                color: 'var(--black)',
                                                backgroundColor: 'var(--primary)',
                                                border: '1px solid transparent',
                                            }}
                                            onClick={() => {
                                                if (numChild > 0) {
                                                    setNumChild(numChild - 1);
                                                }
                                            }}
                                        >
                                            -
                                        </Button>
                                        <input
                                            type="number"
                                            id="Child"
                                            value={numChild}
                                            onFocus={(e) => {
                                                e.target.value = '';
                                            }}
                                            onChange={(e) => {
                                                if (e.target.value >= 0) {
                                                    setNumChild(Number(e.target.value));
                                                }
                                            }}
                                            required
                                        />
                                        <Button
                                            type="button"
                                            primary
                                            small
                                            style={{
                                                color: 'var(--black)',
                                                backgroundColor: 'var(--primary)',
                                                border: '1px solid transparent',
                                            }}
                                            onClick={() => {
                                                if (numChild < 999) {
                                                    setNumChild(numChild + 1);
                                                    console.log(numChild);
                                                }
                                            }}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </div>

                                <div className={cx('visitorSelectFooter')}>
                                    <div className={cx('visitorTotalPrice')}>
                                        <span>Total</span>
                                        <span>{priceTotal} VND</span>
                                    </div>
                                    <Button
                                        type="button"
                                        secondary
                                        small
                                        className="text-black font-medium"
                                        onClick={() => {
                                            isClicked ? setIsClicked(!isClicked) : setIsClicked(isClicked);
                                        }}
                                    >
                                        Done
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className={cx('cardFooter')}>
                            <div className={cx('priceBox')}>
                                <span className={cx('priceText')}>{priceAdult * 1.2 + '.000'} VND</span>
                                <span className={cx('priceTextSale')}>{priceAdult} VND</span>
                            </div>
                            <Button type="submit" primary style={{ color: 'var(--black)' }}>
                                Book Now
                            </Button>
                        </div>
                    </form>
                </div>
            </section>

            <section className={cx('wrapperComment')}>
                <div className={cx('ratingBox')}>
                    <span className={cx('star')}>
                        <FontAwesomeIcon className={cx('faStar')} icon={faStar} />
                        4.8
                    </span>
                    <span>2 customer's have a lot to say about their experiences:</span>
                </div>

                <div className={cx('commentBox')}>
                    <img src={require('../../assets/images/t-1.png')} alt="" />
                    <div className={cx('commentBody')}>
                        <div className={cx('commentNameBox')}>
                            <div className={cx('commentName')}>
                                <span>huycacto0109</span>
                                <span>
                                    {' '}
                                    - <Moment fromNow>2023-04-21T12:59-0500</Moment>
                                </span>
                            </div>
                            <Rating className={cx('rating')} initialValue={5} readonly></Rating>
                        </div>
                        <p>
                            Consequat labore pariatur ipsum aliquip eu. Esse eu id aute nostrud reprehenderit sit ea.
                            Excepteur ut veniam tempor et do elit. Veniam sit aliquip do consectetur et laborum eu qui
                            dolor sit aliquip incididunt aliquip veniam. Quis laborum dolor et exercitation excepteur
                            mollit elit aliqua tempor incididunt laboris sunt.
                        </p>
                    </div>
                </div>

                <div className={cx('commentBox')}>
                    <img src={require('../../assets/images/t-1.png')} alt="" />
                    <div className={cx('commentBody')}>
                        <div className={cx('commentNameBox')}>
                            <div className={cx('commentName')}>
                                <span>huycacto0109</span>
                                <span>
                                    {' '}
                                    - <Moment fromNow>2023-04-21T12:59-0500</Moment>
                                </span>
                            </div>
                            <Rating className={cx('rating')} initialValue={5} readonly></Rating>
                        </div>
                        <p>
                            Consequat labore pariatur ipsum aliquip eu. Esse eu id aute nostrud reprehenderit sit ea.
                            Excepteur ut veniam tempor et do elit. Veniam sit aliquip do consectetur et laborum eu qui
                            dolor sit aliquip incididunt aliquip veniam. Quis laborum dolor et exercitation excepteur
                            mollit elit aliqua tempor incididunt laboris sunt.
                        </p>
                    </div>
                </div>

                <div className={cx('commentBox')}>
                    <img src={require('../../assets/images/t-1.png')} alt="" />
                    <div className={cx('commentBody')}>
                        <div className={cx('commentNameBox')}>
                            <div className={cx('commentName')}>
                                <span>huycacto0109</span>
                                <span>
                                    {' '}
                                    - <Moment fromNow>2023-04-21T12:59-0500</Moment>
                                </span>
                            </div>
                            <Rating className={cx('rating')} initialValue={5} readonly></Rating>
                        </div>
                        <p>
                            Consequat labore pariatur ipsum aliquip eu. Esse eu id aute nostrud reprehenderit sit ea.
                            Excepteur ut veniam tempor et do elit. Veniam sit aliquip do consectetur et laborum eu qui
                            dolor sit aliquip incididunt aliquip veniam. Quis laborum dolor et exercitation excepteur
                            mollit elit aliqua tempor incididunt laboris sunt.
                        </p>
                    </div>
                </div>

                {/* <PaginatedItems itemsPerPage={4} /> */}
            </section>
        </>
    );
};

export default TourDetails;
