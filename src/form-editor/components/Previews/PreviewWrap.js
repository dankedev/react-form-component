import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '../../../components';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/display-name
const PreviewWrap = forwardRef(({ indexKey, active, children, ...others }, ref) => {
  const uuid = uuidv4();

  return (
    <div
      {...others}
      ref={ref}
      id={uuid}
      className={`${
        active === indexKey ? 'border-blue-600 shadow-md' : 'border-transparent'
      } space-y-3 group bg-white border rounded-md transition-all cursor-pointer border-dashed relative pb-4`}>
      {active === indexKey && (
        <div className="w-full flex items-center justify-between   w-full">
          <span />
          <span />
          <div className={`flex items-center`}>
            <Button iconOnly={true} size={'small'} variant={'text'}>
              <Icon name={'settings'} />
            </Button>
            <Button iconOnly={true} size={'small'} variant={'text'}>
              <Icon name={'more_vert'} />
            </Button>
          </div>
        </div>
      )}
      {children}
    </div>
  );
});
PreviewWrap.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  indexKey: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired
};

export default PreviewWrap;
