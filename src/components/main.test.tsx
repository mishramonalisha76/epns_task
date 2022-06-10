import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import MainComponent from './main';

describe("MainComponent", () => {
  it('renders main div', () => {
    render(<MainComponent/>);
    const mainComponent = screen.getByTestId('main-element');
    expect(mainComponent).toBeDefined();
  });
});