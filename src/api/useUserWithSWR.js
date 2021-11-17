import useSWR from 'swr';
import { fetchUsers } from './user';
import { useMemo } from 'react';

const useUserWithSWR = (id) => {
  const { data, error } = useSWR(['/users', id], fetchUsers, {
    revalidateOnMount: true,
    revalidateOnFocus: false,
  });

  const isLoading = !error && !data;

  const user = useMemo(() => {
    if (!data) return;
    return {
      id: data?.id,
      username: data?.username,
      name: data?.name,
      phone: data?.phone,
      email: data?.email,
    };
  }, [data]);

  return {
    user,
    isLoading,
    isError: error,
  };
};

export default useUserWithSWR;
