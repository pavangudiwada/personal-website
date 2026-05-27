import './globals.css';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
    title: 'Pavan Gudiwada | Developer Marketing, Product Marketing, Open Source',
    description: 'Personal website of Pavan Gudiwada: developer marketing, product marketing for devtools, open source, AI SRE research, talks, writing, and videos.',
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
