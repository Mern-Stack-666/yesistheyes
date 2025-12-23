"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Rocket, Users2, Building2 } from "lucide-react";

const useCases = [
    {
        title: "Fraud Detection",
        description: "Real-time risk scoring for financial transactions with 99.8% accuracy. Reduce false positives by 85%.",
        icon: Sparkles,
        gradient: "from-red-500 to-orange-500",
        stats: ["85% fewer false positives", "< 10ms detection time"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
        title: "Customer Churn",
        description: "Predict customer lifetime value and churn risk 90 days in advance. Increase retention by 40%.",
        icon: Users2,
        gradient: "from-blue-500 to-cyan-500",
        stats: ["40% retention boost", "90-day forecasting"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
        title: "Demand Forecasting",
        description: "Optimize inventory with ML-powered demand prediction. Cut waste by 60% and stockouts by 75%.",
        icon: Rocket,
        gradient: "from-purple-500 to-pink-500",
        stats: ["60% less waste", "75% fewer stockouts"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    },
    {
        title: "Enterprise Ops",
        description: "Automate complex business decisions at scale. Deploy custom models in hours, not months.",
        icon: Building2,
        gradient: "from-emerald-500 to-teal-500",
        stats: ["Deploy in hours", "Infinite scale"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    }
];

export default function UseCases() {
    const [isVisible, setIsVisible] = useState(false);
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
        <section ref={sectionRef} className="py-16 bg-zinc-50 dark:bg-black" id="use-cases">
            <div className="container max-w-7xl mx-auto px-4">

                <div className={`max-w-3xl mx-auto text-center mb-16 space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Built for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                            real problems.
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        See how leading companies use Yes Engine to make critical decisions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{
                                transitionDelay: `${index * 150}ms`
                            }}
                        >
                            {/* Image Background */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-zinc-900/60 dark:bg-black/60 z-10"></div>
                                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-40 z-20 mix-blend-multiply dark:mix-blend-screen`}></div>

                                <img
                                    src={useCase.image}
                                    alt={useCase.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Icon Badge */}
                                <div className="absolute top-6 left-6 z-30">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                        <useCase.icon size={24} />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-4">
                                <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${useCase.gradient}`}>
                                    {useCase.title}
                                </h3>

                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {useCase.description}
                                </p>

                                {/* Stats Pills */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {useCase.stats.map((stat, i) => (
                                        <div
                                            key={i}
                                            className="px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                                        >
                                            {stat}
                                        </div>
                                    ))}
                                </div>

                                {/* Progress bar */}
                                {/* <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${useCase.gradient} rounded-full transition-all duration-1000 ease-out`}
                                        style={{
                                            width: isVisible ? '100%' : '0%',
                                            transitionDelay: `${index * 150 + 500}ms`
                                        }}
                                    ></div>
                                </div> */}
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl`}></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
