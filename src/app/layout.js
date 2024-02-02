import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "To Do List",
};

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
