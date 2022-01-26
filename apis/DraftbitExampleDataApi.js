import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const gETCryptoPrices6064GET = Constants =>
  fetch(`https://example-data.draftbit.com/crypto?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useGETCryptoPrices6064GET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://example-data.draftbit.com/crypto?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });
};

export const FetchGETCryptoPrices6064GET = ({
  children,
  onData = () => {},
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://example-data.draftbit.com/crypto?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};

export const gETCryptoPrices782GET = Constants =>
  fetch(`https://example-data.draftbit.com/crypto?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useGETCryptoPrices782GET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://example-data.draftbit.com/crypto?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });
};

export const FetchGETCryptoPrices782GET = ({ children, onData = () => {} }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://example-data.draftbit.com/crypto?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};
