import classNames from 'classnames/bind';
import styles from './CardHorizontal.module.scss';
// import { VN } from 'country-flag-icons/react/3x2';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const CardHorizontal = ({ country, place, price, src }) => {
    return (
        <div className={cx('card')}>
            {/* <h3>
                {country} <VN title={country} className={cx('flagIcon')} />
            </h3> */}
            <img src={src} alt=""></img>
            <div className={cx('cardBelow')}>
                <Button primary small>
                    Read Now
                </Button>
                <h5>
                    {place} <br /> <span>{price}</span>
                </h5>
            </div>
        </div>
    );
};

export default CardHorizontal;
