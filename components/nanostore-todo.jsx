import { useState } from 'react';
import { $todolist, addItem, delItem, toggleItem } from '../store/todo';
import { useStore } from '@nanostores/react';

export function NanoTodo() {
    const
        [itemtext, setItemtext] = useState(),
        list = useStore($todolist);
    console.log(list);
    return (
        <>
            <fieldset className='dz'>
                <legend>Nano Todo</legend>

                <input type="text" onInput={(e) => setItemtext(e.target.value)} />
                <button onClick={() => addItem(itemtext)}>add item</button>

                <ol>
                    {list.map(({ id, text, checked }) =>
                        <li key={id}>
                            <input checked={checked} type="checkbox" onChange={() => toggleItem(id)} />           
                            {text}
                            {checked && '+'}
                            <button onClick={()=>delItem(id)}>[x]</button>
                        </li>)}
                </ol>
            </fieldset>
        </>
    );
}