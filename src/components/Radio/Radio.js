import { propColors, propSize } from '../components-helper/variables';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Ripple from '../components-helper/ripple';

// eslint-disable-next-line react/display-name
const Radio = forwardRef(
  ({ color, label, size, labelProps, disabled, checked, fullWidth, ...rest }, radioRef) => {
    const rippleEffect = new Ripple();

    const labelClasses = labelProps?.className ?? '';

    size = propSize.includes(size) ? size : 'normal';
    color = propColors.includes(color) ? color : 'inherit';

    const wrapClass = [
      `inline-flex`,
      `fo-radio`,
      `items-center`,
      `fo-radio-${size}`,
      `fo-radio-${color}`,
      disabled ? `opacity-50 cursor-not-allowed` : `cursor-pointer`
    ];

    return (
      <div className={wrapClass.join(' ')}>
        <label
          className={`fo-checkbox-label-wrap ${disabled ? `cursor-not-allowed` : `cursor-pointer`}`}
          htmlFor={rest.id || 'radio-button'}
          onMouseDown={(e) => !disabled && rippleEffect.create(e, color)}>
          <input
            {...rest}
            ref={radioRef}
            id={rest.id || 'radio-button'}
            name="type"
            type="radio"
            className={`peer fo-radio-input  ${disabled ? `cursor-not-allowed` : `cursor-pointer`}`}
          />
          <div className="fo-mark-radio peer-checked:opacity-100  peer-checked:scale-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fo-mark-svg h-full w-full"
              viewBox="0 0 16 16"
              fill="currentColor">
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        {label && (
          <label
            {...labelProps}
            className={`fo-checkbox-label ${disabled ? `cursor-not-allowed` : ``} ${labelClasses}`}
            htmlFor={rest.id || 'checkbox'}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.defaultProps = {
  color: 'blue',
  label: null,
  size: 'normal',
  labelProps: {},
  disabled: false,
  checked: false,
  fullWidth: false
};

Radio.propTypes = {
  color: PropTypes.oneOf(propColors),
  size: PropTypes.oneOf(propSize),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  label: PropTypes.string,
  labelProps: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  fullWidth: PropTypes.bool
};

export default Radio;
