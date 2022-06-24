import { forwardRef, createRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../TextField';
import { districts } from '../districts';

// eslint-disable-next-line react/display-name
const SelectDistrict = forwardRef(({ onChange, label }, inputRef) => {
  const wrapRef = createRef();
  // const [state, setState] = useState('close');
  // const [open, setOpen] = useState(false);
  const [cities, setCities] = useState([]);

  const onChangeInput = async (e) => {
    const { value } = e.target;

    if (value.length >= 3) {
      // setState('open');

      const delayDebounceFn = setTimeout(async () => {
        let option = [];
        const keyData = 'wp-form-order-cities';
        let data = localStorage.getItem(keyData);
        if (data === null || data.length === 0) {
          localStorage.setItem(keyData, JSON.stringify(districts));
          data = districts;
        } else {
          data = JSON.parse(data);
        }
        const Fuse = (await import('fuse.js')).default;
        const fuse = new Fuse(data, {
          includeScore: true,
          shouldSort: true,
          findAllMatches: false,
          includeMatches: false,
          keys: [
            {
              name: 'subdistrict_name',
              weight: 0.8
            },
            {
              name: 'province_name',
              weight: 0.1
            },
            {
              name: 'city_name',
              weight: 0.1
            }
          ]
        });

        option = fuse
          .search(value)
          .slice(0, 7)
          .map((i) => {
            const label = `${i.item.subdistrict_name}, ${i.item.city_name} - ${i.item.province_name}`;
            return {
              value: i.item.id,
              label,
              city: i.item.city_name,
              province: i.item.province_name,
              subdistrict: i.item.subdistrict_name
            };
          });

        setCities(option ?? []);
      }, 3000);

      return () => clearTimeout(delayDebounceFn);
    }
  };

  const dropDownClassName =
    'bg-white z-50 absolute ease-in-out  w-full max-h-select shadow  drop-shadow-2xl rounded-b top-full translate-y-0 left-0  overflow-y-scroll';

  return (
    <div ref={wrapRef} className="relative w-full min-w-[200px]">
      <TextField
        label={label}
        ref={inputRef}
        variant={'outlined'}
        size={'large'}
        fullWidth={true}
        onChange={onChangeInput}
      />

      <div className={dropDownClassName}>{JSON.stringify(cities)}</div>
    </div>
  );
});

SelectDistrict.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string
};

export default SelectDistrict;
