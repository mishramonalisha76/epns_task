import {DataProps} from '../componentTypes'; 
import { DisplayDiv,DisplayDivList } from '../component.styles';
const DataComponent : React.FC<DataProps> = ({data}) => {
  return (
    <>
      <DisplayDiv data-testid="data-element">
          <DisplayDivList>
              {data.map((item:string,i:number) => (
                  <li key={i} data-testid="list-element">
                   {item}
                  </li>
               ))}
          </DisplayDivList>
      </DisplayDiv>
    </>
  );
}

export default DataComponent;