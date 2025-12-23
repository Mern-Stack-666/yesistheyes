"use client";

import React from "react";
import {
    Database,
    MessageSquare,
    CreditCard,
    Layout,
    Server,
    Globe,
    Slack,
    Github,
    Figma
} from "lucide-react";

const integrations = [
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "Slack", icon: Slack, category: "Communication" },
    { name: "Stripe", icon: CreditCard, category: "Payments" },
    { name: "Next.js", icon: Layout, category: "Frontend" },
    { name: "AWS", icon: Server, category: "Infrastructure" },
    { name: "Vercel", icon: Globe, category: "Deployment" },
    { name: "GitHub", icon: Github, category: "Version Control" },
    { name: "Figma", icon: Figma, category: "Design" },
];

export default function Integrations() {
    return (
        <section className="py-16 bg-white dark:bg-black border-b border-zinc-100 dark:border-zinc-900 overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">

                <div className="max-w-3xl mx-auto text-center mb-1 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Plays well with <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-cyan-500">others.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Connect Yes Engine to your existing stack in minutes.
                        Pre-built native integrations for the tools you love.
                    </p>
                </div>

                <div className="relative">
                    {/* Gradients to fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white dark:from-black to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white dark:from-black to-transparent z-10"></div>

                    {/* Marquee Container */}
                    <div className="flex gap-8 pt-10 overflow-hidden mask-image-linear-to-r from-transparent via-black to-transparent">
                        {/* Inner Track - Duplicated for seamless loop */}
                        <div className="flex gap-8 animate-scroll min-w-full shrink-0 items-center justify-around">
                            {integrations.map((tool, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 group min-w-[120px]">
                                    <div className="w-20 h-20 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-indigo-500 group-hover:border-indigo-500/30 group-hover:scale-110 transition-all duration-300 shadow-sm">
                                        <tool.icon size={32} />
                                    </div>
                                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate for loop */}
                        <div className="flex gap-8 animate-scroll min-w-full shrink-0 items-center justify-around" aria-hidden="true">
                            {integrations.map((tool, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 group min-w-[120px]">
                                    <div className="w-20 h-20 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-indigo-500 group-hover:border-indigo-500/30 group-hover:scale-110 transition-all duration-300 shadow-sm">
                                        <tool.icon size={32} />
                                    </div>
                                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Add keyframe animation style locally for simplicity if not in global css */}
            <style jsx global>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
        </section>
    );
}
