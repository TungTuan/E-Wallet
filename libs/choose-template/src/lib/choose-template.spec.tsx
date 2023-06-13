import { render } from '@testing-library/react';

import ChooseTemplate from './choose-template';

describe('ChooseTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChooseTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
