import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import PreviewWrap from './PreviewWrap';

// eslint-disable-next-line react/display-name
const NamePreview = forwardRef(({ indexKey, type, onSetting, active, field, ...others }, ref) => {
  const uuid = uuidv4();

  return (
    <PreviewWrap
      {...others}
      ref={ref}
      active={active}
      field={field}
      onSetting={onSetting}
      indexKey={indexKey}
      id={uuid}>
      <div className="flex items-start w-full space-x-2 pr-8">
        <span className={'text-button-blue relative w-8 h-8'}>
          <span
            className={`absolute select-none w-full h-full rounded-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white`}>
            <span>{indexKey}</span>
          </span>
        </span>
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
          <div
            className={`grid gap-6 py-3 ${
              field.fields.length === 2 ? 'grid-cols-2' : 'grid-cols-1'
            }`}>
            {field.fields.map((item, index) => (
              <div key={`index-field-name-${field.key}-${index}`} className="col-span-1">
                <div className="border rounded-md px-4 py-3 h-12 w-full flex items-center select-none">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewWrap>
  );
});

NamePreview.defaultProps = {
  indexKey: 1,
  active: false
};
NamePreview.propTypes = {
  indexKey: PropTypes.number,
  active: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  field: PropTypes.object,
  type: PropTypes.string,
  onSetting: PropTypes.func.isRequired
};

export default NamePreview;
