import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/" className="nav-logo">Pavan Gudiwada</Link>
            <div className="nav-links">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/work" className="nav-link">Work</Link>
                <Link href="/now" className="nav-link">Now</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    );
}
