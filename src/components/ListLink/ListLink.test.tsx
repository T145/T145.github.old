import React from 'react';
import { shallow } from 'enzyme';
import ListLink from './ListLink';

describe('<ListLink />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ListLink />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
