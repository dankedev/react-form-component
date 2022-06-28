/* eslint-disable */
import { Button } from "../../components";
import Icon from "../../components/Icons/Icon";
import ToolBoxFields from "./ToolBoxFields";
import { useEffect, useState } from "react";
import FormEditorPreviews from "./Previews";
import * as PropTypes from "prop-types";
import FieldSettingEditor from "./FieldSettingEditor";

const EmptyFields = ({ onClick, show }) => {
  return (<div className={"flex items-center justify-center h-64 flex flex-col gap-6"}>
    <div className="relative">
      {!show &&
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-50"></span>}
      <Button onClick={onClick} size={"large"} variant={"contained"} rounded={true} iconOnly={true}>
        <Icon size={"extra-large"} name={"add"} />
      </Button>
    </div>

    <p>Click Plus Button to add a field.</p>
  </div>);
};
const FormFieldsEditor = ({ model, fields }) => {
  const [loaded, setLoaded] = useState(null);
  const [openToolBox, setOpenToolBox] = useState(false);
  const [newFields, setNewFields] = useState({});
  const [settingField, setSettingField] = useState(null);

  useEffect(() => {
    if (!loaded) {
      setNewFields(fields);
      setLoaded(true);
    }
  });

  const handleOpenToolBox = () => {
    setOpenToolBox(!openToolBox);
  };

  const handleOnAddItems = (item) => {
    let items = newFields ?? [];
    setNewFields([...items, item]);
  };

  const handleSetSetting = (field) => {
    setSettingField(field);
  };

  return (<div className={"w-full h-full relative flex items-start"}>
    <div
      className={`max-w-screen-md w-full px-6 md:px-0 py-6 md:py-10 mx-auto transition-transform ${openToolBox ? "-translate-x-40" : "-translate-x-0"}`}>
      {newFields.length === 0 && <EmptyFields onClick={handleOpenToolBox} show={openToolBox} />}
      {newFields.length >= 1 && <FormEditorPreviews fields={newFields} onSetting={handleSetSetting} />}
      {JSON.stringify(model)}
    </div>
    <ToolBoxFields show={openToolBox} hideToolBox={setOpenToolBox} onAddField={handleOnAddItems} />
    <FieldSettingEditor show={!!settingField} field={settingField} setField={setSettingField} />
    {newFields.length >= 1 && <div
      className={`fixed bottom-5 flex items-center justify-center w-full transition-transform ${openToolBox ? "translate-y-20" : "translate-y-0"}`}>
      <Button onClick={handleOpenToolBox} size={"large"} variant={"contained"} rounded={true} iconOnly={true}>
        <Icon size={"extra-large"} name={"add"} />
      </Button>
    </div>}

  </div>);
};

FormFieldsEditor.defaultProps = {
  fields: [],
  model: {}
};

FormFieldsEditor.propTypes = {
  model: PropTypes.shape({
    settings: PropTypes.object,
    ID: PropTypes.any,
    title: PropTypes.any,
    fields: PropTypes.arrayOf(PropTypes.any),
    slug: PropTypes.any,
    status: PropTypes.any,
    products: PropTypes.arrayOf(PropTypes.any)
  })
};

export default FormFieldsEditor;