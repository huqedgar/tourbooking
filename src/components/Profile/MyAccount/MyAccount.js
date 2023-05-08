import { useContext, useRef, useState, useCallback } from 'react';
import { MyUserContext } from '../../../contexts/MyContext';
import { authAPI, endpoints } from '../../../configs/API';
import Select from 'react-select';
import moment from 'moment-timezone';
import { toast } from 'react-toastify';
import { AiFillFileImage } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import classNames from 'classnames/bind';
import styles from './MyAccount.module.scss';
import Button from '../../../shared/Button/Button';
import InputField from '../../../shared/InputField/InputField';
import Image from '../../../shared/Image/Image';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);

const options = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'other', label: 'Other' },
];

const MyAccount = () => {
    const [user, dispatch] = useContext(MyUserContext);
    const [account, setMyAccount] = useState(user);
    const [selectedOption, setSelectedOption] = useState(options.find((option) => option.value === user.gender) || '');
    const [loading, setLoading] = useState(false);
    const avatar = useRef(null);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('No selected file');

    const setValue = useCallback((e) => {
        const { name, value } = e.target;
        setMyAccount((current) => ({ ...current, [name]: value }));
    }, []);

    const handleChooseAvt = useCallback(({ target: { files } }) => {
        if (files) {
            files[0] && setFileName(files[0].name);
            setImage(URL.createObjectURL(files[0]));
        }
    }, []);

    const handleDeleteAvt = useCallback(() => {
        setFileName('No selected file');
        setImage(null);
        // Clear the file input to allow re-selection of the same file
        avatar.current.value = null;
    }, [avatar]);

    const handleUpdateInfo = useCallback(
        async (evt) => {
            evt.preventDefault();
            try {
                if (
                    account.first_name.trim() === '' ||
                    account.last_name.trim() === '' ||
                    account.email.trim() === '' ||
                    account.phone_number === ''
                ) {
                    return toast.warning('Input fields cannot be left blank!');
                }
                setLoading(true);
                const form = new FormData();
                form.append('first_name', account.first_name);
                form.append('last_name', account.last_name);
                form.append('email', account.email);
                form.append('phone_number', account.phone_number);
                form.append('gender', selectedOption.value);
                form.append('date_of_birth', account.date_of_birth);
                form.append('address', account.address);
                if (avatar.current.files.length > 0) {
                    form.append('avatar', avatar.current.files[0]);
                }
                const res = await authAPI().patch(endpoints['user-id'](user.id), form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (res.status === 200) {
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
                    dispatch({
                        type: 'UPDATE_USER',
                        payload: {
                            first_name: account.first_name,
                            last_name: account.last_name,
                            email: account.email,
                            phone_number: account.phone_number,
                            gender: selectedOption.value,
                            date_of_birth: account.date_of_birth,
                            address: account.address,
                            avatar:
                                avatar.current.files.length > 0
                                    ? URL.createObjectURL(avatar.current.files[0])
                                    : account.avatar,
                        },
                    });
                    handleDeleteAvt();
                    Cookies.set('current-user', JSON.stringify(account));
                } else {
                    return toast.error('The system is having an error! Please come back later!');
                }
            } catch (ex) {
                toast.error(ex.message);
            } finally {
                setLoading(false);
            }
        },
        [user.id, dispatch, selectedOption, account, handleDeleteAvt],
    );

    // Use a key to force re-render the Image component when image changes
    const avatarKey = image ? image : account.avatar;

    return (
        <form onSubmit={handleUpdateInfo} className={cx('myAccount')}>
            <h3>Personal Data</h3>
            <hr />
            <div className={cx('changeAvatarBox')}>
                <input
                    type="file"
                    accept="image/*"
                    className="input-field1"
                    ref={avatar}
                    onChange={handleChooseAvt}
                    hidden
                />
                <Image key={avatarKey} src={avatarKey} alt={avatarKey} onClick={() => avatar.current.click()} />
                <div className={cx('uploaded-row')}>
                    <AiFillFileImage color="#1475cf" />
                    <span className={cx('upload-content')}>
                        {fileName} -
                        <MdDelete onClick={handleDeleteAvt} />
                    </span>
                </div>
            </div>
            <div className={cx('infoBox')}>
                <div className={cx('inputFlex')}>
                    <InputField
                        id="firstName"
                        label="First Name"
                        type="text"
                        placeholder="Enter your first name."
                        name="first_name"
                        value={account.first_name}
                        onChange={setValue}
                        required
                    />
                    <InputField
                        id="lastName"
                        label="Last Name"
                        type="text"
                        placeholder="Enter your last name."
                        name="last_name"
                        value={account.last_name}
                        onChange={setValue}
                        required
                    />
                </div>
                <div className={cx('inputFlex')}>
                    <InputField
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="Enter your email."
                        name="email"
                        value={account.email}
                        onChange={setValue}
                        required
                    />
                    <InputField
                        id="phoneNumber"
                        label="Phone Number"
                        type="number"
                        placeholder="Enter your phone number."
                        name="phone_number"
                        value={account.phone_number}
                        onChange={setValue}
                        required
                    />
                </div>
                <div className={cx('inputFlex')}>
                    <div className={cx('input')}>
                        <span>Gender</span>
                        <Select
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderRadius: '5px',
                                    borderColor: state.isFocused ? 'transparent' : 'var(--text-light)',
                                    padding: '4.5px 0px',
                                }),
                            }}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>
                    <InputField
                        id="birthdate"
                        label="Birthdate"
                        type="date"
                        name="date_of_birth"
                        value={
                            account.date_of_birth ? moment.tz(account.date_of_birth, 'UTC').format('YYYY-MM-DD') : ''
                        }
                        onChange={setValue}
                    />
                </div>
                <InputField
                    id="address"
                    label="Your Address"
                    type="text"
                    placeholder="Enter your address."
                    name="address"
                    value={account.address}
                    onChange={setValue}
                />
            </div>
            <div className={cx('infoBottom')}>
                {loading ? (
                    <Button third small disabled>
                        <LoadingSpinner />
                    </Button>
                ) : (
                    <Button type="submit" primary small>
                        Save
                    </Button>
                )}
            </div>
        </form>
    );
};

export default MyAccount;
