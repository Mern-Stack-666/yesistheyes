"use client";

import React from "react";
import { Search, BrainCircuit, CheckCircle2, Zap, TrendingUp } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Connect Data",
        description: "Stream your raw events via API or connect your warehouse (Snowflake, BigQuery).",
        icon: Search,
        color: "teal"
    },
    {
        number: "02",
        title: "Engine Learns",
        description: "Our models auto-label and identify patterns, building a custom decision graph.",
        icon: BrainCircuit,
        color: "blue"
    },
    {
        number: "03",
        title: "Analyze Context",
        description: "Real-time feature extraction across 200+ dimensions with automatic correlation detection.",
        icon: Zap,
        color: "purple"
    },
    {
        number: "04",
        title: "Generate Insights",
        description: "Probabilistic forecasting with confidence intervals and explainable AI reasoning.",
        icon: TrendingUp,
        color: "orange"
    },
    {
        number: "05",
        title: "Execute",
        description: "Receive probabilistic recommendations with confidence scores in &lt; 20ms.",
        icon: CheckCircle2,
        color: "emerald"
    }
];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-zinc-50 dark:bg-black overflow-hidden" id="how-it-works">
            <div className="container max-w-7xl mx-auto ">

                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Five steps to <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-emerald-500">clarity.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        From raw data to actionable intelligence in seconds.
                    </p>
                </div>

                <div className="relative">

                    {/* Animated Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 z-0">
                        <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-linear-to-r from-teal-500 via-blue-500 via-purple-500 via-orange-500 to-emerald-500 animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_100%]"></div>
                        </div>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
                        {steps.map((step, index) => {
                            const colorMap = {
                                teal: {
                                    glow: 'bg-teal-500/20',
                                    border: 'group-hover:border-teal-500/30',
                                    bg: 'bg-teal-100 dark:bg-teal-900/30',
                                    text: 'text-teal-600 dark:text-teal-400',
                                    gradient: 'group-hover:from-teal-600 group-hover:to-teal-400',
                                    progress: 'bg-teal-500'
                                },
                                blue: {
                                    glow: 'bg-blue-500/20',
                                    border: 'group-hover:border-blue-500/30',
                                    bg: 'bg-blue-100 dark:bg-blue-900/30',
                                    text: 'text-blue-600 dark:text-blue-400',
                                    gradient: 'group-hover:from-blue-600 group-hover:to-blue-400',
                                    progress: 'bg-blue-500'
                                },
                                purple: {
                                    glow: 'bg-purple-500/20',
                                    border: 'group-hover:border-purple-500/30',
                                    bg: 'bg-purple-100 dark:bg-purple-900/30',
                                    text: 'text-purple-600 dark:text-purple-400',
                                    gradient: 'group-hover:from-purple-600 group-hover:to-purple-400',
                                    progress: 'bg-purple-500'
                                },
                                orange: {
                                    glow: 'bg-orange-500/20',
                                    border: 'group-hover:border-orange-500/30',
                                    bg: 'bg-orange-100 dark:bg-orange-900/30',
                                    text: 'text-orange-600 dark:text-orange-400',
                                    gradient: 'group-hover:from-orange-600 group-hover:to-orange-400',
                                    progress: 'bg-orange-500'
                                },
                                emerald: {
                                    glow: 'bg-emerald-500/20',
                                    border: 'group-hover:border-emerald-500/30',
                                    bg: 'bg-emerald-100 dark:bg-emerald-900/30',
                                    text: 'text-emerald-600 dark:text-emerald-400',
                                    gradient: 'group-hover:from-emerald-600 group-hover:to-emerald-400',
                                    progress: 'bg-emerald-500'
                                }
                            };

                            const colorClasses = colorMap[step.color as keyof typeof colorMap];
                            if (!colorClasses) return null;

                            return (
                                <div
                                    key={index}
                                    className="relative z-10 flex flex-col items-center text-center group animate-in fade-in slide-in-from-bottom-8 duration-700"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    {/* Icon Circle */}
                                    <div className="relative w-32 h-32 mb-6">
                                        {/* Outer glow ring */}
                                        <div className={`absolute inset-0 rounded-full ${colorClasses.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}></div>

                                        {/* Main circle */}
                                        <div className={`relative w-full h-full rounded-full bg-white dark:bg-black border-4 border-zinc-100 dark:border-zinc-800 shadow-xl flex items-center justify-center group-hover:scale-110 ${colorClasses.border} transition-all duration-500 group-hover:rotate-[360deg]`}>
                                            <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center ${colorClasses.text} group-hover:scale-110 transition-transform duration-300`}>
                                                <step.icon size={32} className="animate-pulse" style={{ animationDuration: '2s' }} />
                                            </div>
                                        </div>

                                        {/* Orbiting dot */}
                                        <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-700 dark:to-zinc-800 rounded-full border-2 border-zinc-200 dark:border-zinc-700 shadow-lg animate-[orbit_4s_linear_infinite]" style={{ animationDelay: `${index * 0.8}s` }}></div>
                                    </div>

                                    {/* Step Number Badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-500 mb-4 " style={{ animationDelay: `${index * 0.2}s` }}>
                                        Step {step.number}
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r ${colorClasses.gradient} transition-all duration-300`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[200px] group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: step.description }} />
                                    {/* Progress indicator */}
                                    <div className="mt-6 w-full max-w-[120px] h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out`}
                                            style={{
                                                width: '0%',
                                                animation: 'progressFill 2s ease-out forwards',
                                                animationDelay: `${index * 200 + 500}ms`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>

            {/* Custom Animations */}
            <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes progressFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
        </section>
    );
}
