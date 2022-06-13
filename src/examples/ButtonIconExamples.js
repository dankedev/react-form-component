import { Button, ButtonIcon } from '../components/Buttons';
import Icon from '../components/Icons/Icon';

const ButtonIconExamples = () => {
  return (
    <div className={'gap-6 mb-20 min-h-screen'}>
      <div className="flex space-x-4 items-center flex-wrap">
        <Button size={'large'} endIcon={<Icon size={'inherit'} name={'home'} />}>
          Button Icon
        </Button>
        <Button size={'normal'} endIcon={<Icon size={'inherit'} name={'favorite'} />}>
          Button Icon
        </Button>
        <Button size={'normal'} variant={'outlined'} rounded={true} iconOnly={true}>
          <Icon size={'medium'} name={'favorite'} />
        </Button>
        <ButtonIcon icon={'favorite'} size={'large'} />
        <ButtonIcon icon={'favorite'} size={'largest'} rounded={true} />
        <Button size={'largest'} endIcon={<Icon size={'inherit'} name={'home'} />}>
          Button Icon
        </Button>
        <div className="w-full" />
        <ButtonIcon icon={'favorite'} size={'large'} rounded={true} />
        <ButtonIcon variant="outlined" icon={'favorite'} size={'large'} rounded={true} />

        <Button size={'large'} endIcon={<Icon size={'extra-large'} name={'home'} />}>
          Button Icon
        </Button>
      </div>
    </div>
  );
};

export default ButtonIconExamples;
