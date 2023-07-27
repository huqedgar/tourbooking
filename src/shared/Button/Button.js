import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
   to,
   href,
   btnFlex = false,
   primary = false,
   secondary = false,
   third = false,
   disabled = false,
   small = false,
   verysmall = false,
   children,
   className,
   leftIcon,
   rightIcon,
   onClick,
   ...passProps
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps
   };

   // Remove event listener when btn is disabled
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   const classes = cx({
      [className]: className,
      btnFlex,
      primary,
      secondary,
      third,
      disabled,
      small,
      verysmall
   });

   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   btnFlex: PropTypes.bool,
   primary: PropTypes.bool,
   secondary: PropTypes.bool,
   third: PropTypes.bool,
   disabled: PropTypes.bool,
   small: PropTypes.bool,
   verysmall: PropTypes.bool,
   children: PropTypes.node,
   className: PropTypes.string,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   onClick: PropTypes.func
};

export default Button;
