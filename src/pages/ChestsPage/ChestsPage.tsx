/* eslint-disable react/no-danger */
// If you are certain the content passed to dangerouslySetInnerHTML is sanitized HTML you can disable this rule.
import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import logo from '../../images/chests/logo.png';
import mcShowcase from '../../images/chests/showcase.png';
import faqShulkers from '../../images/chests/faq-shulkers.png';

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
    player: {
      maxWidth: '100%',
      maxHeight: '100%',
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    card: {
      backgroundColor: '#F6F6F6',
    },
    label: {
      ...theme.typography.button,
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
      spacing={4}
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
              <a
                href="https://www.codacy.com/manual/T145/metal-chests"
                rel="noopener noreferrer"
              >
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
              <a href="https://discord.gg/EFMcwpC" rel="noopener noreferrer">
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

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <ReactPlayer
            className={classes.player}
            url={[
              'https://www.youtube.com/watch?v=6BdMIWLw9XA',
              'https://www.youtube.com/watch?v=rPA5AcmJccY',
              'https://www.youtube.com/watch?v=Tg3Opl-4n3Y',
              'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            ]}
            config={{
              youtube: {
                playerVars: {
                  controls: 1,
                  rel: 0,
                },
              },
            }}
          />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" align="left">
          <Box fontStyle="oblique">I. Extra Information</Box>
          <List>
            <ListItemText primary="&#8226; In the Bit-by-Bit spotlight, placing chests in minecarts is a feature added by Quark. The more recent 'Metal Chests' releases support this feature." />
            <ListItemText primary="&#8226; Any minecart features have been moved into 'Metal Transport,' which is now 'Cart Complete.'" />
            <ListItemText primary="&#8226; Inventory sizes can be configured in a generated JSON config." />
            <ListItemText primary="&#8226; Regular chest upgrades can be applied to any oredicted 'chestWood' or 'trappedChest.'" />
            <ListItemText primary="&#8226; If Thaumcraft is installed, craft the hungry chests & their upgrades in the Arcane Workbench." />
          </List>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" align="left">
          <Box fontStyle="oblique">II. Workspace Dependencies</Box>
        </Typography>

        <br />

        <Grid container spacing={3}>
          <Grid item>
            <Card variant="outlined">
              <CardContent className={classes.card}>
                {[
                  '* install scoop',
                  'scoop install git',
                  'scoop bucket add java',
                  'scoop bucket add versions',
                  'scoop install ojdkbuild8 gradle4',
                ].map(text => (
                  <Box fontFamily="Monospace" fontSize="body1.fontSize" m={1}>
                    {text}
                  </Box>
                ))}
              </CardContent>

              <CardActions>
                <div className={classes.label}>Windows</div>
              </CardActions>
            </Card>
          </Grid>

          <Grid item>
            <Card variant="outlined">
              <CardContent className={classes.card}>
                {[
                  '* install homebrew',
                  'brew cask install java',
                  'brew install gradle',
                ].map(text => (
                  <Box fontFamily="Monospace" fontSize="body1.fontSize" m={1}>
                    {text}
                  </Box>
                ))}
              </CardContent>

              <CardActions>
                <div className={classes.label}>Mac OS</div>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" align="left">
          <Box fontStyle="oblique">III. Workspace Setup</Box>
        </Typography>

        <br />

        <Grid container spacing={3}>
          <Grid item>
            <Card variant="outlined">
              <CardContent className={classes.card}>
                {['gradle setupEclipseWorkspace', 'gradle eclipse'].map(
                  text => (
                    <Box fontFamily="Monospace" fontSize="body1.fontSize" m={1}>
                      {text}
                    </Box>
                  )
                )}
              </CardContent>

              <CardActions>
                <div className={classes.label}>Eclipse</div>
              </CardActions>
            </Card>
          </Grid>

          <Grid item>
            <Card variant="outlined">
              <CardContent className={classes.card}>
                {['gradle setupDecompWorkspace', 'gradle idea'].map(text => (
                  <Box fontFamily="Monospace" fontSize="body1.fontSize" m={1}>
                    {text}
                  </Box>
                ))}
              </CardContent>

              <CardActions>
                <div className={classes.label}>IntelliJ IDEA</div>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" align="left">
          <Box fontStyle="oblique">IV. F.A.Q.</Box>
          <List>
            <ListItem>
              <img
                className={classes.logo}
                src={faqShulkers}
                alt="FAQ Shulkers (keep crying)"
              />
            </ListItem>
          </List>
        </Typography>
      </Grid>
    </Grid>
  );
}
