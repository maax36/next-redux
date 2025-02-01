export const
    ADD_ITEM = 'ADD_ITEM',
    DEL_ITEM = 'DEL_ITEM',
    TOGGLE_ITEM = 'TOGGLE_ITEM',
    DEL_COMPLETE = 'DEL_COMPLETE',
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT';

export function addItem(text) {
    return { type: ADD_ITEM, text };
}

export function delItem(id) {
    return { type: DEL_ITEM, id };
}

export function toggleItem(id) {
    return { type: TOGGLE_ITEM, id };
}

export function delComplete() {
    return { type: DEL_COMPLETE };
}

export function increment() {
    return { type: INCREMENT }
}

export function decrement() {
    return { type: DECREMENT }
}