import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';
import { useEffect } from 'react';

function UsersList() {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="p-4 border rounded shadow-md max-w-md w-full mt-4 bg-white text-black">
            <h2 className="text-lg font-bold mb-2">Users</h2>

            {status === 'loading' && <p>Loading users...</p>}
            {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
            {status === 'succeeded' && (
                <ul className="list-disc ml-4">
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} — <span className="text-sm text-gray-600">{user.email}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UsersList;
