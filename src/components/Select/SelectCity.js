import { districts } from '../districts';
import { createRef, forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../TextField';
import { AnimatePresence, motion, useIsomorphicLayoutEffect } from 'framer-motion';

import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset as fuiOffset,
  size as fuiSize,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead
} from '@floating-ui/react-dom-interactions';
import { SelectContextProvider, usePrevious } from './SelectContext';

// eslint-disable-next-line react/display-name
const SelectCity = forwardRef(({ label, onChange, size, onBlur, value }, wrapRef) => {
  const [open, setOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [controlledScrolling, setControlledScrolling] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prevActiveIndex = usePrevious(activeIndex);
  const inputRef = createRef();
  wrapRef = wrapRef ?? createRef();

  const listItemsRef = useRef([]);
  const listContentRef = useRef(cities.map((i) => i.value));

  const searchCities = async (e) => {
    const { value } = e.target;
    const delayDebounceFn = setTimeout(async () => {
      let option = [];
      const keyData = 'wp-form-order-cities';
      let data = localStorage.getItem(keyData);
      if (data === null || data.length === 0) {
        localStorage.setItem(keyData, JSON.stringify(districts));
        data = districts;
      } else {
        data = JSON.parse(data);
      }
      const Fuse = (await import('fuse.js')).default;
      const fuse = new Fuse(data, {
        includeScore: true,
        shouldSort: true,
        findAllMatches: false,
        includeMatches: false,
        keys: [
          {
            name: 'subdistrict_name',
            weight: 0.8
          },
          {
            name: 'province_name',
            weight: 0.1
          },
          {
            name: 'city_name',
            weight: 0.1
          }
        ]
      });

      option = fuse
        .search(value)
        .slice(0, 7)
        .map((i) => {
          const label = `${i.item.subdistrict_name}, ${i.item.city_name} - ${i.item.province_name}`;
          return {
            value: i.item.id,
            label,
            city: i.item.city_name,
            province: i.item.province_name,
            subdistrict: i.item.subdistrict_name
          };
        });

      setCities(option ?? []);
      // setState('open');
      setOpen(true);
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  };

  const { x, y, reference, floating, strategy, context, refs, middlewareData, update } =
    useFloating({
      open,
      onOpenChange: setOpen,
      middleware: [
        fuiOffset(5),
        flip({ padding: 8 }),
        fuiSize({
          apply({ reference }) {
            Object.assign(refs.floating.current?.style ?? {}, {
              width: reference ? `${reference.width}px` : '100%',
              zIndex: 999
            });
          },
          padding: 20
        })
      ]
    });

  const floatingRef = refs.floating;
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    // useClick(context),
    useRole(context, { role: 'listbox' }),
    useDismiss(context, {}),
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

  useEffect(() => {
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
  const contextValue = useMemo(
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

  function handleSelect(value, index) {
    setSelectedIndex(index);
    if (typeof onChange === 'function') {
      onChange(value);
    }
    if (typeof onBlur === 'function') {
      onBlur(value);
    }
    setOpen(false);
    // eslint-disable-next-line react/prop-types
    inputRef.current.value = value.label;
    setActiveIndex(null);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSelect();
    }
  }

  const optionClass =
    'block px-3  text-left cursor-pointer leading-normal py-2 hover:bg-stone-100 w-full flex items-center w-full  bg-transparent';
  const selectItem = (
    <FloatingFocusManager context={context} preventTabbing={true} returnFocus={false}>
      <motion.ul
        {...getFloatingProps({
          ref: floating,
          role: 'listbox',
          className:
            'bg-white z-50 absolute ease-in-out  w-full max-h-select shadow  drop-shadow-2xl rounded-b top-full translate-y-0 left-0  overflow-y-scroll',
          style: {
            position: strategy,
            top: y ?? '',
            left: x ?? '',
            overflow: 'auto'
          },
          onPointerEnter(e) {
            setControlledScrolling(false);
          },
          onPointerMove(e) {
            setControlledScrolling(false);
          },
          onKeyDown(e) {
            setControlledScrolling(true);
          }
        })}
        initial="unmount"
        exit="unmount"
        animate={open ? 'mount' : 'unmount'}
        variants={animation}>
        {cities.length ? (
          cities.map((city, index) => {
            const splitLabel = city.label.split(',');
            return (
              <li
                onClick={() => handleSelect(city, index)}
                tabIndex={activeIndex === index ? 0 : 1}
                role="option"
                key={`city-option-${index}-${city.value}`}
                aria-selected={activeIndex === index && selectedIndex === index}
                data-selected={selectedIndex === index}
                onKeyDown={(e) => handleKeyDown(e)}
                className={optionClass}>
                <div className={'flex flex-col'}>
                  <span className="font-bold">{splitLabel[0]}</span>
                  <span className="text-xs text-gray-600">{splitLabel[1]}</span>
                </div>
              </li>
            );
          })
        ) : (
          <div className={'px-4 py-3 text-center text-gray-500'}>Data tidak ditemukan</div>
        )}
      </motion.ul>
    </FloatingFocusManager>
  );
  return (
    <SelectContextProvider value={contextValue}>
      <div ref={wrapRef} className={'relative w-full min-w-[200px]'}>
        <TextField
          label={label}
          ref={inputRef}
          variant={'outlined'}
          size={'large'}
          fullWidth={true}
          onFocus={(e) => {
            if (e.target.value.length) {
              searchCities(e);
            }
          }}
          {...getReferenceProps({
            wrapRef: reference,
            wrappClassName: 'z-top'
          })}
          onChange={searchCities}
        />

        {open ? <AnimatePresence>{selectItem} </AnimatePresence> : ''}
      </div>
    </SelectContextProvider>
  );
});

SelectCity.defaultProps = {
  size: 'large',
  label: ''
};

SelectCity.propTypes = {
  // onSelect: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any
  // defaultInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default SelectCity;
