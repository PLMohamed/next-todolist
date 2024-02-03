"use client";
import { changeTodoStatus, deleteTodo } from "@/lib/Todo";
import { useRouter } from "next/navigation";
import React from "react";

/**
 *
 * @param {number} id
 * @param {string} title
 * @param {boolean} completed
 * @returns
 */
export default function TodoItem({ id, title, completed }) {
    const router = useRouter();
    return (
        <div className="flex items-center p-4 border-b border-slate-700">
            <input
                type="checkbox"
                className="mr-4"
                id={id}
                defaultChecked={completed}
                onChange={async (e) => {
                    await changeTodoStatus(id, e.target.checked);
                    router.refresh();
                }}
            />
            <label
                htmlFor={id}
                className={`flex-1 cursor-pointer ms-2 text-sm font-medium ${
                    completed ? "line-through text-slate-700" : ""
                }`}
            >
                {title}
            </label>
            <button
                onClick={async () => {
                    await deleteTodo(id);
                    router.refresh();
                }}
                className="text-red-700"
            >
                Delete
            </button>
        </div>
    );
}
