import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Checkbox, Radio } from '../components';
// import Select from "../components/Select";
// import Select from 'react-select';
import { Option, Select } from '../components/Select/Select';
// const films = [
//   { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
//   { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
//   { value: 'purple', label: 'Purple', color: '#5243AA' },
//   { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
//   { value: 'orange', label: 'Orange', color: '#FF8B00' },
//   { value: 'yellow', label: 'Yellow', color: '#FFC400' },
//   { value: 'green', label: 'Green', color: '#36B37E' },
//   { value: 'forest', label: 'Forest', color: '#00875A' },
//   { value: 'slate', label: 'Slate', color: '#253858' },
//   { value: 'silver', label: 'Silver', color: '#666666' }
// ];
const FormExample = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      myName: 'hadi danker',
      last_name: '',
      select_option: null
    }
  });
  const onSubmit = (data) => console.log(data);
  const values = watch();
  return (
    <div className={'space-y-8 mb-20 min-h-screen w-full bg-gray-50 py-20'}>
      <div className="w-full bg-white rounded-md shadow-md drop-shadow-2xl mx-auto max-w-4xl px-6 py-8">
        <h1 className="font-bold text-center">
          Form Order xxx {typeof Controller} -- and {typeof control}
        </h1>
        <div className="form-content px-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Controller
                  name="first_name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState, formState }) => (
                    <TextField
                      label={`Nama Depan`}
                      size={'large'}
                      color={'inherit'}
                      fullWidth={true}
                      variant={'outlined'}
                      {...field}
                      {...fieldState}
                      {...formState}
                      id={`first_name`}
                      placeholder={'Nama depan'}
                      type={'text'}
                    />
                  )}
                />
                <Controller
                  name="last_name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState, formState }) => (
                    <TextField
                      label={`Nama Akhir`}
                      size={'large'}
                      color={'inherit'}
                      fullWidth={true}
                      variant={'outlined'}
                      {...field}
                      {...fieldState}
                      {...formState}
                      id={`last_name`}
                      placeholder={'Name'}
                      type={'text'}
                    />
                  )}
                />
              </div>
              <Controller
                name="address"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState, formState }) => (
                  <TextField
                    label={`Alamat tinggal`}
                    size={'normal'}
                    color={'green'}
                    variant={'outlined'}
                    fullWidth={true}
                    multiline={true}
                    {...field}
                    {...fieldState}
                    {...formState}
                    id={`form-input-1111`}
                    placeholder={'Name'}
                    type={'text'}
                  />
                )}
              />
            </div>
            <Controller
              control={control}
              name="pilihan"
              defaultChecked={true}
              rules={{ required: true }}
              render={({ field, fieldState, formState }) => (
                <Checkbox
                  {...field}
                  {...fieldState}
                  {...formState}
                  checked={true}
                  id={`pilih-an`}
                  label={`Pilih Yakin?`}
                />
              )}
            />

            <Controller
              control={control}
              name="pilihan radio"
              rules={{ required: true }}
              defaultChecked={true}
              render={({ field, fieldState, formState }) => (
                <Radio
                  {...field}
                  {...fieldState}
                  {...formState}
                  checked={field.value}
                  id={`pilih-an`}
                  label={`Pilih Yakin?`}
                />
              )}
            />

            <Controller
              control={control}
              render={({ field: { onBlur, onChange, value, ref }, fieldState, formState }) => (
                <Select
                  variant="standard"
                  ref={ref}
                  color={'deep-orange'}
                  size={'large'}
                  onBlur={onBlur}
                  onChange={onChange}
                  {...fieldState}
                  {...formState}
                  label="Select Version">
                  <Option value={'tailwind'}>Material Tailwind HTML</Option>
                  <Option value={'react'}>Material Tailwind React</Option>
                  <Option value={'vue'}>Material Tailwind Vue</Option>
                  <Option value={'angular'}>Material Tailwind Angular</Option>
                  <Option value={'svelte'}>Material Tailwind Svelte</Option>
                </Select>
              )}
              name={'engine'}
            />

            {/* <Controller */}
            {/*    control={control} */}
            {/*    name="select_option" */}
            {/*    rules={{required: true}} */}
            {/*    defaultChecked={true} */}
            {/*    render={({ */}
            {/*                 field, */}
            {/*                 fieldState, */}
            {/*                 formState, */}
            {/*             }) => <Select */}
            {/*        {...field} */}
            {/*        {...fieldState} */}
            {/*        {...formState} */}
            {/*        options={films} */}
            {/*        label={'Pilihan Anda?'} */}
            {/*        closeMenuOnSelect={false} */}
            {/*        classNamePrefix={'fo'} */}
            {/*        className={'fo-select-opt'} */}
            {/*        theme={(theme) => ({ */}
            {/*            ...theme, */}
            {/*            borderRadius: 0, */}
            {/*            colors: { */}
            {/*                ...theme.colors, */}
            {/*                primary25: 'hotpink', */}
            {/*                primary: 'black', */}
            {/*            }, */}
            {/*        })} */}
            {/*        placeholder={'custom placeholder component'} */}
            {/*        id={`select_optionZX`}/>} */}
            {/* /> */}
          </form>
          {JSON.stringify(values)}
        </div>
      </div>
    </div>
  );
};

export default FormExample;
