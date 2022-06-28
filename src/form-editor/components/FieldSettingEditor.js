import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, TextField, Switch } from '../../components';
import { settingFields } from '../../helper/field-settings-variables';
// import { useForm } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';

const FieldSettingEditor = ({ show, field: originalField, setField }) => {
  const [load, setLoad] = useState(null);
  const setting =
    originalField && settingFields.find((i) => i.fieldType === originalField.fieldType);
  const defaultValues =
    originalField && setting.settings
      ? setting.settings.reduce(
          // eslint-disable-next-line no-sequences
          (obj, item) => ((obj[item.key] = item.value), obj),
          {}
        )
      : {};

  const {
    handleSubmit,
    control,
    watch
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm({
    reValidateMode: 'onChange',
    defaultValues
  });

  if (!originalField || !setting.settings) {
    return <div />;
  }

  const values = watch();
  const onFormChange = (data) => {
    console.log(load);
    console.log(values);
    console.log(data);
  };

  return (
    <div
      id="field-editor"
      className={`toolbox-editor right-0  ${show ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="relative pt-12 h-full bg-white z-50">
        <div className="bg-white absolute w-full top-0 left-0 rounded-t-md">
          <div className={'flex items-center justify-between pl-6 pr-3 border-b'}>
            <span />
            <span className="font-bold">{setting.label}</span>
            <Button
              variant={'text'}
              size={'normal'}
              color={'red'}
              iconOnly={true}
              onClick={() => {
                setField(null);
                setLoad(false);
              }}>
              <Icon name={'close'} className={'select-none'} />
            </Button>
          </div>
        </div>
        <div
          className="w-full absolute bottom-0 left-0 overflow-y-auto"
          style={{ height: 'calc(100% - 40px)' }}>
          <form onSubmit={handleSubmit(onFormChange)}>
            <div className="px-6 py-8 space-y-6 text-sm">
              {setting.settings &&
                setting.settings.map((item, index) => {
                  // const item = setting.settings[key];
                  const fieldType = item.type;
                  let component = <div />;

                  switch (fieldType) {
                    case 'text':
                      component = (
                        <Controller
                          name={item.key}
                          control={control}
                          rules={{
                            required: true
                          }}
                          render={({ field, fieldState, formState }) => (
                            <TextField
                              label={item.label}
                              size={'normal'}
                              color={'blue'}
                              fullWidth={true}
                              variant={'outlined'}
                              {...field}
                              {...fieldState}
                              {...formState}
                              id={`form-field-setting-${index}-${item.key}`}
                              placeholder={item.label}
                            />
                          )}
                        />
                      );
                      break;
                    case 'checkbox':
                      component = (
                        <Controller
                          name={item.key}
                          control={control}
                          rules={{ required: true }}
                          render={({ field, fieldState, formState }) => (
                            <Switch
                              labelPosition={'left'}
                              label={item.label}
                              size={'large'}
                              color={'blue'}
                              fullWidth={true}
                              variant={'outlined'}
                              {...field}
                              {...fieldState}
                              {...formState}
                              id={`form-name-${index}-${item.key}`}
                              placeholder={item.label}
                            />
                          )}
                        />
                      );
                      break;
                  }

                  return <div key={`list-form-field-${item.key}-${index}`}>{component}</div>;
                })}
              <Button variant={'contained'} fullWidth={true}>
                Simpan
              </Button>
            </div>
          </form>
        </div>
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
