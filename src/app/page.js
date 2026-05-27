import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/pavangudiwada', icon: FaGithub },
    { name: 'YouTube', url: 'https://youtube.com/@pavangudiwada_', icon: FaYoutube },
    { name: 'X', url: 'https://twitter.com/pavangudiwada_', icon: FaXTwitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/pavangudiwada', icon: FaLinkedin }
];

const proofLoops = [
    {
        number: '01',
        title: 'Devtool PMM',
        body: 'I turn technical products into proof-led positioning, demos, launch assets, and useful content.',
        meta: 'Technical PMM · devtools · demos'
    },
    {
        number: '02',
        title: 'AI SRE Watchlist',
        body: 'Tracking what is shipping across RCA, incident response, alert triage, and autonomous reliability tools.',
        meta: '60+ tools · research · analysis'
    },
    {
        number: '03',
        title: 'Agent experiments',
        body: 'Building a personal operating layer with Hermes, Obsidian, skills, MCP tools, and design-agent workflows.',
        meta: 'Hermes · Mobbin · Pencil · Obsidian'
    }
];

const featured = [
    {
        title: 'AI SRE Watchlist',
        label: 'Research engine',
        href: 'https://github.com/pavangudiwada/awesome-ai-sre',
        body: 'A practical map of AI SRE products and OSS tools across RCA, alert triage, incident response, infra automation, and cost.'
    },
    {
        title: 'Design Agent Lab',
        label: 'PMM lab',
        href: 'https://github.com/pavangudiwada/design-agent-lab',
        body: 'Experiments that turn real devtool workflows into screenshots, critiques, demo concepts, thumbnails, and reusable agent skills.'
    },
    {
        title: 'Hermes setup',
        label: 'Personal OS',
        href: '/now',
        body: 'A WhatsApp-first agent workspace connected to memory, skills, Obsidian, GitHub, local machines, and project queues.'
    }
];

export default function Home() {
    return (
        <main className="site-shell">
            <section className="profile-hero">
                <div className="hero-left">
                    <p className="eyebrow">Product marketing · AI SRE · agent workflows</p>
                    <h1>Pavan Gudiwada</h1>
                    <p className="hero-lede">
                        I work on developer marketing, AI SRE research, and agent-assisted workflows. The common thread is simple: explain technical products with real proof, useful demos, and practitioner-level clarity.
                    </p>
                    <div className="hero-actions">
                        <Link href="/work" className="primary-button">Browse work</Link>
                        <Link href="/now" className="secondary-button">Current focus</Link>
                    </div>
                </div>
                <aside className="identity-card" aria-label="Profile summary">
                    <Image
                        src="/images/pavangudiwada_pfp.webp"
                        alt="Pavan Gudiwada"
                        width={112}
                        height={112}
                        className="avatar"
                        priority
                    />
                    <div>
                        <p className="card-kicker">Available for</p>
                        <h2>Devtool product storytelling</h2>
                        <p>Positioning, proof-led demos, launch narratives, AI SRE research, and agent workflow experiments.</p>
                    </div>
                    <div className="social-links">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} title={link.name}>
                                <link.icon suppressHydrationWarning />
                            </a>
                        ))}
                    </div>
                </aside>
            </section>

            <section className="section-block">
                <div className="section-heading compact-heading">
                    <p className="eyebrow">Current proof loops</p>
                    <h2>Not a portfolio grid. A working system.</h2>
                </div>
                <div className="proof-list">
                    {proofLoops.map((loop) => (
                        <article className="proof-row" key={loop.title}>
                            <span className="row-number">{loop.number}</span>
                            <div>
                                <h3>{loop.title}</h3>
                                <p>{loop.body}</p>
                            </div>
                            <span className="row-meta">{loop.meta}</span>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section-block split-section">
                <div>
                    <p className="eyebrow">How I work</p>
                    <h2>Research → brief → proof → asset.</h2>
                    <p>
                        I like marketing that shows the mechanism. Screenshots, workflows, docs, logs, architecture, limitations, and the actual reason a developer should care.
                    </p>
                </div>
                <div className="note-card">
                    <h3>Ways I can help</h3>
                    <ul>
                        <li>Turn devtool workflows into clearer demos and launch narratives.</li>
                        <li>Map AI SRE products into useful practitioner analysis.</li>
                        <li>Build agent-assisted PMM workflows that leave receipts.</li>
                        <li>Explain complex Kubernetes and SRE topics without fluff.</li>
                    </ul>
                </div>
            </section>

            <section className="section-block">
                <div className="section-heading compact-heading">
                    <p className="eyebrow">Selected work</p>
                    <h2>Projects to build around now</h2>
                </div>
                <div className="project-list editorial-list">
                    {featured.map((project, index) => (
                        <a className="project-row" href={project.href} key={project.title} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                            <span className="row-number">0{index + 1}</span>
                            <div>
                                <p className="card-kicker">{project.label}</p>
                                <h3>{project.title}</h3>
                                <p>{project.body}</p>
                            </div>
                            <span className="open-arrow">Open →</span>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
