/* eslint-disable */
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import HeaderEditor from './components/HeaderEditor';
import * as PropTypes from 'prop-types';
import FormFieldsEditor from './components/FormFieldsEditor';



FormFieldsEditor.propTypes = {
  model: PropTypes.shape({
    settings: PropTypes.shape({}),
    ID: PropTypes.any,
    title: PropTypes.any,
    fields: PropTypes.arrayOf(PropTypes.any),
    slug: PropTypes.any,
    status: PropTypes.any,
    products: PropTypes.arrayOf(PropTypes.any)
  })
};
const AdvanceFormEditor = () => {
  let params = useParams();
  let form_id = params.formId;
  const [headerHeight, setHeaderHeight] = useState(96);
  const [current, setCurrent] = useState('product');
  const [model, setModel] = useState({
    title: undefined,
    ID: null,
    slug: undefined,
    status: null,
    products: [],
    fields: [],
    settings: {}
  });


  return (<div className={'w-full relative min-h-screen'}>
    <HeaderEditor model={model} setHeight={setHeaderHeight} />
    <FormFieldsEditor model={model}/>

  </div>);
};


// AdvanceFormEditor.defaultProps ={
//   form_id:null
// }
//
// AdvanceFormEditor.propTypes = {
//   form_id: PropTypes.string
// }
export default AdvanceFormEditor;