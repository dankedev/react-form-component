import {forwardRef} from "react";
import {Button} from "./index";
import {Icon} from "../Icons";
import PropTypes from "prop-types";

const ButtonIcon = forwardRef(({size, icon, ...res}, buttonRef) => {

    return (<Button {...res} iconOnly={true} size={size}><Icon name={icon} size={'inherit'}/> </Button>)

})

ButtonIcon.defaultProps = {
    variant: 'contained',
    size: 'medium',
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
    iconOnly: true,
    icon: 'favorite',

}
ButtonIcon.propTypes = {
    icon:PropTypes.string,
    size:PropTypes.oneOf([
        'small', 'medium', 'large', 'largest', 'extra','extra-large'
    ]),
    children: PropTypes.node,

    variant: PropTypes.oneOf([
        'contained', 'outlined', 'text'
    ]),
    color:  PropTypes.oneOf([
        'blue', 'light-blue','green','light-green','lime','red','pink','purple','deep-purple','teal','yellow','amber','orange','deep-orange'
    ]),
    ripple: PropTypes.string,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    disableRipple: PropTypes.bool,
    fullWidth: PropTypes.bool,
    noShadow: PropTypes.bool,
    iconOnly: PropTypes.bool,
    href: PropTypes.oneOf([
        null, PropTypes.string
    ]),
}

export default ButtonIcon