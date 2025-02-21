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
    "I'm an Android Developer"
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
            title: 'LaterLinks',
            description: 'The ultimate tool for saving, organizing, and accessing your favorite links—all in one place! Whether you\'re browsing articles 📚, watching videos 🎬, or discovering new websites 🌐, LaterLinks lets you save links quickly and easily for later use.',
            icon: <Link2 className="w-6 h-6" style={{ color: colors.primary }} />
        },
        {
            title: 'Something Widgets',
            description: 'From Nothing to Something! Inspired by the minimalist Nothing OS, Perfected for You! ✨ Experience the sleek, minimalist beauty of widgets designed to elevate your home screen with style and functionality. From battery info to photos and a stylish clock, Something OS Widgets brings you all the essentials—without the need for any extra apps! 🎉',
            icon: <Layout className="w-6 h-6" style={{ color: colors.primary }} />,
        },
        {
            title: 'Android Widgets (Material U)',
            description: 'Bring the modern, sleek look of Android\'s Material U widgets to your phone, no matter what device you use! With Android Widgets (Material U), you can customize your home screen with beautifully designed, adaptive widgets that seamlessly change colors to match your wallpaper. It\'s the ultimate way to personalize your device and make it truly yours!',
            icon: <Cpu className="w-6 h-6" style={{ color: colors.primary }} />
        },
        {
            title: 'CaffeInMe',
            description: 'Track and manage your daily caffeine intake with a beautiful and intuitive interface.',
            icon: <Coffee className="w-6 h-6" style={{ color: colors.primary }} />
        }
    ];

    const skills = [
        "Kotlin", "Coroutines", "Jetpack Compose", "MVVM", "Clean Architecture", "Performance Optimization", "Retrofit", "GraphQL", "Room", "DataStore"];

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