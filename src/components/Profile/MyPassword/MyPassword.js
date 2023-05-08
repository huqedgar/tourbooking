import { useContext, useState, useCallback } from 'react';
import { MyUserContext } from '../../../contexts/MyContext';
import { authAPI, endpoints } from '../../../configs/API';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './MyPassword.module.scss';
import Button from '../../../shared/Button/Button';
import InputField from '../../../shared/InputField/InputField';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';

const cx = classNames.bind(styles);

const MyPassword = () => {
    const [user] = useContext(MyUserContext);
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleNewPasswordChange = useCallback((e) => {
        setNewPassword(e.target.value);
    }, []);

    const handleConfirmNewPasswordChange = useCallback((e) => {
        setConfirmNewPassword(e.target.value);
    }, []);

    const handleUpdatePassword = useCallback(
        async (evt) => {
            evt.preventDefault();
            if (newPassword.trim() === '' || confirmNewPassword.trim() === '') {
                return toast.warning('Input fields cannot be left blank!');
            }
            if (newPassword !== confirmNewPassword) {
                return toast.warning('Password and confirm password do not match!');
            }
            setLoading(true);
            try {
                const res = await authAPI().patch(
                    endpoints['user-id'](user.id),
                    {
                        password: newPassword,
                    },
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    },
                );
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
                }
            } catch (ex) {
                toast.error(ex.message);
            } finally {
                setLoading(false);
            }
        },
        [user.id, newPassword, confirmNewPassword],
    );

    return (
        <form onSubmit={handleUpdatePassword} className={cx('myAccount')}>
            <h3>Personal Data</h3>
            <hr />
            <div className={cx('infoBox')}>
                <div className={cx('inputFlex')}>
                    <InputField
                        id="newPassword"
                        label="New Password"
                        type="password"
                        placeholder="Enter your new password."
                        onChange={handleNewPasswordChange}
                        required
                    />
                    <InputField
                        id="confirmNewPassword"
                        label="Confirm New Password"
                        type="password"
                        placeholder="Enter confirm new password."
                        onChange={handleConfirmNewPasswordChange}
                        required
                    />
                </div>
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

export default MyPassword;
