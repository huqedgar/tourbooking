import classNames from 'classnames/bind';
import styles from './TourInfo.module.scss';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Button from '../../shared/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarDays,
    faCaretDown,
    faLocationDot,
    faMoneyBillTransfer,
    faPhone,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const TourInfo = () => {
    const [isClicked, setIsClicked] = useState(false);

    const sideRightRef = useRef(null);

    const [numAdult, setNumAdult] = useState(1);
    const [numChild, setNumChild] = useState(0);

    const [priceAdult, setPriceAdult] = useState('645.000');
    const [priceChild, setPriceChild] = useState('345.000');
    const [priceTotal, setPriceTotal] = useState(
        Number(priceAdult) * numAdult + Number(priceChild) * numChild + '.000',
    );

    const handleClick = () => {
        setIsClicked(!isClicked);
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
        <section className={cx('wrapperInfo')}>
            <div className={cx('sideLeft')}>
                <div className={cx('info')}>
                    <div className={cx('highlight')}>
                        <h3>Hightlights</h3>
                        <ul>
                            <li>Non culpa velit ea incididunt ut Lorem exercitation nulla est reprehenderit ipsum.</li>
                            <li>Cillum id voluptate dolor excepteur non cupidatat sit Lorem in in do eiusmod.</li>
                            <li>In magna sit tempor et dolor duis deserunt laboris.</li>
                            <li>
                                Sunt anim sit voluptate nisi sint exercitation enim in reprehenderit consectetur nostrud
                                do irure sit.
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
                            This picturesque sunset cruise in Phu Quoc Island is a real joy for sun-seeking tourists. As
                            the sun starts to slowly sink into the sea, we will then anchor down so you can appreciate
                            the stunning sunset and begin squid fishing. Not only that, you'll also learn professional
                            squid fishing techniques from fishermen and try your hand at it. And as the boat heads back
                            to shore, you'll enjoy a tasty seafood dinner. Make the most of your time at Phu Quoc, and
                            you will have an experience that's truly unforgettable!
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
                            btnFlex
                            leftIcon={<FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />}
                            primary
                            small
                            className="flex items-center"
                        >
                            Travel Advisor
                        </Button>
                    </div>
                </div>
                <div className={cx('additional')}>
                    <h3>Note</h3>
                    <ul>
                        <li>The timing provided for the itinerary may be changed without prior notice.</li>
                        <li>
                            In the wet season (from May to November), the tour will depart from An Thoi Harbor or Sao
                            Beach and there will be no sunset viewing.
                        </li>
                        <li>
                            Free pickup and drop-off service is only available for hotels located in Duong Dong Town.
                        </li>
                        <li>
                            Please advise in the Additional requests section if you have any food allergy or any
                            specific dietary requirements.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('sideRight')} ref={sideRightRef} style={{ position: 'sticky', top: '100px' }}>
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
                            <FontAwesomeIcon className={cx('faCaretDown')} icon={faCaretDown} onClick={handleClick} />
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
                                    third
                                    small
                                    className="border-1 border-black"
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
                        <Button type="submit" primary>
                            Book Now
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default TourInfo;
