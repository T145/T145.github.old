import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import AppStyles from '../constants/AppStyles';

export default function HomePage() {
  const classes = AppStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Archive Page
        </Typography>
        <p>
          This is a website for all README information related to T145&rsquo;s
          Github Repositories!
        </p>
      </Paper>
    </Grid>
  );
}
