import React, { ReactNode, useMemo, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Empty from '../EmptyNode/EmptyNode';

interface OptionalProps {
  icon?: ReactNode;
}

interface Props extends LinkProps, OptionalProps {
  primary: string;
}

const defaultProps: OptionalProps = {
  icon: <Empty />,
};

const ListLink = ({ icon, primary, to }: Props) => {
  const renderLink = useMemo(
    () =>
      forwardRef<never, Omit<LinkProps, 'to'>>((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} data-testid="ListLink">
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

ListLink.defaultProps = defaultProps;

export default ListLink;
