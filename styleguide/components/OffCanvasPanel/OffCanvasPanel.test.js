import React from 'react';
import { render } from 'react-dom';

import OffCanvasPanel from './OffCanvasPanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<OffCanvasPanel />, div);
});
