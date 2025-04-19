import { createSlice, nanoid } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
    },
    reducers: {
        addEvent: (state, action) => {
            const newEvent = {
                id: nanoid(),
                ...action.payload,
            };
            state.events.push(newEvent);
        },
        editEvent: (state, action) => {
            const { id, title, date } = action.payload;
            const event = state.events.find((e) => e.id === id);
            if (event) {
                event.title = title;
                event.date = date;
            }
        },
        deleteEvent: (state, action) => {
            state.events = state.events.filter((e) => e.id !== action.payload);
        },
    },
});

export const { addEvent, editEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
