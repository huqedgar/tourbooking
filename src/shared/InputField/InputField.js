import classNames from 'classnames/bind';
import styles from './InputField.module.scss';

const cx = classNames.bind(styles);

const InputField = ({ textarea = false, id, label, type, value, placeholder, onChange, className, ...props }) => {
    let Component = 'input';

    if (textarea) {
        Component = 'textarea';
    }

    return (
        <div className={cx('input', type === 'checkbox' ? 'checkbox' : '')}>
            {type !== 'checkbox' ? label && <label htmlFor={id}>{label}</label> : ''}
            <Component
                type={type}
                id={id}
                value={value}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
            {type === 'checkbox' ? label && <label htmlFor={id}>{label}</label> : ''}
        </div>
    );
};

export default InputField;
