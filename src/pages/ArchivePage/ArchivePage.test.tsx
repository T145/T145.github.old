import React from 'react';
import { shallow } from 'enzyme';
import ArchivePage from './ArchivePage';

describe('<ArchivePage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ArchivePage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
