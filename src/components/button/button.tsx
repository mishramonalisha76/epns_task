import {ButtonProps} from '../componentTypes'; 
import { Button } from '../component.styles';

const ButtonComponent : React.FC<ButtonProps> = ({
    text,
    callback}) => {

  return (
    <>
      <Button data-testid="button-element" onClick={callback}> {text}</Button>
    </>
  );
}

export default ButtonComponent;