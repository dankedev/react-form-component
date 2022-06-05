import {createRef} from "react";
import PropTypes from "prop-types";


const TextField = ({
                       variant,
                       size,
                       id,
                       color,
                       onChange,
                       onBlur,
                       label,
                       autoFocus,
                       helperText,
                       fullWidth,
                       inputRef,
                       wrapRef,
                       placeholder,
                       error,
                       disabled,
                       ...others
                   }) => {

    wrapRef = wrapRef ?? createRef();
    inputRef = inputRef ?? createRef();

    let inputVariant = ['default', 'outlined', 'filled', 'standard'].includes(variant) ? variant : 'default';
   let labelSize = size.replace('small', 'fo-label-sm').replace('medium', 'fo-label-md').replace('extra-large', 'fo-label-3xl').replace('extra', 'fo-label-2xl')
    if (size === 'large') {
        size = 'fo-input-lg'
        labelSize = 'fo-label-lg'
    }
    if (size === 'largest') {
        size = 'fo-input-xl'
        labelSize = 'fo-label-xl'
    }

    let inputSize = size.replace('small', 'fo-input-sm').replace('medium', 'fo-input-md').replace('extra-large', 'fo-input-3xl').replace('extra', 'fo-input-2xl')

    let wrapClassName = [
        'fo-text-input',
        `fo-input-${inputVariant}`,
       ['outlined', 'filled', 'standard'].includes(variant)?'fo-input-material':'',
        `fo-input-${color}`,
        inputSize

    ];

    return (<div ref={wrapRef} id={`wrap-input-${id}`}
                 className={`w-input-wrap ${inputSize} ${fullWidth ? 'w-full flex flex-col' : 'inline-flex flex-col '}`}>

        {variant === 'default' && <label htmlFor={`input-${id}`} className={`fo-input-label ${label ==='' || !label  ?'sr-only hidden':''}  ${labelSize}`}>{label}</label>}

        <div className={wrapClassName.join(' ')}
        >
            <input
                ref={inputRef}
                autoFocus={autoFocus}
                id={`input-${id}`}
                placeholder={variant === 'default' ? placeholder : ' '}
                className={'fo-input'}
                {...others}

            />


            {variant !== 'default' && <label htmlFor={`input-${id}`} className={`fo-md-label fo-input-label ${labelSize}`}>{label}</label>}
            {['standard','filled'].includes(variant) && <div className={'fo-material-line'}/>}
        </div>
        {helperText && <div className={'fo-input-helper-text'}>{helperText}</div>}
    </div>)
}
TextField.defaultProps = {
    variant: 'default',
    size: 'large',
    color: 'blue',
    label: '',
    id: '',
    helperText: '',
    autoFocus: false,
    error: 'false',
    fullWidth: false,
}

TextField.propTypes = {
    color: PropTypes.oneOf([
       'inherit', 'blue', 'light-blue', 'green', 'light-green', 'lime', 'red', 'pink', 'purple', 'deep-purple', 'teal', 'yellow', 'amber', 'orange', 'deep-orange'
    ]),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    label: PropTypes.string,
    id: PropTypes.string,
    autoFocus: PropTypes.bool,
    error: PropTypes.string,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    variant: PropTypes.oneOf([
        'default', 'outlined', 'filled', 'standard'
    ]),
    size: PropTypes.oneOf([
        'small', 'medium', 'large', 'largest', 'extra', 'extra-large'
    ]),
}

export default TextField;