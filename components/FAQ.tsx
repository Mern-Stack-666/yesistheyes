"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How does the active learning model work?",
        answer: "Our engine uses a proprietary recursive neural network that observes the outcomes of your decisions. It compares predictions vs. reality and adjusts its weights in real-time, effectively 'learning' from your specific business context."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We are SOC2 Type II certified and GDPR compliant. Your data is encrypted at rest (AES-256) and in transit (TLS 1.3). We never sell your data to third parties."
    },
    {
        question: "Can I integrate this with my existing stack?",
        answer: "Yes! We offer SDKs for Python, Node.js, Go, and Ruby. effectively. We also have a Zapier integration for no-code workflows."
    },
    {
        question: "What happens if I exceed my API limits?",
        answer: "We maximize uptime. If you exceed your limit, we'll continue to serve requests (up to 20% overage) and notify you to upgrade. We won't cut you off in the middle of a critical operation."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <section className="py-16 bg-zinc-50 dark:bg-black" id="faq">
            <div className="container max-w-3xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
                        Frequently asked <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">questions.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900/50 overflow-hidden transition-all duration-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-zinc-900 dark:text-white">{faq.question}</span>
                                <span className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
