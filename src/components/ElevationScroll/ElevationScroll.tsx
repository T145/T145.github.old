import { cloneElement, ReactElement } from 'react';
import { useScrollTrigger } from '@material-ui/core';

interface Props {
  children: ReactElement;
}

export default function ElevationScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
