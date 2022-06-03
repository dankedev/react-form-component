import ButtonExamples from "./examples/ButtonExamples";
import Sidebar from "./layouts/sidebar";
import {

    Routes,
    Route,
} from "react-router-dom";
import ButtonIconExamples from "./examples/ButtonIconExamples";

function App() {
    return (
        <div className="w-full mx-auto">
            <div className="flex">
                <Sidebar/>
                <div className="ml-[200px] my-20 px-10">
                        <Routes>
                            <Route path={'/buttons'} element={<ButtonExamples/>}/>
                            <Route path={'/buttons-icon'} element={<ButtonIconExamples/>}/>

                        </Routes>
                </div>
            </div>
            {/*<ButtonExamples/>*/}
        </div>
    );
}

export default App;
