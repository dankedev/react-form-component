import InputTextIcon from './icons/input-text-icon';
import PropTypes from 'prop-types';
import InputCourierIcon from './icons/input-courier-icon';
import InputLinkIcon from './icons/input-link-icon';

import InputCityIcon from './icons/input-city-icon';
import InputDateIcon from './icons/input-date-icon';
import InputSingleCheckboxIcon from './icons/input-single-chekbox-icon';
import InputRadioIcon from './icons/input-radio-icon';
import InputParagraphIcon from './icons/input-paragraph-icon';
import InputFileIcon from './icons/input-file-icon';
import InputDropdownIcon from './icons/input-dropdown-icon';
import InputImageIcon from './icons/input-image-icon';
import InputHeadingIcon from './icons/input-heading-icon';
import InputHiddenIcon from './icons/input-hidden-icon';
import SeparatorIcon from './icons/separator-icon';

const FieldIcon = ({ type, classF = 'h-8' }) => {
  let component;

  switch (type) {
    case 'name':
      component = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 448 512">
          <path d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
        </svg>
      );
      break;
    case 'address':
      component = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
      break;
    case 'email':
      component = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512">
          <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path>
        </svg>
      );
      break;
    case 'textarea':
      component = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 448 512">
          <path d="M280 48H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8zm160 384H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM280 304H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm160-128H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"></path>
        </svg>
      );
      break;
    case 'text':
    case 'number':
      component = <InputTextIcon className={classF} />;
      break;
    case 'url':
      component = <InputLinkIcon className={classF} />;
      break;

    case 'phone':
      component = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512">
          <path d="M487.8 24.1L387 .8c-14.7-3.4-29.8 4.2-35.8 18.1l-46.5 108.5c-5.5 12.7-1.8 27.7 8.9 36.5l53.9 44.1c-34 69.2-90.3 125.6-159.6 159.6l-44.1-53.9c-8.8-10.7-23.8-14.4-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7C27.3 502 39.9 512 54.5 512 306.7 512 512 307.8 512 54.5c0-14.6-10-27.2-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23C479.7 289.7 289.6 479.7 55.1 480z"></path>
        </svg>
      );
      break;
    case 'courier':
      component = <InputCourierIcon className={classF} />;
      break;
    case 'city':
      component = <InputCityIcon className={classF} />;
      break;
    case 'date':
      component = <InputDateIcon className={classF} />;
      break;
    case 'time':
      component = (
        <svg
          className={classF}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512">
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
        </svg>
      );
      break;
    case 'checkboxes':
      component = <InputSingleCheckboxIcon className={classF} />;
      break;
    case 'radio':
      component = <InputRadioIcon className={classF} />;
      break;
    case 'file':
      component = <InputFileIcon className={classF} />;
      break;
    case 'dropdown':
      component = <InputDropdownIcon className={classF} />;
      break;
    case 'image':
      component = <InputImageIcon className={classF} />;
      break;
    case 'paragraph':
      component = <InputParagraphIcon className={classF} />;
      break;
    case 'header_text':
      component = <InputHeadingIcon className={classF} />;
      break;
    case 'hidden':
      component = <InputHiddenIcon className={classF} />;
      break;
    case 'separator':
      component = <SeparatorIcon className={classF} />;
      break;
    default:
      component = <span />;
      break;
  }

  return component;
};

FieldIcon.propTypes = {
  type: PropTypes.string,
  classF: PropTypes.string
};
export default FieldIcon;
