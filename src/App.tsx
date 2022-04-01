import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

import TodoItem from './components/TodoItem';

export const asyncMiddleware = (store: any) => (next: any) => (action: any) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }

    return next(action);
};

export const fetchThunk = () => (dispatch: any) => {
    console.log('thunk', dispatch);
};

export const filterReducer = (state: string = 'all', action: any) => {
    switch (action.type) {
        case 'filter/set':
            return action.payload;
        default:
            return state;
    }
};

export const todosReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'todo/add': {
            return state.entities.concat({ ...action.payload });
        }
        case 'todo/complete': {
            const newTodos = state.map((todo: any) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                }

                return todo;
            });

            return newTodos;
        }
        default:
            return state;
    }
};

export const reducer = combineReducers({
    entities: todosReducer,
    filter: filterReducer,
});

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
            <button onClick={() => dispatch(fetchThunk())}>Fetch</button>
            <ul>
                {todos.map((todo: any) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default App;
