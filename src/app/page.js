/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

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
        name: 'X',
        url: 'https://twitter.com/pavangudiwada_',
        icon: FaXTwitter
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/pavangudiwada',
        icon: FaLinkedin
    }
];

const focusAreas = [
    'Product marketing for devtools and technical SaaS',
    'AI SRE research, vendor tracking, and practical category analysis',
    'Hermes and agent experiments for content, GTM, and operator workflows'
];

const proofCards = [
    {
        label: 'Current work',
        title: 'Developer marketing and product storytelling',
        body: 'I help turn technical products into proof-led demos, content, positioning, and launch assets that developers can actually trust.'
    },
    {
        label: 'Research loop',
        title: 'AI SRE Watchlist',
        body: 'Tracking tools for RCA, incident response, Kubernetes alerts, on-call workflows, cost, and infrastructure automation.'
    },
    {
        label: 'Agent lab',
        title: 'Hermes-powered operating system',
        body: 'Using agents to research tools, create PMM assets, write briefs, run experiments, and keep useful context connected.'
    }
];

const featuredProjects = [
    {
        title: 'AI SRE Watchlist',
        description: 'A practical map of AI SRE products and OSS tools across RCA, alert triage, incident response, and infra automation.',
        href: 'https://github.com/pavangudiwada/awesome-ai-sre'
    },
    {
        title: 'Design Agent Lab',
        description: 'Experiments turning real devtool workflows into credible product marketing visuals, demos, critiques, and reusable agent skills.',
        href: 'https://github.com/pavangudiwada/design-agent-lab'
    },
    {
        title: 'HolmesGPT',
        description: 'Open source AI SRE work around Kubernetes alerts, investigations, correlations, and on-call troubleshooting.',
        href: 'https://github.com/pavangudiwada/holmesgpt'
    }
];

export default function Home() {
    return (
        <main className="site-shell">
            <section className="hero-section">
                <div className="hero-copy">
                    <p className="eyebrow">Product marketing · AI SRE · agent experiments</p>
                    <h1>Pavan Gudiwada</h1>
                    <p className="hero-lede">
                        I work at the intersection of developer marketing, AI SRE, and agentic workflows.
                        Current focus: helping technical products explain what they do with real proof, useful demos, and practitioner-level clarity.
                    </p>
                    <div className="focus-list" aria-label="Current focus areas">
                        {focusAreas.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                    <div className="hero-actions">
                        <Link href="/work" className="primary-button">
                            See work
                        </Link>
                        <Link href="/contact" className="secondary-button">
                            Contact
                        </Link>
                    </div>
                    <div className="social-links hero-socials">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title={link.name}
                                aria-label={link.name}
                            >
                                <link.icon className="social-icon" suppressHydrationWarning />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="hero-card" aria-label="Profile summary">
                    <div className="profile-image-container compact">
                        <Image
                            src="/images/pavangudiwada_pfp.webp"
                            alt="Pavan Gudiwada"
                            className="profile-image"
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                    <p className="card-kicker">Positioning</p>
                    <h2>Practitioner-builder for devtools GTM</h2>
                    <p>
                        PMM by output, engineer by taste. I care about code, workflows, screenshots, docs, demos, and the trust gap between marketing claims and production use.
                    </p>
                </div>
            </section>

            <section className="section-block">
                <div className="section-heading">
                    <p className="eyebrow">What this site should make obvious</p>
                    <h2>Useful proof before polished claims.</h2>
                </div>
                <div className="proof-grid">
                    {proofCards.map((card) => (
                        <article className="proof-card" key={card.title}>
                            <p className="card-kicker">{card.label}</p>
                            <h3>{card.title}</h3>
                            <p>{card.body}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section-block split-section">
                <div>
                    <p className="eyebrow">Content hooks</p>
                    <h2>Hermes series direction</h2>
                    <p>
                        The next content loop is simple: show how an agentic workspace helps a technical marketer research tools, inspect repos, create briefs, build demos, and keep a durable knowledge base.
                    </p>
                    <p>
                        Good hooks: "I used Hermes to audit my own website", "AI agents for developer marketing", "What AI SRE tools actually prove", and "How I turn devtool docs into demos".
                    </p>
                </div>
                <div className="note-card">
                    <h3>Website IA recommendation</h3>
                    <ol>
                        <li>Home: current positioning and proof loops.</li>
                        <li>Work: PMM, AI SRE, agent labs, talks, writing, videos.</li>
                        <li>Notes or Posts: short proof-led breakdowns from Hermes experiments.</li>
                        <li>Contact: simple collaboration routes.</li>
                    </ol>
                </div>
            </section>

            <section className="section-block">
                <div className="section-heading">
                    <p className="eyebrow">Selected proof</p>
                    <h2>Projects to build around now</h2>
                </div>
                <div className="project-list">
                    {featuredProjects.map((project) => (
                        <a className="project-row" href={project.href} key={project.title} target="_blank" rel="noopener noreferrer">
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <span>Open →</span>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
