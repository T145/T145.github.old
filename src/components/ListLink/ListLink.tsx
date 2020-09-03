import React, { ReactNode, useMemo, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Empty from '../EmptyNode/EmptyNode';

interface LLDefaultProps {
  icon?: ReactNode;
}

interface LLProps {
  primary: string;
  to: string;
}

const defaultProps: LLDefaultProps = {
  icon: <Empty />,
};

const ListLink = ({ icon, primary, to }: LLDefaultProps & LLProps) => {
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
