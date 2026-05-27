'use client';
import { useState } from 'react';
import { FaMicrophone, FaNewspaper, FaLightbulb, FaYoutube, FaCodeBranch, FaChartLine, FaRobot } from 'react-icons/fa';

const categories = [
    { id: 'all', label: 'All', icon: FaLightbulb },
    { id: 'pmm', label: 'PMM', icon: FaChartLine },
    { id: 'ai-sre', label: 'AI SRE', icon: FaRobot },
    { id: 'agent-labs', label: 'Agent Labs', icon: FaCodeBranch },
    { id: 'blogs', label: 'Blogs', icon: FaNewspaper },
    { id: 'videos', label: 'Videos', icon: FaYoutube },
    { id: 'talks', label: 'Talks', icon: FaMicrophone },
];

const workItems = [
    {
        title: 'Design Agent Lab',
        description: 'A running lab for turning real devtool workflows into proof-led product marketing assets, critiques, and reusable agent skills.',
        category: 'pmm',
        year: '2026',
        link: 'https://github.com/pavangudiwada/design-agent-lab'
    },
    {
        title: 'AI SRE Watchlist',
        description: 'A practitioner-curated map of AI SRE tools across RCA, alert triage, incident response, infra automation, and on-call workflows.',
        category: 'ai-sre',
        year: '2026',
        link: 'https://github.com/pavangudiwada/awesome-ai-sre'
    },
    {
        title: 'Hermes agent operating system experiments',
        description: 'Using agents for research, website audits, devtool PMM briefs, content hooks, design QA, and personal knowledge workflows.',
        category: 'agent-labs',
        year: '2026',
        link: 'https://github.com/pavangudiwada/design-agent-lab'
    },
    {
        title: 'Devtool product marketing teardown workflow',
        description: 'A repeatable research to brief to asset loop for technical SaaS: mechanism, proof, workflow, limitation, and CTA.',
        category: 'pmm',
        year: '2026',
        link: 'https://github.com/pavangudiwada/design-agent-lab'
    },
    {
        title: 'Managing Alerts at Scale: Practical Tips to Reduce Alert Fatigue',
        description: 'Talk at CNCF Lucknow about managing Prometheus alerts at scale and reducing alert noise.',
        category: 'talks',
        year: '2025',
        link: 'https://x.com/cncglucknow/status/1927261542304686226'
    },
    {
        title: 'Building your DevOps co-pilot using HolmesGPT',
        description: 'FSMK DevDays talk on building a practical DevOps co-pilot with open source AI.',
        category: 'talks',
        year: '2025',
        link: 'https://www.linkedin.com/posts/pavangudiwada_fsmkdevdays-freesoftware-opensource-activity-7285328874886901760-ZV9i'
    },
    {
        title: 'Open source AI agents',
        description: 'CNCF Ahmedabad talk about open source AI agents for DevOps and infrastructure workflows.',
        category: 'talks',
        year: '2025',
        link: 'https://www.linkedin.com/posts/pavangudiwada_had-a-great-time-attending-and-speaking-at-activity-7276158792235409408-rtty'
    },
    {
        title: 'What does Prometheus scraping mean and how does it work?',
        description: 'Short video explaining Prometheus scraping without overcomplicating the mental model.',
        category: 'videos',
        year: '2025',
        link: 'https://www.linkedin.com/posts/pavangudiwada_what-does-prometheus-scraping-mean-and-how-activity-7296555205838393344-EiQS'
    },
    {
        title: 'Learn how Prometheus works in 2 minutes',
        description: 'Quick video guide to understand Prometheus fundamentals.',
        category: 'videos',
        year: '2025',
        link: 'https://www.linkedin.com/posts/pavangudiwada_learn-how-prometheus-works-in-2-minutes-activity-7294752532961050625-4PwK'
    },
    {
        title: 'AI Driven Developer Experience for Kubernetes',
        description: 'Talk at Iview Labs about improving Kubernetes developer experience using AI.',
        category: 'talks',
        year: '2024',
        link: 'https://www.linkedin.com/posts/pavangudiwada_kubernetes-ai-developerexperience-activity-7239117047090036736-2kVT'
    },
    {
        title: 'HolmesGPT - The Open Source On-Call/DevOps Agent',
        description: 'Collabnix Docker Meetup talk about HolmesGPT and open source DevOps automation.',
        category: 'ai-sre',
        year: '2024',
        link: 'https://www.linkedin.com/posts/ajeetsraina_opensource-devops-kubernetes-activity-7229002694198239232-nQkx'
    },
    {
        title: 'Troubleshooting Prometheus Alerts Faster Using Open Source AI Agents',
        description: 'CNCF Hyderabad talk about using AI to troubleshoot Prometheus alerts.',
        category: 'ai-sre',
        year: '2024',
        link: 'https://www.linkedin.com/posts/cncf-hyderabad_cncfhyderabad-techmeetup-community-activity-7222850817555324928-lhC9'
    },
    {
        title: 'Responding to Incidents Faster Using Open Source AI Agents',
        description: 'Bangalore SRE Meetup talk about AI agents for faster incident response.',
        category: 'ai-sre',
        year: '2024',
        link: 'https://www.linkedin.com/posts/pavangudiwada_bangalore-sre-july-month-meetup-sat-jul-activity-7217009452099493888-tS4-'
    },
    {
        title: 'Why This Kubernetes Thing?',
        description: 'No fluff, bite-sized newsletter about Kubernetes concepts with Natan Yellin.',
        category: 'blogs',
        year: '2024',
        link: 'https://whyk8s.substack.com'
    },
    {
        title: 'Kubernetes Guides',
        description: 'One-page diagrams explaining Kubernetes concepts.',
        category: 'blogs',
        year: '2024',
        link: 'https://github.com/pavangudiwada/kubernetesguides'
    },
    {
        title: 'Pure GitOps: How to Create ArgoCD Applications without the UI',
        description: 'Guide to managing ArgoCD applications using GitOps principles.',
        category: 'blogs',
        year: '2023',
        link: 'https://home.robusta.dev/blog/pure-gitops-how-to-create-argocd-applications-without-the-ui'
    },
    {
        title: '3 Steps To Minimize Alert Fatigue',
        description: 'Practical guide to reduce alert noise and improve alert effectiveness in Prometheus.',
        category: 'blogs',
        year: '2024',
        link: 'https://home.robusta.dev/blog/3-steps-to-minimize-alert-fatigue'
    },
    {
        title: 'Prometheus On Kubernetes',
        description: 'Guide to Prometheus components and kube-prometheus-stack.',
        category: 'blogs',
        year: '2024',
        link: 'https://home.robusta.dev/blog/prometheus-on-kubernetes'
    },
    {
        title: 'Prometheus in 5 minutes - KCD Pakistan 2023',
        description: 'KCD Pakistan talk about Prometheus monitoring fundamentals.',
        category: 'talks',
        year: '2023',
        link: 'https://www.youtube.com/watch?v=I6C09vPBpiA'
    },
    {
        title: 'Hello DevOps Project',
        description: 'Hands-on DevOps learning project: more doing, less reading.',
        category: 'blogs',
        year: '2023',
        link: 'https://github.com/robusta-dev/Hello-DevOps-Project'
    }
];

