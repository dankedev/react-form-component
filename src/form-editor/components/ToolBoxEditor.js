/* eslint-disable */
import { fields } from '../../helper/field-variables';
import { Button, Icon } from '../../components';
import FieldIcon from './field-icon';
import PropTypes from 'prop-types';

const ToolBoxEditor = ({ show, onAddField, hideToolBox }) => {


  // const settingFields = fields.map(item => {
  //   return {
  //     key: item.key,
  //     fieldType: item.fieldType,
  //     type: item.type,
  //     settings: {
  //       label: {
  //         value: '',
  //         label: 'Label',
  //         helpText: null
  //       },
  //       required: {
  //         value: false,
  //         label: 'Required',
  //         type: 'checkbox',
  //         helpText: null
  //       },
  //       errorMessage: {
  //         value: '',
  //         label: 'Pesan Error',
  //         type: 'text',
  //         helpText: null
  //       }
  //     }
  //   };
  // });


  return (<div id='toolbox'
               className={`toolbox-editor right-0  ${show ? 'translate-x-0' : 'translate-x-full'}`}>
    <div className='relative pt-12 h-full bg-white z-50'>
      <div
        className='flex items-center justify-between pl-6 pr-3  bg-white border-b absolute w-full top-0 left-0 rounded-t-md'>
        <span />
        <span className='font-bold'>Fields</span>
        <Button variant={'text'} size={'normal'} color={'red'} iconOnly={true} onClick={() => hideToolBox(false)}>
          <Icon name={'close'}
                className={'select-none'} />
        </Button>

      </div>
      <div className='w-full absolute bottom-0 left-0 overflow-y-auto' style={{ height: 'calc(100% - 30px)' }}>
        <input type='text' className={'tool-box-search border'} placeholder={'Search'} />
        <div className='flex flex-col divide-y' role={'listbox'}>

          {fields.map((field, index) => <div
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

ToolBoxEditor.propTypes = {
  hideToolBox: PropTypes.func,
  onAddField: PropTypes.func,
  show: PropTypes.bool
};

export default ToolBoxEditor;