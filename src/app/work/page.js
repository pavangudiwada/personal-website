'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { FaMicrophone, FaNewspaper, FaLightbulb, FaYoutube, FaCodeBranch, FaChartLine, FaRobot } from 'react-icons/fa';
import { archiveItems, categories } from '../../data/work';

const categoryIcons = {
    all: FaLightbulb,
    pmm: FaChartLine,
    'ai-sre': FaRobot,
    'agent-labs': FaCodeBranch,
    blogs: FaNewspaper,
    videos: FaYoutube,
    talks: FaMicrophone
};

function WorkCard({ item }) {
    const category = categories.find((entry) => entry.id === item.category);
    const isExternal = item.href?.startsWith('http');
    const CardTag = isExternal ? 'a' : Link;
    const cardProps = isExternal
        ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
        : { href: item.href || '/work' };

    return (
        <CardTag className="work-card" {...cardProps}>
            <div className="work-card-content">
                <div className="work-card-header">
                    <span className="work-year">{item.year}</span>
                    <span className="status-pill">{item.status}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span className="work-category">{category?.label}</span>
            </div>
        </CardTag>
    );
}

export default function Work() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [query, setQuery] = useState('');

    const filteredWork = useMemo(() => {
        const search = query.trim().toLowerCase();
        return archiveItems.filter((item) => {
            const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
            const matchesSearch = !search || [item.title, item.summary, item.year, item.status].join(' ').toLowerCase().includes(search);
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, query]);

    const counts = categories.reduce((acc, category) => {
        acc[category.id] = category.id === 'all' ? archiveItems.length : archiveItems.filter((item) => item.category === category.id).length;
        return acc;
    }, {});

    return (
        <main className="work-container">
            <div className="work-header">
                <p className="eyebrow">Portfolio archive</p>
                <h1>Work</h1>
                <p>Search the useful stuff: product marketing experiments, AI SRE research, agent labs, talks, videos, and writing. Private experiments open into safe public case-study pages instead of dead repo links.</p>
            </div>

            <div className="work-toolbar" aria-label="Work filters">
                <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search work, tools, topics..."
                    className="search-input"
                />
                <span className="result-count">{filteredWork.length} shown</span>
            </div>

            <div className="categories-tabs">
                {categories.map((category) => {
                    const Icon = categoryIcons[category.id];
                    return (
                        <button key={category.id} className={`category-tab ${activeCategory === category.id ? 'active' : ''}`} onClick={() => setActiveCategory(category.id)} type="button">
                            <Icon className="category-icon" />
                            <span>{category.label}</span>
                            <small>{counts[category.id]}</small>
                        </button>
                    );
                })}
            </div>

            <div className="work-grid">
                {filteredWork.map((item) => <WorkCard key={`${item.title}-${item.year}`} item={item} />)}
            </div>

            {filteredWork.length === 0 && (
                <div className="empty-state">
                    <h2>No matching work yet</h2>
                    <p>Try a broader search or switch back to All.</p>
                </div>
            )}
        </main>
    );
}
