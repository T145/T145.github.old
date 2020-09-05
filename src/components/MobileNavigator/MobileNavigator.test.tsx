import React from 'react';
import { shallow } from 'enzyme';
import MobileNavigator from './MobileNavigator';

describe('<MobileNavigator />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MobileNavigator />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
