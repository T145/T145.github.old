import React from 'react';
import { Grid, Typography, List, ListItemText, Link } from '@material-ui/core';
import { FaRegSmileWink as SmileIcon } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div data-testid="HomePage">
      <Grid container spacing={2}>
        <Grid item>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Welcome to T145&rsquo;s Github documentation website!
          </Typography>

          <Typography paragraph>
            This project was made to:
            <List>
              <ListItemText
                primary="&#8226; Render views in HTML5, allowing maximum customization"
                secondary="Because Github's Markdown rendering generates archaic HTML"
              />
              <ListItemText
                primary="&#8226; Render copy-pasting similar READMEs across multiple projects unnecessary"
                secondary="Including information like setup instructions & donation options"
              />
              <ListItemText
                primary="&#8226; Be a clean documentation interface that supports multiple platforms"
                secondary="Because Github's mobile view is clunky, and third-party apps are sketchy"
              />
              <ListItemText
                primary="&#8226; Be a popular project showcase"
                secondary={[
                  'Feel free to star some repositories! ',
                  <SmileIcon />,
                ]}
              />
            </List>
          </Typography>

          <Typography paragraph>
            If there are any problems with this site on any platform, please
            give a detailed report over at{' '}
            <Link
              href="https://github.com/T145/T145.github.io/issues"
              rel="noreferrer"
            >
              https://github.com/T145/T145.github.io/issues
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
