import { db } from "@/db/database";
import { Todo } from "@/models/schema";
import { redirect } from "next/navigation";

async function addTodo(data) {
    "use server";
    const title = data.get("title");
    if (!title) return;

    await db.insert(Todo).values({ title: title });

    redirect("/");
}

export default function New() {
    return (
        <form
            action={addTodo}
            className="p-4 bg-slate-900 text-slate-100 border-b border-slate-500 flex flex-col gap-3 text-lg"
        >
            <label htmlFor="new-todo" className="cursor-pointer">
                New Todo
            </label>
            <input
                type="text"
                name="title"
                id="new-todo"
                className="border px-5 py-2 bg-slate-700 border-slate-700 rounded-md hover:bg-slate-800 hover:border-slate-600 transition-colors duration-200 ease-in-out"
            />
            <button className="border px-5 py-2 border-slate-700 rounded-md hover:bg-slate-800 hover:border-slate-600 transition-colors duration-200 ease-in-out">
                Add
            </button>
        </form>
    );
}
