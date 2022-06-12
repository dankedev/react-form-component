import React, {forwardRef, useState} from "react";
import PropTypes from "prop-types";
import {propColors, propVariants,propSize} from "../components-helper/variables";
import {motion} from "framer-motion";
import merge from "deepmerge";
import {AnimatePresence} from "framer-motion";
import {
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
    size as fuiSize,
    FloatingOverlay,
} from "@floating-ui/react-dom-interactions";



const SelectField = forwardRef(({variant,options, color, size, value, label, error, success, ...inputProps}, ref) => {
    const [open, setOpen] = useState(false);


    const containerClasses = [
        `relative w-full`,
        `min-w-[200px]`,
        `w-full`,
        `h-10`,
        'rounded'
    ].join(' ')

    const labelClasess = [
        "flex",
        "w-full",
        "h-full",
        "select-none",
        "pointer-events-none",
        "absolute",
        "left-0",
        "font-normal",
        "transition-all",
        "-top-1.5",
        "before:content[' ']",
        "before:block",
        "before:box-border",
        "before:w-2.5",
        "before:h-1.5",
        "before:mt-[6.5px]",
        "before:mr-1",
        "before:rounded-tl-md",
        "before:pointer-events-none",
        "before:transition-all",
        "peer-disabled:before:border-transparent",
        "after:content[' ']",
        "after:block",
        "after:flex-grow",
        "after:box-border",
        "after:w-2.5",
        "after:h-1.5",
        "after:mt-[6.5px]",
        "after:ml-1",
        "after:rounded-tr-md",
        "after:pointer-events-none",
        "after:transition-all",
        "peer-disabled:after:border-transparent",
        open ? "text-[11px]" : "text-sm",
        open ? "peer-disabled:text-transparent" : "peer-disabled:text-blue-grey-400",
        open ? "" : "before:border-t-transparent before:border-l-transparent after:border-t-transparent after:border-r-transparent",
        open ? "" : "",
        open ? "leading-tight" : "leading-[3.75]",
        open ? "text-blue-500" : "text-blue-grey-400",

        open ? "before:border-blue-500" : "before:border-transparent",
        open ? "after:border-blue-500" : "after:border-transparent",
        open ? "before:border-t-2 before:border-l-2 after:border-t-2 after:border-r-2" : "",

    ];

    let buttonClasses = [
        "peer",
        "w-full",
        "h-full",
        "bg-transparent",
        "text-blue-grey-700",
        "font-sans",
        "font-normal",
        "text-left",
        "outline-0",
        "focus:outlined-0",
        "disabled:bg-blue-grey-50",
        "disabled:border-0",
        "transition-all",
        "border",
        "text-sm",
        "px-3",
        "py-2.5","",
        "rounded-[7px]",
       open ?"border-2 border-blue-600": "border-blue-grey-200"
    ];

    let openLabelClasess = "peer w-full h-full bg-transparent text-blue-grey-700 font-sans font-normal text-left outline-0 focus:outlined-0 disabled:bg-blue-grey-50  disabled:border-0 transition-all border text-sm px-3 py-2.5  rounded-[7px] border-blue-grey-200";


    // 5. set animation
    const animation = {
        unmount: {
            opacity: 0,
            transformOrigin: "top",
            transform: "scale(0.95)",
            transition: {duration: 0.2, times: [0.4, 0, 0.2, 1]},
        },
        mount: {
            opacity: 1,
            transformOrigin: "top",
            transform: "scale(1)",
            transition: {duration: 0.2, times: [0.4, 0, 0.2, 1]},
        },
    };

    const {x, y, reference, floating, strategy, context, refs, middlewareData, update} = useFloating({
        open,
        onOpenChange: setOpen,
        middleware: [
            fuiOffset(5),
            flip({padding: 8}),
            fuiSize({
                apply({reference, height}) {
                    Object.assign(refs.floating.current?.style ?? {}, {
                        width: reference ? `${reference.width}px` : '100%5',
                        zIndex: 99,
                    });
                },
                padding: 20,
            }),
        ],
    });

    React.useEffect(() => {
        if (refs.reference.current && refs.floating.current && open) {
            return autoUpdate(refs.reference.current, refs.floating.current, update);
        }
    }, [refs.reference, refs.floating, open, update]);



    const handleClickOpen = () => {
        setOpen(!open)
    }


    // const {context} = useFloating();
    const floatingRef = refs.floating;
    const NewAnimatePresence = AnimatePresence;



    return (<div className={containerClasses}>
        <button type={'button'}
                onClick={handleClickOpen}
                className={buttonClasses.join(' ')}>
            <span className="absolute top-2/4 -translate-y-2/4 left-3 pt-0.5"/>
            <div
                className="grid place-items-center absolute top-2/4 right-2 pt-px w-5 h-5 text-blue-grey-400 rotate-0 -translate-y-2/4 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                </svg>
            </div>
        </button>
        <label className={labelClasess.join(' ')}><span className={`bg-white transition-color ${open ?'bg-opacity-100':'bg-opacity-0'}`}>Select Version</span> </label>
        <span  className={`fixed opacity-0 pointer-events-none outline-none`}
               tabIndex="0"

              data-aria-hidden="true" aria-hidden="true"></span>
        <NewAnimatePresence>
        {open &&  <FloatingFocusManager context={context} preventTabbing>
            <motion.ul animate={open ? "mount" : "unmount"} initial="unmount" exit="unmount"
                    variant={animation}
                     style={
                         {
                             position: strategy,
                             top: y ?? "",
                             left: x ?? "",
                             overflow: "auto",
                         }
                     }
                       role="listbox"
                       className={`w-full absolute left-0 top-12 overflow-y-auto opacity-1 origin-center origin-top scale-1 z-50 max-h-96 bg-white p-3 border border-blue-grey-50 rounded-md shadow-lg shadow-blue-grey-500/10 font-sans text-sm font-normal text-blue-grey-500 overflow-auto focus:outline-none`}
            >
                {options && options.map((item,index)=> <li key={`material-tailwind-select-${index}-${item.value}`} id="material-tailwind-select-0" role="option"
                                                          className="pt-[9px] pb-2 px-3 rounded-md leading-tight cursor-pointer select-none hover:bg-blue-grey-50 focus:bg-blue-grey-50 hover:bg-opacity-80 focus:bg-opacity-80 hover:text-blue-grey-900 focus:text-blue-grey-900 transition-all"
                                                          tabIndex={item+1} aria-selected="false" data-selected="false">{item.label}
                    </li>)}

            </motion.ul>
          </FloatingFocusManager> }
        </NewAnimatePresence>
        {JSON.stringify(openLabelClasess.split(' '))}
    </div>)
})

SelectField.defaultProps = {
    options:null
}

SelectField.propTypes = {
    variant: PropTypes.oneOf(propVariants),
    color: PropTypes.oneOf(propColors),
    size: PropTypes.oneOf(propSize),
    label: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    inputProps: PropTypes.object,
    options: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.any
    ]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ]),

}

export default SelectField;