import { render, fireEvent, screen } from '@testing-library/react';

import AdditionalInfo from './additional-info';

describe('AdditionalInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdditionalInfo />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the email field', () => {
    render(<AdditionalInfo />);
    const emailField = screen.getByLabelText('Email address');
    expect(emailField).toBeTruthy();
  });

  it('should render the phone number field', () => {
    render(<AdditionalInfo />);
    const phoneNumberField = screen.getByLabelText('Phone Number');
    expect(phoneNumberField).toBeTruthy();
  });

  it('should render the date of birth field', () => {
    render(<AdditionalInfo />);
    const dateOfBirthField = screen.getByLabelText('Date Of Birth');
    expect(dateOfBirthField).toBeTruthy();
  });

  it('should render the next and back buttons', () => {
    render(<AdditionalInfo />);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeTruthy();
    const backButton = screen.getByRole('button', { name: 'Back' });
    expect(backButton).toBeTruthy();
  });

  it('should show errors when submitting the form with empty fields', async () => {
    render(<AdditionalInfo />);
    const nextButton = screen.getByRole('button', { name: 'Next' });

    fireEvent.click(nextButton);

    const emailError = await screen.findByText('Email is Required!');
    expect(emailError).toBeTruthy();

    const phoneNumberError = await screen.findByText(
      'Phone Number is Required!'
    );
    expect(phoneNumberError).toBeTruthy();

    const dateOfBirthError = await screen.findByText(
      'Date of birth is Required!'
    );
    expect(dateOfBirthError).toBeTruthy();
  });

  it('should submit the form with valid data', async () => {
    render(<AdditionalInfo />);
    const emailField = screen.getByLabelText('Email address');
    const phoneNumberField = screen.getByLabelText('Phone Number');
    const dateOfBirthField = screen.getByLabelText('Date Of Birth');
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.change(emailField, { target: { value: 'tony@gmail.com' } });
    fireEvent.change(phoneNumberField, { target: { value: '01233456789' } });
    fireEvent.change(dateOfBirthField, { target: { value: '01/01/1999' } });
    fireEvent.click(nextButton);
  });
});
