import React from 'react';
import { shallow } from 'enzyme';
import TravelingSalesmanPage from './TravelingSalesmanPage';

describe('<TravelingSalesmanPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TravelingSalesmanPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
