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
                        {study.external && <a className="secondary-button" href={study.external} target="_blank" rel="noopener noreferrer">View repo</a>}
                    </div>
                </div>
                <aside className="case-meta-card">
                    <span>{study.year}</span>
                    <strong>{study.status}</strong>
                    <p>{study.note}</p>
                </aside>
            </section>

            <section className="case-two-up">
                <article className="note-card">
                    <p className="card-kicker">What it is</p>
                    <h2>{study.problem}</h2>
                </article>
                <article className="note-card">
                    <p className="card-kicker">What it shows</p>
                    <h2>{study.outcome}</h2>
                </article>
            </section>

            <section className="section-block">
                <div className="section-heading compact-heading">
                    <p className="eyebrow">Highlights</p>
                    <h2>Quick signals.</h2>
                </div>
                <div className="metric-grid">
                    {study.metrics.map((metric) => <span key={metric}>{metric}</span>)}
                </div>
            </section>

            {study.gallery.length > 0 && (
                <section className="section-block">
                    <div className="section-heading compact-heading">
                        <p className="eyebrow">Experiment gallery</p>
                        <h2>v1 experiments → recent outputs.</h2>
                        <p>Click any image to open the full-size experiment sheet.</p>
                    </div>
                    <div className="gallery-grid">
                        {study.gallery.map((image) => (
                            <figure className="gallery-card" key={image.src}>
                                <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${image.alt}`}>
                                    {image.version && <span className="version-badge">{image.version}</span>}
                                    <Image src={image.src} alt={image.alt} width={1100} height={720} className="gallery-image" />
                                </a>
                                <figcaption>{image.caption}</figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
            )}

            <section className="section-block split-section">
                <div>
                    <p className="eyebrow">Workflow</p>
                    <h2>Process.</h2>
                    <p>Short version of the workflow behind the outputs.</p>
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
