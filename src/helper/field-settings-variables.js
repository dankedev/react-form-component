const fieldText = { value: '', label: 'Label', helpText: null };
const fieldCheckbox = { value: false, label: 'Required', type: 'checkbox', helpText: null };

export const settingFields = [
  {
    key: 'name',
    fieldType: 'name',
    type: 'text',
    settings: {
      label: fieldText,
      splitName: { ...fieldCheckbox, label: 'Pisahkan Nama depan dan belakang' },
      firstNameLabel: {
        ...fieldCheckbox,
        label: 'Label Nama depan'
      },
      lastNameLabel: {
        ...fieldCheckbox,
        label: 'Label Nama depan',
        required: [
          {
            key: 'splitName',
            value: true
          }
        ]
      },
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'phone',
    fieldType: 'input',
    type: 'phone',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'email',
    fieldType: 'input',
    type: 'email',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'address',
    fieldType: 'address',
    type: 'text',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'text',
    fieldType: 'text',
    type: 'text',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'number',
    fieldType: 'number',
    type: 'number',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'date',
    fieldType: 'date',
    type: 'date',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'hidden',
    fieldType: 'hidden',
    type: 'hidden',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'url',
    fieldType: 'url',
    type: 'url',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'textarea',
    fieldType: 'textarea',
    type: 'textarea',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'single_checkbox',
    fieldType: 'single_checkbox',
    type: 'single_checkbox',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'checkboxes',
    fieldType: 'checkboxes',
    type: 'checkboxes',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'radio',
    fieldType: 'radio',
    type: 'radio',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'file',
    fieldType: 'file',
    type: 'file',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'dropdown',
    fieldType: 'dropdown',
    type: 'dropdown',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'image',
    fieldType: 'image',
    type: 'image',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'header_text',
    fieldType: 'header_text',
    type: 'header_text',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  },
  {
    key: 'paragraph',
    fieldType: 'paragraph',
    type: 'paragraph',
    settings: {
      label: fieldText,
      required: fieldCheckbox,
      errorMessage: { ...fieldCheckbox, label: 'Pesan Error' }
    }
  }
];
