import React from "react";
import { useForm,Controller } from "react-hook-form";
import {TextField} from "../components/TextField";


const FormExample = () => {
    const { register,control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues:{
            myName:'hadi danker',
            last_name:''
        }
    });
    const onSubmit = data => console.log(data);
    let values = watch();
    return(<div className={'space-y-8 mb-20 min-h-screen w-full bg-gray-50 py-20'}>
       <div className="w-full bg-white rounded-md shadow-md drop-shadow-2xl mx-auto max-w-4xl px-6 py-8">
           <h1 className="font-bold text-center">Form Order</h1>

           <div className="form-content px-6">
               <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <Controller
                       name="first_name"
                       control={control}
                       rules={{ required: true }}
                       render={({
                                    field,
                                    fieldState,
                                    formState,
                                })  =>  <TextField

                           label={`Nama Depan`}
                           size={'largest'}
                           color={'inherit'}
                           fullWidth={true}

                           {...field}
                           {...fieldState}
                           {...formState}
                           id={`first_name`}
                           placeholder={'Nama depan'}
                           type={'text'}
                       />}
                   />
                   <Controller
                       name="last_name"
                       control={control}
                       rules={{ required: true }}
                       render={({
                                    field,
                                    fieldState,
                                    formState,
                                })  =>  <TextField

                           label={`Nama Akhir`}
                           size={'largest'}
                           color={'inherit'}
                           fullWidth={true}

                           {...field}
                           {...fieldState}
                           {...formState}
                           id={`last_name`}
                           placeholder={'Name'}
                           type={'text'}
                       />}
                   />
               </div>
                     <Controller
                         name="address"
                         control={control}
                         rules={{ required: true }}
                         render={({
                                      field,
                                      fieldState,
                                      formState,
                                  })  =>  <TextField

                             label={`Alamat tinggal`}
                             size={'largest'}
                             color={'inherit'}
                             fullWidth={true}
                             multiline={true}
                             {...field}
                             {...fieldState}
                             {...formState}
                             id={`form-input-1111`}
                             placeholder={'Name'}
                             type={'text'}
                         />}
                     />
                 </div>

               </form>
               {JSON.stringify(values)}
           </div>
       </div>
    </div>)
}

export default FormExample;