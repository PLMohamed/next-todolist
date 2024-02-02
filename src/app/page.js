import React from "react";
import { Todo } from "@/models/schema";
import { db } from "@/db/database";
import TodoItem from "@/components/TodoItem";

async function getTodos() {
    "use server";
    const todos = await db.select().from(Todo);
    return todos;
}

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
