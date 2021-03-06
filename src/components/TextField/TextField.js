import { createRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';

// eslint-disable-next-line react/display-name
const TextField = forwardRef(
  (
    {
      variant,
      size,
      id,
      color,
      label,
      helperText,
      maxRows,
      minRows,
      fullWidth,
      wrapRef,
      placeholder,
      error,
      isRequired,
      wrappClassName,
      multiline,
      disabled,
      ...others
    },
    inputRef
  ) => {
    wrapRef = wrapRef ?? createRef();
    inputRef = inputRef ?? createRef();

    const inputVariant = ['default', 'outlined', 'filled', 'standard'].includes(variant)
      ? variant
      : 'default';
    const labelSize = size
      .replace('small', 'fo-label-sm')
      .replace('medium', 'fo-label-md')
      .replace('extra-large', 'fo-label-3xl')
      .replace('extra', 'fo-label-2xl');

    let wrapClassName = [
      'fo-text-input',
      `fo-input-${inputVariant}`,
      ['outlined', 'filled', 'standard'].includes(variant) ? 'fo-input-material' : '',
      `fo-input-${color}`,
      `fo-input-${size}`,
      multiline && 'fo-input-text-area'
    ];

    wrapClassName = wrapClassName.filter((i) => i !== '' && typeof i !== 'undefined');

    return (
      <div
        ref={wrapRef}
        id={`wrap-input-${id}`}
        className={`fo-input-wrap fo-input-wrap-${variant} ${wrappClassName} fo-input-wrap-${size} ${
          fullWidth ? 'w-full flex flex-col' : 'inline-flex flex-col '
        }`}>
        {variant === 'default' && (
          <label
            htmlFor={`input-${id}`}
            className={`fo-input-label space-x-1 ${
              label === '' || !label ? 'sr-only hidden' : ''
            }  ${labelSize}`}>
            <span>{label}</span> {isRequired && <span className={'text-red-500 text-sm'}>*</span>}
          </label>
        )}

        <div className={wrapClassName.join(' ')}>
          {multiline ? (
            <TextareaAutosize
              {...others}
              ref={inputRef}
              id={`input-${id}`}
              minRows={minRows}
              maxRows={maxRows}
              placeholder={variant === 'default' ? placeholder : ' '}
              className={'fo-input'}
            />
          ) : (
            <input
              {...others}
              ref={inputRef}
              id={`input-${id}`}
              placeholder={variant === 'default' ? placeholder : ' '}
              className={'fo-input '}
            />
          )}

          {variant !== 'default' && (
            <label htmlFor={`input-${id}`} className={`fo-md-label fo-input-label ${labelSize}`}>
              {label}
            </label>
          )}
          {['standard', 'filled'].includes(variant) && <div className={'fo-material-line'} />}
        </div>
        {helperText && <div className={'fo-input-helper-text'}>{helperText}</div>}
      </div>
    );
  }
);
TextField.defaultProps = {
  variant: 'default',
  size: 'normal',
  color: 'blue',
  label: '',
  placeholder: '',
  wrappClassName: '',
  id: '',
  helperText: '',
  autoFocus: false,
  error: 'false',
  fullWidth: false,
  multiline: false,
  isRequired: false,
  disabled: false,
  minRows: 1,
  maxRows: 10
};

TextField.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
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
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  wrappClassName: PropTypes.string,
  id: PropTypes.string,
  autoFocus: PropTypes.bool,
  error: PropTypes.string,
  fullWidth: PropTypes.bool,
  isRequired: PropTypes.bool,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'outlined', 'filled', 'standard']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  wrapRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.any])
};

export default TextField;
