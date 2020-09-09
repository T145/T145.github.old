import React from 'react';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@material-ui/core';
import { FaRegSmileWink as SmileIcon } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div data-testid="HomePage">
      <Grid container spacing={2}>
        <Grid item>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Welcome to T145&rsquo;s Github Documentation website!
          </Typography>

          <Typography paragraph>
            This project was made to fulfill the following desires:
            <List>
              <ListItem>
                <ListItemText
                  primary="&#8226; Render views in HTML5 to allow maximum customization"
                  secondary="Because Github's markdown rendering generates archaic HTML"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="&#8226; Remove the need to copy-paste similar READMEs across multiple projects"
                  secondary="Including information like similar setup instructions & donations"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="&#8226; Have a clean interface that supports multiple platforms"
                  secondary="Because Github's mobile view is clunky, and third-party apps are sketchy"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="&#8226; Have a popular project showcase"
                  secondary={[
                    'Feel free to star some repositories!\t',
                    <SmileIcon />,
                  ]}
                />
              </ListItem>
            </List>
          </Typography>

          <Typography paragraph>
            If there are any problems with this site on any platform, please
            create an issue report on the site&rsquo;s Github repository
            detailing it.
          </Typography>

          <Typography paragraph>
            Here is the proper, un-minified destination to post issue reports:{' '}
            <Link
              href="https://github.com/T145/T145.github.io/issues"
              rel="noreferrer"
            >
              https://github.com/T145/T145.github.io/issues
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
