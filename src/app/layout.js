import './globals.css';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
    title: 'Pavan Gudiwada | Developer Marketing, AI SRE, Agent Experiments',
    description: 'Personal website of Pavan Gudiwada: product marketing for devtools, AI SRE research, Hermes agent experiments, talks, writing, and videos.',
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
