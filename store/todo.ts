import { atom } from 'nanostores';

interface TodoItem {
    id: number;
    text: string;
    checked: boolean;
}

export const $todolist = atom<TodoItem[]>([]);

export function addItem(textitem: string) {
    $todolist.set([...$todolist.get(), { id: Math.random(), text: textitem, checked: false }]);
}
export function delItem(id: number) {
    $todolist.set($todolist.get().filter(el => el.id !== id));
}

export function toggleItem(id: number) {
    const
        index = $todolist.get().findIndex(el => el.id === id),
        value = $todolist.get()[index];
    value.checked = !value.checked;

    $todolist.set($todolist.get().with(index, { ...value }));
}