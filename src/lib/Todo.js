"use server";
import { Todo } from "@/models/schema";
import { db } from "@/db/database";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

/**
 *@param {any} state
 * @param {FormData} formData
 * @returns {String} Error message
 */
export async function addTodo(state, formData) {
    if (!formData) return "Form data is required";
    console.log("formData", formData);

    const title = formData.get("title");
    const titleRegex = /^[a-zA-Z0-9 ]+$/;

    if (!title) return "Title is required";

    if (!titleRegex.test(title))
        return "Title can only contain letters and numbers";

    await db.insert(Todo).values({ title: title });

    redirect("/");
}

/**
 * @returns {Array} Array of todos
 */
export async function getTodos() {
    const todos = await db.select().from(Todo);
    return todos;
}

/**
 * @param {Number} id
 * @returns {None}
 */
export async function deleteTodo(id) {
    await db.delete(Todo).where(eq(Todo.id, id));
}

/**
 * @param {Number} id
 * @param {Boolean} completed
 * @returns {None}
 */
export async function changeTodoStatus(id, completed) {
    await db.update(Todo).set({ completed: completed }).where(eq(Todo.id, id));
}
