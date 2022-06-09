import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 5%;
  align-items: center;
`;

export const DisplayDiv = styled.div`
  text-align: center;
  border: 1px solid black;
  padding: 0.8rem 2rem 0.8rem 0rem;
  background-color: lightblue;
`;

export const ButtonDiv = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 544px) {
    flex-direction: column;
  }
`;
export const DisplayDivList = styled.ul`
  list-style: none;
`;

export const Button = styled.button`
  background-color: blueviolet;
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 2rem;
  @media (max-width: 544px) {
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  font-weight: 500;
`;