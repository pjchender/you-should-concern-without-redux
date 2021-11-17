import useUserWithSWR from '../api/useUserWithSWR';

function ContentWithSWR({ userId }) {
  const { user, isLoading, isError } = useUserWithSWR(userId);

  if (isError) return <div>failed to load</div>;
  if (isLoading || !user) return <div>loading...</div>;

  const { name, phone, email, id } = user;

  return (
    <div className="card">
      <h5 className="card-header">with SWR</h5>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">id: {id}</li>
          <li className="list-group-item">name: {name}</li>
          <li className="list-group-item">phone: {phone}</li>
          <li className="list-group-item">email: {email}</li>
        </ul>
      </div>
    </div>
  );
}

export default ContentWithSWR;
