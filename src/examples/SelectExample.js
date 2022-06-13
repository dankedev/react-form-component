// import {Select,Option,OptionGroup} from "../components/Select"
import { Select, Option } from '../components/Select/Select';
import { createRef } from 'react';
import { TextField } from '../components';

const SelectExample = () => {
  const inputRef = createRef();

  const variants = ['outlined', 'filled', 'standard'];
  return (
    <div className={'space-y-8 mb-20 min-h-screen w-full '}>
      <h1>Floating UI Select</h1>
      {/* <Select ref={inputRef} options={films} label={'Pilihan Anda?'}/> */}
      <div className="grid grid-cols-3 gap-6">
        {variants.map((variant, index) => (
          <div key={`select-variant-${variant}-${index}`} className="col-span-1 space-y-4">
            <Select
              variant={variant}
              size={'small'}
              ref={inputRef}
              label="Select Version outlined large">
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
    </div>
  );
};

// SelectExample.displaylabel = 'SelectExampleComponent'

export default SelectExample;
