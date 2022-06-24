import React from 'react';
import { AnimatePresence, motion, useIsomorphicLayoutEffect } from 'framer-motion';
// utils
import classnames from 'classnames';
import merge from 'deepmerge';
import PropTypes from 'prop-types';
// @floating-ui
import {
  FloatingOverlay,
  useFloating,
  offset as fuiOffset,
  flip,
  useListNavigation,
  useTypeahead,
  useInteractions,
  useRole,
  useClick,
  useDismiss,
  FloatingFocusManager,
  autoUpdate,
  size as fuiSize
} from '@floating-ui/react-dom-interactions';
// framer-motion

import { objectsToString, findMatch } from './helper';
// const useSelect = () => {
// };

import { SelectContextProvider, usePrevious, useSelect } from './SelectContext';

import {
  propTypesVariant,
  propTypesColor,
  propTypesSize,
  propTypesLabel,
  propTypesError,
  propTypesSuccess,
  propTypesArrow,
  propTypesValue,
  propTypesOnChange,
  propTypesSelected,
  propTypesOffset,
  propTypesDismiss,
  propTypesAnimate,
  propTypesLockScroll,
  propTypesLabelProps,
  propTypesMenuProps,
  propTypesClassName,
  propTypesDisabled,
  propTypesChildren,
  propTypesAutoHeight
} from './types';
// select components
import SelectOption from './SelectOption';
// context
import { useTheme } from './theme';

