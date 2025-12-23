"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        content: "The accuracy is frighteningly good. We reduced our risk assessment time by 90% in the first week.",
        author: "Sarah Jenks",
        role: "CTO @ FinTech Global",
        image: "https://i.pravatar.cc/100?img=1"
    },
    {
        content: "Finally, a decision engine that feels human. The API is a joy to work with, and the support is stellar.",
        author: "Michael Chen",
        role: "Lead Engineer @ DataFlow",
        image: "https://i.pravatar.cc/100?img=11"
    },
    {
        content: "We stopped guessing and started knowing. Yes Engine has become the backbone of our strategic planning.",
        author: "Elena Rodriguez",
        role: "VP of Product @ Solstice",
        image: "https://i.pravatar.cc/100?img=5"
    }
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-900">
            <div className="container max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
                        Trusted by the <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-500">boldest teams.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="relative group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-orange-500/20 transition-colors">
                            <Quote className="absolute top-8 right-8 text-zinc-200 dark:text-zinc-800 fill-current w-12 h-12" />

                            <div className="flex gap-1 text-orange-500 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 relative z-10 font-medium leading-relaxed">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700">
                                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-zinc-900 dark:text-white">{t.author}</div>
                                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
