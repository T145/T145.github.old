import React from 'react';
import { shallow } from 'enzyme';
import RemoteSvg from './RemoteSvg';

describe('<RemoteSvg />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<RemoteSvg />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
