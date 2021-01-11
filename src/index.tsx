import React, { ChangeEvent, StrictMode as Strict, useState } from 'react';
import { render } from 'react-dom';
import { isBrowser } from 'react-device-detect';
import '@fontsource/roboto'; // required for material-ui
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import randomcolor from 'randomcolor';
import SleekTabs from './components/SleekTabs';
import SleekTab from './components/SleekTab';
import SleekTabPanel from './components/SleekTabPanel';
import Routes from './routes';

const EnhancedSwipeableViews = isBrowser
  ? bindKeyboard(SwipeableViews)
  : SwipeableViews;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  },
  test: {
    backgroundColor: randomcolor()
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const tabs = Routes.map(route => (
    <SleekTab
      label={route.label}
      icon={route.icon}
      id={`full-width-tab-${route.index}`}
      aria-controls={`full-width-tabpanel-${route.index}`}
    />
  ));

  const panels = Routes.map(route => (
    <SleekTabPanel
      value={value}
      index={route.index}
      direction={theme.direction}
    >
      {route.page}
    </SleekTabPanel>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.test}>
        <SleekTabs
          value={value}
          onChange={handleChange}
          aria-label="sleek tabs"
        >
          {tabs}
        </SleekTabs>

        <Typography className={classes.padding} />

        <EnhancedSwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          enableMouseEvents={isBrowser}
        >
          {panels}
        </EnhancedSwipeableViews>
      </div>
    </div>
  );
}

render(
  <Strict>
    <App />
  </Strict>,
  document.getElementById('root')
);
