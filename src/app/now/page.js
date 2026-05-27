/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

const focus = [
    { title: 'Hermes content series', body: 'Turning the first week of Hermes usage into LinkedIn posts, videos, architecture explainers, and design case studies.' },
    { title: 'Design-agent workflow', body: 'Using Mobbin, Pencil, Refactoring UI rules, and critique loops to make useful PMM assets for real devtools.' },
    { title: 'AI SRE Watchlist', body: 'Keeping the research engine useful for practitioners while it supports website, newsletter, and content ideas.' },
    { title: 'Personal knowledge system', body: 'Skills, Obsidian, private repos, memory, and Kanban tasks. Useful context should survive a chat window.' }
];

const stack = ['Hermes', 'WhatsApp', 'Obsidian', 'GitHub', 'Mobbin', 'Pencil', 'Kanban', 'Mac sync'];

export default function NowPage() {
    return (
        <main className="site-shell page-stack">
            <section className="work-header">
                <p className="eyebrow">Now</p>
                <h1>Current focus</h1>
                <p>A lightweight snapshot of what I'm building and learning right now. Better than a static bio because the work keeps moving.</p>
            </section>

            <section className="proof-list">
                {focus.map((item, index) => (
                    <article className="proof-row" key={item.title}>
                        <span className="row-number">0{index + 1}</span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    </article>
                ))}
            </section>

            <section className="section-block split-section">
                <div>
                    <p className="eyebrow">Operating stack</p>
                    <h2>The site should show the work, not just describe it.</h2>
                    <p>These are the tools and workflows currently shaping the public work. Some are stable, some are messy experiments.</p>
                </div>
                <div className="tag-cloud">
                    {stack.map((item) => <span key={item}>{item}</span>)}
                </div>
            </section>

            <section className="note-card wide-card">
                <h3>Want to collaborate?</h3>
                <p>Best fit: devtool product storytelling, proof-led demos, technical content, AI SRE research, and practical agent workflows.</p>
                <Link href="/contact" className="primary-button">Contact</Link>
            </section>
        </main>
    );
}
