import Link from 'next/link';

const focus = [
    { title: 'Developer marketing', body: 'Demos, launches, teardown briefs, and technical content for devtools and infrastructure products.' },
    { title: 'Product marketing', body: 'Positioning and messaging work for technical teams, with proof objects instead of vague claims.' },
    { title: 'Open source', body: 'AI SRE, DevOps, Kubernetes, talks, guides, and community work.' },
    { title: 'Experiment gallery', body: 'Design and marketing experiments that show the actual output.' }
];

const stack = ['Developer marketing', 'Product marketing', 'Open source', 'DevTools', 'AI SRE', 'Kubernetes', 'Demos', 'Technical content'];

export default function NowPage() {
    return (
        <main className="site-shell page-stack">
            <section className="work-header">
                <p className="eyebrow">Now</p>
                <h1>Current focus</h1>
                <p>A lightweight snapshot of the areas I am focused on right now.</p>
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
                    <p>The site should make the work easy to understand without turning it into a brag page.</p>
                </div>
                <div className="tag-cloud">
                    {stack.map((item) => <span key={item}>{item}</span>)}
                </div>
            </section>

            <section className="note-card wide-card">
                <h3>Want to collaborate?</h3>
                <p>Best fit: developer marketing, product marketing for devtools, open-source storytelling, technical content, and AI SRE research.</p>
                <Link href="/contact" className="primary-button">Contact</Link>
            </section>
        </main>
    );
}
