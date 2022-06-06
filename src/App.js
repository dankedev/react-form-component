import ButtonExamples from "./examples/ButtonExamples";
import Sidebar from "./layouts/sidebar";
import {

    Routes,
    Route,
} from "react-router-dom";
import ButtonIconExamples from "./examples/ButtonIconExamples";
import TextFieldExample from "./examples/TextFieldExample";
import TextFieldMaterialExample from "./examples/TextFieldMaterialExample";
import FormExample from "./examples/FormExample";
import FormMaterialExample from "./examples/FormMaterialExample";

function App() {
    return (
        <div className="w-full mx-auto">
            <div className="flex">
                <Sidebar/>
                <div className="ml-[200px] my-20 px-10 w-content">
                        <Routes>
                            <Route path={'/buttons'} element={<ButtonExamples/>}/>
                            <Route path={'/buttons-icon'} element={<ButtonIconExamples/>}/>
                            <Route path={'/text-field'} element={<TextFieldExample/>}/>
                            <Route path={'/text-field-md-default'} element={<TextFieldMaterialExample variant={'standard'}/>}/>
                            <Route path={'/text-field-md-outlined'} element={<TextFieldMaterialExample variant={'outlined'}/>}/>
                            <Route path={'/text-field-md-filled'} element={<TextFieldMaterialExample variant={'filled'}/>}/>
                            <Route path={'/form'} element={<FormExample/>}/>
                            <Route path={'/form-material'} element={<FormMaterialExample/>}/>

                        </Routes>
                </div>
            </div>
            {/*<ButtonExamples/>*/}
        </div>
    );
}

export default App;
