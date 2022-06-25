import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PreviewWrap from './PreviewWrap';

// eslint-disable-next-line react/display-name
const ParagraphPreview = forwardRef(
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
        <div className={`w-full flex-grow pl-10`}>
          <p className={''}>{field.value ?? field.default}</p>
        </div>
      </PreviewWrap>
    );
  }
);
ParagraphPreview.defaultProps = {
  indexKey: 1,
  type: 'text',
  active: false
};
ParagraphPreview.propTypes = {
  indexKey: PropTypes.number,
  active: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  field: PropTypes.object,
  type: PropTypes.string,
  onSetting: PropTypes.func.isRequired
};
export default ParagraphPreview;
