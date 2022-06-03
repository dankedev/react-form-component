import {Button} from "../components/Buttons";

const ButtonExamples = () => {
    const buttonSize = [  'small', 'medium', 'large', 'largest','extra','extra-large']
    const buttonColors = [ 'blue', 'light-blue','green','light-green','lime','red','pink','purple','deep-purple','teal','yellow','amber','orange','deep-orange']

    return(
        <div className={'space-y-8 mb-20 min-h-screen'}>
            <h1 className="font-bold border-b">Ini Button</h1>
            <p>Example button size</p>

            <div className="flex space-x-3 items-center">
                {buttonSize.map(size => <Button variant={'outlined'} key={`button-size-${size}`} size={size}>{size}</Button>)}
            </div>

            <h3 className="font-bold">Text button</h3>

            <div className="flex space-x-3 items-center">
                {buttonSize.map(size => <Button key={`button-size-contained-${size}`} variant={'text'} size={size}>{size}</Button>)}
            </div>

            <h1 className="font-bold text-xl py-4 border-b">Colors</h1>
            <h3 className="font-bold">Contained Button</h3>

            <div className="flex gap-3 items-center flex-wrap">
                {buttonColors.map(color => <Button key={`button-size-contained-color-${color}`} variant={'contained'} size={'medium'} color={color}>{color}</Button>)}
            </div>
            <h3 className="font-bold">Outlined Button</h3>

            <div className="flex gap-3 items-center flex-wrap">
                {buttonColors.map(color => <Button key={`button-size-contained-color-${color}`} variant={'outlined'} size={'medium'} color={color}>{color}</Button>)}
            </div>

            <h3 className="font-bold">Text Button</h3>

            <div className="flex gap-3 items-center flex-wrap">
                {buttonColors.map(color => <Button key={`button-size-contained-color-${color}`} variant={'text'} size={'medium'} color={color}>{color}</Button>)}
            </div>

            <h3 className="font-bold">Disabled Button</h3>
            <div className="flex gap-3 items-center flex-wrap">
                <Button disabled={true}>Disabled</Button>
                <Button disabled={false} noShadow={true}>Enabled</Button>
                <Button disabled={true} size={'large'} variant={'outlined'}>Disabled</Button>
                <Button disabled={true} size={'medium'} variant={'text'}>Disabled</Button>
            </div>

            <h3 className="font-bold">Full width</h3>
            <Button color={'deep-orange'} fullWidth={true} rounded={true} size={'large'}>fullWidth</Button>
        </div>
    )
}

export default ButtonExamples;