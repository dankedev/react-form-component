import PropTypes from "prop-types";
// import  { ContextData } from "@floating-ui/react-dom-interactions";
//
// export interface ContextData {
//     openEvent?: MouseEvent | PointerEvent | FocusEvent;
//     typing?: boolean;
//     [key: string]: any;
// }
import { propTypesColors, propTypesOffsetType, propTypesDismissType, propTypesAnimation, } from "./generic";
// javascript prop-types
export const contextValue = {

    selectedIndex: 0,
    setSelectedIndex: (index) => {},
    activeIndex: null,
    setActiveIndex: null,
    listRef: null,
    setOpen: (open) => {},
    onChange: (value) => {},
    getItemProps: {},
    dataRef: {
        openEvent:MouseEvent,
        typing:false
    }

}

export const propTypesVariant = ['outlined', 'filled', 'standard'];
export const propTypesSize = ["small","normal", "large"];
export const propTypesColor = propTypesColors;
export const propTypesLabel = PropTypes.string;
export const propTypesError = PropTypes.bool;
export const propTypesSuccess = PropTypes.bool;
export const propTypesArrow = PropTypes.node;
export const propTypesValue = PropTypes.string;
export const propTypesOnChange = PropTypes.func;
export const propTypesSelected = PropTypes.func;
export const propTypesOffset = propTypesOffsetType;
export const propTypesDismiss = propTypesDismissType;
export const propTypesAnimate = propTypesAnimation;
export const propTypesAutoHeight = PropTypes.bool;
export const propTypesLockScroll = PropTypes.bool;
export const propTypesLabelProps = PropTypes.instanceOf(Object);
export const propTypesMenuProps = PropTypes.instanceOf(Object);
export const propTypesIndex = PropTypes.number;
export const propTypesDisabled = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesChildren =  PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
]).isRequired;


export const propTypesContextValue = PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.shape({
        selectedIndex: PropTypes.number.isRequired,
        setSelectedIndex: PropTypes.func.isRequired,
        activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(null)]),
        setActiveIndex: PropTypes.func.isRequired,
        listRef: PropTypes.instanceOf(Object).isRequired,
        setOpen: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        getItemProps: PropTypes.func.isRequired,
        dataRef: PropTypes.instanceOf(Object).isRequired,
    })
]).isRequired;