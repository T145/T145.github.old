import React from 'react';
import { isMobileOnly } from 'react-device-detect';
import Grid from '@material-ui/core/Grid';
import Copyright from './Copyright/Copyright';
import Pokemon from './PokemonSprite/PokemonSprite';

export default function Footer() {
  const spriteCount = isMobileOnly ? 1 : 2;
  const sprites = [];

  for (let i = 0; i < spriteCount; i += 1) {
    sprites.push(<Pokemon />);
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      data-testid="Footer"
    >
      {sprites}
      <Copyright />
      {sprites}
    </Grid>
  );
}
