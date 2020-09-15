import React from 'react';
import clsx from 'clsx';
import { Route, withRouter } from 'react-router-dom';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  Icon,
} from '@material-ui/core';
import { FaMapSigns as SignIcon } from 'react-icons/fa';
import { VscGithub as GithubIcon } from 'react-icons/vsc';
import { AiOutlineBars as BarsIcon } from 'react-icons/ai';
import {
  FiChevronsLeft as ChevronLeftIcon,
  FiChevronsRight as ChevronRightIcon,
} from 'react-icons/fi';
import { RouteList, RouteSwitch } from '../../routes';
import Copyright from '../../components/Copyright/Copyright';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    grow: {
      flexGrow: 1,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    drawerBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    drawerBarShift: {
      width: drawerWidth,
      marginRight: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  })
);

function TabletLayout() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const getDrawerToggleIcon = () => {
    if (open) {
      return theme.direction === 'ltr' ? (
        <ChevronLeftIcon />
      ) : (
        <ChevronRightIcon />
      );
    }
    return <BarsIcon />;
  };

  return (
    <div className={classes.root} data-testid="TabletLayout">
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={toggleDrawer}
            edge="start"
            className={clsx(classes.menuButton)}
          >
            {getDrawerToggleIcon()}
          </IconButton>

          <div className={classes.grow} />
          <Copyright />
          <div className={classes.grow} />

          <IconButton
            color="inherit"
            component="a"
            href="https://github.com/T145/T145.github.io"
            aria-label="GitHub"
            edge="start"
            data-ga-event-category="header"
            data-ga-event-action="github"
            rel="noreferrer"
          >
            <GithubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <AppBar
          color="secondary"
          position="fixed"
          className={clsx(classes.drawerBar, {
            [classes.drawerBarShift]: open,
          })}
        >
          <Toolbar>
            <Icon color="inherit" fontSize="small">
              <SignIcon />
            </Icon>

            <div className={classes.content} />

            <Route>
              {({ location }) => (
                <Typography color="inherit" variant="overline" noWrap>
                  {location.pathname}
                </Typography>
              )}
            </Route>
          </Toolbar>
        </AppBar>

        <div className={classes.drawerHeader} />
        <Divider />
        <RouteList />
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <RouteSwitch />
      </main>
    </div>
  );
}

export default withRouter(TabletLayout);
