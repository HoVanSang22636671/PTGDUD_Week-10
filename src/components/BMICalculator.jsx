import { useDispatch, useSelector } from "react-redux";
import { updateInput, calculateResult } from "../features/bmi/bmiSlice";

function BMICalculator() {
    const dispatch = useDispatch();
    const { weight, height, result } = useSelector((state) => state.bmi);

    const handleChange = (field, value) => {
        dispatch(updateInput({ field, value }));
    };

    const handleCalculate = () => {
        dispatch(calculateResult());
    };

    return (
        <div className="p-4 border rounded shadow-md max-w-xs w-full bg-white text-black mt-4">
            <h2 className="text-xl font-bold mb-2">🧠 BMI Calculator</h2>

            <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => handleChange("weight", e.target.value)}
                className="border px-2 py-1 w-full mb-2"
            />
            <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => handleChange("height", e.target.value)}
                className="border px-2 py-1 w-full mb-2"
            />

            <button
                onClick={handleCalculate}
                className="bg-blue-500 text-white px-3 py-1 rounded w-full"
            >
                Calculate BMI
            </button>

            {result && (
                <div className="mt-3 font-bold text-center">
                    Your BMI: {result}
                </div>
            )}
        </div>
    );
}

export default BMICalculator;