// eslint-disable-next-line react/display-name
const Select = React.forwardRef(
  (
    {
      variant,
      color,
      size,
      label,
      error,
      success,
      arrow,
      value,
      onChange,
      selected,
      offset,
      dismiss,
      animate,
      lockScroll,
      labelProps,
      menuProps,
      autoHeight,
      className,
      disabled,
      children,
      ...rest
    },
    ref
  ) => {
    // 1. init
    const { select } = useTheme();
    const { valid, styles } = select;
    const { base, variants } = styles;
    const [state, setState] = React.useState('close');
    // 2. set default props

    // 3. @floating-ui
    const listItemsRef = React.useRef([]);
    const listContentRef = React.useRef([
      ...(React.Children.map(children, (child) => {
        const { props } = child;
        return props?.value;
      }) ?? [])
    ]);
    const [open, setOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [controlledScrolling, setControlledScrolling] = React.useState(false);
    const prevActiveIndex = usePrevious(activeIndex);
    React.useEffect(() => {
      setSelectedIndex(Math.max(0, listContentRef.current.indexOf(value) + 1));
    }, [value]);
    const { x, y, reference, floating, strategy, context, refs, middlewareData, update } =
      useFloating({
        open,
        onOpenChange: setOpen,
        middleware: [
          fuiOffset(offset),
          flip({ padding: 8 }),
          fuiSize({
            apply({ reference }) {
              Object.assign(refs.floating.current?.style ?? {}, {
                width: reference ? `${reference.width}px` : '100%',
                zIndex: 99999
              });
            },
            padding: 20
          })
        ]
      });
    const floatingRef = refs.floating;
    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
      useClick(context),
      useRole(context, { role: 'listbox' }),
      useDismiss(context, { ...dismiss }),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex
      }),
      useTypeahead(context, {
        listRef: listContentRef,
        onMatch: open ? setActiveIndex : setSelectedIndex,
        activeIndex,
        selectedIndex
      })
    ]);
    React.useEffect(() => {
      if (refs.reference.current && refs.floating.current && open) {
        return autoUpdate(refs.reference.current, refs.floating.current, update);
      }
    }, [refs.reference, refs.floating, open, update]);

    useIsomorphicLayoutEffect(() => {
      const floating = floatingRef.current;
      if (open && controlledScrolling && floating) {
        const item =
          activeIndex != null
            ? listItemsRef.current[activeIndex]
            : selectedIndex != null
            ? listItemsRef.current[selectedIndex]
            : null;
        if (item && prevActiveIndex != null) {
          const itemHeight = listItemsRef.current[prevActiveIndex]?.offsetHeight ?? 0;
          const floatingHeight = floating.offsetHeight;
          const top = item.offsetTop;
          const bottom = top + itemHeight;
          if (top < floating.scrollTop) {
            floating.scrollTop -= floating.scrollTop - top + 5;
          } else if (bottom > floatingHeight + floating.scrollTop) {
            floating.scrollTop += bottom - floatingHeight - floating.scrollTop + 5;
          }
        }
      }
    }, [open, controlledScrolling, prevActiveIndex, activeIndex]);
    useIsomorphicLayoutEffect(() => {
      const floating = refs.floating.current;
      if (open && floating && floating.offsetHeight < floating.scrollHeight) {
        const item = listItemsRef.current[selectedIndex];
        if (item) {
          floating.scrollTop = item.offsetTop - floating.offsetHeight / 2 + item.offsetHeight / 2;
        }
      }
    }, [open, selectedIndex, refs.floating, refs.reference, middlewareData]);
    const contextValue = React.useMemo(
      () => ({
        selectedIndex,
        setSelectedIndex,
        listRef: listItemsRef,
        setOpen,
        onChange: onChange || (() => {}),
        activeIndex,
        setActiveIndex,
        getItemProps,

        dataRef: context.dataRef
      }),
      [selectedIndex, onChange, activeIndex, getItemProps, context.dataRef]
    );
    React.useEffect(() => {
      if (open) {
        setState('open');
      } else if (!open && selectedIndex) {
        setState('withValue');
      } else {
        setState('close');
      }
    }, [open, selectedIndex]);
    // 4. set styles
    // const selectVariant = variants[findMatch(valid.variants, variant, "outlined")];
    const selectVariant = variants[variant];
    // console.log(selectVariant)
    // const selectSize = selectVariant.sizes[findMatch(valid.sizes, size, "normal")];
    const selectSize = selectVariant.sizes[size];
    // console.log('selectSize',size,selectSize)
    const selectError = selectVariant.error.select;
    const selectSuccess = selectVariant.success.select;
    const selectColor = selectVariant.colors.select[findMatch(valid.colors, color, 'blue')];
    const labelError = selectVariant.error.label;
    const labelSuccess = selectVariant.success.label;
    const labelColor = selectVariant.colors.label[findMatch(valid.colors, color, 'blue')];
    const stateClasses = selectVariant.states[state];
    const containerClasses = classnames(
      objectsToString(base.container),
      objectsToString(selectSize.container),
      'fo-select'
    );
    // const containerClasses = classnames('fo-select',`fo-select-${variant}`,`fo-select-${size}`);
    const selectClasses = classnames(
      objectsToString(base.select),
      objectsToString(selectVariant.base.select),
      objectsToString(stateClasses.select),
      objectsToString(selectSize.select),
      { [objectsToString(selectColor[state])]: !error && !success },
      { [objectsToString(selectError.initial)]: error },
      { [objectsToString(selectError.states[state])]: error },
      { [objectsToString(selectSuccess.initial)]: success },
      { [objectsToString(selectSuccess.states[state])]: success },
      className
    );
    const labelClasses = classnames(
      objectsToString(base.label),
      objectsToString(selectVariant.base.label),
      objectsToString(stateClasses.label),
      objectsToString(selectSize.label.initial),
      objectsToString(selectSize.label.states[state]),
      { [objectsToString(labelColor[state])]: !error && !success },
      { [objectsToString(labelError.initial)]: error },
      { [objectsToString(labelError.states[state])]: error },
      { [objectsToString(labelSuccess.initial)]: success },
      { [objectsToString(labelSuccess.states[state])]: success },
      labelProps.className ?? ''
    );
    const arrowClasses = classnames(objectsToString(base.arrow.initial), {
      [objectsToString(base.arrow.active)]: open
    });
    const menuClasses = classnames(objectsToString(base.menu), menuProps.className ?? '');
    const buttonContentClasses = classnames(
      'absolute top-2/4 -translate-y-2/4',
      variant === 'outlined' ? 'left-3 pt-0.5' : 'left-0 pt-3',
      'fo-btn-content',
      state === 'open' ? 'px-4' : 'p-0'
    );
    // 5. set animation
    const animation = {
      unmount: {
        opacity: 0,
        transformOrigin: 'top',
        transform: 'scale(0.95)',
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] }
      },
      mount: {
        opacity: 1,
        transformOrigin: 'top',
        transform: 'scale(1)',
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] }
      }
    };
    const appliedAnimation = merge(animation, animate);
    // 6. create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence = AnimatePresence;
    // 7. select menu
    const selectMenu = (
      <FloatingFocusManager context={context} preventTabbing>
        <motion.ul
          {...getFloatingProps({
            ...menuProps,
            ref: floating,
            role: 'listbox',
            className: menuClasses,
            style: {
              position: strategy,
              top: y ?? '',
              left: x ?? '',
              overflow: 'auto'
            },
            onPointerEnter(e) {
              const onPointerEnter = menuProps?.onPointerEnter;
              if (typeof onPointerEnter === 'function') {
                onPointerEnter(e);
                setControlledScrolling(false);
              }
              setControlledScrolling(false);
            },
            onPointerMove(e) {
              const onPointerMove = menuProps?.onPointerMove;
              if (typeof onPointerMove === 'function') {
                onPointerMove(e);
                setControlledScrolling(false);
              }
              setControlledScrolling(false);
            },
            onKeyDown(e) {
              const onKeyDown = menuProps?.onKeyDown;
              if (typeof onKeyDown === 'function') {
                onKeyDown(e);
                setControlledScrolling(true);
              }
              setControlledScrolling(true);
            }
          })}
          initial="unmount"
          exit="unmount"
          animate={open ? 'mount' : 'unmount'}
          variants={appliedAnimation}>
          {React.Children.map(
            children,
            (child, index) =>
              React.isValidElement(child) &&
              React.cloneElement(child, {
                ...child.props,
                index: child.props?.index || index + 1,
                id: `material-tailwind-select-${index}`
              })
          )}
        </motion.ul>
      </FloatingFocusManager>
    );
    // 8. return
    return (
      <SelectContextProvider value={contextValue}>
        <div ref={ref} className={containerClasses}>
          <button
            type="button"
            {...getReferenceProps({
              ...rest,
              ref: reference,
              className: selectClasses,
              disabled
            })}>
            {typeof selected === 'function' ? (
              <span className={buttonContentClasses}>
                {selected(children[selectedIndex - 1], selectedIndex - 1)}
              </span>
            ) : (
              <span className={buttonContentClasses} {...children[selectedIndex - 1]?.props} />
            )}

            <div className={arrowClasses}>
              {arrow ?? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
          <label {...labelProps} className={labelClasses}>
            {label}
          </label>
          <NewAnimatePresence>
            {open && (
              <>
                {lockScroll ? (
                  <FloatingOverlay lockScroll>{selectMenu}</FloatingOverlay>
                ) : (
                  selectMenu
                )}
              </>
            )}
          </NewAnimatePresence>
        </div>
      </SelectContextProvider>
    );
  }
);

