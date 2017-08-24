import React from 'react';
import { shallow } from 'enzyme';

import Game from './';

test('Game component', () => {
  const wrapper = shallow(<Game />);
  expect(wrapper).toHaveLength(1);
});
