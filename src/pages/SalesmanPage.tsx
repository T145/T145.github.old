import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  Link,
  List,
  ListItemText,
  Card,
  CardContent,
  CardActions
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardWrapper: {
      paddingBottom: '5pt'
    },
    card: {
      maxWidth: 845
    },
    cardContent: {
      backgroundColor: '#F6F6F6'
    },
    label: {
      ...theme.typography.button
    }
  })
);

export default function SalesmanPage() {
  const classes = useStyles();

  return (
    <div data-testid="SalesmanPage">
      <Typography paragraph>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Traveling Salesman Estimater
        </Typography>
        After some research, my theory most closely resembles the &quot;Nearest
        Neighbor Algorithm&quot; by Rosenkratz, Stearns, and Lewis, detailed on
        page 242 of{' '}
        <Link href="https://www.sciencedirect.com/science/article/pii/037722179290138Y">
          this paper
        </Link>
        . The concept used is entirely original, yet the worst-case performance
        is very similar to their take. My first step was to think about the
        problem differently. The classic TSP (Traveling Salesman Problem) is
        stated along these lines:
      </Typography>

      <Typography paragraph component="div">
        <Box fontStyle="italic">
          Find the shortest possible route that visits every city exactly once
          and returns to the starting point.
        </Box>
      </Typography>

      <Typography paragraph>
        The problem is defined as the shortest route that starts and ends at the
        same point, which is essentially the shortest _circuit_ for the whole
        graph, making the start aribtrary. In other words, no matter where you
        start on the graph, there will only be one &quot;shortest path.&quot;
        The question then becomes:
      </Typography>

      <Typography paragraph component="div">
        <Box fontStyle="italic">
          Find the shortest possible circuit that visits every city exactly
          once.
        </Box>
      </Typography>

      <Typography paragraph>
        The easiest way to make this understandable for a computer is to make
        the whole graph into one line. Thinking abstractly, we take all of the
        points in the graph and arrange them into one straight line along the
        y-axis, creating a path with the shortest distance between each point.
      </Typography>

      <Typography paragraph>
        This would give us the shortest Hamiltonian, but we can&rsquo;t say that
        it&rsquo;s always the shortest possible circuit. The length of the
        overall path must be considered when choosing each subpath. This
        consideration is done by sorting the graph. Intuitively, after sorting
        the points by their `y` value, we&rsquo;ll end up with the shortest
        path. The only time we run into problems while sorting is if any point
        shares the same y-value with another point.
      </Typography>

      <Typography paragraph>
        There are a few ways I&rsquo;ve come up with to handle such points,
        which I call collisions.
        <List>
          <ListItemText primary="1. Find the best place to put them into the graph by testing the distance at each point and choosing which index gives us the shortest distance. This is brute-forcing the point, which has a performance of O(n&sup3;)." />
          <ListItemText primary="2. Build a binary tree that holds the graph, making any search operation O(nlgn)." />
          <ListItemText primary="3. Think about the graph 3-dimensionally, and tilt it to find the best distance. We tilt it up, and calculate the distance. Do the same downward. Each direction is sorted, so we plug it in at an index in a list by its y-value. Whichever is shorter is the spot we want to place it in. Now, in shifting the graph either direction there's a constant `offset` that's being added or subtracted. When normalizing the graph, we have to change back each point's values from this offset. The total performance of this calculation would be O(n)." />
        </List>
      </Typography>

      <Typography paragraph className={classes.cardWrapper}>
        <Card variant="outlined" className={classes.card}>
          <CardContent className={classes.cardContent}>
            {[
              'init solution',
              'sort solution',
              'be sure we have the shortest path, and remove any collisions for future calculation',
              'if we have collisions then find the best places to put them'
            ].map(text => (
              <Box fontFamily="Monospace" fontSize="body1.fontSize" m={1}>
                {text}
              </Box>
            ))}
          </CardContent>

          <CardActions>
            <div className={classes.label}>Algorithm Pseudocode</div>
          </CardActions>
        </Card>
      </Typography>

      <Typography paragraph>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Results
        </Typography>
        Currently the implementation works for the following cases:
        <List>
          <ListItemText primary="&#8226; A single point (length 0)" />
          <ListItemText primary="&#8226; Simple to complex polygons" />
          <ListItemText primary="&#8226; Lines (simple to complex functions implied)" />
          <ListItemText primary="&#8226; Scatter plots (implied from polygons)" />
        </List>
        Every possible path is a combination of these possibilities.
      </Typography>

      <Typography paragraph>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Implementation Asymptotic Analysis
        </Typography>
        <ListItemText primary="Language: Java" />
        <ListItemText primary="Worst case: Graph with collisions; worst case time of O(n&sup3;)" />
        <ListItemText primary="Best case: Graph contains no collisions; worst case runtime is O(nlgn), due to the point sorting" />
      </Typography>
    </div>
  );
}
