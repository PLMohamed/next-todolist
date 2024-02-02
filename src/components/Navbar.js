import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="p-4 pb-2 mb-4 bg-slate-900 text-slate-100 border-b border-slate-500 flex justify-between items-center text-lg">
            <Link href="/" className="cursor-pointer">
                Home
            </Link>
            <Link
                href="/new"
                className="cursor-pointer border px-5 py-2 border-slate-700 rounded-md hover:bg-slate-800 hover:border-slate-600 transition-colors duration-200 ease-in-out"
            >
                New
            </Link>
        </nav>
    );
}
