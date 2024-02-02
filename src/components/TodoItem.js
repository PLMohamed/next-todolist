import { db } from "@/db/database";
import { Todo } from "@/models/schema";
import { eq } from "drizzle-orm";

async function deleteTodo(id) {
    "use server";
    await db.delete(Todo).where(eq(Todo.id, id));
}

export default function TodoItem({ id, title, completed }) {
    return (
        <div className="flex items-center p-4 border-b border-slate-700">
            <input
                type="checkbox"
                className="mr-4 "
                id={id}
                defaultChecked={completed}
            />
            <label
                htmlFor={id}
                className="flex-1 cursor-pointer ms-2 text-sm font-medium "
            >
                {title}
            </label>
            <button className="text-red-700">Delete</button>
        </div>
    );
}
