import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/auth/authSlice";


function Auth() {
    const dispatch = useDispatch();
    const { user, isLoggedIn } = useSelector((state) => state.auth);

    const handleLogin = () => {
        const mockUser = { name: 'John Doe', email: 'john@example.com' };
        dispatch(login(mockUser));
    }

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <div className="p-4 border rounded shadow-md max-w-md w-full mt-4 bg-white text-black">
            {isLoggedIn ? (
                <>
                    <h2 className="text-lg font-bold">Welcome, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                    <button
                        onClick={handleLogout}
                        className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <h2 className="text-lg font-bold mb-2">Please log in</h2>
                    <button
                        onClick={handleLogin}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Login
                    </button>
                </>
            )}
        </div>
    );
}

export default Auth;