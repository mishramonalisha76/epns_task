import {ButtonProps} from './componentTypes'; 
import { Button } from './component.styles';

const ButtonComponent : React.FC<ButtonProps> = ({
    text,
    callback}) => {

  return (
    <>
      <Button className='button' onClick={callback}> {text}</Button>
    </>
  );
}

export default ButtonComponent;