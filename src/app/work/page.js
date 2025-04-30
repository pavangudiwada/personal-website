import Link from 'next/link';

const workSections = [
    {
        title: 'Community',
        icon: '👥',
        description: 'My contributions to the developer community',
        items: [
            {
                title: 'Open Source Contributions',
                description: 'Contributions to various open source projects',
                link: '#',
            },
            {
                title: 'Community Events',
                description: 'Organizing and participating in tech events',
                link: '#',
            },
        ],
    },
    {
        title: 'Projects',
        icon: '💻',
        description: 'Personal and professional projects',
        items: [
            {
                title: 'Project 1',
                description: 'Description of project 1',
                link: '#',
            },
            {
                title: 'Project 2',
                description: 'Description of project 2',
                link: '#',
            },
        ],
    },
    {
        title: 'Talks',
        icon: '🎤',
        description: 'Conference talks and presentations',
        items: [
            {
                title: 'Talk 1',
                description: 'Description of talk 1',
                link: '#',
            },
            {
                title: 'Talk 2',
                description: 'Description of talk 2',
                link: '#',
            },
        ],
    },
    {
        title: 'Newsletter',
        icon: '📰',
        description: 'My newsletter and writing',
        items: [
            {
                title: 'Newsletter Issue 1',
                description: 'Description of newsletter issue 1',
                link: '#',
            },
            {
                title: 'Newsletter Issue 2',
                description: 'Description of newsletter issue 2',
                link: '#',
            },
        ],
    },
    {
        title: 'Articles',
        icon: '📝',
        description: 'Technical articles and blog posts',
        items: [
            {
                title: 'Article 1',
                description: 'Description of article 1',
                link: '#',
            },
            {
                title: 'Article 2',
                description: 'Description of article 2',
                link: '#',
            },
        ],
    },
];

export default function WorkPage() {
    return (
        <div className="container section">
            <h1 className="heading">Work</h1>
            <div className="work-grid">
                {workSections.map((section) => (
                    <div key={section.title} className="work-card">
                        <div className="work-card-header">
                            <span className="work-card-icon">{section.icon}</span>
                            <div>
                                <h2 className="work-card-title">{section.title}</h2>
                                <p className="work-card-description">{section.description}</p>
                            </div>
                        </div>
                        <div className="work-items">
                            {section.items.map((item) => (
                                <Link key={item.title} href={item.link} className="work-item">
                                    <h3 className="work-item-title">{item.title}</h3>
                                    <p className="work-item-description">{item.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 