import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../components-helper/ripple';

// eslint-disable-next-line react/display-name
const Button = forwardRef(
  (
    {
      children,
      variant,
      size,
      color,
      disabled,
      disableRipple,
      fullWidth,
      href,
      buttonType,
      endIcon,
      startIcon,
      rounded,
      className,
      noShadow,
      uppercase,
      iconOnly,
      ...res
    },
    btnRef
  ) => {
    const rippleEffect = new Ripple();

    rounded = rounded ? 'circle' : 'square';

    let mainClassName = [
      'fo-button',
      `fo-button-${variant}`,
      `fo-button-${color}`,
      `fo-button-${size}`,
      noShadow ? `` : 'fo-has-shadow',
      iconOnly ? 'fo-button-icon' : '',
      rounded,
      uppercase ? '' : 'fo-text-not-uppercase',
      endIcon ? 'fo-has-end-icon' : '',
      startIcon ? 'fo-has-start-icon' : '',
      fullWidth ? 'w-full flex-grow flex' : 'inline-flex',
      disabled ? 'cursor-not-allowed' : 'cursor-pointer'
    ];

    if (typeof className === 'object') {
      mainClassName = [...mainClassName, ...className];
    } else {
      mainClassName.push(className);
    }
    if (size === 'large') {
      size = 'fo-button-lg';
    }
    if (size === 'largest') {
      size = 'fo-button-xl';
    }

    // let buttonSize = size.replace('small', 'fo-button-sm').replace('medium', 'fo-button-md').replace('extra-large', 'fo-button-3xl').replace('extra', 'fo-button-2xl')

    // mainClassName.push(buttonSize)

    mainClassName = mainClassName.filter((i) => i && typeof i !== 'undefined');

    if (href && buttonType === 'link') {
      return (
        <a
          href={href}
          {...res}
          className={mainClassName.join(' ')}
          onMouseUp={(e) => !disabled && !disableRipple && rippleEffect.create(e, color, variant)}>
          {startIcon ?? ''}
          {iconOnly ? children : <span>{children}</span>}
          {endIcon ?? ''}
        </a>
      );
    }

    return (
      <button
        disabled={disabled}
        {...res}
        className={mainClassName.join(' ')}
        onMouseUp={(e) => !disabled && !disableRipple && rippleEffect.create(e, color, variant)}>
        {startIcon ?? ''}
        {iconOnly ? children : <span>{children}</span>}
        {endIcon ?? ''}
      </button>
    );
  }
);

Button.defaultProps = {
  variant: 'contained',
  size: 'normal',
  className: '',
  color: 'blue',
  disabled: false,
  noShadow: false,
  disableRipple: false,
  fullWidth: false,
  href: null,
  endIcon: null,
  rounded: false,
  startIcon: null,
  uppercase: true,
  iconOnly: false,
  buttonType: 'button'
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf([
    'blue',
    'light-blue',
    'green',
    'light-green',
    'lime',
    'red',
    'pink',
    'purple',
    'deep-purple',
    'teal',
    'yellow',
    'amber',
    'orange',
    'deep-orange'
  ]),
  ripple: PropTypes.string,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  disableRipple: PropTypes.bool,
  uppercase: PropTypes.bool,
  fullWidth: PropTypes.bool,
  noShadow: PropTypes.bool,
  iconOnly: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  href: PropTypes.string,
  buttonType: PropTypes.oneOf(['button', 'link']),
  endIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  startIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

export default Button;
