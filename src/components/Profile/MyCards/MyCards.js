import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './MyCards.module.scss';
import Button from '../../../shared/Button/Button';

const cx = classNames.bind(styles);

const MyCards = () => {
    return (
        <div className={cx('myCards')}>
            <div className={cx('myCardsHeader')}>
                <h3>Your Cards</h3>
                <Button third small leftIcon={<FontAwesomeIcon className={cx('faPlus')} icon={faPlus} />}>
                    Add New
                </Button>
            </div>
            <div className={cx('myCardsList')}>
                <div className={cx('card')}>
                    <div className={cx('cardIcon')}>
                        <img src={require('../../../assets/icons/mbbank.png')} alt="" />
                        <img src={require('../../../assets/icons/visa.png')} alt="" />
                    </div>
                    <div className={cx('cardInfo')}>
                        <span>Card Number</span>
                        <span>6262 **** **** 1515</span>
                    </div>
                    <div className={cx('cardFlex')}>
                        <div className={cx('cardInfo')}>
                            <span>Name On Card</span>
                            <span>Vo Hung</span>
                        </div>
                        <div className={cx('cardInfo')}>
                            <span>Validity</span>
                            <span>04/27</span>
                        </div>
                    </div>
                    <hr />
                    <div className={cx('cardAction')}>
                        <Button third small className="w-full">
                            Edit
                        </Button>
                        <Button third small className="w-full">
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCards;
