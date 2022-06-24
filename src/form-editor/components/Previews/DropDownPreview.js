import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import PreviewWrap from './PreviewWrap';

// eslint-disable-next-line react/display-name
const DropDownPreview = forwardRef(({ indexKey, type, active, field, ...others }, ref) => {
  const uuid = uuidv4();

  return (
    <PreviewWrap {...others} ref={ref} active={active} indexKey={indexKey} id={uuid}>
      <div className="flex items-start w-full space-x-2 pr-8">
        <div className={'text-button-blue relative w-8 h-8'}>
          <span
            className={`absolute select-none w-full transition-color h-full rounded-md flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white`}>
            <span>{indexKey}</span>
          </span>
        </div>
        <div className={`w-full flex-grow`}>
          <div className="min-h-8">
            <div className="input-label  border-b border-dashed border-b-transparent focus-within:border-b-teal-600 focus-within:border-b-teal-600 w-full flex-grow">
              <span>{field?.label}</span>{' '}
              {field.required && <sup className={'text-red-600 select-none'}>*</sup>}
            </div>
            <div className="input-label  border-b border-dashed border-b-transparent 0 w-full flex-grow">
              <span>{field?.helpText}</span>
            </div>
          </div>
          <div key={`index-field-name-${field.key}-${indexKey}`} className="col-span-1">
            <div className="border rounded-md px-4 py-3 h-12 w-full flex items-center select-none flex justify-between">
              <span>{field.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </PreviewWrap>
  );
});
DropDownPreview.defaultProps = {
  indexKey: 1,
  type: 'text',
  active: false
};
DropDownPreview.propTypes = {
  indexKey: PropTypes.number,
  active: PropTypes.bool,
  field: PropTypes.object,
  type: PropTypes.string
};
export default DropDownPreview;
