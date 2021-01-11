import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tab, { TabProps } from '@material-ui/core/Tab';

export type SleekTabProps = TabProps & {
  label: string;
};

export default withStyles((theme: Theme) =>
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
