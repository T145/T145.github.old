/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

interface ListItemLinkProps {
  icon?: React.ReactNode;
  primary: string;
  to: string;
}

export default function ListItemLink({ icon, primary, to }: ListItemLinkProps) {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<never, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}
