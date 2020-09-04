import React from 'react';
import { shallow } from 'enzyme';
import DesktopNavigator from './DesktopNavigator';

describe('<DesktopNavigator />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DesktopNavigator />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
