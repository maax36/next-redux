import { createStore } from "redux";
import { DECREMENT, INCREMENT } from "./actions";

function rootReducer(state = { value: 0 },action) {
    switch(action.type) {
        case INCREMENT:
            return { value: state.value + 1 };
        case DECREMENT:
            return { value: state.value - 1 };
        default:
            return state
    }
}

export const store = createStore(rootReducer);
store.subscribe(() => console.log('subscribe store=', store.getState()));