import classNames from 'classnames/bind';
import styles from './MyAccount.module.scss';
import Button from '../../shared/Button/Button';
import InputField from '../../shared/InputField/InputField';

const cx = classNames.bind(styles);

const MyAccount = () => {
    return (
        <div className={cx('myAccount')}>
            <h3>Personal Data</h3>
            <hr />
            <div className={cx('changeAvatarBox')}>
                <img src={require('../../assets/images/d-1.jpg')} alt="" />
                <Button third small>
                    Change Avatar
                </Button>
            </div>
            <div className={cx('infoBox')}>
                <InputField id="fullname" label="Full Name" type="text" placeholder="Enter your full name." required />
                <div className={cx('inputFlex')}>
                    <InputField id="email" label="Email" type="email" placeholder="Enter your email." required />
                    <InputField
                        id="phoneNumber"
                        label="Phone Number"
                        type="number"
                        placeholder="Enter your phone number."
                        required
                    />
                </div>
                <div className={cx('inputFlex')}>
                    <div className={cx('input')}>
                        <span>Gender</span>
                        <select className={cx('genderBox')} id="slGender" name="slGender">
                            <option value="gender" defaultValue disabled hidden>
                                Gender
                            </option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <InputField id="birthdate" label="Birthdate" type="date" required />
                </div>
                <InputField id="address" label="Your Address" type="text" placeholder="Enter your address." required />
            </div>
            <div className={cx('infoBottom')}>
                <Button third small className="text-black">
                    Cancel
                </Button>
                <Button primary small>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default MyAccount;
