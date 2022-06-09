import { useState,useEffect } from 'react';
import DataComponent from './dataDisplay';
import ButtonComponent from './button';
import {fetchData,sortData,filterData} from '../helper';

const MainComponent = () => {
  const [allData, setAllData] = useState<string[]>([]);
  const [data, setData] = useState<string[]>([]);
  const [key, setKey] = useState<string>('');
  useEffect(() => {
    const getData = async () => {
        const result:string[] = await fetchData();
        setAllData(result);
        setData(result);
      };
    getData();
  },[]);

  const handleSort = () => {
      setData(sortData(data));
  }

  const handlefilter = () => {
    setData(filterData(key,data));
  }
  return (
    <div className='main_div'>
        <DataComponent data = {data}/>
        <div>
          <ButtonComponent text='sort' callback={()=>handleSort()} />
          <input 
            type='text' name='key'
            value={key}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setKey(e.target.value)}/>
          <ButtonComponent text='filter' callback={()=>handlefilter()} />
        </div>
    </div>
  );
}

export default MainComponent;