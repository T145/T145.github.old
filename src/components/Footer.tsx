import React from 'react';
import { Typography, Link, Grid } from '@material-ui/core';
import PokemonSprite from './PokemonSprite';

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/T145">
        T145
      </Link>{' '}
      {new Date().getFullYear()}.
      <Grid container direction="row" justify="center" alignItems="baseline">
        <PokemonSprite /> <PokemonSprite /> <PokemonSprite />
      </Grid>
    </Typography>
  );
}
