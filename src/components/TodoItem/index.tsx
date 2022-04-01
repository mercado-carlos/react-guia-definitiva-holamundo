import React from 'react';
import { useDispatch } from 'react-redux';

interface TodoItemProps {
    todo: any;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => dispatch({ type: 'todo/complete', payload: todo })}
        >
            {todo.title}
        </li>
    );
};

export default TodoItem;
