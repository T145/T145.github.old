import React from 'react';
import { shallow } from 'enzyme';
import PokemonSprite from './PokemonSprite';

describe('<PokemonSprite />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PokemonSprite />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
