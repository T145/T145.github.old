import React from 'react';

import { isIOS } from 'react-device-detect';

import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Tooltip,
  IconButton,
  Paper,
  Fab,
  SwipeableDrawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import MobileStyle from '../../constants/MobileStyle/MobileStyle';

export default function MobileNavigator() {
  const classes = MobileStyle();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div data-testid="MobileNavigator">
      <CssBaseline />

      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          #page-content
        </Typography>
      </Paper>

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>

          <div className={classes.grow} />

          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>

          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
        disableBackdropTransition={!isIOS}
        disableDiscovery={isIOS}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
