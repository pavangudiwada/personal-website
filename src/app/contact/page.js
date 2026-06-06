import Image from 'next/image';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const routes = [
    { label: 'Developer marketing', detail: 'Demos, launch assets, docs-adjacent content, teardown-style stories.' },
    { label: 'Product marketing', detail: 'Positioning, messaging, proof-led assets, technical launch narratives.' },
    { label: 'Open source and AI SRE', detail: 'OSS storytelling, Kubernetes, DevOps, Prometheus, practitioner research.' }
];

const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/pavangudiwada', label: 'GitHub' },
    { icon: FaXTwitter, url: 'https://twitter.com/pavangudiwada_', label: 'X' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/pavangudiwada', label: 'LinkedIn' },
    { icon: FaYoutube, url: 'https://youtube.com/@pavangudiwada_', label: 'YouTube' },
    { icon: FaEnvelope, url: 'mailto:pavangudiwada@pm.me', label: 'Email' }
];

export default function Contact() {
    return (
        <main className="contact-container">
            <section className="contact-card">
                <Image src="/images/pavangudiwada_pfp.webp" alt="Pavan Gudiwada" className="avatar" width={112} height={112} />
                <p className="eyebrow">Contact</p>
                <h1>Work with me</h1>
                <p>Reach out if you need developer marketing, product marketing for devtools, open-source storytelling, AI SRE research, or technical content.</p>
                <div className="social-links contact-socials">
                    {socialLinks.map(({ icon: Icon, url, label }) => (
                        <a key={label} href={url} target="_blank" rel="noopener noreferrer" title={label} aria-label={label}>
                            <Icon />
                        </a>
                    ))}
                </div>
            </section>

            <section className="route-list">
                {routes.map((route) => (
                    <article className="proof-card" key={route.label}>
                        <h3>{route.label}</h3>
                        <p>{route.detail}</p>
                    </article>
                ))}
            </section>
        </main>
    );
}
