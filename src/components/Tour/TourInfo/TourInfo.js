import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { authAPI, endpoints } from '../../../configs/API';
import { MyUserContext } from '../../../contexts/MyContext';
import { NumericFormat } from 'react-number-format';
import moment from 'moment-timezone';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBarcode,
    faCalendarDays,
    faCaretDown,
    faEnvelope,
    faLocationDot,
    faMoneyBill,
    faMoneyBillTransfer,
    faPhone,
    faUser,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './TourInfo.module.scss';
import Image from '../../../shared/Image/Image';
import Button from '../../../shared/Button/Button';
import InputField from '../../../shared/InputField/InputField';
import Modal from '../../../shared/Modal/Modal';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// create custom icon
const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: require('../../../assets/icons/placeholder.png'),
    iconSize: [38, 38], // size of the icon
});

const cx = classNames.bind(styles);

const TourInfo = ({ tour, descriptions, typesCustomer }) => {
    //--- For UI
    const sideRightRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    //--- For Logic
    const [numAdult, setNumAdult] = useState(1);
    const [numChild, setNumChild] = useState(0);
    const [priceAdult, setPriceAdult] = useState(null);
    const [priceChild, setPriceChild] = useState(null);
    const [priceTotal, setPriceTotal] = useState(null);

    const [user] = useContext(MyUserContext);
    const { tourId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    //--- Handle UI
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

    // Show/Hide Select Click
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    // Show/Hide Modal Order Detail
    const handleModal1Click = () => {
        if (user) {
            if (user.email !== '' && user.phonenumber !== '') {
                setShowModal(!showModal);
            } else {
                setShowModal1(!showModal1);
            }
        } else {
            navigate('/login', { state: { from: location.pathname } });
        }
    };

    const handleModal2Click = () => {
        setShowModal2(!showModal2);
    };

    //--- Handle Logic
    useEffect(() => {
        const adultPrice =
            typesCustomer[0].sales_off === 'Not SaleOff'
                ? typesCustomer[0].price_booked
                : typesCustomer[0].sales_off.the_last_price;
        const childPrice =
            typesCustomer[1].sales_off === 'Not SaleOff'
                ? typesCustomer[1].price_booked
                : typesCustomer[1].sales_off.the_last_price;

        setPriceAdult(adultPrice);
        setPriceChild(childPrice);
    }, [typesCustomer]);

    useEffect(() => {
        setPriceTotal(priceAdult * numAdult + priceChild * numChild + (numAdult + numChild) * Number(tour.price_tour));
    }, [priceAdult, priceChild, numAdult, numChild, tour.price_tour]);

    const handleAdultClickPlus = () => {
        if (numAdult < 999) {
            setNumAdult(numAdult + 1);
        }
    };

    const handleAdultClickMinus = () => {
        if (numAdult > 1) {
            setNumAdult(numAdult - 1);
        }
    };

    const handleAdultChange = (e) => {
        if (e.target.value >= 1) {
            setNumAdult(Number(e.target.value));
        }
    };

    const handleChildClickPlus = () => {
        if (numChild < 999) {
            setNumChild(numChild + 1);
        }
    };

    const handleChildClickMinus = () => {
        if (numChild > 0) {
            setNumChild(numChild - 1);
        }
    };

    const handleChildChange = (e) => {
        if (e.target.value >= 0) {
            setNumChild(Number(e.target.value));
        }
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let isSuccess = false;
        const process = async (typePeople, amount) => {
            try {
                const form = new FormData();
                form.append('tour', tourId);
                form.append('type_people', typePeople);
                form.append('amount', amount);
                const res = await authAPI().post(endpoints['create-ticket'], form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log(res.status);
                if (res.status === 204) {
                    return toast.warning('You already have your ticket for this tour and its pending.');
                } else if (res.status === 201) {
                    isSuccess = true;
                } else {
                    isSuccess = false;
                    return toast.error(res.statusText);
                }
            } catch (ex) {
                toast.error(ex.message);
            }
        };
        if (numAdult >= 1) {
            await process(typesCustomer[0].id, numAdult);
            if (isSuccess && numChild > 0) {
                await process(typesCustomer[1].id, numChild);
            }
            if (isSuccess) {
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
                setShowModal2(true);
            }
        }
    };

    return (
        <section className={cx('wrapperInfo')}>
            <div className={cx('sideLeft')}>
                <div className={cx('info')}>
                    <div className={cx('highlight')}>
                        <h3>Hightlights</h3>
                        <ul>
                            {descriptions.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('timeline')}>
                        <h3>Tour Itinerary</h3>
                        {descriptions.tour_itinerarys.map((itinerarys, index) => (
                            <React.Fragment key={index}>
                                <Button primary small disabled>
                                    Day {index + 1}
                                </Button>
                                <ul>
                                    {itinerarys.map((itinerary, index) => (
                                        <li key={index}>{itinerary}</li>
                                    ))}
                                </ul>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className={cx('experience')}>
                        <h3>What You’ll Experience</h3>
                        <p>{descriptions.experience}</p>
                    </div>
                </div>
                <div className={cx('location')}>
                    <span className={cx('spanLocation')}>
                        {tour.address_tour} , {tour.country_tour}
                    </span>
                    <MapContainer
                        center={[10.77653, 106.700981]}
                        zoom={13}
                        style={{ width: '100%', height: '180px' }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[10.77653, 106.700981]} icon={customIcon}>
                            <Popup>{'Hello, I am here!'}</Popup>
                        </Marker>
                    </MapContainer>
                    <div className={cx('locationFooter')}>
                        <span className={cx('spanLocation')}>
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
                        {descriptions.notes.map((note, index) => (
                            <li key={index}>{note}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={cx('sideRight')} ref={sideRightRef} style={{ position: 'sticky', top: '100px' }}>
                <div className={cx('card')}>
                    <div className={cx('featureBox')}>
                        <span>
                            <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                            Valid on{' '}
                            <h4 style={{ color: 'var(--text-light)' }}>
                                {moment.tz(tour.date_begin_tour, 'UTC').format('DD/MM/YYYY')}
                            </h4>
                        </span>
                        <span>
                            <FontAwesomeIcon className={cx('faPhone')} icon={faPhone} />
                            No Need to Reverve
                        </span>
                        <span>
                            <FontAwesomeIcon className={cx('faMoneyBillTransfer')} icon={faMoneyBillTransfer} />
                            Refundable until{' '}
                            <h4>{moment.tz(tour.date_begin_tour, 'UTC').subtract(1, 'days').format('DD/MM/YYYY')}</h4>
                        </span>
                    </div>
                    <div className={cx('inputBox')}>
                        <label htmlFor="checkin">Visit Date</label>
                        <div className={cx('dateBox')}>
                            <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                            <input
                                type="date"
                                id="checkin"
                                value={moment.tz(tour.date_begin_tour, 'UTC').format('YYYY-MM-DD')}
                                disabled
                            />
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
                        <div className={cx('visitorBoxSelect', isClicked ? 'show' : 'hide')}>
                            <div className={cx('visitorSelect')}>
                                <div className={cx('visitorSelectTitle')}>
                                    <label htmlFor="Adult">Adult</label>
                                    <span>
                                        <NumericFormat
                                            className="w-5/6"
                                            value={priceAdult}
                                            allowLeadingZeros
                                            thousandSeparator=","
                                            decimalScale={0}
                                            suffix={' VND'}
                                        />
                                    </span>
                                </div>
                                <div className={cx('visitorSelectCounter')}>
                                    <Button type="button" third small onClick={handleAdultClickMinus}>
                                        -
                                    </Button>
                                    <input
                                        type="number"
                                        id="Adult"
                                        min={0}
                                        value={numAdult}
                                        onChange={(e) => handleAdultChange(e)}
                                        required
                                    />
                                    <Button type="button" third small onClick={handleAdultClickPlus}>
                                        +
                                    </Button>
                                </div>
                            </div>

                            <div className={cx('visitorSelect')}>
                                <div className={cx('visitorSelectTitle')}>
                                    <label htmlFor="Child">Child</label>
                                    <span>
                                        <NumericFormat
                                            className="w-5/6"
                                            value={priceChild}
                                            allowLeadingZeros
                                            thousandSeparator=","
                                            decimalScale={0}
                                            suffix={' VND'}
                                        />
                                    </span>
                                </div>
                                <div className={cx('visitorSelectCounter')}>
                                    <Button type="button" third small onClick={handleChildClickMinus}>
                                        -
                                    </Button>
                                    <input
                                        type="number"
                                        id="Child"
                                        value={numChild}
                                        onChange={(e) => handleChildChange(e)}
                                        required
                                    />
                                    <Button type="button" third small onClick={handleChildClickPlus}>
                                        +
                                    </Button>
                                </div>
                            </div>

                            <div className={cx('visitorSelectFooter')}>
                                <div className={cx('visitorTotalPrice')}>
                                    <span>Total</span>
                                    <span>
                                        <NumericFormat
                                            value={priceTotal}
                                            allowLeadingZeros
                                            thousandSeparator=","
                                            decimalScale={0}
                                            suffix={' VND'}
                                        />
                                    </span>
                                </div>
                                <Button type="button" third small onClick={handleClick}>
                                    Done
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('cardFooter')}>
                        <div className={cx('payMethods')}>
                            <span>Payment Methods</span>
                            <InputField
                                id="directPayment"
                                name="payMethods"
                                label="Direct payment"
                                type="radio"
                                defaultChecked
                            />
                            <InputField
                                id="onlinePayment"
                                name="payMethods"
                                label="Online payment via momo"
                                type="radio"
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className={cx('priceBox')}>
                                <NumericFormat
                                    className={cx('priceText')}
                                    value={tour.price_tour * 1.2}
                                    allowLeadingZeros
                                    thousandSeparator=","
                                    decimalScale={0}
                                    suffix={' VND'}
                                />
                                <NumericFormat
                                    className={cx('priceTextSale')}
                                    value={tour.price_tour}
                                    allowLeadingZeros
                                    thousandSeparator=","
                                    decimalScale={0}
                                    suffix={' VND'}
                                />
                            </div>
                            <Button primary onClick={handleModal1Click}>
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {user && (
                <div className={cx('modalBackground', { hidden: !showModal })} onClick={handleModal1Click}>
                    <form onSubmit={handleSubmit} className={cx('modalContent')}>
                        <h2>Tour Booking</h2>
                        <div className={cx('orderDetails')}>
                            <h3>Order Details</h3>
                            <div className={cx('orderTour')}>
                                <Image src={tour.image_tour} alt={tour.image_tour} />
                                <div className={cx('orderTourInfo')}>
                                    <h4>{tour.name_tour}</h4>
                                    <span>
                                        <FontAwesomeIcon className={cx('faLocationDot')} icon={faLocationDot} />
                                        {tour.address_tour} , {tour.country_tour}
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                                        {moment.tz(tour.date_begin_tour, 'UTC').format('DD/MM/YYYY')}
                                    </span>
                                </div>
                            </div>
                            <ul className={cx('billDetails')}>
                                <li>
                                    <span>
                                        <FontAwesomeIcon className={cx('faBarcode')} icon={faBarcode} />
                                        Bill Code:
                                    </span>
                                    <span>We will create for you after payment</span>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon className={cx('faCalendarDays')} icon={faCalendarDays} />
                                        Visit Date:
                                    </span>
                                    <span>{moment.tz(tour.date_begin_tour, 'UTC').format('DD/MM/YYYY')}</span>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon className={cx('faUsers')} icon={faUsers} />
                                        Total Visitors:
                                    </span>
                                    <span>
                                        {numAdult} Adult - {numChild} Child
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon className={cx('faMoneyBill')} icon={faMoneyBill} />
                                        Total Price:
                                    </span>
                                    <span className="font-semibold text-blue-400">
                                        <NumericFormat
                                            value={priceTotal}
                                            allowLeadingZeros
                                            thousandSeparator=","
                                            decimalScale={0}
                                            suffix={' VND'}
                                        />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('orderDetails')}>
                            <h3>Contact Info</h3>
                            <ul className={cx('billDetails')}>
                                <li>
                                    <span>
                                        <FontAwesomeIcon className={cx('faUser')} icon={faUser} />
                                        Fullname:
                                    </span>
                                    <span>
                                        {user.last_name} {user.first_name}
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon className={cx('faEnvelope')} icon={faEnvelope} />
                                        Email:
                                    </span>
                                    <span>{user.email}</span>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon className={cx('faPhone')} icon={faPhone} />
                                        Phone Number:
                                    </span>
                                    <span>{user.phone_number}</span>
                                </li>
                            </ul>
                        </div>
                        <Button type="submit" primary>
                            CONFIRM
                        </Button>
                    </form>
                </div>
            )}
            {showModal1 && <Modal infoUpdate onClick={handleModal1Click} />}
            {showModal2 && <Modal onClick={handleModal2Click} />}
        </section>
    );
};

export default TourInfo;
