import React, { ChangeEvent, StrictMode as Strict } from 'react';
import { render } from 'react-dom';
import { isMobileOnly, isBrowser } from 'react-device-detect';
import '@fontsource/roboto'; // required for material-ui
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
  useTheme
} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab, { TabProps } from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  GiTreasureMap as MapIcon,
  GiTrophy as TrophyIcon,
  GiMetalBar as MetalBarIcon
} from 'react-icons/gi';
import { SiInternetarchive as ArchiveIcon } from 'react-icons/si';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import randomcolor from 'randomcolor';

const EnhancedSwipeableViews = isBrowser
  ? bindKeyboard(SwipeableViews)
  : SwipeableViews;

interface SleekTabsProps {
  value: number;
  onChange: (event: ChangeEvent<unknown>, newValue: number) => void;
}

type SleekTabProps = TabProps & {
  label: string;
};

const SleekTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7'
    }
  }
})((props: SleekTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span /> }}
    centered={!isMobileOnly}
    variant={isMobileOnly ? 'fullWidth' : 'standard'}
  />
));

const SleekTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1
      }
    }
  })
)((props: SleekTabProps) => <Tab disableRipple {...props} />);

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

type TabPanelProps = {
  children?: React.ReactNode;
  direction?: string;
  index: number;
  value: number;
};

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

TabPanel.defaultProps = {
  children: <></>,
  direction: 'rtl'
};

const allyProps = (index: number) => ({
  id: `full-width-tab-${index}`,
  'aria-controls': `full-width-tabpanel-${index}`
});

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

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
          <TabPanel value={value} index={0} direction={theme.direction}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1} direction={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} direction={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} direction={theme.direction}>
            Item Four
          </TabPanel>
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
