// import {Select,Option,OptionGroup} from "../components/Select"
import { Option, Select } from '../components/Select/Select';
import { useRef } from 'react';
import { TextField } from '../components';
import SelectCity from '../components/Select/SelectCity';
import SelectDistrict from '../components/Select/SelectDistrict';

const SelectExample = () => {
  const inputRef = useRef('select-city');

  const variants = ['outlined', 'filled', 'standard'];
  return (
    <div className={'space-y-8 mb-20 min-h-screen w-full '}>
      <h1>Floating UI Select</h1>
      {/* <Select ref={inputRef} options={films} label={'Pilihan Anda?'}/> */}
      <div className="grid grid-cols-3 gap-6">
        {variants.map((variant, index) => (
          <div key={`select-variant-${variant}-${index}`} className="col-span-1 space-y-4">
            <Select variant={variant} size={'large'} label="Select Version outlined large">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>

            <TextField
              variant={variant}
              size={'small'}
              fullWidth={true}
              color={'red'}
              label={'Select Version'}
            />
          </div>
        ))}
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-6 mt-12">
        <div className="col-span-1">
          <SelectCity label={'Pilih Alamat'} />
        </div>
        <div className="col-span-1">
          <SelectDistrict label={'Pilih Distrik'} ref={inputRef} />
        </div>
      </div>
    </div>
  );
};

// SelectExample.displaylabel = 'SelectExampleComponent'

export default SelectExample;
