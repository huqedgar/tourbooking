import classNames from 'classnames/bind';
import styles from './InputField.module.scss';

const cx = classNames.bind(styles);

const InputField = ({ textarea = false, id, label, type, name, value, placeholder, onChange, className, ...props }) => {
   let Component = 'input';

   if (textarea) {
      Component = 'textarea';
   }

   return (
      <div className={cx('input', type === 'checkbox' || type === 'radio' ? 'checkbox' : '')}>
         {type !== 'checkbox' && type !== 'radio' ? label && <label htmlFor={id}>{label}</label> : ''}
         <Component
            type={type}
            id={id}
            value={value}
            name={name}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
         />
         {type === 'checkbox' || type === 'radio' ? label && <label htmlFor={id}>{label}</label> : ''}
      </div>
   );
};

export default InputField;
