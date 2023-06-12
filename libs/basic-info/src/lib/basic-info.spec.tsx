import { render } from '@testing-library/react';

import BasicInfo from './basic-info';

describe('BasicInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicInfo />);
    expect(baseElement).toBeTruthy();
  });
});
