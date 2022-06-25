/* eslint-disable */
import { fields } from '../../helper/field-variables';
import { Button, Icon } from '../../components';
import FieldIcon from './field-icon';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ToolBoxFields = ({ show, onAddField, hideToolBox }) => {

  const [variables, setVariables] = useState(fields);

  const handleSearchVariables = (e) => {
    e.preventDefault();
    let { value } = e.target;
    if (value.length >= 2) {
      let search = new RegExp(value, 'i');
      let result = fields.filter(i => search.test(i.label));
      setVariables(result);
    } else {
      setVariables(fields);
    }
  };


  return (<div id='toolbox'
               className={`toolbox-editor right-0  ${show ? 'translate-x-0' : 'translate-x-full'}`}>
    <div className='relative pt-12 h-full bg-white z-50'>
      <div className='bg-white absolute w-full top-0 left-0 rounded-t-md'>
        <div className={'flex items-center justify-between pl-6 pr-3 border-b'}>
          <span />
          <span className='font-bold'>Fields</span>
          <Button variant={'text'} size={'normal'} color={'red'} iconOnly={true} onClick={() => hideToolBox(false)}>
            <Icon name={'close'}
                  className={'select-none'} />
          </Button>
        </div>
        <input type='text' onChange={handleSearchVariables} className={'tool-box-search bg-white'}
               placeholder={'Search'} />

      </div>
      <div className='w-full absolute bottom-0 left-0 overflow-y-auto' style={{ height: 'calc(100% - 85px)' }}>
        <div className='flex flex-col divide-y' role={'listbox'}>

          {variables.map((field, index) => <div
            key={`field-key-${field.key}-${index}`}
            id={`field-key-${field.key}-${index}`}
            tabIndex={index + 1}
            role={'listitem'}
          >
            <div onClick={() => onAddField(field)} className='flex items-center hover:bg-gray-100 cursor-pointer'>
              <div className={`w-10 h-10 p-3 flex items-center ${index % 2 === 0 ? 'bg-amber-50' : 'bg-pink-50'}`}>
                <FieldIcon type={field.key} classF={'h-6'} />
              </div>
              <div className='flex-grow w-full flex items-center px-4 line-clamp-1'>
                <span className={'capitalize'}>{field.label}</span>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  </div>);
};

ToolBoxFields.propTypes = {
  hideToolBox: PropTypes.func,
  onAddField: PropTypes.func,
  show: PropTypes.bool
};

export default ToolBoxFields;