import { render } from '@testing-library/react';

import SharedConstant from './shared-constant';

describe('SharedConstant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedConstant />);
    expect(baseElement).toBeTruthy();
  });
});
