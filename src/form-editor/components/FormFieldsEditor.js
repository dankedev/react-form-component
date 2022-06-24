/* eslint-disable */
import { Button } from '../../components';
import Icon from '../../components/Icons/Icon';
import ToolBoxEditor from './ToolBoxEditor';
import { useState } from 'react';
import FormEditorPreviews from './Previews';

const EmptyFields = ({ onClick, show }) => {
  return (<div className={'flex items-center justify-center h-64 flex flex-col gap-6'}>
    <div className='relative'>
      {!show &&
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-50'></span>}
      <Button onClick={onClick} size={'large'} variant={'contained'} rounded={true} iconOnly={true}>
        <Icon size={'extra-large'} name={'add'} />
      </Button>
    </div>

    <p>Click Plus Button to add a field.</p>
  </div>);
};
const FormFieldsEditor = ({ model,fields }) => {
  const [openToolBox, setOpenToolBox] = useState(true);
  const [newFields,setNewFields] = useState(fields);

  const handleOpenToolBox = () => {
    setOpenToolBox(!openToolBox);
  };

  const handleOnAddItems = (item) => {
    let items = newFields ?? [];
      setNewFields([...items,item])
  };

  return (<div className={'w-full h-full relative flex items-start'}>
    <div className={'max-w-screen-md w-full px-6 md:px-0 mx-auto py-6 md:py-10'}>
      {newFields.length ===0 &&  <EmptyFields onClick={handleOpenToolBox} show={openToolBox} />}
      {newFields.length >=1 && <FormEditorPreviews fields={newFields}/> }
    </div>
    <ToolBoxEditor show={openToolBox} hideToolBox={setOpenToolBox} onAddField={handleOnAddItems} />

    {newFields.length >=1 && <div className={`fixed bottom-5 flex items-center justify-center w-full transition-transform ${openToolBox  ? 'translate-y-20':'translate-y-0'}`}>
      <Button onClick={handleOpenToolBox} size={'large'} variant={'contained'} rounded={true} iconOnly={true}>
        <Icon size={'extra-large'} name={'add'} />
      </Button>
    </div>}
  </div>);
};

FormFieldsEditor.defaultProps ={
  fields :[]
}

export default FormFieldsEditor;