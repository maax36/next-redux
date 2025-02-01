import { useSelector, useDispatch } from 'react-redux';
import { addItem, delItem, toggleItem } from '../redux/actions';
import { selectTodo } from '../redux/selectors';
import { useState } from 'react';

export function ToDO() {
    const
        [value, setValue] = useState(''),
        todo = useSelector(selectTodo),
        dispatch = useDispatch();
    return <fieldset>
        <legend>ToDo</legend>
        <input value={value} onInput={event =>  setValue(event.target.value)} />
        <button onClick={()=>dispatch(addItem(value))}>add</button>
        <ol>
            {todo.map(({ id, text, checked }) =>
                <li key={id}>
                    <input checked={checked} type="checkbox" onChange={() => dispatch(toggleItem(id))} />
                    {text}
                    {checked && '+'}
                    <button onClick={() => dispatch(delItem(id))}>[x]</button>
                </li>)}
        </ol>
    </fieldset>
}