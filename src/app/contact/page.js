'use client';

import { FaGithub, FaXTwitter, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa6';

const links = [
    { label: 'Personal Website', url: 'https://pavangudiwada.com' },
    { label: 'Twitter (X)', url: 'https://twitter.com/pavangudiwada_' },
    { label: 'Blog', url: 'https://pavangudiwada.hashnode.dev' },
];

const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/pavangudiwada', label: 'GitHub' },
    { icon: FaXTwitter, url: 'https://twitter.com/pavangudiwada_', label: 'Twitter (X)' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/pavangudiwada', label: 'LinkedIn' },
    { icon: FaYoutube, url: 'https://youtube.com/@pavangudiwada_', label: 'YouTube' },
    { icon: FaEnvelope, url: 'mailto:pavangudiwada@pm.me', label: 'Email' },
];

export default function Contact() {
    return (
        <div className="contact-container" style={{ maxWidth: 600, margin: '0 auto', padding: '2rem 1rem', textAlign: 'center', marginTop: '70px' }}>
            <img
                src="/images/pavangudiwada_profilepic.jpg"
                alt="Pavan Gudiwada"
                className="profile-image"
                style={{ width: 120, height: 120, borderRadius: '50%', margin: '0 auto 1rem', objectFit: 'cover' }}
            />
            <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 0 }}>
                Pavan Gudiwada <span style={{ color: '#0099ff', fontSize: '1.2rem' }}>✔</span>
            </h2>
            <div style={{ color: '#222', margin: '0.5rem 0 1.5rem', fontSize: '1.1rem' }}>
                Tech, Open Source, and DevRel
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                {socialLinks.map(({ icon: Icon, url, label }) => (
                    <a key={label} href={url} target="_blank" rel="noopener noreferrer" title={label} style={{ color: '#222', fontSize: '2rem' }}>
                        <Icon />
                    </a>
                ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {links.map(({ label, url }) => (
                    <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            border: '2px solid #222',
                            borderRadius: '16px',
                            padding: '1rem',
                            fontSize: '1.15rem',
                            color: '#222',
                            textDecoration: 'none',
                            fontWeight: 500,
                            transition: 'background 0.2s, color 0.2s',
                        }}
                        onMouseOver={e => { e.currentTarget.style.background = '#f5f5f5'; }}
                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; }}
                    >
                        {label}
                    </a>
                ))}
            </div>
        </div>
    );
}