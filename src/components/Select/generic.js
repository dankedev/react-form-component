import PropTypes from "prop-types";
// javascript prop-types
const colors = [
    "blue-grey",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
];

const animation = {
    mount: {},
    unmount: {}
}

//     {
//     mount: Object;
//     unmount: Object;
// };
const propTypesColors = PropTypes.oneOf(colors)
const dismissType = {
    enabled: false,
    escapeKey: false,
    referencePointerDown: false,
    outsidePointerDown: false,
    ancestorScroll: false,
    bubbles: false,
};
const offsetType = {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null
}

const propTypesAnimation = PropTypes.shape({
    mount: PropTypes.instanceOf(Object),
    unmount: PropTypes.instanceOf(Object),
});

 const propTypesDismissType = PropTypes.shape({
    enabled: PropTypes.bool,
    escapeKey: PropTypes.bool,
    referencePointerDown: PropTypes.bool,
    outsidePointerDown: PropTypes.bool,
    ancestorScroll: PropTypes.bool,
    bubbles: PropTypes.bool,
});
const propTypesOffsetType = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
        mainAxis: PropTypes.number,
        crossAxis: PropTypes.number,
        alignmentAxis: PropTypes.number,
    }),
]);
const propTypesPlacements = PropTypes.instanceOf([
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "left-start",
    "left",
    "left-end",
]
)

const NewAnimatePresenceProps = (children) => {
    return children;
}
// class NewAnimatePresenceProps extends Omit {
//     children: React.ReactNode;
// }

export {
    colors, animation,
    dismissType,
    offsetType,
    propTypesAnimation,
    propTypesDismissType,
    propTypesOffsetType,
    propTypesColors,
    propTypesPlacements,
    NewAnimatePresenceProps
}
