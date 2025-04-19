import Counter from "./components/Counter"
import TodoList from "./components/TodosList"
import ThemeToggler from "./components/ThemeToggler"
import Cart from "./components/Cart"
import Auth from "./components/Auth"
import UsersList from "./components/UsersList"
import CounterAdvanced from "./components/CounterAdvanced"
import BMICalculator from "./components/BMICalculator";
import { useSelector } from "react-redux"

function App() {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div className={theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
        <ThemeToggler />
        {/* <Counter /> */}
        <TodoList />
        <Cart />
        <Auth />
        <UsersList />
        <CounterAdvanced />
        <BMICalculator />
      </div>
    </div>
  )
}

export default App
