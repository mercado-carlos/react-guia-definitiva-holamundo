import { combineReducers } from 'redux';

import {
    makeCrudReducer,
    makeFetchingReducer,
    makeSetReducer,
    reduceReducers,
} from './utils';

export const setPending = () => {
    return {
        type: 'todos/pending',
    };
};

export const setFulfilled = (payload: any) => ({
    type: 'todos/fulfilled',
    payload,
});

export const setError = (e: any) => ({ type: 'todos/error', error: e.message });

export const setComplete = (payload: any) => ({
    type: 'todo/complete',
    payload,
});

export const setFilter = (payload: any) => ({ type: 'filter/set', payload });

export const fetchThunk = () => async (dispatch: any) => {
    dispatch(setPending());

    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        );
        const data = await response.json();
        const todos = data.slice(0, 10);

        dispatch(setFulfilled(todos));
    } catch (e: any) {
        dispatch(setError(e));
    }
};

export const filterReducer = makeSetReducer(['filter/set']);

export const fetchingReducer = makeFetchingReducer([
    'tods/pending',
    'todos/fulfilled',
    'todos/rejected',
]);

const fulfilledReducer = makeSetReducer(['todos/fulfilled']);
const crudReducer = makeCrudReducer(['todo/add', 'todo/complete']);

export const todosReducer = reduceReducers(crudReducer, fulfilledReducer);

export const reducer = combineReducers({
    todos: combineReducers({
        entities: todosReducer,
        status: fetchingReducer,
    }),
    filter: filterReducer,
});

export const selectTodos = (state: any) => {
    const {
        todos: { entities },
        filter,
    } = state;

    if (filter === 'complete') {
        return entities.filter((todo: any) => todo.completed);
    }

    if (filter === 'incomplete') {
        return entities.filter((todo: any) => !todo.completed);
    }

    return entities;
};

export const selectStatus = (state: any) => state.todos.status;
