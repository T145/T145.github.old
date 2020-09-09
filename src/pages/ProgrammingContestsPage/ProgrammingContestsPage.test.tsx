import React from 'react';
import { shallow } from 'enzyme';
import ProgrammingContestsPage from './ProgrammingContestsPage';

describe('<ProgrammingContestsPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProgrammingContestsPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
