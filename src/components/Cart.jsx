import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../features/cart/cartSlice";

const sampleProducts = [
    { id: 1, name: "🍕 Pizza", price: 10 },
    { id: 2, name: "🍔 Burger", price: 8 },
    { id: 3, name: "🍟 Fries", price: 5 },
];

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const handleAdd = (product) => dispatch(addItem(product));
    const handleRemove = (id) => dispatch(removeItem(id));
    const handleUpdate = (id, quantity) => {
        if (quantity > 0) dispatch(updateQuantity({ id, quantity: Number(quantity) }));
    };
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className="p-4 border rounded shadow-md max-w-md w-full bg-white text-black mt-4">
            <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>

            <div className="mb-4">
                {sampleProducts.map((product) => (
                    <button
                        key={product.id}
                        className="bg-blue-500 text-white px-3 py-1 m-1 rounded"
                        onClick={() => handleAdd(product)}
                    >
                        Add {product.name}
                    </button>
                ))}
            </div>

            {cartItems.length === 0 ? (
                <p>Cart is empty !!</p>
            ) : (
                <ul className="space-y-2">
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-between items-center">
                            <span>{item.name}</span>
                            <input
                                type="number"
                                min={1}
                                value={item.quantity}
                                onChange={(e) => handleUpdate(item.id, e.target.value)}
                                className="w-16 border px-1"
                            />
                            <span>${item.price * item.quantity}</span>
                            <button
                                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-4 font-semibold">Total: ${total}</div>
        </div>
    );
}

export default Cart;