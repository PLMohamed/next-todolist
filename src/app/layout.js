import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "To Do List",
    description: "A simple to do list app",
};

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {React.ReactNode}
 */
export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <body
                    className={`${inter.className} bg-slate-900 text-slate-100 `}
                >
                    <Navbar />
                    {children}
                </body>
            </html>
        </>
    );
}
