import React from 'react';

interface TodoItemProps {
    todo: any;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return <li>{todo.title}</li>;
};

export default TodoItem;
