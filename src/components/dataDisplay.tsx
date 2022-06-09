import {DataProps} from './componentTypes'; 
import '../styles/styles.css';
import { useEffect } from 'react';
const DataComponent : React.FC<DataProps> = ({data}) => {
  console.log(data)
  useEffect(()=>{

  },[data])
  return (
    <>
      <div className='data_display'>
          <ul className='item_parent'>
              {data.map((item:string) => (
                  <li className='item'>
                   {item}
                  </li>
               ))}
          </ul>
      </div>
    </>
  );
}

export default DataComponent;