import { render } from '@testing-library/react';

import EWalletContainer from './e-wallet-container';

describe('EWalletContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EWalletContainer />);
    expect(baseElement).toBeTruthy();
  });
});
