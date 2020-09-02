import React from 'react';
import { Typography, Link, Grid } from '@material-ui/core';
import Pokemon from './PokemonSprite';

export default function Footer() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Pokemon /> <Pokemon /> <Pokemon />
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/T145">
          T145
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
      <Pokemon /> <Pokemon /> <Pokemon />
    </Grid>
  );
}
