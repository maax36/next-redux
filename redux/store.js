import { createStore } from "redux";
import { DECREMENT, INCREMENT, ADD_ITEM, DEL_ITEM, TOGGLE_ITEM, DEL_COMPLETE } from "./actions";

function rootReducer(state =
    { value: 0, todoList: [] }, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: state.value + 1 };
        case DECREMENT:
            return { ...state, value: state.value - 1 };
        case ADD_ITEM:
            return { ...state, todoList: [...state.todoList, { id: Math.random(), text: action.text, checked: false }] }
        case DEL_ITEM:
            return { ...state, todoList: state.todoList.filter(el => el.id !== action.id) }
        case TOGGLE_ITEM:
            const
                index = state.todoList.findIndex(el => el.id === action.id),
                value = state.todoList[index];
            value.checked = !value.checked;
            return { ...state, todoList: state.todoList.with(index, { ...value }) }
        default:
            return state
    }
}

export const store = createStore(rootReducer);
store.subscribe(() => console.log('subscribe store=', store.getState()));