import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './components/TodoItem';

const initialState = {
    entities: [],
};

export const reducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'todo/add': {
            return {
                ...state,
                entities: state.entities.concat({ ...action.payload }),
            };
        }
        default:
            return state;
    }
};

const App = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((x) => x);

    const submit = (e: any) => {
        e.preventDefault();

        if (!value.trim()) {
            return;
        }

        const id = Math.random().toString(36);
        const todo = { title: value, completed: false, id };
        dispatch({ type: 'todo/add', payload: todo });
        setValue('');
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <button>Mostrar todos</button>
            <button>Completados</button>
            <button>Incompletos</button>
            <ul>
                {state.entities.map((todo: any) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default App;
