import { forwardRef } from "react";
import Ripple from '../components-helper/ripple';
import PropTypes from "prop-types";


const CheckboxMark = () => <div className="fo-mark-checkbox peer-checked:opacity-100">
    <svg xmlns="http://www.w3.org/2000/svg" className="fo-mark-svg" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
        </path></svg>
</div>;


const propSize = ['small', 'normal', 'large'];
const propColors = ['inherit', 'blue', 'light-blue', 'green', 'light-green', 'lime', 'red', 'pink', 'purple', 'deep-purple', 'teal', 'yellow', 'amber', 'orange', 'deep-orange'];
const Checkbox = forwardRef(({
    color,
    label,
    size,
    labelProps,
    disabled,
    ...rest
}, checkRef) => {
    const rippleEffect = new Ripple();

    const labelClasses = labelProps?.className ?? '';

    size = propSize.includes(size) ? size : 'normal';
    color = propColors.includes(color) ? color : 'inherit';

    const wrapClass = [
        `fo-checkbox`,
        `fo-checkbox-${size}`,
        `fo-checkbox-${color}`,
        disabled ? `opacity-50 cursor-not-allowed` : `cursor-pointer`,
    ];

    return (<div className={wrapClass.join(' ')}>
        <label
            className={`fo-checkbox-label-wrap ${disabled ? `cursor-not-allowed` : `cursor-pointer`}`}
            htmlFor={rest.id || "checkbox"}
            onMouseDown={(e) => !disabled && rippleEffect.create(e, 'blue')}
        >
            <input
                ref={checkRef}
                type="checkbox"
                className={`peer fo-checkbox-input  ${disabled ? `cursor-not-allowed` : `cursor-pointer`}`}
                id={rest.id || "checkbox"}
                disabled={disabled}
                {...rest}
            />
            <CheckboxMark />

        </label>

        {label && <label
            {...labelProps} className={`fo-checkbox-label ${disabled ? `cursor-not-allowed` : ``} ${labelClasses}`}

            htmlFor={rest.id || "checkbox"}>
            {label}
        </label>}
    </div>)
})


Checkbox.defaultProps = {
    color: 'blue',
    label: null,
    size: 'default',
    labelProps: {},
    disabled: false,
}

Checkbox.propTypes = {
    color: PropTypes.oneOf(propColors),
    size: PropTypes.oneOf(propSize),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    label: PropTypes.string,
    labelProps: PropTypes.instanceOf(Object),
    disabled: PropTypes.bool,
}


export default Checkbox