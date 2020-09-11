import React from 'react';
import { shallow } from 'enzyme';
import ContestsPage from './ContestsPage';

describe('<ContestsPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ContestsPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
