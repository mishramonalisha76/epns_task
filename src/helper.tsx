import axios from 'axios';
export const fetchData =  () => {
    console.log("in here")
    return axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
          let modifiedData:string[] = [];
          response.data.map((item:any) => {
          modifiedData.push(item.title);
        })
        return modifiedData;
      });
    
}

export const sortData =  (data:string[]) => {
    data.sort();
    return data;
}

export const filterData =  (key:string,data:string[]) => {
    if (key === "") {
        return data;
      } else {
        const filteredData = data.filter((item) =>
          item.includes(key)
        );
        return filteredData;
      }
}
