const fieldText = { value: '', label: 'Label', helpText: null, type: 'text' };
const fieldCheckbox = { value: false, label: 'Required', type: 'checkbox', helpText: null };

export const settingFields = [
  {
    key: 'name',
    fieldType: 'name',
    type: 'text',
    label: 'Nama Lengkap',
    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        ...fieldCheckbox,
        key: 'splitName',
        label: 'Pisahkan Nama depan dan belakang'
      },
      {
        ...fieldText,
        key: 'firstNameLabel',
        label: 'Label Nama depan'
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'phone',
    fieldType: 'input',
    type: 'phone',
    label: 'Nomor WA/Telpon',
    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'email',
    fieldType: 'input',
    type: 'email',
    label: 'Email',

    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'address',
    fieldType: 'address',
    type: 'text',
    label: 'Alamat',

    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'text',
    fieldType: 'text',
    type: 'text',
    label: 'Text Field',

    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  // {
  //   key: 'number',
  //   fieldType: 'number',
  //   type: 'number',
  //   settings: {
  //     label: fieldText,
  //     required: fieldCheckbox,
  //     errorMessage: { ...fieldText, label: 'Pesan Error' }
  //   }
  // },
  // {
  //   key: 'date',
  //   fieldType: 'date',
  //   type: 'date',
  //   settings: {
  //     label: fieldText,
  //     required: fieldCheckbox,
  //     errorMessage: { ...fieldText, label: 'Pesan Error' }
  //   }
  // },
  {
    key: 'textarea',
    fieldType: 'textarea',
    type: 'textarea',
    label: 'Textarea',

    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'checkboxes',
    fieldType: 'checkboxes',
    type: 'checkboxes',
    label: 'Checkbox',

    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'radio',
    fieldType: 'radio',
    type: 'radio',
    label: 'Radio',
    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'file',
    fieldType: 'file',
    type: 'file',
    label: 'Unggah file',

    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'dropdown',
    fieldType: 'dropdown',
    type: 'dropdown',
    label: 'Dropdown',

    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'image',
    fieldType: 'image',
    type: 'image',
    label: 'Unggah gambar',

    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'header_text',
    fieldType: 'header_text',
    type: 'header_text',
    label: 'Text Header',

    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  },
  {
    key: 'paragraph',
    fieldType: 'paragraph',
    type: 'paragraph',
    label: 'Paragraph',
    settings: [
      {
        key: 'required',
        ...fieldCheckbox
      },
      {
        key: 'label',
        ...fieldText
      },
      {
        key: 'errorMessage',
        ...fieldText,
        label: 'Pesan Error'
      }
    ]
  }
];
