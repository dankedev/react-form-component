import { useMemo, createRef, useState } from 'react';

import PropTypes from 'prop-types';
import NamePreview from './NamePreview';
import InputText from './InputText';
import AddressPreview from './AddressPreview';
import HeadingPreview from './HeadingPreview';
import ParagraphPreview from './ParagraphPreview';
import SeparatorPreview from './SeparatorPreview';
import RadioPreview from './RadioPreview';
import CheckBoxPreview from './CheckBoxPreview';
import ImageUploadPreview from './ImageUploadPreview';
import FileUploadPreview from './FileUploadPreview';
import DropDownPreview from './DropDownPreview';

const FormEditorPreviews = ({ fields }) => {
  const [activated, setActivated] = useState(null);
  const fieldRef = useMemo(() => {
    const refs = {};
    fields.forEach((item) => {
      refs[item.key] = createRef(null);
    });
    return refs;
  }, [fields]);

  return (
    <div className={'space-y-4 w-full'}>
      {fields.map((field, index) => {
        let component = <div />;
        const indexKey = index + 1;
        switch (field.fieldType) {
          case 'name':
            component = (
              <NamePreview
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
          case 'input':
          case 'text':
          case 'number':
          case 'email':
          case 'date':
          case 'textarea':
            component = (
              <InputText
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                type={field.type}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
          case 'address':
            component = (
              <AddressPreview
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                type={field.type}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
          case 'header_text':
            component = (
              <HeadingPreview
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                type={field.type}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
          case 'paragraph':
            component = (
              <ParagraphPreview
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                type={field.type}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
          case 'separator':
            component = (
              <SeparatorPreview
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                type={field.type}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
          case 'radio':
            component = (
              <RadioPreview
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                type={field.type}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
          case 'checkboxes':
            component = (
              <CheckBoxPreview
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                type={field.type}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
          case 'image':
            component = (
              <ImageUploadPreview
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                type={field.type}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
          case 'file':
            component = (
              <FileUploadPreview
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                type={field.type}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
          case 'dropdown':
            component = (
              <DropDownPreview
                onClick={() => setActivated(indexKey)}
                active={activated}
                field={field}
                type={field.type}
                indexKey={indexKey}
                ref={fieldRef[field.key]}
              />
            );
            break;
        }

        return <div key={`field-index-${field.type}-${index}`}>{component}</div>;
      })}
      {JSON.stringify(fields)}
    </div>
  );
};

FormEditorPreviews.propTypes = {
  fields: PropTypes.array
};

export default FormEditorPreviews;
