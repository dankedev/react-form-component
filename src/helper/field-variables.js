export const existingFields = [
  {
    key: 'name',
    label: 'Nama Lengkap',
    required: true,
    enabled: false,
    editable: true,
    errorMessage: 'Nama harus diisi',
    default: '',
    fieldType: 'name',
    type: 'text', // text,number,email,url,date,file,phone,textarea
    fields: [
      {
        key: 'first_name',
        label: 'Nama depan',
        type: 'text',
        fieldType: 'input',
        default: '',
        required: true,
        enabled: true
      },
      {
        key: 'last_name',
        label: 'Nama akhir',
        type: 'text',
        default: '',
        fieldType: 'input',
        required: true,
        enabled: true
      }
    ]
  },
  // {
  // 	key: 'name',
  // 	label: 'Name',
  // 	placeholder: 'Nama Lengkap',
  // 	required: true,
  // 	enabled: false,
  // 	editable: true,
  // 	default: '',
  // 	fieldType: 'input',
  // 	type: 'text', //text,number,email,url,date,file,phone,textarea
  // },
  {
    key: 'phone',
    label: 'No Handphone / Whatsapp',
    placeholder: 'No. WhatsApp Anda',
    required: true,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'input',
    type: 'phone'
  },
  {
    key: 'email',
    label: 'Email',
    placeholder: 'Email',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'input',
    type: 'email'
  },
  // {
  // 	key: 'courier',
  // 	label: 'Kurir',
  // 	placeholder: 'Kurir',
  // 	required: true,
  // 	enabled: false,
  // 	editable: true,
  // 	default: '',
  // 	fieldType: 'select',
  // 	type: 'courier',
  // 	couriers:[]
  // },

  {
    key: 'address',
    label: 'Alamat lengkap',
    placeholder: 'Alamat Lengkap',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'address',
    type: 'text',
    fields: [
      {
        key: 'full_address',
        label: 'Alamat lengkap',
        placeholder: 'Alamat lengkap',
        error_message: '',
        default: '',
        editable: true,
        enabled: true,
        type: 'textarea',
        options: ['label', 'default']
      },
      {
        key: 'city',
        label: 'Kota/Kecamatan',
        placeholder: 'Kota / Kecamatan',
        required: true,
        enabled: true,
        editable: false,
        default: '',
        fieldType: 'select',
        type: 'city'
      }
    ]
  }

  // {
  //   key: 'company_name',
  //   label: 'Perusahaan',
  //   placeholder: 'Nama Perusahaan',
  //   required: false,
  //   enabled: false,
  //   editable: true,
  //   default: '',
  //   fieldType: 'input',
  //   type: 'text' // text,number,email,url,date,file,phone,textarea
  // }
];

export const customFields = [
  'text',
  'number',
  'date',
  'url',
  'textarea',
  'checkboxes',
  'radio',
  'file',
  'dropdown',
  'image',
  'header_text',
  'paragraph'
];

export const fields = [
  {
    key: 'name',
    label: 'Nama Lengkap',
    required: true,
    enabled: false,
    editable: true,
    errorMessage: 'Nama harus diisi',
    default: '',
    fieldType: 'name',
    type: 'text',
    fields: [
      {
        key: 'first_name',
        label: 'Nama depan',
        type: 'text',
        fieldType: 'input',
        default: '',
        required: true,
        enabled: true
      },
      {
        key: 'last_name',
        label: 'Nama akhir',
        type: 'text',
        default: '',
        fieldType: 'input',
        required: true,
        enabled: true
      }
    ]
  },
  {
    key: 'phone',
    label: 'No Handphone / Whatsapp',
    placeholder: 'No. WhatsApp Anda',
    required: true,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'input',
    type: 'phone'
  },
  {
    key: 'email',
    label: 'Email',
    placeholder: 'Email',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'input',
    type: 'email'
  },
  {
    key: 'address',
    label: 'Alamat lengkap',
    placeholder: 'Alamat Lengkap',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'address',
    type: 'text',
    fields: [
      {
        key: 'full_address',
        label: 'Alamat lengkap',
        placeholder: 'Alamat lengkap',
        error_message: '',
        default: '',
        editable: true,
        enabled: true,
        type: 'textarea',
        options: ['label', 'default']
      },
      {
        key: 'city',
        label: 'Kota/Kecamatan',
        placeholder: 'Kota / Kecamatan',
        required: true,
        enabled: true,
        editable: false,
        default: '',
        fieldType: 'select',
        type: 'city'
      }
    ]
  },
  {
    key: 'text',
    label: 'Text',
    placeholder: 'Text',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'text',
    type: 'text'
  },
  // {
  //   key: 'number',
  //   label: 'number',
  //   placeholder: 'number',
  //   required: false,
  //   enabled: false,
  //   editable: true,
  //   default: '',
  //   fieldType: 'number',
  //   type: 'number'
  // },
  // {
  //   key: 'date',
  //   label: 'date',
  //   placeholder: 'date',
  //   required: false,
  //   enabled: false,
  //   editable: true,
  //   default: '',
  //   fieldType: 'date',
  //   type: 'date'
  // },
  // {
  //   key: 'hidden',
  //   label: 'hidden',
  //   placeholder: 'hidden',
  //   required: false,
  //   enabled: false,
  //   editable: true,
  //   default: '',
  //   fieldType: 'hidden',
  //   type: 'hidden'
  // },
  // {
  //   key: 'url',
  //   label: 'url',
  //   placeholder: 'url',
  //   required: false,
  //   enabled: false,
  //   editable: true,
  //   default: '',
  //   fieldType: 'url',
  //   type: 'url'
  // },
  {
    key: 'textarea',
    label: 'textarea',
    placeholder: 'textarea',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'textarea',
    type: 'textarea'
  },
  {
    key: 'checkboxes',
    label: 'checkboxes',
    placeholder: 'checkboxes',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'checkboxes',
    type: 'checkboxes'
  },
  {
    key: 'radio',
    label: 'radio',
    placeholder: 'radio',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'radio',
    type: 'radio'
  },
  {
    key: 'file',
    label: 'file',
    placeholder: 'file',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'file',
    type: 'file'
  },
  {
    key: 'dropdown',
    label: 'dropdown',
    placeholder: 'dropdown',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'dropdown',
    type: 'dropdown'
  },
  {
    key: 'image',
    label: 'Image Upload',
    placeholder: 'Upload your images here',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'image',
    type: 'image'
  },
  {
    key: 'file',
    label: 'File Upload',
    placeholder: 'File Upload',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'file',
    type: 'image'
  },
  {
    key: 'header_text',
    label: 'header text',
    placeholder: 'header_text',
    required: false,
    enabled: false,
    editable: true,
    default: 'Your header text here',
    value: null,
    fieldType: 'header_text',
    type: 'header_text'
  },
  {
    key: 'paragraph',
    label: 'Paragraph',
    value: null,
    required: false,
    enabled: false,
    editable: true,
    default: 'Your text or description here',
    fieldType: 'paragraph',
    type: 'paragraph'
  },
  {
    key: 'separator',
    label: 'Separator',
    placeholder: 'separator',
    required: false,
    enabled: false,
    editable: true,
    default: '',
    fieldType: 'separator',
    type: 'separator'
  }
];
