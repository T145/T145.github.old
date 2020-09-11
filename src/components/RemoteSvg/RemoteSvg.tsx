import React, { useState, useEffect } from 'react';

function getHost(url: string) {
  const pathArray = url.split('/');
  const protocol = pathArray[0];
  const host = pathArray[2];
  return `${protocol}//${host}/`;
}

export default function RemoteSvg({ url }: { url: string }) {
  const [errant, setError] = useState(false);
  const [svg, setSvg] = useState('');

  async function fetchData() {
    const headers = {
      'Access-Control-Allow-Origin': getHost(url),
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    };
    const response = await fetch(url, { headers });

    response
      .text()
      .then(result => setSvg(result))
      .catch(err => setError(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // If you are certain the content passed to dangerouslySetInnerHTML is sanitized HTML you can disable this rule.
    // eslint-disable-next-line react/no-danger
    <div data-testid="RemoteSvg" dangerouslySetInnerHTML={{ __html: svg }} />
  );
}
