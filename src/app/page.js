import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/pavangudiwada',
        icon: '🐙'
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@pavangudiwada_',
        icon: '📺'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/pavangudiwada',
        icon: '🐦'
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/pavangudiwada',
        icon: '💼'
    }
];

export default function Home() {
    return (
        <div className="home-container">
            <div className="profile-section">
                <div className="profile-image-container">
                    <Image
                        src="/profile.jpg"
                        alt="Pavan Gudiwada"
                        width={200}
                        height={200}
                        className="profile-image"
                        priority
                    />
                </div>
                <h1 className="home-title">Pavan Gudiwada</h1>
                <p className="home-subtitle">
                    Developer Advocate at Robusta.dev
                </p>
                <p className="home-subtitle">
                    FOSS, Open Source, DevOps, Python, Developer Advocacy, Linux, Blogging, Digital Privacy, Art
                </p>
                <div className="social-links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <span className="social-icon">{link.icon}</span>
                            <span className="social-name">{link.name}</span>
                        </a>
                    ))}
                </div>
                <div className="action-buttons">
                    <Link href="/contact" className="primary-button">
                        Contact Me
                    </Link>
                    <Link href="/work" className="secondary-button">
                        View My Work
                    </Link>
                </div>
            </div>
        </div>
    );
} 