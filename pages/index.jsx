import { Counter } from '../components/counter';
import { NanoCounter } from '../components/nanostore-counter';
import { NanoTodo } from '../components/nanostore-todo';
import { ToDO } from '../components/todo';

export default function Page() {
    return (
        <>
            <h2 className='dz'>ДЗ:</h2>
            <NanoTodo />
            <NanoTodo />
            <h2 className='lesson'>повторил по уроку:</h2>
            <NanoCounter />
            <h2 className='lesson'>повторил по уроку:</h2>
            <ToDO />
            <h2 className='lesson'>повторил по уроку:</h2>
            <Counter />
        </>
    );
}