import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, SvgIcon } from '@material-ui/core';

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function DownloadsBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="212.4" height="28">
      <g shapeRendering="crispEdges">
        <rect width="30" height="28" fill="#E04E14" />
        <rect x="30" width="182.4" height="28" fill="#2D2D2D" />
      </g>
      <path
        fill="#1C1C1C"
        transform="scale(0.6) translate(3,11)"
        d="M11.3,0L12,3C8.5,3,0,3,0,3c0,0,0.2,0.9,0.3,1c0.3,0.5,0.6,1.1,1,1.5c1.9,2.2,5.2,3.1,7.9,3.6
		c1.9,0.4,3.8,0.5,5.7,0.6l2.2,5.9h1.2l0.7,1.9h-1L16.3,23H33l-1.7-5.5h-1l0.7-1.9h1.2c0,0,1-6.1,4.1-8.9c3-2.8,6.7-3.2,6.7-3.2V0
		H11.3z M28.1,15.1c-0.8,0.5-1.7,0.5-2.3,0.9c-0.4,0.2-0.6,0.8-0.6,0.8c-0.4-0.9-0.9-1.2-1.5-1.4c-0.6-0.2-1.7-0.1-3.2-1.4
		c-1-0.9-1.1-2.1-1-2.7c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0.2-0.6,0.7-1.2,1.7-1.6
		c0,0-0.7,1,0,2c0.4,0.6,1.2,0.9,1.9,0.5c0.3-0.2,0.5-0.6,0.6-0.9C24,10,24,9.3,23.4,8.8c-0.9-0.8-1.1-1.9-0.5-2.6
		c0,0,0.2,0.9,1.1,0.8c0.6,0,0.6-0.2,0.4-0.4C24.3,6.3,23,4.4,24.9,3c0,0,1.2-0.8,2.6-0.7c-0.8,0.1-1.7,0.6-2,1.4c0,0,0,0,0,0.1
		c-0.3,0.8-0.1,1.7,0.5,2.5c0.4,0.6,0.9,1.1,1.1,1.9c-0.3-0.1-0.5,0-0.7,0.2c-0.2,0.2-0.3,0.6-0.2,0.9c0.1,0.2,0.3,0.4,0.5,0.4
		c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0.3-0.1,0.5-0.5,0.4-0.8c0.2,0.2,0.3,0.7,0.2,1c0,0.3-0.2,0.6-0.3,0.8c-0.1,0.2-0.3,0.4-0.4,0.6
		c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.2,0,0.5,0.1,0.7c0.4,0.6,1.2,0,1.4-0.5c0.3-0.6,0.2-1.3-0.2-1.9c0,0,0.7,0.4,1.2,1.8
		C29.6,13.2,28.9,14.6,28.1,15.1z"
      />
      <g
        textAnchor="middle"
        fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif"
        fontSize="11"
      >
        <text x="121.7" y="17.5" fontWeight="bold" fill="#fff">
          32,962,820 DOWNLOADS
        </text>
      </g>
    </svg>
  );
}

function VersionsBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="162.0" height="28">
      <g shapeRendering="crispEdges">
        <rect width="114.0" height="28" fill="#2D2D2D" />
        <rect x="114.0" width="48.0" height="28" fill="#E04E14" />
      </g>
      <g
        textAnchor="middle"
        fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif"
        fontSize="11"
      >
        <text x="57.0" y="17.5" fill="#fff">
          AVAILABLE FOR
        </text>
        <text x="138.0" y="17.5" fontWeight="bold" fill="#fff">
          1.16
        </text>
      </g>
    </svg>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function ChestsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="ChestsPage">
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img
              src="https://i.imgur.com/Vsj2cT2.png"
              alt="Metal Chests Logo"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SvgIcon component={DownloadsBadge} />
            <SvgIcon component={VersionsBadge} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
