import { useSelector, useDispatch } from "react-redux"
import { addTodo, toggleTodo, removeTodo } from "../features/todos/todosSlice"
import { useState } from "react"

function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const handleAdd = () => {
        if (text.trim() !== '')
            dispatch(addTodo(text));
        setText('');
    };
    return (
        <div className="max-w-md mx-auto mt-12 bg-white p-2 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter a task"
                    className="flex-1 border p-2 rounded"
                />

                <button
                    onClick={handleAdd}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add
                </button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between p-2 border rounded hover:bg-gray-100"
                    >
                        <span
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            className={`cursor-pointer flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
                        >
                            {todo.text}
                        </span>

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="ml-2 text-red-500 hover:text-red-700"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;