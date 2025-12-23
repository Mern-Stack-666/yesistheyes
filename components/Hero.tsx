"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Star, Sparkles, Zap, TrendingUp } from "lucide-react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-black flex items-center">

            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Primary gradient orbs */}
                <div
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/30 rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]"
                    style={{ animationDelay: '0s' }}
                />
                <div
                    className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-600/30 rounded-full blur-[100px] animate-[float_10s_ease-in-out_infinite]"
                    style={{ animationDelay: '2s' }}
                />
                <div
                    className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-pink-500/15 dark:bg-pink-600/25 rounded-full blur-[140px] animate-[float_12s_ease-in-out_infinite]"
                    style={{ animationDelay: '4s' }}
                />

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/40 rounded-full animate-[particle_15s_linear_infinite]"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 15}s`,
                            animationDuration: `${10 + Math.random() * 10}s`
                        }}
                    />
                ))}

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT COLUMN: Text Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start space-y-8">

                        {/* Animated Badge */}
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200 dark:border-blue-800 text-sm font-semibold text-blue-700 dark:text-blue-300 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <Sparkles size={16} className="animate-pulse" />
                            <span>v2.0 is now live</span>
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        </div>

                        {/* Headline with gradient animation */}
                        <h1
                            className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <span className="text-zinc-900 dark:text-white">Stop Guessing.</span>
                            <br />
                            <div className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                                    Start Knowing.
                                </span>
                                {/* Animated underline with glow */}
                                <div className="absolute -bottom-2 left-0 w-full h-1 overflow-hidden rounded-full">
                                    {/* Base gradient bar */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></span>
                                    {/* Shimmer overlay */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full animate-[shimmer_2s_ease-in-out_infinite]"></span>
                                    {/* Pulsing glow */}
                                    <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-md opacity-50 animate-pulse"></span>
                                </div>
                            </div>
                        </h1>

                        {/* Subheadline */}
                        <p
                            className={`text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            The world's most advanced decision engine. Powered by probability, designed for certainty. Make your next move your best move.
                        </p>

                        {/* CTA Buttons with magnetic effect */}
                        <div
                            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <Link
                                href="#"
                                className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] active:scale-95 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                <span className="relative z-10">Get Started Free</span>
                                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="#"
                                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm px-8 text-sm font-bold text-zinc-900 dark:text-white transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700"
                            >
                                <Play size={16} className="fill-current" />
                                Watch Demo
                            </Link>
                        </div>

                        {/* Animated Stats */}
                        <div
                            className={`pt-8 grid grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            {[
                                { value: "10K+", label: "Companies", icon: TrendingUp },
                                { value: "99.8%", label: "Accuracy", icon: Zap },
                                { value: "14ms", label: "Response", icon: Star }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center lg:items-start gap-1 group">
                                    <div className="flex items-center gap-2">
                                        <stat.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                                        <div className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</div>
                                    </div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT COLUMN: 3D Card with enhanced animations */}
                    <div
                        className={`flex-1 relative w-full max-w-xl lg:max-w-none transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                        style={{
                            transform: `perspective(1000px) rotateY(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 100}deg) rotateX(${-(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) / 100}deg)`
                        }}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2.5rem] blur-3xl opacity-20 animate-pulse"></div>

                        {/* Main card */}
                        <div className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-zinc-200 dark:border-zinc-800 shadow-2xl backdrop-blur-xl overflow-hidden group">
                            {/* Animated gradient border */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                            {/* Content */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg animate-[spin_20s_linear_infinite]">
                                            Y
                                        </div>
                                        <div>
                                            <div className="font-bold text-zinc-900 dark:text-white">Decision Engine</div>
                                            <div className="text-xs text-zinc-500 dark:text-zinc-400">Real-time Analysis</div>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        Active
                                    </div>
                                </div>

                                {/* Animated progress bars */}
                                <div className="space-y-4">
                                    {[
                                        { label: "Confidence Score", value: 98, color: "blue" },
                                        { label: "Data Quality", value: 95, color: "purple" },
                                        { label: "Processing Speed", value: 99, color: "pink" }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-zinc-600 dark:text-zinc-400">{item.label}</span>
                                                <span className="font-bold text-zinc-900 dark:text-white">{item.value}%</span>
                                            </div>
                                            <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full transition-all duration-1000 ease-out`}
                                                    style={{
                                                        width: isVisible ? `${item.value}%` : '0%',
                                                        animationDelay: `${i * 200}ms`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Floating metrics */}
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    {[
                                        { label: "Predictions", value: "1.2M+", trend: "+12%" },
                                        { label: "Accuracy", value: "99.8%", trend: "+2.1%" }
                                    ].map((metric, i) => (
                                        <div key={i} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700 hover:scale-105 transition-transform">
                                            <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{metric.label}</div>
                                            <div className="text-2xl font-bold text-zinc-900 dark:text-white">{metric.value}</div>
                                            <div className="text-xs text-green-600 dark:text-green-400 font-semibold">{metric.trend}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <div className="absolute -top-6 -right-6 px-4 py-2 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-800 animate-[float_3s_ease-in-out_infinite]">
                            <div className="flex items-center gap-2">
                                <Star size={16} className="text-yellow-500 fill-current" />
                                <span className="text-sm font-bold text-zinc-900 dark:text-white">4.9/5</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 px-4 py-2 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-800 animate-[float_3s_ease-in-out_infinite] delay-700">
                            <div className="text-sm font-bold text-zinc-900 dark:text-white">Trusted by 10K+</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom Animations */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    33% { transform: translateY(-20px) translateX(10px); }
                    66% { transform: translateY(-10px) translateX(-10px); }
                }
                
                @keyframes particle {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
                }
                
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    );
}
