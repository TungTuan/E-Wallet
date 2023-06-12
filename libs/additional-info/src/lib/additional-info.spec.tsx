import { render } from '@testing-library/react';

import AdditionalInfo from './additional-info';

describe('AdditionalInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdditionalInfo />);
    expect(baseElement).toBeTruthy();
  });
});
