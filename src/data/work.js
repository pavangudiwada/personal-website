export const categories = [
    { id: 'all', label: 'All' },
    { id: 'dev-marketing', label: 'Dev Marketing' },
    { id: 'pmm', label: 'Product Marketing' },
    { id: 'oss', label: 'Open Source' },
    { id: 'ai-sre', label: 'AI SRE' },
    { id: 'agent-labs', label: 'Experiments' },
    { id: 'blogs', label: 'Writing' },
    { id: 'videos', label: 'Videos' },
    { id: 'talks', label: 'Talks' }
];

export const caseStudies = [
    {
        slug: 'design-agent-lab',
        title: 'Design Agent Lab',
        label: 'Experiment gallery',
        category: 'dev-marketing',
        year: '2026',
        status: 'active',
        summary: 'A simple gallery of developer-marketing design experiments for real devtool workflows.',
        problem: 'Early experiments explored how to turn a product workflow into a clearer marketing asset.',
        outcome: 'The gallery shows the visual progression: v1 sheets, stronger mid-runs, and recent outputs with better hierarchy and proof.',
        note: 'Experiment outputs.',
        href: '/work/design-agent-lab',
        external: 'https://github.com/pavangudiwada/design-agent-lab',
        metrics: ['v1 contact sheets', 'desktop + social variants', 'recent QA contact sheets'],
        process: [
            'Pick one real devtool workflow.',
            'Collect source screenshots, docs, or product context.',
            'Create website/social directions around the workflow.',
            'Review hierarchy, spacing, readability, and whether the asset makes sense quickly.'
        ],
        gallery: [
            { version: 'v1', src: '/images/case-studies/design-agent-lab/neon-contact-sheet.png', alt: 'Neon branching experiment contact sheet', caption: 'Neon branching workflow.' },
            { version: 'v1.5', src: '/images/case-studies/design-agent-lab/upstash-contact-sheet.png', alt: 'Upstash QStash schedules experiment contact sheet', caption: 'Upstash QStash schedules.' },
            { version: 'recent', src: '/images/case-studies/design-agent-lab/trigger-contact-sheet.png', alt: 'Trigger.dev realtime runs experiment contact sheet', caption: 'Trigger.dev realtime runs.' }
        ]
    },
    {
        slug: 'hermes-agent-workflows',
        title: 'Agent workflow experiments',
        label: 'Workflow experiments',
        category: 'agent-labs',
        year: '2026',
        status: 'active',
        summary: 'Experiments with agent-assisted research, planning, design review, and small builds.',
        problem: 'AI tools become more useful when they are tied to real research, source material, review loops, and shipping constraints.',
        outcome: 'The angle is simple: use agents to make better technical marketing work faster, then verify the output.',
        note: 'Workflow experiment.',
        href: '/work/hermes-agent-workflows',
        metrics: ['Research to brief', 'Build and review loops', 'Reusable workflows'],
        process: [
            'Start with a clear brief.',
            'Use references and source material before writing or designing.',
            'Build a small output.',
            'Review it like something someone can understand in 10 seconds.'
        ],
        gallery: []
    },
    {
        slug: 'ai-sre-watchlist',
        title: 'AI SRE Watchlist',
        label: 'Research engine',
        category: 'oss',
        year: '2026',
        status: 'active',
        summary: 'A practitioner-curated map of AI SRE tools across RCA, alert triage, incident response, infra automation, and on-call workflows.',
        problem: 'AI SRE is noisy. Teams need a map of what is actually shipping, what each tool claims, and where the trust barrier still exists.',
        outcome: 'The work acts as a research engine for posts, talks, website sections, and technical product marketing analysis.',
        note: 'Open-source research project.',
        href: '/work/ai-sre-watchlist',
        external: 'https://github.com/pavangudiwada/awesome-ai-sre',
        metrics: ['60+ tools tracked', 'RCA + incident response map', 'Practitioner positioning'],
        process: [
            'Track products and OSS tools shipping around AI SRE.',
            'Group them by workflow: triage, RCA, incidents, automation, cost, and knowledge.',
            'Turn patterns into talks, posts, and useful PMM analysis.'
        ],
        gallery: []
    }
];

