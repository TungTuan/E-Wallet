import { render } from '@testing-library/react';

import SuccessPage from './success-page';

describe('SuccessPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SuccessPage />);
    expect(baseElement).toBeTruthy();
  });
});
