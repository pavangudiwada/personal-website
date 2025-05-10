import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'Pavan Gudiwada',
    description: 'Developer Advocate at Robusta.dev',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
} 