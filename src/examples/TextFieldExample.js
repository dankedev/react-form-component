import { TextField } from '../components/TextField';
import { Button } from '../components/Buttons';

const TextFieldExample = () => {
  const inputSize = ['small', 'normal', 'large'];

  const inputColors = [
    'inherit',
    'blue',
    'light-blue',
    'green',
    'light-green',
    'lime',
    'red',
    'pink',
    'purple',
    'deep-purple',
    'teal',
    'yellow',
    'amber',
    'orange',
    'deep-orange'
  ];

  return (
    <div className={'space-y-8 mb-20 min-h-screen w-full '}>
      <div className="grid grid-cols-2 items-center gap-6 flex-wrap">
        <div className="grid grid-cols-2 col-span-2 gap-8">
          {inputSize.map((size) => (
            <div key={`input-size-${size}`} className={'flex items-end gap-1'}>
              <TextField
                label={`Form Input ${size.toUpperCase()}`}
                size={size}
                fullWidth={true}
                color={'inherit'}
                id={`form-input-1111-${size}`}
                placeholder={`Size ${size}`}
                type={'text'}
              />
              <Button size={size}>Submit</Button>
            </div>
          ))}
        </div>
        {inputColors.map((color) => (
          <div key={`input-color-${color}`} className={'flex items-end gap-1'}>
            <TextField
              label={`Form Input ${color.toUpperCase()}`}
              size={'normal'}
              color={color}
              id={`form-input-1111-${color}`}
              placeholder={'Name'}
              variant={'default'}
              type={'text'}
              isRequired={true}
            />
            <Button color={color} size={'normal'}>
              Submit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextFieldExample;
