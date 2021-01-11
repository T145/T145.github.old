import React, { ReactNode } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export interface SleekTabPanelProps {
  children?: ReactNode;
  direction?: string;
  index: number;
  value: number;
}

const SleekTabPanel = ({
  children,
  value,
  index,
  ...other
}: SleekTabPanelProps) => (
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

SleekTabPanel.defaultProps = {
  children: <></>,
  direction: 'rtl'
};

export default SleekTabPanel;
