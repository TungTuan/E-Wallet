import { render, fireEvent, screen } from '@testing-library/react';

import Purpose from './purpose';
import { purposeData } from '@e-wallet/shared/constant';

describe('Purpose', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Purpose />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the next and back buttons', () => {
    render(<Purpose />);
    const backButton = screen.getByRole('button', { name: 'Back' });
    expect(backButton).toBeTruthy();
    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeTruthy();
  });

  it('should render the e-wallet purposes', () => {
    render(<Purpose />);

    purposeData.forEach((purpose) => {
      const purposeLabel = screen.getByLabelText(purpose.label);
      expect(purposeLabel).toBeTruthy();
    });
  });

  it('should submit the form with selected purposes', async () => {
    render(<Purpose />);

    const purposeLabel = screen.getByLabelText(purposeData[0].label);
    fireEvent.click(purposeLabel);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);
  });
});
