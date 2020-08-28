import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  CssBaseline,
  Container,
  Typography,
  Box,
  Link,
} from '@material-ui/core';
import AppStyle from './styles/AppStyle';
import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={AppStyle}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            React + TypeScript + MaterialUI!
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
