import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { caseStudies } from '../../../data/work';

export function generateStaticParams() {
    return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }) {
    const study = caseStudies.find((item) => item.slug === params.slug);
    if (!study) return {};
    return {
        title: `${study.title} | Pavan Gudiwada`,
        description: study.summary
    };
}

export default function WorkDetail({ params }) {
    const study = caseStudies.find((item) => item.slug === params.slug);
    if (!study) notFound();

    return (
        <main className="site-shell case-study-shell">
            <Link href="/work" className="back-link">← Work archive</Link>

            <section className="case-hero">
                <div>
                    <p className="eyebrow">{study.label}</p>
                    <h1>{study.title}</h1>
                    <p className="hero-lede">{study.summary}</p>
                    <div className="hero-actions">
                        {study.external && <a className="secondary-button" href={study.external} target="_blank" rel="noopener noreferrer">Public repo</a>}
                    </div>
                </div>
                <aside className="case-meta-card">
                    <span>{study.year}</span>
                    <strong>{study.status}</strong>
                    <p>{study.safeNote}</p>
                </aside>
            </section>

            <section className="case-two-up">
                <article className="note-card">
                    <p className="card-kicker">Why this exists</p>
                    <h2>{study.problem}</h2>
                </article>
                <article className="note-card">
                    <p className="card-kicker">What changed</p>
                    <h2>{study.outcome}</h2>
                </article>
            </section>

            <section className="section-block">
                <div className="section-heading compact-heading">
                    <p className="eyebrow">Receipts</p>
                    <h2>Useful signals without leaking private work.</h2>
                </div>
                <div className="metric-grid">
                    {study.metrics.map((metric) => <span key={metric}>{metric}</span>)}
                </div>
            </section>

            {study.gallery.length > 0 && (
                <section className="section-block">
                    <div className="section-heading compact-heading">
                        <p className="eyebrow">Experiment gallery</p>
                        <h2>Before, middle, recent.</h2>
                        <p>These are sanitized contact sheets from public-facing devtool PMM experiments. They show the output shape, not private prompts or internal files.</p>
                    </div>
                    <div className="gallery-grid">
                        {study.gallery.map((image) => (
                            <figure className="gallery-card" key={image.src}>
                                <Image src={image.src} alt={image.alt} width={1100} height={720} className="gallery-image" />
                                <figcaption>{image.caption}</figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
            )}

            <section className="section-block split-section">
                <div>
                    <p className="eyebrow">Workflow</p>
                    <h2>How the work actually happens.</h2>
                    <p>Simple public explanation. Enough context for someone to understand the project without opening a private repo.</p>
                </div>
                <div className="proof-list">
                    {study.process.map((step, index) => (
                        <article className="proof-row compact-row" key={step}>
                            <span className="row-number">0{index + 1}</span>
                            <p>{step}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
