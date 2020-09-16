/* eslint-disable react/no-danger */
// If you are certain the content passed to dangerouslySetInnerHTML is sanitized HTML you can disable this rule.
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import logo from '../../images/logo.png';
import mcShowcase from '../../images/jGQQLlF.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    logo: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'cover',
    },
    badge: {
      padding: '1px',
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
      spacing={3}
      data-testid="ChestsPage"
    >
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <img className={classes.logo} src={logo} alt="Metal Chests Logo" />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <div
                className={classes.badge}
                dangerouslySetInnerHTML={{ __html: downloadsBadge }}
              />
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <div
                className={classes.badge}
                dangerouslySetInnerHTML={{ __html: versionsBadge }}
              />
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <a href="https://www.codacy.com/manual/T145/metal-chests">
                <img
                  className={classes.badge}
                  src="https://img.shields.io/codacy/grade/04f5020887174b9aadcaa976556f0f74?style=for-the-badge&logo=codacy&labelColor=2D2D2D"
                  alt="Code Grade Badge"
                  referrerPolicy="no-referrer"
                />
              </a>
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <a href="https://discord.gg/EFMcwpC">
                <img
                  className={classes.badge}
                  src="https://img.shields.io/discord/265632935456014336?style=for-the-badge&logo=discord&label=Discord&logoColor=white&color=%237289da&labelColor=2D2D2D"
                  alt="Discord Badge"
                  referrerPolicy="no-referrer"
                />
              </a>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <img
            className={classes.logo}
            src={mcShowcase}
            alt="Metal Chests Showcase"
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
