"use client";

import React, { useState, useEffect } from "react";
import {
    Brain,
    Zap,
    Globe,
    ShieldCheck,
    BarChart3,
    ArrowUpRight,
    Code2,
    Terminal,
    Fingerprint,
    Cpu,
    Sparkles
} from "lucide-react";

export default function Features() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="py-16 bg-zinc-50 dark:bg-black relative overflow-hidden" id="features">
            {/* Animated background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-[float_15s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-[float_20s_ease-in-out_infinite] delay-1000"></div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className={`max-w-3xl mx-auto text-center mb-16 space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200 dark:border-blue-800 text-sm font-semibold text-blue-700 dark:text-blue-300 mb-4">
                        <Sparkles size={14} className="animate-pulse" />
                        <span>Powerhouse Features</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Everything you need to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                            scale certainty.
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                        From raw data to final decision in milliseconds. Built for developers, designed for humans.
                    </p>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[280px]">

                    {/* CARD 1: NEURAL ENGINE (Large) */}
                    <div
                        className={`group relative lg:col-span-2 lg:row-span-2 overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm hover:shadow-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ animationDelay: '100ms' }}
                        onMouseEnter={() => setActiveCard(1)}
                        onMouseLeave={() => setActiveCard(null)}
                    >
                        {/* Animated Hover Glow */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>

                        {/* Spotlight effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                        </div>

                        <div className="h-full flex flex-col relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Brain size={28} />
                                </div>
                                <ArrowUpRight className="text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </div>

                            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                Neural Co-pilot
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-8 max-w-sm">
                                A decision engine that learns from your outcomes. It doesn't just predict; it evolves.
                            </p>

                            {/* Enhanced Neural Nodes Visual */}
                            <div className="mt-auto relative w-full h-48 bg-gradient-to-br from-zinc-50 to-purple-50/30 dark:from-black/50 dark:to-purple-950/20 rounded-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden group-hover:border-purple-500/30 transition-all duration-500">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-32 h-32">
                                        {/* Animated rings */}
                                        <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-[spin_10s_linear_infinite] group-hover:border-purple-500/40 transition-colors"></div>
                                        <div className="absolute inset-4 rounded-full border-2 border-purple-500/40 animate-[spin_7s_linear_infinite_reverse] group-hover:border-purple-500/60 transition-colors"></div>
                                        <div className="absolute inset-8 rounded-full border-2 border-purple-500/60 animate-[spin_4s_linear_infinite] group-hover:border-purple-500/80 transition-colors"></div>

                                        {/* Center icon with pulse */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
                                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                                <Cpu size={32} className="text-purple-600 dark:text-purple-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating animated badges */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 shadow-lg text-xs font-bold text-purple-600 dark:text-purple-400 animate-[float_3s_ease-in-out_infinite] border border-purple-200 dark:border-purple-800">
                                    Confidence: 99.8%
                                </div>
                                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 shadow-lg text-xs font-bold text-purple-600 dark:text-purple-400 animate-[float_3s_ease-in-out_infinite] border border-purple-200 dark:border-purple-800" style={{ animationDelay: '1s' }}>
                                    Latency: 12ms
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: DEVELOPER API (Tall) */}
                    <div
                        className={`group relative lg:col-span-1 lg:row-span-2 overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800 p-6 shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ animationDelay: '200ms' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"></div>

                        {/* Animated grid background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Terminal size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Developer First</h3>
                            <p className="text-zinc-400 text-sm mb-6">
                                Simple, typed SDKs for every major language. Drop it in and go.
                            </p>

                            {/* Enhanced Code Window */}
                            <div className="flex-1 bg-zinc-900/50 rounded-2xl border border-zinc-800 p-4 font-mono text-xs text-zinc-300 overflow-hidden group-hover:border-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-500 backdrop-blur-sm">
                                <div className="flex items-center gap-1.5 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/70 group-hover:bg-red-500 transition-colors"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/70 group-hover:bg-yellow-500 transition-colors"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/70 group-hover:bg-green-500 transition-colors"></div>
                                </div>
                                <div className="space-y-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                    <span className="text-purple-400">const</span> <span className="text-blue-400">decision</span> = <span className="text-purple-400">await</span> yes.<span className="text-yellow-400">ask</span>(<span>{"{"}</span>
                                    <br />
                                    &nbsp;&nbsp;<span className="text-blue-300">context</span>: <span className="text-green-400">"user_session"</span>,
                                    <br />
                                    &nbsp;&nbsp;<span className="text-blue-300">confidence</span>: <span className="text-orange-400">0.9</span>
                                    <br />
                                    <span>{"}"}</span>);
                                    <br />
                                    <br />
                                    <span className="text-zinc-500">// Result:</span>
                                    <br />
                                    <span className="text-green-400 animate-pulse">"APPROVED"</span>
                                </div>
                                {/* Animated cursor */}
                                <div className="w-2 h-4 bg-blue-500 mt-2 animate-[blink_1s_step-end_infinite]"></div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: GLOBAL LATENCY */}
                    <div
                        className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:border-orange-500/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ animationDelay: '300ms' }}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <Zap size={20} />
                                    </div>
                                    <span className="text-xs font-mono text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                        Active
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Global Edge</h3>
                            </div>
                            <div>
                                <div className="flex items-end gap-2 mb-1">
                                    <span className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tighter group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                        14<span className="text-lg text-zinc-500 font-normal">ms</span>
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">Average latency worldwide</p>
                                {/* Animated progress bar */}
                                <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full mt-4 overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-[progress_2s_ease-out_infinite]" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 4: SECURITY */}
                    <div
                        className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ animationDelay: '400ms' }}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <ShieldCheck size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Enterprise Ready</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                                    SOC2 Type II certified. Your data is encrypted at rest and in transit.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mt-4 text-xs font-medium text-zinc-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                <Fingerprint size={16} className="animate-pulse" />
                                <span>End-to-end encryption</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Custom Animations */}
            <style jsx global>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                
                @keyframes progress {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </section>
    );
}
