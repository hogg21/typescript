import React from 'react'
import { ITodo } from './types/types';

export interface TodoItemProps {
    todo: ITodo
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    return (
        <>
            <input type="checkbox" checked={todo.completed}/>
            <div>{todo.id}.{todo.title}</div>
        </>
    );
}
export default TodoItem;