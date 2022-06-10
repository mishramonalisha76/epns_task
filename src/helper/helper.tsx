import axios from 'axios';

type TodoItem = {
 id:number,
 title:string,
 userId:number,
 completed:boolean,
}

export const fetchData =  ():Promise<string[]> => {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
          let modifiedData:string[] = [];
          response.data.slice(0,20).forEach((item:TodoItem) => {
          modifiedData.push(item.title);
        })
        return modifiedData;
      });
    
}

export const sortData =  (data:string[]):string[] => {
    data.sort();
    return data;
}

export const filterData =  (key:string,data:string[]):string[] => {
    if (key === "") {
        return data;
      } else {
        const filteredData = data.filter((item) =>
          item.includes(key)
        );
        return filteredData;
      }
}
