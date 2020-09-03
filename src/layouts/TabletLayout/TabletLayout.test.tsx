import React from 'react';
import { shallow } from 'enzyme';
import TabletLayout from './TabletLayout';

describe('<TabletLayout />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TabletLayout />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
