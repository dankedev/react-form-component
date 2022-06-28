import React, { forwardRef } from 'react';
import Ripple from '../components-helper/ripple';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const Switch = forwardRef(
  ({ type, label, checked, fullWidth, labelPosition, disabled, ...resInput }, inputRef) => {
    const rippleEffect = new Ripple();

    const labelClassName = [
      labelPosition === 'right' ? 'text-right' : 'text-left',
      labelPosition === 'left' ? 'order-first' : 'order-last'
    ];

    const wrapClassName = [
      'items-center',
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      'space-x-3',
      fullWidth || ['right', 'left'].includes(labelPosition) ? 'flex w-full' : 'inline-flex',
      ['right', 'left'].includes(labelPosition) ? 'justify-between' : ''
    ];

    return (
      <label className={wrapClassName.join(' ')}>
        <span className="inline-flex items-center relative cursor-pointer  w-10 h-3.5 leading-none relative  z-0 flex-shrink-0 rounded-3xl">
          <input
            type="checkbox"
            ref={inputRef}
            {...resInput}
            disabled={disabled}
            defaultChecked={checked}
            onMouseUp={(e) => rippleEffect.create(e, 'blue')}
            className="absolute opacity-0 h-full w-full top-0 left-0 m-0 p-0 z-10 peer disabled:cursor-not-allowed"
          />
          <span className="bg-gray-500 w-full h-full absolute left-0 top-0 transition-colors peer-checked:bg-blue-300 rounded-3xl" />
          <span className="bg-white p-0 absolute -top-1 z-0 transition-transform bg-gray-50 peer-checked:translate-x-full  peer-checked:bg-blue-700 left-0 rounded-full flex items-center justify-center ">
            <span className="relative h-5 w-5  rounded-full  drop-shadow"></span>
          </span>
        </span>
        {label && <span className={labelClassName.join(' ')}>{label}</span>}
      </label>
    );
  }
);
Switch.defaultProps = {
  labelPosition: 'inherit'
};

Switch.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
  labelPosition: PropTypes.oneOf(['inherit', 'left', 'right']),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  checked: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
};
export default Switch;
