import React, { ChangeEvent, StrictMode as Strict, useState } from 'react';
import { render } from 'react-dom';
import { isBrowser } from 'react-device-detect';
import '@fontsource/roboto'; // required for material-ui
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  GiTreasureMap as MapIcon,
  GiTrophy as TrophyIcon,
  GiMetalBar as MetalBarIcon
} from 'react-icons/gi';
import { SiInternetarchive as ArchiveIcon } from 'react-icons/si';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import randomcolor from 'randomcolor';
import SleekTabs from './components/SleekTabs';
import SleekTab from './components/SleekTab';
import SleekTabPanel from './components/SleekTabPanel';

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

const allyProps = (index: number) => ({
  id: `full-width-tab-${index}`,
  'aria-controls': `full-width-tabpanel-${index}`
});

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

  return (
    <div className={classes.root}>
      <div className={classes.test}>
        <SleekTabs
          value={value}
          onChange={handleChange}
          aria-label="sleek tabs"
        >
          <SleekTab
            label="(Traveling Salesman)"
            icon={<MapIcon />}
            {...allyProps(0)}
          />
          <SleekTab
            label="(Programming Contests)"
            icon={<TrophyIcon />}
            {...allyProps(1)}
          />
          <SleekTab
            label="(Metal Chests Mod)"
            icon={<MetalBarIcon />}
            {...allyProps(2)}
          />
          <SleekTab
            label="(Retired Projects)"
            icon={<ArchiveIcon />}
            {...allyProps(3)}
          />
        </SleekTabs>

        <Typography className={classes.padding} />

        <EnhancedSwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          enableMouseEvents={isBrowser}
        >
          <SleekTabPanel value={value} index={0} direction={theme.direction}>
            Item One
          </SleekTabPanel>
          <SleekTabPanel value={value} index={1} direction={theme.direction}>
            Item Two
          </SleekTabPanel>
          <SleekTabPanel value={value} index={2} direction={theme.direction}>
            Item Three
          </SleekTabPanel>
          <SleekTabPanel value={value} index={3} direction={theme.direction}>
            Item Four
          </SleekTabPanel>
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
