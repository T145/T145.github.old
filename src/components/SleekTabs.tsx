import React, { ChangeEvent } from 'react';
import { isMobileOnly } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

export interface SleekTabsProps {
  value: number;
  onChange: (event: ChangeEvent<unknown>, newValue: number) => void;
}

export default withStyles({
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
