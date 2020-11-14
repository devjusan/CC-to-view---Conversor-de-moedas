import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error('Ocorreu um erro.');
    } catch (e) {
      json = null;
      setError(e.message);
    } finally {
      setData(json);
      return { response, json };
    }
  }, []);

  return {
    data,
    error,
    request,
  };
};

export default useFetch;
