import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import AppStyles from '../AppStyles';
import Title from '../Title';

export default function HomePage() {
  const classes = AppStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Title>Hello World!</Title>
        <p>
          This is a website for all README information related to T145&rsquo;s
          Github Repositories!
        </p>
      </Paper>
    </Grid>
  );
}
