import { Checkbox } from "../components/Checkbox";

const SelectCheckboxRadio = () => {
    let checkboxSizes = ['small', 'normal', 'large'];
    let checkboxColors = ['inherit', 'blue', 'light-blue', 'green', 'light-green', 'lime', 'red', 'pink', 'purple', 'deep-purple', 'teal', 'yellow', 'amber', 'orange', 'deep-orange'
];

    return(<div>
       <div className="space-y-6">
           <h1>Pembuatan Checkbox</h1>
           <div className="grid grid-cols-3 gap-6">
                {checkboxSizes.map(size => <div key={`checkbox-${size}`}><Checkbox disabled={true} size={size} id={`pilih-${size}`} label={`Pilih ${size}`} /></div>)}
           </div>
            
            <div className="flex space-x-1 items-center">
                {checkboxSizes.map(size => <div key={`select-checkbox-${size}`}><Checkbox size={size} id={`select-me-${size}`}  /></div>)}
            </div> 
            
              <div className="flex space-x-1 items-center">
                {checkboxColors.map(color => <div key={`select-checkbox-color-${color}`}><Checkbox size={'normal'} color={color} id={`select-me-color-${color}`}  /></div>)}
            </div>
       </div>
    </div>)
}

export default SelectCheckboxRadio;