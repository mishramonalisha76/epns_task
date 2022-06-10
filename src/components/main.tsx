import { useState, useEffect } from "react";
import DataComponent from "./dataDisplay/dataDisplay";
import ButtonComponent from "./button/button";
import { fetchData, sortData, filterData } from "../helper/helper";
import { MainDiv, ButtonDiv, InputLabel } from "./component.styles";

const MainComponent = () => {
  const [allData, setAllData] = useState<string[]>([]);
  const [data, setData] = useState<string[]>([]);
  const [key, setKey] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      const result: string[] = await fetchData();
      setAllData(result);
      setData(result);
    };
    getData();
  }, []);

  const handleSort = () => {
    let dummyData:string[] = [...data];
    setData(sortData(dummyData));
  };

  const handlefilter = () => {
    setData(filterData(key, allData));
  };
  return (
    <MainDiv data-testid="main-element">
      <h1>Epns Task</h1>
      <DataComponent data={data} />
      <ButtonDiv>
        <ButtonComponent text="Sort" callback={() => handleSort()} />
        <InputLabel className="main-div-input_label">
          Search
          <input
            type="text"
            name="key"
            value={key}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setKey(e.target.value)
            }
          />
        </InputLabel>
        <ButtonComponent text="Filter" callback={() => handlefilter()} />
      </ButtonDiv>
    </MainDiv>
  );
};

export default MainComponent;
