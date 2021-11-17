import { useCallback } from 'react';

// import ContentWithSWR from '../../components/ContentWithSWR';
import ContentWithoutSWR from '../../components/ContentWithoutSWR';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/userState';

const User = () => {
  const [user, setUser] = useRecoilState(userState);
  const { userId } = user;

  const toggleUserId = useCallback(() => {
    setUser((user) => ({
      ...user,
      userId: user.userId + 1,
    }));
  }, [setUser]);

  return (
    <div>
      <div className="row mb-3 justify-content-end">
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={toggleUserId}
          >
            Next User（UserId: {userId}）
          </button>
        </div>
      </div>
      <div className="row gx-5">
        <div className="col">
          <ContentWithoutSWR userId={userId} />
        </div>

        <div className="col">
          <ContentWithoutSWR userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default User;
