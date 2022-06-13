import { Checkbox, Radio } from '../components';
import { propColors, propSize } from '../components/components-helper/variables';
const SelectCheckboxRadio = () => {
  const checkboxSizes = propSize;
  const checkboxColors = propColors;

  return (
    <div>
      <div className="space-y-6">
        <h1>Pembuatan Checkbox</h1>
        <div className="grid grid-cols-3 gap-6">
          {checkboxSizes.map((size) => (
            <div key={`checkbox-${size}`}>
              <Checkbox disabled={true} size={size} id={`pilih-${size}`} label={`Pilih ${size}`} />
            </div>
          ))}
        </div>

        <div className="flex space-x-1 items-center">
          {checkboxSizes.map((size) => (
            <div key={`select-checkbox-${size}`}>
              <Checkbox size={size} id={`select-me-${size}`} />
            </div>
          ))}
        </div>

        <div className="flex space-x-1 items-center">
          {checkboxColors.map((color) => (
            <div key={`select-checkbox-color-${color}`}>
              <Checkbox size={'normal'} color={color} id={`select-me-color-${color}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6 mt-12 ">
        <h1>Pembuatan Radio</h1>
        <div className="grid grid-cols-3 gap-6 flex-wrap">
          {checkboxSizes.map((size) => (
            <div key={`Radio-${size}`}>
              <Radio size={size} id={`pilih-radio-${size}`} label={`Pilih ${size}`} />
            </div>
          ))}
        </div>

        <div className="flex space-x-1 items-center">
          {checkboxSizes.map((size) => (
            <div key={`select-Radio-${size}`}>
              <Radio size={size} id={`pilih-radio-me-${size}`} />
            </div>
          ))}
        </div>

        <div className="flex space-x-1 items-center flex-wrap">
          {checkboxColors.map((color) => (
            <div key={`select-Radio-color-${color}`}>
              <Radio
                size={'normal'}
                color={color}
                id={`pilih-radio-me-color-${color}`}
                label={`Pilih ${color}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCheckboxRadio;
