import { render, fireEvent, screen } from '@testing-library/react';
import BasicInfo from './basic-info';
describe('BasicInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicInfo />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the full name field', () => {
    render(<BasicInfo />);
    const fullNameField = screen.getByLabelText('Full Name');
    expect(fullNameField).toBeTruthy();
  });

  it('should render the ID number field', () => {
    render(<BasicInfo />);
    const idNumberField = screen.getByLabelText('Id Number');
    expect(idNumberField).toBeTruthy();
  });

  it('should render the next button', () => {
    render(<BasicInfo />);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeTruthy();
  });

  it('should show errors when submitting the form with empty fields', async () => {
    render(<BasicInfo />);
    const nextButton = screen.getByRole('button', { name: 'Next' });

    fireEvent.click(nextButton);

    const fullNameError = await screen.findByText('Full Name is Required!');
    expect(fullNameError).toBeTruthy();

    const idNumberError = await screen.findByText('Id Number is Required!');
    expect(idNumberError).toBeTruthy();
  });

  it('should submit the form with valid data', async () => {
    render(<BasicInfo />);
    const fullNameField = screen.getByLabelText('Full Name');
    const idNumberField = screen.getByLabelText('Id Number');
    const nextButton = screen.getByRole('button', { name: 'Next' });

    fireEvent.change(fullNameField, { target: { value: 'Iron Man' } });
    fireEvent.change(idNumberField, { target: { value: '123456789' } });
    fireEvent.click(nextButton);
  });
});
