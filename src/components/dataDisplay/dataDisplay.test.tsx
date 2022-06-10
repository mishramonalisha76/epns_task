import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import DataComponent from './dataDisplay';

describe("DataComponent", () => {
  const data = ['start wars','marvel','dc','comic'];
  it('renders data div', () => {
    render(<DataComponent data={data}/>);
    const dataComponent = screen.getByTestId('data-element');
    expect(dataComponent).toBeDefined();
  });
  it('has 5 li tags', () => {
    render(<DataComponent data={data}/>);
    const liElements = screen.getAllByTestId('list-element');
    expect(liElements).toHaveLength(4);
  });
});