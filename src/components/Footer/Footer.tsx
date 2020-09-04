import React from 'react';
import { Grid } from '@material-ui/core';
import Copyright from './Copyright/Copyright';
import Pokemon from './PokemonSprite/PokemonSprite';

export default function Footer() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      data-testid="Footer"
    >
      <Pokemon />
      <Pokemon />
      <Copyright />
      <Pokemon />
      <Pokemon />
    </Grid>
  );
}