function WorkCard({ item }) {
    return (
        <a href={item.link} className="work-card" target="_blank" rel="noopener noreferrer">
            <div className="work-card-content">
                <div className="work-card-header">
                    <h3>{item.title}</h3>
                    <span className="work-year">{item.year}</span>
                </div>
                <p>{item.description}</p>
                <span className="work-category">{categories.find((category) => category.id === item.category)?.label}</span>
            </div>
        </a>
    );
}

export default function Work() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredWork = workItems.filter(item =>
        activeCategory === 'all' || item.category === activeCategory
    );

    const workByYear = filteredWork.reduce((acc, item) => {
        if (!acc[item.year]) {
            acc[item.year] = [];
        }
        acc[item.year].push(item);
        return acc;
    }, {});

    const sortedYears = Object.keys(workByYear).sort((a, b) => b - a);

    return (
        <main className="work-container">
            <div className="work-header">
                <p className="eyebrow">Portfolio</p>
                <h1>Work</h1>
                <p>
                    Product marketing, AI SRE, agent experiments, writing, videos, and talks. The thread is simple: explain technical work with proof.
                </p>
            </div>

            <div className="categories-tabs">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                        type="button"
                    >
                        <category.icon className="category-icon" />
                        <span>{category.label}</span>
                    </button>
                ))}
            </div>

            <div className="work-content">
                {sortedYears.map(year => (
                    <div key={year} className="year-section">
                        <h2 className="year-header">{year}</h2>
                        <div className="work-grid">
                            {workByYear[year].map((item) => (
                                <WorkCard key={`${item.title}-${item.year}`} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
