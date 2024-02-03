"use client";
import React from "react";
import { addTodo } from "@/lib/Todo";
import { useFormState, useFormStatus } from "react-dom";

export default function New() {
    const [errorMessage, dispatch] = useFormState(addTodo, undefined);
    const { pending } = useFormStatus();

    return (
        <form
            action={dispatch}
            className="p-4 bg-slate-900 text-slate-100 border-b border-slate-500 flex flex-col gap-3 text-lg"
        >
            <label htmlFor="new-todo" className="cursor-pointer">
                New Todo
            </label>
            <input
                type="text"
                name="title"
                id="new-todo"
                className={`border px-5 py-2 bg-slate-700 border-slate-700 rounded-md 
                hover:bg-slate-800 hover:border-slate-600 transition-colors duration-200 ease-in-out outline-none 
                ${errorMessage ? "border-red-900 border-2" : ""}`}
            />
            {errorMessage && (
                <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
            <button
                aria-disabled={pending}
                type="submit"
                className="border px-5 py-2 border-slate-700 rounded-md hover:bg-slate-800 hover:border-slate-600 transition-colors duration-200 ease-in-out"
            >
                Add
            </button>
        </form>
    );
}
