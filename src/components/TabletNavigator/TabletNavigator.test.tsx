import React from 'react';
import { shallow } from 'enzyme';
import TabletNavigator from './TabletNavigator';

describe('<TabletNavigator />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TabletNavigator />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
