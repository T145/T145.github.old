import React from 'react';
import { Typography, Link } from '@material-ui/core';

export default function Copyright() {
  return (
    <Typography data-testid="Copyright" color="inherit" variant="subtitle2">
      <Link color="inherit" href="https://github.com/T145">
        T145
      </Link>
      {' © '}
      {new Date().getFullYear()}
    </Typography>
  );
}
