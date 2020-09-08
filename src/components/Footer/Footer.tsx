import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" data-testid="Copyright">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/T145">
        T145
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function Footer() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      data-testid="Footer"
    >
      <Copyright />
    </Grid>
  );
}
