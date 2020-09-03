import React from 'react';
import { shallow } from 'enzyme';
import MobileLayout from './MobileLayout';

describe('<MobileLayout />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MobileLayout />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
