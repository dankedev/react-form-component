import { TextField } from '../components/TextField';
import { Button } from '../components/Buttons';
import PropTypes from 'prop-types';

const TextFieldMaterialExample = ({ variant = 'standard' }) => {
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
      <div className="grid grid-cols-2 mb-12 items-end gap-6">
        <div className="col-span-1">
          <TextField
            fullWidth={true}
            label={`Form Input Normal`}
            size={'small'}
            color={'inherit'}
            id={`form-input-normal`}
            placeholder={'Name'}
            type={'text'}
          />
        </div>
        <div className="col-span-1">
          <TextField
            fullWidth={true}
            label={`Form Input ${variant}`}
            size={'small'}
            color={'inherit'}
            id={`form-input-normal`}
            placeholder={'Name'}
            variant={variant}
            type={'text'}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 mb-12 items-end gap-6">
        <div className="col-span-1">
          <TextField
            fullWidth={true}
            label={`Form Input Normal`}
            size={'normal'}
            color={'inherit'}
            id={`form-input-normaly`}
            placeholder={'Name'}
            type={'text'}
          />
        </div>
        <div className="col-span-1">
          <TextField
            fullWidth={true}
            label={`Form Input ${variant}`}
            size={'normal'}
            color={'inherit'}
            id={`form-input-normalx`}
            placeholder={'Name'}
            variant={variant}
            type={'text'}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 mb-12 items-end gap-6">
        {' '}
        <div className="col-span-1">
          <TextField
            fullWidth={true}
            label={`Form Input Normal`}
            size={'large'}
            color={'green'}
            id={`form-input-large`}
            placeholder={'Name'}
            type={'text'}
          />
        </div>
        <div className="col-span-1">
          <TextField
            fullWidth={true}
            label={`Form Input large`}
            size={'large'}
            color={'green'}
            id={`form-input-largex`}
            placeholder={'Name'}
            variant={variant}
            type={'text'}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-6 flex-wrap">
        {inputSize.map((size) => (
          <div key={`input-size-${size}`} className={'flex items-end gap-1'}>
            <TextField
              label={`Form Input ${size.toUpperCase()}`}
              size={size}
              variant={variant}
              color={'inherit'}
              id={`form-input-1111-${size}`}
              placeholder={'Name'}
              type={'text'}
            />
            <Button size={size}>Submit</Button>
          </div>
        ))}

        {inputColors.map((color) => (
          <div key={`input-size-${color}`} className={'flex items-end gap-1'}>
            <TextField
              label={`Form Input ${color.toUpperCase()}`}
              size={'large'}
              color={color}
              variant={variant}
              id={`form-input-1111-${color}`}
              placeholder={'Name'}
              type={'text'}
            />
            <Button color={color} size={'large'}>
              Submit
            </Button>
          </div>
        ))}

        <TextField
          label={`Form Multiline`}
          size={'large'}
          color={'blue'}
          multiline={true}
          variant={variant}
          id={`address`}
          placeholder={'Name'}
          type={'text'}
        />
      </div>
    </div>
  );
};

TextFieldMaterialExample.defaultProps = {
  variant: 'standard'
};

TextFieldMaterialExample.propTypes = {
  variant: PropTypes.string
};
export default TextFieldMaterialExample;
