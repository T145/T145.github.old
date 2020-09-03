import React from 'react';
import { shallow } from 'enzyme';
import DesktopLayout from './DesktopLayout';

describe('<DesktopLayout />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DesktopLayout />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
