import React from 'react';
import { shallow } from 'enzyme';
import Copyright from './Copyright';

describe('<Copyright />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Copyright />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
