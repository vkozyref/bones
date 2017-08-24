import React from 'react';
import { shallow } from 'enzyme';

import GameList from './';

test('GameList component 1', () => {
  const wrapper = shallow(<GameList />);
  expect(wrapper).toHaveLength(1);
});
