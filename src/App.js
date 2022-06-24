/* eslint-disable */
import ButtonExamples from './examples/ButtonExamples';
import Sidebar from './layouts/sidebar';
import { Route, Routes } from 'react-router-dom';
import ButtonIconExamples from './examples/ButtonIconExamples';
import TextFieldExample from './examples/TextFieldExample';
import TextFieldMaterialExample from './examples/TextFieldMaterialExample';
import FormExample from './examples/FormExample';
import SelectCheckboxRadio from './examples/SelectCheckboxRadio';
import MaterialFormExamples from './examples/MaterialFormExamples';
import SelectExample from './examples/SelectExample';
import AdvanceFormEditor from './form-editor';

function App() {
  return (
    <div className="w-full mx-auto">


      <Routes>
        <Route path={'/'} element={<AdvanceFormEditor form_id={111} />} />
      </Routes>
      {/*<div className="flex">*/}
      {/*  <Sidebar />*/}
      {/*  <div className="ml-[200px] my-20 px-10 w-content">*/}
      {/*    <Routes>*/}
      {/*      <Route path={'/buttons'} element={<ButtonExamples />} />*/}
      {/*      <Route path={'/buttons-icon'} element={<ButtonIconExamples />} />*/}
      {/*      <Route path={'/text-field'} element={<TextFieldExample />} />*/}
      {/*      <Route*/}
      {/*        path={'/text-field-md-default'}*/}
      {/*        element={<TextFieldMaterialExample variant={'default'} />}*/}
      {/*      />*/}
      {/*      <Route*/}
      {/*        path={'/text-field-md-standard'}*/}
      {/*        element={<TextFieldMaterialExample variant={'standard'} />}*/}
      {/*      />*/}
      {/*      <Route*/}
      {/*        path={'/text-field-md-outlined'}*/}
      {/*        element={<TextFieldMaterialExample variant={'outlined'} />}*/}
      {/*      />*/}
      {/*      <Route*/}
      {/*        path={'/text-field-md-filled'}*/}
      {/*        element={<TextFieldMaterialExample variant={'filled'} />}*/}
      {/*      />*/}
      {/*      <Route path={'/checkbox-radio'} element={<SelectCheckboxRadio />} />*/}
      {/*      <Route path={'/select'} element={<SelectExample />} />*/}
      {/*      <Route path={'/form'} element={<FormExample />} />*/}
      {/*      /!* <Route path={'/form-material'} element={<FormMaterialExample/>}/> *!/*/}
      {/*      <Route path={'/material-form'} element={<MaterialFormExamples />} />*/}
      {/*    </Routes>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/* <ButtonExamples/> */}
    </div>
  );
}

export default App;
