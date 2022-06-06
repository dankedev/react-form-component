import {Controller, useForm} from "react-hook-form";
import React from "react";
import TextField, {HelperText, Input} from '@material/react-text-field';
const FormMaterialExample = () => {
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
                       <div>


                           <Controller
                               name="last_name"
                               control={control}
                               rules={{ required: true }}
                               render={({
                                            field,
                                            fieldState,
                                            formState,
                                        })  =>   <TextField
                                   label='Name'
                                   fullWidth={'true'}
                                   outlined
                                   helperText={<HelperText>Help Me!</HelperText>}

                               ><Input
                                   size={'large'}

                                   {...field}
                                   {...fieldState}
                                   {...formState}

                               />
                               </TextField>}
                           />

                           <Controller
                               name="myName"
                               control={control}
                               rules={{ required: true }}
                               render={({
                                            field,
                                            fieldState,
                                            formState,
                                        })  => <div className="mdc-text-field mdc-text-field--outlined">
                                   <input className="mdc-text-field__input" {...field} {...fieldState} id="text-field-hero-input"/>
                                       <div className="mdc-notched-outline">
                                           <div className="mdc-notched-outline__leading"></div>
                                           <div className="mdc-notched-outline__notch">
                                               <label htmlFor="text-field-hero-input"
                                                      className="mdc-floating-label">Name</label>
                                           </div>
                                           <div className="mdc-notched-outline__trailing"></div>
                                       </div>
                               </div>}
                           />
                       </div>
                    </div>

                </form>
                {JSON.stringify(values)}
            </div>
        </div>
    </div>)
}

export default FormMaterialExample;