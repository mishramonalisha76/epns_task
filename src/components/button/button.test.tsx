import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import ButtonComponent from './button';

describe("ButtonComponent", () => {
  it('renders button', () => {
    render(<ButtonComponent text='Sort'  callback={jest.fn()}/>);
    const buttonComponent = screen.getByTestId('button-element');
    expect(buttonComponent).toBeDefined();
  });

  it('has sort button', () => {
    render(<ButtonComponent text='Sort'  callback={() => jest.fn()}/>);
    const buttonComponent = screen.getByTestId('button-element');
    expect(buttonComponent).toHaveTextContent('Sort');
  });

  it('has filter button', () => { 
    render(<ButtonComponent text='Filter' callback={() => jest.fn()}/>);
    const buttonComponent = screen.getByTestId('button-element');
    expect(buttonComponent).toHaveTextContent('Filter');
  });
});