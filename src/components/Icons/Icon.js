import {forwardRef} from "react";
import PropTypes from 'prop-types';

const Icon = forwardRef(({name, variant, size, color, className, ...res}, iconRef) => {
    if (size === 'large') {
        size = 'fo-icon-lg'
    }
    if (size === 'largest') {
        size = 'fo-icon-xl'
    }

    let iconSize = size.replace('small', 'fo-icon-sm').replace('medium', 'fo-icon-md').replace('extra-large', 'fo-icon-3xl').replace('extra', 'fo-icon-2xl')

    let iconClassName = [
        'fo-icon',
        variant ==='outlined' ?'material-icons-outlined':'material-icons',
        iconSize
    ];

    return (<span {...res} className={iconClassName.join(' ')}>{name}</span>)
})

Icon.defaultProps = {
    variant: 'outlined',
    size: 'medium',
    color: 'inherit',
    className: ''
}

Icon.propTypes = {
    name: PropTypes.string,
    variant: PropTypes.oneOf([
        'outlined', 'filled'
    ]),
    size: PropTypes.oneOf([
       'inherit', 'small', 'medium', 'large', 'largest', 'extra', 'extra-large'
    ]),
}

export default Icon