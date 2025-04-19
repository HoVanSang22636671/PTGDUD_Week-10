import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";
import { addItem } from "../features/cart/cartSlice";

function Store() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const products = useSelector((state) => state.products.products);
    const cart = useSelector((state) => state.cart.cartItems);


    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">🌐 Redux Mega App</h1>

            {!auth.isLoggedIn ? (
                <button
                    className="bg-green-500 px-4 py-2 text-white rounded"
                    onClick={() => dispatch(login({ name: "User1" }))}
                >
                    Login
                </button>
            ) : (
                <>
                    <p className="mb-2">Welcome, {auth.user.name}!</p>
                    <button
                        className="bg-red-500 px-4 py-2 text-white rounded"
                        onClick={() => dispatch(logout())}
                    >
                        Logout
                    </button>
                </>
            )}

            <hr className="my-4" />

            <h2 className="text-xl font-semibold">🛒 Products</h2>
            <ul className="mb-2">
                {products.map((p) => (
                    <li key={p.id}>
                        {p.name} - ${p.price}
                        <button
                            className="ml-2 bg-blue-500 px-2 py-1 text-white rounded"
                            onClick={() => dispatch(addItem(p))}
                        >
                            Add to cart
                        </button>
                    </li>
                ))}
            </ul>

            <h3 className="font-medium">🧾 Cart: {cart.length} items</h3>
        </div>
    );
}

export default Store;
