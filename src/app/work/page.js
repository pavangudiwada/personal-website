'use client';
import { useState } from 'react';
import { FaMicrophone, FaNewspaper, FaLightbulb, FaYoutube } from 'react-icons/fa';

const categories = [
    { id: 'all', label: 'All', icon: FaLightbulb },
    { id: 'blogs', label: 'Blogs', icon: FaNewspaper },
    { id: 'videos', label: 'Videos', icon: FaYoutube },
    { id: 'talks', label: 'Talks', icon: FaMicrophone },
    { id: 'others', label: 'Others', icon: FaNewspaper },
];

const workItems = [
    // Talks
    {
        title: "Managing Alerts at Scale: Practical Tips to Reduce Alert Fatigue",
        description: "Talk at CNCF Lucknow meetup about managing Prometheus alerts at scale",
        category: "talks",
        year: "2025",
        link: "https://x.com/cncglucknow/status/1927261542304686226"
    },
    {
        title: "𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝘆𝗼𝘂𝗿 𝗗𝗲𝘃𝗢𝗽𝘀 𝗖𝗼-𝗣𝗶𝗹𝗼𝘁 𝘂𝘀𝗶𝗻𝗴 𝗛𝗼𝗹𝗺𝗲𝘀 𝗚𝗣𝗧",
        description: "Speaking at Free Software Movement Karnataka (FSMK) DevDays about building DevOps co-pilot with AI",
        category: "talks",
        year: "2025",
        link: "https://www.linkedin.com/posts/pavangudiwada_fsmkdevdays-freesoftware-opensource-activity-7285328874886901760-ZV9i"
    },
    {
        title: "OpenSource AI agents",
        description: "Talk at CNCF Ahmedabad meetup about open source AI agents for DevOps",
        category: "talks",
        year: "2025",
        link: "https://www.linkedin.com/posts/pavangudiwada_had-a-great-time-attending-and-speaking-at-activity-7276158792235409408-rtty"
    },
    {
        title: "AI Driven Developer Experience for Kubernetes",
        description: "Talk at Iview Labs about improving Kubernetes developer experience using AI",
        category: "talks",
        year: "2024",
        link: "https://www.linkedin.com/posts/pavangudiwada_kubernetes-ai-developerexperience-activity-7239117047090036736-2kVT"
    },
    {
        title: "HolmesGPT - The Open Source On-Call/DevOps Agent",
        description: "Speaking at Collabnix Docker Meetup about HolmesGPT and open source DevOps automation",
        category: "talks",
        year: "2024",
        link: "https://www.linkedin.com/posts/ajeetsraina_opensource-devops-kubernetes-activity-7229002694198239232-nQkx"
    },
    {
        title: "Troubleshooting Prometheus Alerts Faster Using Open Source AI Agents",
        description: "Talk at CNCF Hyderabad meetup about using AI to troubleshoot Prometheus alerts",
        category: "talks",
        year: "2024",
        link: "https://www.linkedin.com/posts/cncf-hyderabad_cncfhyderabad-techmeetup-community-activity-7222850817555324928-lhC9"
    },
    {
        title: "Responding to Incidents Faster Using Open Source AI Agents",
        description: "Talk at Bangalore SRE Meetup about using AI agents for faster incident response",
        category: "talks",
        year: "2024",
        link: "https://www.linkedin.com/posts/pavangudiwada_bangalore-sre-july-month-meetup-sat-jul-activity-7217009452099493888-tS4-"
    },
    {
        title: "Prometheus in 5 minutes - KCD Pakistan 2023",
        description: "Talk at KCD Pakistan about Prometheus monitoring fundamentals",
        category: "talks",
        year: "2023",
        link: "https://www.youtube.com/watch?v=I6C09vPBpiA"
    },
    {
        title: "Kubernetes-as-a-Service - Ortelius Summit 2022",
        description: "Talk at Ortelius Summit about Kubernetes-as-a-Service benefits and considerations",
        category: "talks",
        year: "2022",
        link: "https://www.youtube.com/watch?v=5i1TQEb7c90"
    },
    // Content Videos
    {
        title: "What does Prometheus scraping mean and how does it work?",
        description: "Video explanation of Prometheus scraping mechanism",
        category: "videos",
        year: "2025",
        link: "https://www.linkedin.com/posts/pavangudiwada_what-does-prometheus-scraping-mean-and-how-activity-7296555205838393344-EiQS"
    },
    {
        title: "Learn how Prometheus works in 2 minutes",
        description: "Quick video guide to understanding Prometheus",
        category: "videos",
        year: "2025",
        link: "https://www.linkedin.com/posts/pavangudiwada_learn-how-prometheus-works-in-2-minutes-activity-7294752532961050625-4PwK"
    },
    // Newsletter
    {
        title: "Why This Kubernetes Thing?",
        description: "No fluff, bite-sized newsletter about Kubernetes concepts with Natan Yellin",
        category: "others",
        year: "2024",
        link: "https://whyk8s.substack.com"
    },
    {
        title: "Kubernetes Guides",
        description: "One page diagrams explaining concepts in Kubernetes",
        category: "others",
        year: "2024",
        link: "https://github.com/pavangudiwada/kubernetesguides"
    },
    {
        title: "Hello DevOps Project",
        description: "Hands-on DevOps learning project - More doing, less reading. For people with theoretical DevOps knowledge and beginners",
        category: "others",
        year: "2023",
        link: "https://github.com/robusta-dev/Hello-DevOps-Project"
    },
    {
        title: "PrometheusRule Editor",
        description: "A web UI to create PrometheusRules on Kubernetes. Supports kube-prometheus-stack and the Prometheus operator",
        category: "others",
        year: "2024",
        link: "https://github.com/robusta-dev/prometheus-operator-ui"
    },
    // Blogs - Your content
    {
        title: "Pure GitOps: How to Create ArgoCD Applications without the UI",
        description: "Learn how to manage ArgoCD applications using GitOps principles",
        category: "blogs",
        year: "2023",
        link: "https://home.robusta.dev/blog/pure-gitops-how-to-create-argocd-applications-without-the-ui"
    },
    {
        title: "3 Steps To Minimize Alert Fatigue",
        description: "Practical guide to reduce alert noise and improve alert effectiveness in Prometheus",
        category: "blogs",
        year: "2024",
        link: "https://home.robusta.dev/blog/3-steps-to-minimize-alert-fatigue"
    },
    {
        title: "Prometheus On Kubernetes",
        description: "Comprehensive guide to understanding Prometheus components and Kube Prometheus stack",
        category: "blogs",
        year: "2024",
        link: "https://home.robusta.dev/blog/prometheus-on-kubernetes"
    },
    {
        title: "Prometheus alerts using Prometheus Community Helm Chart",
        description: "Deep dive into Prometheus alert configuration with prometheus-community/prometheus",
        category: "blogs",
        year: "2023",
        link: "https://home.robusta.dev/blog/prometheus-alerts-using-prometheus-community-helm-chart"
    },
    {
        title: "OOMKill, CrashLoops, Evictions",
        description: "Common scenarios and solutions for pod failures in Kubernetes",
        category: "blogs",
        year: "2022",
        link: "https://home.robusta.dev/blog/oomkill-crashloops-evictions"
    },
    {
        title: "Switching Kubernetes Context",
        description: "Essential tools for managing multiple Kubernetes contexts efficiently",
        category: "blogs",
        year: "2022",
        link: "https://home.robusta.dev/blog/switching-kubernets-context"
    },
    {
        title: "Practical Kubernetes monitoring with Prometheus and Grafana",
        description: "Comprehensive guide to setting up Kubernetes monitoring",
        category: "blogs",
        year: "2022",
        link: "https://www.veeam.com/blog/practical-kubernetes-monitoring-prometheus-grafana.html"
    },
    // Hashnode Blogs
    {
        title: "WordPress + MySQL = Simple Docker Project",
        description: "Let's practice Docker together with a simple project: WordPress and MySQL.",
        category: "blogs",
        year: "2022",
        link: "https://pavangudiwada.hashnode.dev/wordpress-mysql-simple-docker-project"
    },
    {
        title: "Create and Push a Git Repo to Github in minutes!!",
        description: "Git is complicated no more! Learn to create and push your first GitHub repo quickly.",
        category: "blogs",
        year: "2022",
        link: "https://pavangudiwada.hashnode.dev/create-and-push-a-git-repo-to-github-in-minutes"
    },
    {
        title: "Host your Golang app on Azure App Services using Docker",
        description: "How to host your Golang app on Azure App Services using Docker.",
        category: "blogs",
        year: "2022",
        link: "https://pavangudiwada.hashnode.dev/host-your-golang-app-on-azure-app-services-using-docker"
    },
    {
        title: "Access an Azure VM via RDP from Linux using Remmina",
        description: "Connect to an Azure VM using RDP from Linux with Remmina.",
        category: "blogs",
        year: "2022",
        link: "https://pavangudiwada.hashnode.dev/access-an-azure-vm-via-rdp-from-linux-using-remmina"
    },
    {
        title: "Personal Access Token - Azure DevOps",
        description: "Using PAT to connect Azure DevOps with other tools. What is PAT and how to use it.",
        category: "blogs",
        year: "2022",
        link: "https://pavangudiwada.hashnode.dev/personal-access-token-azure-devops"
    },
    {
        title: "AppWrite: Open Source Backend server, a non-developer's review",
        description: "What I like, why I like them and what I like to see improved in the project. Appwrite is an Open-Source Backend server that can run as a Docker...",
        category: "blogs",
        year: "2022",
        link: "https://pavangudiwada.hashnode.dev/appwrite-open-source-backend-server-a-non-developers-review"
    },
    {
        title: "Self-hosted Linux Agent on Azure DevOps in 5 minutes!!",
        description: "Yes! you don't have to pay for Microsoft hosted Agents or get a new server to work/practice. Use your own Linux machine instead!",
        category: "blogs",
        year: "2021",
        link: "https://pavangudiwada.hashnode.dev/self-hosted-linux-agent-on-azure-devops-in-5-minutes"
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
                <div className="work-card-icon">
                    {item.category === 'blogs' && <FaNewspaper />}
                    {item.category === 'videos' && <FaYoutube />}
                    {item.category === 'talks' && <FaMicrophone />}
                </div>
            </div>
        </a>
    );
}

export default function Work() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredWork = workItems.filter(item =>
        activeCategory === 'all' || item.category === activeCategory
    );

    // Group work items by year
    const workByYear = filteredWork.reduce((acc, item) => {
        if (!acc[item.year]) {
            acc[item.year] = [];
        }
        acc[item.year].push(item);
        return acc;
    }, {});

    // Sort years in descending order
    const sortedYears = Object.keys(workByYear).sort((a, b) => b - a);

    return (
        <div className="work-container">
            <div className="work-header">
                <h1>Work</h1>
                <p>A collection of my work in DevOps, Kubernetes, open source, and technical writing.</p>
            </div>

            <div className="categories-tabs">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
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
                            {workByYear[year].map((item, index) => (
                                <WorkCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 