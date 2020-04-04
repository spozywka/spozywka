import { useState, useEffect } from 'react';

export function useRequest<T>(callback: () => Promise<T>, defaultValue: T) {
  const [pending, setPending] = useState(true);
  const [failure, setFailure] = useState(false);
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    callback()
      .then((res) => {
        setPending(false);
        setFailure(false);
        setData(res);
      })
      .catch(() => {
        setPending(false);
        setFailure(true);
      });
    // eslint-disable-next-line
  }, []);

  return {
    pending,
    failure,
    data,
  };
}
