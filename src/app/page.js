import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/pavangudiwada',
        icon: FaGithub
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@pavangudiwada_',
        icon: FaYoutube
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/pavangudiwada',
        icon: FaTwitter
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/pavangudiwada',
        icon: FaLinkedin
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
                        width={150}
                        height={150}
                        className="profile-image"
                        priority
                    />
                </div>
                <h1 className="home-title">Hey, I'm Pavan Gudiwada</h1>
                <p className="home-subtitle">
                    I love everything Tech, Open Source and DevRel
                </p>
                {/* <p className="home-subtitle">
                    FOSS, Open Source, DevOps, Python, Developer Advocacy, Linux, Blogging, Digital Privacy, Art
                </p> */}
                <div className="social-links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            title={link.name}
                        >
                            <link.icon className="social-icon" />
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