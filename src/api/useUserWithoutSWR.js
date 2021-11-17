import { useEffect, useState } from 'react';
import { fetchUsers } from './user';

const useUserWithoutSWR = (userId) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers('/users', userId);
      setUser(data);
    };
    fetchData();
  }, [userId]);

  return {
    user,
    isLoading: !user,
  };
};

export default useUserWithoutSWR;
