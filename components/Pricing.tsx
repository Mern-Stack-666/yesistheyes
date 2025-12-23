"use client";

import React from "react";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section className="py-16 bg-zinc-50 dark:bg-black" id="pricing">
            <div className="container max-w-7xl mx-auto px-4">

                <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Simple, transparent <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 to-emerald-500">pricing.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Start for free, scale as you grow. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter */}
                    <div className="rounded-4xl p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Starter</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-zinc-900 dark:text-white">$0</span>
                            <span className="text-zinc-500 dark:text-zinc-400">/mo</span>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Perfect for hobbyists and side projects.</p>

                        <button className="w-full py-3 rounded-full border border-zinc-200 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors mb-8">
                            Get Started
                        </button>

                        <div className="space-y-4">
                            {['1,000 requests/mo', 'Basic analytics', 'Commnity support', '1 Project'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                    <Check size={16} className="text-green-500" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pro */}
                    <div className="rounded-4xl p-8 bg-zinc-900 dark:bg-zinc-800 border border-zinc-800 dark:border-zinc-700 relative scale-105 shadow-2xl z-10">
                        <div className="absolute top-0 right-0 p-4">
                            <span className="bg-linear-to-r from-blue-500 to-purple-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                                Popular
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Pro</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">$49</span>
                            <span className="text-zinc-400">/mo</span>
                        </div>
                        <p className="text-sm text-zinc-400 mb-8">For growing teams and businesses.</p>

                        <button className="w-full py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors mb-8">
                            Start Free Trial
                        </button>

                        <div className="space-y-4">
                            {['50,000 requests/mo', 'Advanced analytics', 'Priority support', 'Unlimited Projects', 'Custom domains'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                                    <div className="p-0.5 rounded-full bg-green-500/20 text-green-500">
                                        <Check size={14} />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="rounded-4xl p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Enterprise</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-zinc-900 dark:text-white">$Custom</span>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">For large scale applications.</p>

                        <button className="w-full py-3 rounded-full border border-zinc-200 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors mb-8">
                            Contact Sales
                        </button>

                        <div className="space-y-4">
                            {['Unlimited requests', 'Custom SLA', 'Dedicated account manager', 'On-premise deployment', 'SSO & Audit logs'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                    <Check size={16} className="text-green-500" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
