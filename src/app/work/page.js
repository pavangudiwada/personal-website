'use client';
import { useState } from 'react';
import { FaMicrophone, FaNewspaper, FaLightbulb, FaYoutube } from 'react-icons/fa';

const categories = [
    { id: 'all', label: 'All', icon: FaLightbulb },
    { id: 'blogs', label: 'Blogs', icon: FaNewspaper },
    { id: 'videos', label: 'Videos', icon: FaYoutube },
    { id: 'talks', label: 'Talks', icon: FaMicrophone },
    { id: 'newsletter', label: 'Newsletter', icon: FaNewspaper },
];

const workItems = [
    {
        title: "Pure GitOps: How to Create ArgoCD Applications without the UI",
        description: "Learn how to manage ArgoCD applications using GitOps principles",
        category: "blogs",
        year: "2024",
        link: "https://home.robusta.dev/blog/pure-gitops-how-to-create-argocd-applications-without-the-ui"
    },
    {
        title: "How are Prometheus alerts configured on Kubernetes",
        description: "Deep dive into Prometheus alert configuration with prometheus-community/prometheus",
        category: "blogs",
        year: "2023",
        link: "https://home.robusta.dev/blog/prometheus-alerts-using-prometheus-community-helm-chart"
    },
    {
        title: "Four ways pods suddenly stop running on Kubernetes",
        description: "Common scenarios and solutions for pod failures in Kubernetes",
        category: "blogs",
        year: "2023",
        link: "https://home.robusta.dev/blog/oomkill-crashloops-evictions"
    },
    {
        title: "Best three tools for working with many Kubernetes contexts",
        description: "Essential tools for managing multiple Kubernetes contexts efficiently",
        category: "blogs",
        year: "2023",
        link: "https://home.robusta.dev/blog/switching-kubernets-context"
    },
    {
        title: "3 Steps To Minimize Alert Fatigue When Using Prometheus",
        description: "Practical guide to reduce alert noise and improve alert effectiveness in Prometheus",
        category: "blogs",
        year: "2024",
        link: "https://home.robusta.dev/blog/3-steps-to-minimize-alert-fatigue-when-using-prometheus"
    },
    {
        title: "Prometheus On Kubernetes",
        description: "Comprehensive guide to understanding Prometheus components and Kube Prometheus stack",
        category: "blogs",
        year: "2024",
        link: "https://home.robusta.dev/blog/prometheus-on-kubernetes"
    },
    {
        title: "3 Common Mistakes with PromQL and Kubernetes Metrics",
        description: "Troubleshooting guide for common PromQL query pitfalls in Kubernetes monitoring",
        category: "blogs",
        year: "2023",
        link: "https://home.robusta.dev/blog/3-common-mistakes-with-promql-and-kubernetes-metrics"
    },
    {
        title: "Practical Kubernetes monitoring with Prometheus and Grafana",
        description: "Comprehensive guide to setting up Kubernetes monitoring",
        category: "blogs",
        year: "2023",
        link: "https://kubecampus.io/kubernetes/blog/practical-kubernetes-monitoring-with-prometheus-and-grafana/"
    },
    {
        title: "Why This Kubernetes Thing?",
        description: "No fluff, bite-sized newsletter about Kubernetes concepts",
        category: "newsletter",
        year: "2024",
        link: "https://whyk8s.substack.com/"
    },
    {
        title: "Prometheus in 5 minutes - KCD Pakistan 2023",
        description: "Quick introduction to Prometheus monitoring",
        category: "videos",
        year: "2023",
        link: "https://www.youtube.com/watch?v=I6C09vPBpiA"
    },
    {
        title: "Kubernetes-as-a-Service - Ortelius Summit 2022",
        description: "Discussion about whether Kubernetes-as-a-Service is better for you",
        category: "videos",
        year: "2022",
        link: "https://www.youtube.com/watch?v=5i1TQEb7c90"
    },
    {
        title: "Kubernetes monitoring with Robusta - Kubesimplify",
        description: "CloudNative stories featuring Kubernetes monitoring best practices",
        category: "videos",
        year: "2023",
        link: "https://www.youtube.com/watch?v=RP6bW-EevX0"
    },
    {
        title: "Understand Terraform Cloud and Enterprise capabilities",
        description: "Terraform HUG Sydney session with Brad McCoy",
        category: "videos",
        year: "2023",
        link: "https://www.youtube.com/watch?v=8JSTKHxkLTM"
    },
    {
        title: "Kubernetes Monitoring 101 with Prometheus",
        description: "Introduction to Kubernetes monitoring fundamentals",
        category: "videos",
        year: "2023",
        link: "https://www.youtube.com/watch?v=siH-B5bOoIU"
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

            <div className="work-grid">
                {filteredWork.map((item, index) => (
                    <WorkCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
} 