import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/work" className="nav-link">Work</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    );
} 