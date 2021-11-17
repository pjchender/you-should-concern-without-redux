const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchUsers = async (path, id) => {
  console.log('[fetchUsers] invoke id: ', id);
  if (id === 2) {
    await sleep(1000);
  }
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return data;
};
