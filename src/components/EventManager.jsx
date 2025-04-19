import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addEvent, editEvent, deleteEvent } from "../features/events/eventsSlice";

function EventManager() {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.events);

    const [form, setForm] = useState({ title: "", date: "" });
    const [editId, setEditId] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (editId) {
            dispatch(editEvent({ id: editId, ...form }));
        } else {
            dispatch(addEvent(form));
        }
        setForm({ title: "", date: "" });
        setEditId(null);
    };

    const handleEdit = (event) => {
        setForm({ title: event.title, date: event.date });
        setEditId(event.id);
    };

    const handleDelete = (id) => {
        dispatch(deleteEvent(id));
    };

    return (
        <div className="p-4 border rounded shadow-md max-w-md w-full bg-white text-black mt-4">
            <h2 className="text-xl font-bold mb-2">📆 Event Manager</h2>

            <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={form.title}
                onChange={handleChange}
                className="border px-2 py-1 w-full mb-2"
            />
            <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="border px-2 py-1 w-full mb-2"
            />
            <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-3 py-1 rounded w-full mb-4"
            >
                {editId ? "Update Event" : "Add Event"}
            </button>

            <ul className="space-y-2">
                {events.map((event) => (
                    <li
                        key={event.id}
                        className="flex justify-between items-center border-b pb-1"
                    >
                        <div>
                            <div className="font-semibold">{event.title}</div>
                            <div className="text-sm text-gray-600">{event.date}</div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                                onClick={() => handleEdit(event)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white px-2 py-1 rounded"
                                onClick={() => handleDelete(event.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventManager;
