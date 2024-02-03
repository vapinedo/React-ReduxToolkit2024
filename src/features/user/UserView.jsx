import { useEffect } from "react"
import { fetchUsers } from "./userSlice";
import { useDispatch, useSelector } from "react-redux"

export default function UserView() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  return (
    <article>
      <h2>List of Users</h2>
      {user.loading && <p>Loading...</p>}
      {(!user.loading && user.error) && <p>{user.error}</p>}
      {(!user.loading && !user.error && user.users.length) && (
        <ul>
          {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </article>
  )
}