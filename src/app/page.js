import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiAnthropic, SiClaude, SiGithub, SiGooglechrome, SiNextdotjs, SiNodedotjs, SiNotion, SiObsidian, SiOpenai, SiReact, SiTypescript, SiVercel, SiYoutube } from 'react-icons/si';
import { caseStudies } from '../data/work';

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

const toolGroups = [
    {
        title: 'Agent workbench',
        tools: [
            { name: 'Claude', icon: SiClaude },
            { name: 'OpenAI / ChatGPT / Codex', icon: SiOpenai },
            { name: 'Anthropic', icon: SiAnthropic },
            { name: 'GitHub', icon: SiGithub }
        ]
    },
    {
        title: 'Knowledge and research',
        tools: [
            { name: 'Obsidian', icon: SiObsidian },
            { name: 'Notion', icon: SiNotion },
            { name: 'YouTube', icon: SiYoutube },
            { name: 'Chrome', icon: SiGooglechrome }
        ]
    },
    {
        title: 'Website and automation',
        tools: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'React', icon: SiReact },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Vercel', icon: SiVercel }
        ]
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
                    <h2>Click into the context, not just the repo.</h2>
                    <p>Some projects are private or experimental, so these pages explain what the project is, what changed, and what can be safely shown.</p>
                </div>
                <div className="project-list editorial-list">
                    {caseStudies.map((project, index) => (
                        <Link className="project-row" href={project.href} key={project.title}>
                            <span className="row-number">0{index + 1}</span>
                            <div>
                                <p className="card-kicker">{project.label}</p>
                                <h3>{project.title}</h3>
                                <p>{project.summary}</p>
                            </div>
                            <span className="open-arrow">Open →</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section-block tool-section">
                <div className="section-heading compact-heading">
                    <p className="eyebrow">Tool stack</p>
                    <h2>The tools behind the work.</h2>
                    <p>Grouped by how they show up in the workflow. Logos first, names available for accessibility and hover.</p>
                </div>
                <div className="tool-groups">
                    {toolGroups.map((group) => (
                        <article className="tool-group" key={group.title}>
                            <h3>{group.title}</h3>
                            <div className="logo-grid">
                                {group.tools.map((tool) => (
                                    <span className="logo-tile" key={tool.name} title={tool.name} aria-label={tool.name}>
                                        <tool.icon suppressHydrationWarning />
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
