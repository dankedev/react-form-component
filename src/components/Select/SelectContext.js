import React from "react";
// framer-motion
import {useIsomorphicLayoutEffect} from "framer-motion";
import {propTypesContextValue, propTypesChildren,contextValue} from "./types";
import PropTypes from "prop-types";

// import { useIsomorphicLayoutEffect } from "framer-motion";
// import type { contextValue, children } from "../../types/components/select";
// import { propTypesContextValue, propTypesChildren } from "../../types/components/select";
// export const propTypesContextValue = PropTypes.shape({
//     selectedIndex: PropTypes.number.isRequired,
//     setSelectedIndex: PropTypes.func.isRequired,
//     activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
//     setActiveIndex: PropTypes.func.isRequired,
//     listRef: PropTypes.instanceOf(Object).isRequired,
//     setOpen: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//     getItemProps: PropTypes.func.isRequired,
//     dataRef: PropTypes.instanceOf(Object).isRequired,
// }).isRequired;

// export const propTypesChildren = PropTypes.node.isRequired;

export const SelectContext = React.createContext(contextValue || null);
SelectContext.displayName = "MaterialTailwind.SelectContext";
export function useSelect() {
    const context = React.useContext(SelectContext);
    if (context === null) {
        throw new Error("useSelect() must be used within a Select. It happens when you use SelectOption component outside the Select component.");
    }
    return context;
}
export function usePrevious(value) {
    const ref = React.useRef();
    useIsomorphicLayoutEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}
 export const SelectContextProvider = ({ value, children,...res }) => {
    return React.createElement(SelectContext.Provider, {value ,...res}, children);
};


SelectContextProvider.propTypes = {
    value: propTypesContextValue,
    children: propTypesChildren
};



// SelectContextProvider.displayName = "MaterialTailwind.SelectContextProvider";
