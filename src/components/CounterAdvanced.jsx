import { useSelector, useDispatch } from "react-redux";
import { increment, reset, incrementByAmount } from "../features/counterAdvanced/counterAdvancedSlice";
import { useState } from "react";

function CounterAdvanced() {
    const count = useSelector((state) => state.counterAdvanced.count);
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);
    return (
        <div className="p-4 border rounded shadow-md max-w-xs w-full bg-white text-black mt-4">
            <h2 className="text-xl font-bold mb-2">Advanced Counter</h2>
            <div className="text-3xl font-bold mb-4">{count}</div>
            <div className="flex gap-2 mb-2">
                <button
                    onClick={() => dispatch(increment())}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    +1
                </button>

                <button
                    onClick={() => dispatch(reset())}
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                >
                    Reset
                </button>
            </div>

            <div>
                <input
                    type="number"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                    className="border px-2 py-1 w-20"
                />

                <button
                    onClick={() => dispatch(incrementByAmount(step))}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    + {step}
                </button>
            </div>
        </div>
    );
}

export default CounterAdvanced;