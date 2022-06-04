import {TextField} from "../components/TextField";
import {Button} from "../components/Buttons";


const TextFieldMaterialStandardExample = () => {
   let inputSize = ['small', 'medium', 'large', 'largest', 'extra', 'extra-large'];

   let inputColors = [
      'inherit','blue', 'light-blue', 'green', 'light-green', 'lime', 'red', 'pink', 'purple', 'deep-purple', 'teal', 'yellow', 'amber', 'orange', 'deep-orange'    ];

   return(<div className={'space-y-8 mb-20 min-h-screen w-full '}>
      <div className="grid grid-cols-2 items-center gap-6 flex-wrap">
         {inputSize.map(size =><div    key={`input-size-${size}`} className={'flex items-end gap-1'}>
            <TextField

                label={`Form Input ${size.toUpperCase()}`}
                size={size}
                variant={'standard'}
                color={'inherit'}
                id={`form-input-1111-${size}`}
                placeholder={'Name'}
                type={'text'}
            />
            <Button size={size}>Submit</Button>
         </div>)}


         {inputColors.map(color =><div    key={`input-size-${color}`} className={'flex items-end gap-1'}>
            <TextField

                label={`Form Input ${color.toUpperCase()}`}
                size={'medium'}
                color={color}
                variant={'standard'}
                id={`form-input-1111-${color}`}
                placeholder={'Name'}
                type={'text'}
            />
            <Button color={color} size={'medium'}>Submit</Button>
         </div>)}

      </div>


   </div>)
}

export default TextFieldMaterialStandardExample;