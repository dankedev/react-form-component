import * as React from 'react';

const DropPlaceholder = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 168 34"
    {...props}>
    <path
      fill="#cecece"
      stroke="#b3b3b3"
      d="M165.062 3.562a1.5 1.5 0 0 0-1.5-1.5h-160a1.5 1.5 0 0 0-1.5 1.5v26a1.5 1.5 0 0 0 1.5 1.5h160a1.5 1.5 0 0 0 1.5-1.5v-26Z"
    />
    <path
      fill="#343232"
      fillRule="nonzero"
      d="M9.062 8.562c.823 0 1.5-.677 1.5-1.5s-.677-1.5-1.5-1.5-1.5.677-1.5 1.5.677 1.5 1.5 1.5Zm0 6c.823 0 1.5-.677 1.5-1.5s-.677-1.5-1.5-1.5-1.5.677-1.5 1.5.677 1.5 1.5 1.5Zm1.5 4.5c0 .823-.677 1.5-1.5 1.5s-1.5-.677-1.5-1.5.677-1.5 1.5-1.5 1.5.677 1.5 1.5Zm-1.5 7.5c.823 0 1.5-.677 1.5-1.5s-.677-1.5-1.5-1.5-1.5.677-1.5 1.5.677 1.5 1.5 1.5Zm6.5-19.5c0 .823-.677 1.5-1.5 1.5s-1.5-.677-1.5-1.5.677-1.5 1.5-1.5 1.5.677 1.5 1.5Zm-1.5 7.5c.823 0 1.5-.677 1.5-1.5s-.677-1.5-1.5-1.5-1.5.677-1.5 1.5.677 1.5 1.5 1.5Zm1.5 4.5c0 .823-.677 1.5-1.5 1.5s-1.5-.677-1.5-1.5.677-1.5 1.5-1.5 1.5.677 1.5 1.5Zm-1.5 7.5c.823 0 1.5-.677 1.5-1.5s-.677-1.5-1.5-1.5-1.5.677-1.5 1.5.677 1.5 1.5 1.5Z"
    />
    <text
      x={21.474}
      y={14.801}
      fontFamily="'ArialMT','Arial',sans-serif"
      fontSize={12}
      transform="translate(-1.749 4.59)">
      {props.text}
    </text>
  </svg>
);

export default DropPlaceholder;
