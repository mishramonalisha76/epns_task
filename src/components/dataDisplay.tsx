import {DataProps} from './componentTypes'; 
import { DisplayDiv,DisplayDivList } from './component.styles';
const DataComponent : React.FC<DataProps> = ({data}) => {
  return (
    <>
      <DisplayDiv>
          <DisplayDivList>
              {data.map((item:string,i:number) => (
                  <li key={i}>
                   {item}
                  </li>
               ))}
          </DisplayDivList>
      </DisplayDiv>
    </>
  );
}

export default DataComponent;