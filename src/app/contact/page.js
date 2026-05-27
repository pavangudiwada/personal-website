'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const links = [
    { label: 'Website', url: 'https://pavangudiwada.dev' },
    { label: 'GitHub', url: 'https://github.com/pavangudiwada' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/pavangudiwada' },
    { label: 'X', url: 'https://twitter.com/pavangudiwada_' },
];

const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/pavangudiwada', label: 'GitHub' },
    { icon: FaXTwitter, url: 'https://twitter.com/pavangudiwada_', label: 'X' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/pavangudiwada', label: 'LinkedIn' },
    { icon: FaYoutube, url: 'https://youtube.com/@pavangudiwada_', label: 'YouTube' },
    { icon: FaEnvelope, url: 'mailto:pavangudiwada@pm.me', label: 'Email' },
];

export default function Contact() {
    return (
        <main className="contact-container">
            <div className="contact-card">
                <Image
                    src="/images/pavangudiwada_pfp.webp"
                    alt="Pavan Gudiwada"
                    className="profile-image contact-image"
                    width={120}
                    height={120}
                />
                <p className="eyebrow">Contact</p>
                <h1>Pavan Gudiwada</h1>
                <p>
                    Reach out for developer marketing, devtool product storytelling, AI SRE research, talks, or agent workflow experiments.
                </p>
                <div className="social-links contact-socials">
                    {socialLinks.map(({ icon: Icon, url, label }) => (
                        <a key={label} href={url} target="_blank" rel="noopener noreferrer" title={label} aria-label={label} className="social-link">
                            <Icon className="social-icon" />
                        </a>
                    ))}
                </div>
                <div className="link-stack">
                    {links.map(({ label, url }) => (
                        <a key={label} href={url} target="_blank" rel="noopener noreferrer">
                            {label}
                            <span>→</span>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}
