import { createStore } from "@reduxjs/toolkit";

const initialState = {
    toDos: []
}

function todoReducer(state = initialState, action) {
    if(action.type === 'ADD') {
        return {
            ...state,
            toDos: [action.payload, ...state.toDos],
        };
    }
    else return state;
}

const store = createStore(todoReducer);

export default store;