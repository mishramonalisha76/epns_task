import { sortData, filterData, fetchData } from "./helper";
import "@testing-library/jest-dom";
import axios from "axios";

const dummyData = ["start wars", "marvel", "dc", "comic"];
const sortedData = ["comic", "dc", "marvel", "start wars"];
const filteredData = ["dc", "comic"];

describe("sortData", () => {
  let temp = [...dummyData];
  it("should sort data", () => {
    expect(sortData(temp)).toEqual(sortedData);
  });
});

describe("filterData", () => {
  it("should filter data if key is not blank", () => {
    expect(filterData("c", [...dummyData])).toEqual(filteredData);
  });
  it("should return data if key is blank", () => {
    expect(filterData("", [...dummyData])).toEqual(dummyData);
  });
});

describe("fetchData", () => {
  jest.mock("axios");
  it("returns array of data", async () => {
    const mockResponse = {
      data: [
        {
          userId: 1,
          id: 1,
          title: "dummy1",
        },
        {
          userId: 1,
          id: 1,
          title: "dummy2",
        },
      ],
    };
    axios.get = jest.fn().mockResolvedValue(mockResponse);

    const dataSet = await fetchData();
    expect(dataSet).toStrictEqual(["dummy1", "dummy2"]);
  });
});
