import React from 'react';
import { shallow } from 'enzyme';
import MetalChestsPage from './MetalChestsPage';

describe('<MetalChestsPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MetalChestsPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
