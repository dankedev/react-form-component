import React, { forwardRef } from 'react';
import PreviewWrap from './PreviewWrap';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import InputFileIcon from '../icons/input-file-icon';

// eslint-disable-next-line react/display-name
const FileUploadPreview = forwardRef(
  ({ indexKey, type, onSetting, active, field, ...others }, ref) => {
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
            <div key={`index-field-name-${field.key}-${indexKey}`} className="col-span-1 mt-4">
              <div className="flex flex-col items-center space-y-2 py-6 border border-dashed">
                <InputFileIcon className={`w-10 h-10`} />
                <span>{field.placeholder}</span>
              </div>
            </div>
          </div>
        </div>
      </PreviewWrap>
    );
  }
);
FileUploadPreview.defaultProps = {
  indexKey: 1,
  type: 'text',
  active: false
};
FileUploadPreview.propTypes = {
  indexKey: PropTypes.number,
  active: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  field: PropTypes.object,
  type: PropTypes.string,
  onSetting: PropTypes.func.isRequired
};

export default FileUploadPreview;