export const archiveItems = [
    ...caseStudies,
    { title: 'Devtool product marketing teardown workflow', summary: 'A repeatable research to brief to asset loop for technical SaaS: mechanism, proof, workflow, limitation, and CTA.', category: 'dev-marketing', year: '2026', status: 'building', href: '/work/design-agent-lab' },
    { title: 'Managing Alerts at Scale: Practical Tips to Reduce Alert Fatigue', summary: 'Talk at CNCF Lucknow about managing Prometheus alerts at scale and reducing alert noise.', category: 'talks', year: '2025', status: 'published', href: 'https://x.com/cncglucknow/status/1927261542304686226' },
    { title: 'Building your DevOps co-pilot using HolmesGPT', summary: 'FSMK DevDays talk on building a practical DevOps co-pilot with open source AI.', category: 'talks', year: '2025', status: 'published', href: 'https://www.linkedin.com/posts/pavangudiwada_fsmkdevdays-freesoftware-opensource-activity-7285328874886901760-ZV9i' },
    { title: 'Open source AI agents', summary: 'CNCF Ahmedabad talk about open source AI agents for DevOps and infrastructure workflows.', category: 'talks', year: '2025', status: 'published', href: 'https://www.linkedin.com/posts/pavangudiwada_had-a-great-time-attending-and-speaking-at-activity-7276158792235409408-rtty' },
    { title: 'What does Prometheus scraping mean and how does it work?', summary: 'Short video explaining Prometheus scraping without overcomplicating the mental model.', category: 'videos', year: '2025', status: 'published', href: 'https://www.linkedin.com/posts/pavangudiwada_what-does-prometheus-scraping-mean-and-how-activity-7296555205838393344-EiQS' },
    { title: 'Learn how Prometheus works in 2 minutes', summary: 'Quick video guide to understand Prometheus fundamentals.', category: 'videos', year: '2025', status: 'published', href: 'https://www.linkedin.com/posts/pavangudiwada_learn-how-prometheus-works-in-2-minutes-activity-7294752532961050625-4PwK' },
    { title: 'AI Driven Developer Experience for Kubernetes', summary: 'Talk at Iview Labs about improving Kubernetes developer experience using AI.', category: 'talks', year: '2024', status: 'published', href: 'https://www.linkedin.com/posts/pavangudiwada_kubernetes-ai-developerexperience-activity-7239117047090036736-2kVT' },
    { title: 'HolmesGPT - The Open Source On-Call/DevOps Agent', summary: 'Collabnix Docker Meetup talk about HolmesGPT and open source DevOps automation.', category: 'oss', year: '2024', status: 'published', href: 'https://www.linkedin.com/posts/ajeetsraina_opensource-devops-kubernetes-activity-7229002694198239232-nQkx' },
    { title: 'Troubleshooting Prometheus Alerts Faster Using Open Source AI Agents', summary: 'CNCF Hyderabad talk about using AI to troubleshoot Prometheus alerts.', category: 'ai-sre', year: '2024', status: 'published', href: 'https://www.linkedin.com/posts/cncf-hyderabad_cncfhyderabad-techmeetup-community-activity-7222850817555324928-lhC9' },
    { title: 'Responding to Incidents Faster Using Open Source AI Agents', summary: 'Bangalore SRE Meetup talk about AI agents for faster incident response.', category: 'ai-sre', year: '2024', status: 'published', href: 'https://www.linkedin.com/posts/pavangudiwada_bangalore-sre-july-month-meetup-sat-jul-activity-7217009452099493888-tS4-' },
    { title: 'Why This Kubernetes Thing?', summary: 'No fluff, bite-sized newsletter about Kubernetes concepts with Natan Yellin.', category: 'blogs', year: '2024', status: 'published', href: 'https://whyk8s.substack.com' },
    { title: 'Kubernetes Guides', summary: 'One-page diagrams explaining Kubernetes concepts.', category: 'blogs', year: '2024', status: 'published', href: 'https://github.com/pavangudiwada/kubernetesguides' },
    { title: 'Pure GitOps: How to Create ArgoCD Applications without the UI', summary: 'Guide to managing ArgoCD applications using GitOps principles.', category: 'blogs', year: '2023', status: 'published', href: 'https://home.robusta.dev/blog/pure-gitops-how-to-create-argocd-applications-without-the-ui' },
    { title: '3 Steps To Minimize Alert Fatigue', summary: 'Practical guide to reduce alert noise and improve alert effectiveness in Prometheus.', category: 'blogs', year: '2024', status: 'published', href: 'https://home.robusta.dev/blog/3-steps-to-minimize-alert-fatigue' },
    { title: 'Prometheus On Kubernetes', summary: 'Guide to Prometheus components and kube-prometheus-stack.', category: 'blogs', year: '2024', status: 'published', href: 'https://home.robusta.dev/blog/prometheus-on-kubernetes' },
    { title: 'Prometheus in 5 minutes - KCD Pakistan 2023', summary: 'KCD Pakistan talk about Prometheus monitoring fundamentals.', category: 'talks', year: '2023', status: 'published', href: 'https://www.youtube.com/watch?v=I6C09vPBpiA' },
    { title: 'Hello DevOps Project', summary: 'Hands-on DevOps learning project: more doing, less reading.', category: 'blogs', year: '2023', status: 'published', href: 'https://github.com/robusta-dev/Hello-DevOps-Project' }
];
