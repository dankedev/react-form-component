import React from 'react';
// import {value, index, disabled, className, children} from "./types";
import {
  propTypesValue,
  propTypesIndex,
  propTypesDisabled,
  propTypesClassName,
  propTypesChildren
} from './types';

// utils
import classnames from 'classnames';
import { objectsToString } from './helper';

// context
import { useTheme } from './theme';
import { useSelect } from './SelectContext';

// const useTheme = () => {
// };
// const useSelect = () => {
// };

// const { value, index, disabled, className, children } = {};

export const SelectOption = (props) => {
  // 1. init
  const { value, index, disabled, className, children, ...rest } = props;
  const { select } = useTheme();
  const { styles } = select;
  const { base } = styles;
  // 2. set @floating-ui
  const {
    selectedIndex,
    setSelectedIndex,
    listRef,
    setOpen,
    onChange,
    activeIndex,
    setActiveIndex,
    getItemProps,
    dataRef
  } = useSelect();

  function handleSelect() {
    setSelectedIndex(index);
    onChange(value);
    setOpen(false);
    setActiveIndex(null);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || (event.key === ' ' && !dataRef.current.typing)) {
      event.preventDefault();
      handleSelect();
    }
  }

  // 3. set styles
  const optionBaseClasses = objectsToString(base.option.initial);
  const optionActiveClasses = objectsToString(base.option.active);
  const optionDisabledClasses = objectsToString(base.option.disabled);
  const classes = classnames(
    optionBaseClasses,
    {
      [optionActiveClasses]: selectedIndex === index,
      [optionDisabledClasses]: disabled
    },
    className ?? ''
  );
  // 4. return
  return (
    <li
      {...rest}
      role="option"
      ref={(node) => (listRef.current[index] = node)}
      className={classes}
      tabIndex={activeIndex === index ? 0 : 1}
      aria-selected={activeIndex === index && selectedIndex === index}
      data-selected={selectedIndex === index}
      {...getItemProps({
        onClick: (e) => {
          const onClick = rest?.onClick;
          if (typeof onClick === 'function') {
            onClick(e);
            handleSelect();
          }
          handleSelect();
        },
        onKeyDown: (e) => {
          const onKeyDown = rest?.onKeyDown;
          if (typeof onKeyDown === 'function') {
            onKeyDown(e);
            handleKeyDown(e);
          }
          handleKeyDown(e);
        }
      })}>
      {children}
    </li>
  );
};
SelectOption.defaultProps = {
  value: '',
  index: 0,
  className: '',
  disabled: false
};
SelectOption.propTypes = {
  value: propTypesValue,
  index: propTypesIndex,
  disabled: propTypesDisabled,
  className: propTypesClassName,
  children: propTypesChildren
};
SelectOption.displayName = 'MaterialTailwind.SelectOption';
export default SelectOption;
