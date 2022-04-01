import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './components/TodoItem';

const initialState = {
    entities: [],
    filter: 'all',
};

export const reducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'todo/add': {
            return {
                ...state,
                entities: state.entities.concat({ ...action.payload }),
            };
        }
        case 'todo/complete': {
            const newTodos = state.entities.map((todo: any) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                }

                return todo;
            });

            return {
                ...state,
                entities: newTodos,
            };
        }
        case 'filter/set': {
            return {
                ...state,
                filter: action.payload,
            };
        }
        default:
            return state;
    }
};

const selectTodos = (state: any) => {
    const { entities, filter } = state;

    if (filter === 'complete') {
        return entities.filter((todo: any) => todo.completed);
    }

    if (filter === 'incomplete') {
        return entities.filter((todo: any) => !todo.completed);
    }

    return entities;
};

const App = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);

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
            <button
                onClick={() => dispatch({ type: 'filter/set', payload: 'all' })}
            >
                Mostrar todos
            </button>
            <button
                onClick={() =>
                    dispatch({ type: 'filter/set', payload: 'complete' })
                }
            >
                Completados
            </button>
            <button
                onClick={() =>
                    dispatch({ type: 'filter/set', payload: 'incomplete' })
                }
            >
                Incompletos
            </button>
            <ul>
                {todos.map((todo: any) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default App;
