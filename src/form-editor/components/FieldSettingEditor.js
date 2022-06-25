import PropTypes from 'prop-types';
import { Button, Icon } from '../../components';
import { settingFields } from '../../helper/field-settings-variables';

const FieldSettingEditor = ({ show, field, setField }) => {
  const setting = field && settingFields.find((i) => i.fieldType === field.fieldType);
  if (!field) {
    return <div />;
  }
  return (
    <div
      id="field-editor"
      className={`toolbox-editor right-0  ${show ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="relative pt-12 h-full bg-white z-50">
        <div className="bg-white absolute w-full top-0 left-0 rounded-t-md">
          <div className={'flex items-center justify-between pl-6 pr-3 border-b'}>
            <span />
            <span className="font-bold">Fields</span>
            <Button
              variant={'text'}
              size={'normal'}
              color={'red'}
              iconOnly={true}
              onClick={() => setField(null)}>
              <Icon name={'close'} className={'select-none'} />
            </Button>
          </div>
        </div>
        {JSON.stringify(setting)}
      </div>
    </div>
  );
};
FieldSettingEditor.defaultProps = {
  show: false,
  field: {}
};
FieldSettingEditor.propTypes = {
  show: PropTypes.bool,
  field: PropTypes.object,
  setField: PropTypes.func.isRequired
};
export default FieldSettingEditor;
