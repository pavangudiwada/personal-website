import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Pavan Gudiwada - Personal Website",
    description: "Personal website of Pavan Gudiwada",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="main">
                    {children}
                </main>
            </body>
        </html>
    );
} 