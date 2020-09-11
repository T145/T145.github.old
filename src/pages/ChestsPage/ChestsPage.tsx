import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import RemoteSvg from '../../components/RemoteSvg/RemoteSvg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function ChestsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="ChestsPage">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img
              src="https://i.imgur.com/Vsj2cT2.png"
              alt="Metal Chests Logo"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RemoteSvg url="https://cf.way2muchnoise.eu/full_240630_downloads.svg" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
