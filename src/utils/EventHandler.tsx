import React from 'react';
import Empty from './EmptyComponent';

export default function EventHandler() {
  const disableF5 = (ev: KeyboardEvent) => {
    // http://www.javascriptkeycode.com/
    if ((ev.which || ev.keyCode) === 116) {
      ev.preventDefault();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', disableF5);
    window.addEventListener('keyup', disableF5);
  }, []);

  return <Empty />;
}
