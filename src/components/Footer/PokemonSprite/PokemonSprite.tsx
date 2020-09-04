import React from 'react';
import { Avatar } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

/*
 * TODO:
 * Add Snackbar for fetch errors
 * Add badges with randomized items
 */

const avatarStyles = makeStyles((theme: Theme) =>
  createStyles({
    smallAvatar: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    largeAvatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

/**
 * Generates a random integer between min and max (inclusive)
 * @param  {number} min
 * @param  {number} max
 * @returns randomly generated integer
 */
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function PokemonSprite() {
  // const [hasError, setError] = React.useState(false);
  const [sprite, setSprite] = React.useState('');
  const [name, setName] = React.useState('');

  async function fetchData() {
    const pokeId = randomInt(1, 151);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
    const response = await fetch(url);

    response.json().then(result => {
      setSprite(result.sprites.front_default);
      setName(result.name);
    });
    // .catch(err => setError(err));
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Avatar
      src={sprite || ''}
      alt={name}
      className={avatarStyles().largeAvatar}
      data-testid="PokemonSprite"
    />
  );
}
