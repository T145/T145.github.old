/* eslint-disable react/no-danger */
// If you are certain the content passed to dangerouslySetInnerHTML is sanitized HTML you can disable this rule.
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, SvgIcon } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0.1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    logo: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'cover',
    },
  })
);

export default function ChestsPage() {
  const [downloadsBadge, setDownloadsBadge] = React.useState('');
  const [versionsBadge, setVersionsBadge] = React.useState('');
  const classes = useStyles();

  async function fetchData() {
    // https://addons-ecs.forgesvc.net/api/v2/addon/290145
    const resp = await fetch('https://t145-api.herokuapp.com/metalchests/');

    resp.json().then(res => {
      setDownloadsBadge(res.downloadsBadge);
      setVersionsBadge(res.versionsBadge);
    });
    // .catch(err => console.error(err));
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      data-testid="ChestsPage"
    >
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <img
            className={classes.logo}
            src="https://i.imgur.com/Vsj2cT2.png"
            alt="Metal Chests Logo"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <SvgIcon
                component={() => (
                  <div dangerouslySetInnerHTML={{ __html: downloadsBadge }} />
                )}
              />
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <SvgIcon
                component={() => (
                  <div dangerouslySetInnerHTML={{ __html: versionsBadge }} />
                )}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
