import { render } from '@testing-library/react';

import Purpose from './purpose';

describe('Purpose', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Purpose />);
    expect(baseElement).toBeTruthy();
  });
});
