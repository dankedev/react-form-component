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

const FormEditorPreviews = ({ fields, onSetting }) => {
  const [activated, setActivated] = useState(0);
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
                onSetting={onSetting}
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
                onSetting={onSetting}
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
                onSetting={onSetting}
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
                onSetting={onSetting}
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
                onSetting={onSetting}
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
                onSetting={onSetting}
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
                onSetting={onSetting}
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
                onSetting={onSetting}
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
                onSetting={onSetting}
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
                onSetting={onSetting}
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
                onSetting={onSetting}
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
  fields: PropTypes.array,
  onSetting: PropTypes.func
};

export default FormEditorPreviews;
