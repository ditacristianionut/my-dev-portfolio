import React, { useState, useEffect } from 'react';
import { Terminal, Link2, Cpu, Layout, Coffee } from 'lucide-react';

const colors = {
    background: '#F5F7F8',
    onBackground: '#1F1717',
    surface: '#FFFFFF',
    onSurface: '#181818',
    primary: '#CE5A67',
    onPrimary: '#FFFFFF',
    secondary: '#7DB9B6',
    onSecondary: '#FFFFFF',
    tertiary: '#F5E9CF',
    onTertiary: '#181818',
    error: '#F24C3D',
};

const INTRO_LINES = [
    'Hello, World!',
    "I'm an Android Developer",
    'Specializing in widgets and utilities...',
];

const RetroPortfolio = () => {
    const [typedText, setTypedText] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {
        if (currentLine < INTRO_LINES.length) {
            let currentChar = 0;
            const line = INTRO_LINES[currentLine];

            const typingInterval = setInterval(() => {
                if (currentChar <= line.length) {
                    setTypedText(line.substring(0, currentChar));
                    currentChar++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        setCurrentLine(prev => prev + 1);
                    }, 50);
                }
            }, 50);

            return () => clearInterval(typingInterval);
        } else {
            setTimeout(() => setShowProjects(true), 500);
        }
    }, [currentLine]);

    const projectCardStyle = {
        background: colors.surface,
        borderColor: colors.primary,
        boxShadow: `4px 4px 0px ${colors.secondary}`,
        transition: 'all 0.3s ease',
    };

    const projectCardHoverStyle = {
        transform: 'translateY(-8px)',
        boxShadow: `8px 8px 0px ${colors.secondary}`,
    };

    const projects = [
        {
            title: 'Hold My Link',
            description: 'A minimalist clipboard manager that helps you save and organize your links with custom descriptions and tags.',
            skills: ['Room Database', 'Material You', 'Clipboard Manager'],
            icon: <Link2 className="w-6 h-6" style={{ color: colors.primary }} />,
            features: [
                'Custom link descriptions',
                'Tag organization system',
                'Material You design',
                'Quick copy functionality'
            ]
        },
        {
            title: 'Something Widgets',
            description: 'Collection of beautifully designed widgets featuring quotes, weather info, and customizable designs.',
            skills: ['App Widgets', 'Material Design', 'RemoteViews'],
            icon: <Layout className="w-6 h-6" style={{ color: colors.primary }} />,
            features: [
                'Multiple widget designs',
                'Quote collections',
                'Weather integration',
                'Custom styling options'
            ]
        },
        {
            title: 'Android 12 Widgets',
            description: 'Modern widget collection specifically designed for Android 12+ with Material You integration.',
            skills: ['Dynamic Colors', 'Widget API', 'Material You'],
            icon: <Cpu className="w-6 h-6" style={{ color: colors.primary }} />,
            features: [
                'Material You support',
                'Dynamic color adaptation',
                'Android 12+ optimization',
                'Modern widget designs'
            ]
        },
        {
            title: 'Caffein.me',
            description: 'Track and manage your daily caffeine intake with a beautiful and intuitive interface.',
            skills: ['Room Database', 'Charts', 'Health Tracking'],
            icon: <Coffee className="w-6 h-6" style={{ color: colors.primary }} />,
            features: [
                'Caffeine intake tracking',
                'Consumption analytics',
                'Drink presets',
                'Daily statistics'
            ]
        }
    ];

    const skills = [
        'Kotlin', 'Material You', 'App Widgets', 'Room Database',
        'Dynamic Colors', 'RemoteViews', 'WorkManager', 'Material Design',
        'Android 12+', 'Jetpack Libraries', 'MVVM', 'Clean Architecture'
    ];

    return (
        <div className="min-h-screen" style={{ background: colors.background }}>
            {/* Header */}
            <header className="p-8 text-center relative" style={{
                background: colors.tertiary,
                borderBottom: `4px solid ${colors.primary}`
            }}>
                <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{
                    color: colors.primary,
                    textShadow: `4px 4px 0px ${colors.secondary}`
                }}>
                    &lt;/Android Developer&gt;
                </h1>
                <p className="text-lg" style={{ color: colors.onBackground }}>
                    Crafting beautiful widgets and useful utilities
                </p>
            </header>

            <div className="max-w-4xl mx-auto p-6">
                {/* Terminal Section */}
                <div className="mb-8 rounded-lg p-6 relative" style={{
                    background: colors.surface,
                    border: `2px solid ${colors.primary}`,
                    boxShadow: `8px 8px 0px ${colors.secondary}`
                }}>
                    <div className="flex gap-2 mb-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-3 h-3 rounded-full" style={{ background: colors.primary }}></div>
                        ))}
                    </div>
                    <div className="font-mono">
                        <p style={{ color: colors.onBackground }} className="mb-2">
                            &gt; {typedText}<span className="animate-pulse">_</span>
                        </p>
                    </div>
                </div>

                <div className={`transition-all duration-1000 ${showProjects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Skills Section */}
                    <h2 className="text-2xl font-bold mb-6 pb-2" style={{
                        color: colors.secondary,
                        borderBottom: `2px dashed ${colors.primary}`
                    }}>
                        Technical Arsenal
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-12">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-full transition-transform duration-200 hover:-translate-y-1"
                                style={{
                                    background: colors.tertiary,
                                    color: colors.onTertiary,
                                    border: `2px solid ${colors.secondary}`
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Projects Section */}
                    <h2 className="text-2xl font-bold mb-6 pb-2" style={{
                        color: colors.secondary,
                        borderBottom: `2px dashed ${colors.primary}`
                    }}>
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="rounded-lg p-6 transition-all duration-300 hover:-translate-y-2"
                                style={{
                                    ...projectCardStyle,
                                    border: `2px solid ${colors.primary}`,
                                }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {project.icon}
                                    <h3 className="text-xl font-bold" style={{ color: colors.primary }}>
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="mb-4" style={{ color: colors.onBackground }}>
                                    {project.description}
                                </p>
                                <div className="mb-4">
                                    <ul className="list-disc list-inside">
                                        {project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="text-sm mb-1" style={{ color: colors.onBackground }}>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="text-sm px-3 py-1 rounded-full"
                                            style={{ background: colors.tertiary, color: colors.onTertiary }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="rounded-lg p-8 text-center mb-12" style={{ background: colors.tertiary }}>
                        <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                            Let's Connect
                        </h2>
                        <div className="flex justify-center gap-6">
                            <a
                                href="https://play.google.com/store/apps/dev?id=6998019639923772389"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition-colors duration-200"
                                style={{ color: colors.onBackground }}
                            >
                                <Terminal className="w-5 h-5" />
                                <span>Play Store</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center p-8" style={{
                borderTop: `4px solid ${colors.primary}`,
                color: colors.onBackground
            }}>
                <p className="mb-2">Made with ❤️ and lots of ☕</p>
                <p>&copy; 2025 Android Developer</p>
            </footer>
        </div>
    );
};

export default RetroPortfolio;