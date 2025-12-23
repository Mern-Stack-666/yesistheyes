"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="py-16 w-7xl mx-auto relative">

            {/* Background Glow */}
            {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50"></div>
                <div className="w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50 ml-[-200px]"></div>
            </div> */}

            <div className="relative z-10">
                <div className="bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 text-center overflow-hidden relative group">
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white mb-8 backdrop-blur-md">
                            <Sparkles size={12} className="text-yellow-400 fill-current" />
                            <span>Start your 14-day free trial</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-2xl">
                            Ready to make <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">better decisions?</span>
                        </h2>

                        <p className="text-lg text-zinc-400 mb-10 max-w-lg">
                            Join 10,000+ forward-thinking companies who rely on Yes Engine to navigate uncertainty.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <Link
                                href="#"
                                className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95"
                            >
                                Get Started Now
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#"
                                className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-8 text-base font-bold text-white transition-all hover:bg-zinc-800"
                            >
                                Talk to Sales
                            </Link>
                        </div>

                        <p className="mt-8 text-sm text-zinc-500">
                            No credit card required. Cancel anytime.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
