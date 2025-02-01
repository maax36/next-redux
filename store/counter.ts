import { atom } from 'nanostores';

export const $counter = atom(0);

export function increment() {
    $counter.set(1+$counter.get());
}

export function decrement() {
    $counter.set(-1 + $counter.get());
}