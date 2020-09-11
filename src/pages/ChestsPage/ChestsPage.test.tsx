import React from 'react';
import { shallow } from 'enzyme';
import ChestsPage from './ChestsPage';

describe('<ChestsPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ChestsPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
