import React from "react";
import TodoItem from "@/components/TodoItem";
import { getTodos } from "@/lib/Todo";

export default async function Home() {
    const todos = await getTodos();
    return (
        <>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </>
    );
}
