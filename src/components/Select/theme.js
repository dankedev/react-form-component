import React, { createContext, useContext } from "react";
import merge from "deepmerge";
import theme from "../../theme"
import {combineMerge} from "./helper";
import PropTypes from "prop-types";

const MaterialTheme = createContext(theme);
MaterialTheme.displayName = "MaterialThemeProvider";


function ThemeProvider({ value, children }) {
    const mergedValue = merge(theme, value, { arrayMerge: combineMerge });

    return (
        <MaterialTheme.Provider value={mergedValue}>{children}</MaterialTheme.Provider>
    );
}


const useTheme = () => useContext(MaterialTheme);


ThemeProvider.defaultProps = {
    value: theme,
};

ThemeProvider.propTypes = {
    value: PropTypes.instanceOf(Object),
    children: PropTypes.node.isRequired,
};


export {MaterialTheme,ThemeProvider,useTheme}