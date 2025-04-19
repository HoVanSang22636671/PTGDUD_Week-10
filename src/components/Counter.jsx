import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="text-center mt -20">
            <h1 className="text-4xl font-bold md-6">Simple Counter</h1>
            <p className="text-2xl mb-4">Count: {count}</p>

            <button
                onClick={() => dispatch(increment())}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
            >
                +
            </button>

            <button
                onClick={() => dispatch(decrement())}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
            >
                -
            </button>
        </div>
    );
}

export default Counter;