import React from 'react';
import { shallow } from 'enzyme';
import SalesmanPage from './SalesmanPage';

describe('<SalesmanPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SalesmanPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
