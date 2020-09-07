import React from 'react';
import { shallow } from 'enzyme';
import ScrollTop from './ScrollTop';

describe('<ScrollTop />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ScrollTop />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
