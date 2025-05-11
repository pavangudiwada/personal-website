import './globals.css';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
    title: 'Pavan Gudiwada',
    description: 'Personal website of Pavan Gudiwada - Tech, Open Source and DevRel',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Navbar />
                {children}
                <Analytics />
            </body>
        </html>
    );
} 