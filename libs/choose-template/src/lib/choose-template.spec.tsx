import { render, screen } from '@testing-library/react';

import ChooseTemplate from './choose-template';

describe('ChooseTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChooseTemplate />);
    expect(baseElement).toBeTruthy();
  });

  it('should render template ABC', () => {
    render(<ChooseTemplate />);
    const element = screen.getByTestId('templateACB');
    expect(element).toBeTruthy();
  });

  it('should render template ACB', () => {
    render(<ChooseTemplate />);
    const element = screen.getByTestId('templateABC');
    expect(element).toBeTruthy();
  });
});
