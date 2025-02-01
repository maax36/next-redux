import { useStore } from '@nanostores/react';
import { $counter,increment,decrement } from '../store/counter';

export function NanoCounter() {
    const
        count = useStore($counter);
    return <fieldset>
        <legend>Nano Stores Counter</legend>
        <button onClick={() => decrement()}>-</button>
        {count}
        <button onClick={() => increment()}>+</button>
    </fieldset>
}