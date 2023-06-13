import { render } from '@testing-library/react';

import SharedInterface from './shared-interface';

describe('SharedInterface', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedInterface />);
    expect(baseElement).toBeTruthy();
  });
});
