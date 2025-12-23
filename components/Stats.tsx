"use client";

import React, { useState, useEffect, useRef } from "react";
import { BarChart3, TrendingUp, Users, Target, Zap, Shield } from "lucide-react";

const stats = [
    {
        value: "99.9%",
        label: "Uptime SLA",
        description: "Enterprise-grade reliability",
        icon: Shield,
        color: "emerald"
    },
    {
        value: "14ms",
        label: "Avg Response",
        description: "Lightning-fast decisions",
        icon: Zap,
        color: "blue"
    },
    {
        value: "10K+",
        label: "Companies",
        description: "Trust our platform",
        icon: Users,
        color: "purple"
    },
    {
        value: "98%",
        label: "Accuracy Rate",
        description: "Proven predictions",
        icon: Target,
        color: "orange"
    },
    {
        value: "5B+",
        label: "Decisions Made",
        description: "And counting",
        icon: BarChart3,
        color: "teal"
    },
    {
        value: "340%",
        label: "ROI Average",
        description: "First year returns",
        icon: TrendingUp,
        color: "pink"
    }
];

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState<Record<number, number>>({});
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-900 overflow-hidden relative"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] animate-[float_20s_ease-in-out_infinite]"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] animate-[float_25s_ease-in-out_infinite] delay-1000"></div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 relative z-10">

                <div className={`max-w-3xl mx-auto text-center mb-16 space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Trusted by the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                            world's best.
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Numbers that speak for themselves.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {stats.map((stat, index) => {
                        const colorClasses = {
                            emerald: "from-emerald-500 to-teal-500",
                            blue: "from-blue-500 to-cyan-500",
                            purple: "from-purple-500 to-pink-500",
                            orange: "from-orange-500 to-red-500",
                            teal: "from-teal-500 to-emerald-500",
                            pink: "from-pink-500 to-rose-500"
                        }[stat.color];

                        const iconColorClasses = {
                            emerald: "text-emerald-600 dark:text-emerald-400",
                            blue: "text-blue-600 dark:text-blue-400",
                            purple: "text-purple-600 dark:text-purple-400",
                            orange: "text-orange-600 dark:text-orange-400",
                            teal: "text-teal-600 dark:text-teal-400",
                            pink: "text-pink-600 dark:text-pink-400"
                        }[stat.color];

                        const bgColorClasses = {
                            emerald: "bg-emerald-500/10 dark:bg-emerald-500/20",
                            blue: "bg-blue-500/10 dark:bg-blue-500/20",
                            purple: "bg-purple-500/10 dark:bg-purple-500/20",
                            orange: "bg-orange-500/10 dark:bg-orange-500/20",
                            teal: "bg-teal-500/10 dark:bg-teal-500/20",
                            pink: "bg-pink-500/10 dark:bg-pink-500/20"
                        }[stat.color];

                        return (
                            <div
                                key={index}
                                className={`group relative p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Animated background gradient on hover */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colorClasses} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                {/* Glow effect */}
                                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${colorClasses} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

                                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                                    {/* Icon with animated background */}
                                    <div className={`relative w-12 h-12 rounded-2xl ${bgColorClasses} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <div className={`${iconColorClasses} transition-transform duration-300`}>
                                            <stat.icon size={24} />
                                        </div>
                                        {/* Pulse ring */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colorClasses} opacity-0 group-hover:opacity-30 animate-ping`}></div>
                                    </div>

                                    <div className="space-y-1">
                                        {/* Animated value with gradient */}
                                        <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${colorClasses} group-hover:scale-110 transition-transform duration-300`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                                            {stat.label}
                                        </div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                                            {stat.description}
                                        </div>
                                    </div>

                                    {/* Progress indicator */}
                                    <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden mt-2">
                                        <div
                                            className={`h-full bg-gradient-to-r ${colorClasses} rounded-full transition-all duration-1000 ease-out`}
                                            style={{
                                                width: isVisible ? '100%' : '0%',
                                                transitionDelay: `${index * 100 + 300}ms`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Custom Animations */}
            <style jsx global>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    );
}
