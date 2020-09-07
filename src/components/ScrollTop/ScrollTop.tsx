import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';

interface Props {
  children: React.ReactNode;
}

export default function ScrollTop({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (
    event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" data-testid="ScrollTop">
        {children}
      </div>
    </Zoom>
  );
}
