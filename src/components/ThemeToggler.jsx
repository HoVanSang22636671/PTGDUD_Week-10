import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

function ThemeToggler() {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    return (
        <div className="absolute top-4 right-4">
            <button
                onClick={() => dispatch(toggleTheme())}
                className="px-4 py-2 rounded border"
            >
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
}

export default ThemeToggler;