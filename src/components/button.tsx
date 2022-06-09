import {ButtonProps} from './componentTypes'; 

const ButtonComponent : React.FC<ButtonProps> = ({
    text,
    callback}) => {

  return (
    <>
      <button className='button' onClick={callback}> {text}</button>
    </>
  );
}

export default ButtonComponent;