Select.defaultProps = {
  variant: 'outlined',
  color: 'blue',
  size: 'normal',
  label: '',
  error: false,
  success: false,
  arrow: undefined,
  value: 'select',
  onChange: undefined,
  selected: undefined,
  offset: 5,
  dismiss: {},
  animate: {
    unmount: {},
    mount: {}
  },
  autoHeight: false,
  lockScroll: false,
  labelProps: {},
  menuProps: {},
  className: '',
  disabled: false
};

Select.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  color: propTypesColor,
  size: PropTypes.oneOf(propTypesSize),
  label: propTypesLabel,
  error: propTypesError,
  success: propTypesSuccess,
  arrow: propTypesArrow,
  value: propTypesValue,
  onChange: propTypesOnChange,
  selected: propTypesSelected,
  offset: propTypesOffset,
  dismiss: propTypesDismiss,
  animate: propTypesAnimate,
  lockScroll: propTypesLockScroll,
  labelProps: propTypesLabelProps,
  menuProps: propTypesMenuProps,
  className: propTypesClassName,
  disabled: propTypesDisabled,
  children: propTypesChildren,
  autoHeight: propTypesAutoHeight
};

// Select.displayName = "MaterialTailwind.Select";
export { Select, SelectOption as Option, useSelect, usePrevious };

export default Object.assign(Select, { Option: SelectOption });
