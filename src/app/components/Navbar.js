import Link from 'next/link';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link href="/" className="nav-logo">
                    PG
                </Link>
                <div className="nav-links">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="nav-link"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
} 