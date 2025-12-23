"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Search,
    Phone,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ChevronDown,
    ShoppingBag,
    Menu,
    X,
    Zap,
    Layout,
    Globe,
    LifeBuoy
} from "lucide-react";
import CartDrawer from "./CartDrawer";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    // Handle scroll effect for glassmorphism intensity
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`w-full flex-none sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-lg' : 'bg-white dark:bg-black'}`}>
                {/* 
        =======================================================================
        TOP BAR
        Small, dark, contact info & socials.
        =======================================================================
      */}
                <div className="bg-zinc-950 text-zinc-400 text-xs font-medium py-2.5 px-4 md:px-8 border-b border-zinc-900">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                        {/* Left: Contact */}
                        <div className="flex items-center gap-6">
                            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                                <Phone size={12} className="text-zinc-500" />
                                <span>+1 (800) 123-4567</span>
                            </a>
                            <span className="hidden sm:inline w-px h-3 bg-zinc-800" />
                            <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors duration-200">
                                support@yesistheyes.com
                            </span>
                        </div>

                        {/* Right: Socials & Extras */}
                        <div className="flex items-center gap-4">
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"><Twitter size={14} /></a>
                                <a href="#" className="hover:text-blue-600 transition-colors transform hover:scale-110 duration-200"><Facebook size={14} /></a>
                                <a href="#" className="hover:text-pink-500 transition-colors transform hover:scale-110 duration-200"><Instagram size={14} /></a>
                                <a href="#" className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-200"><Linkedin size={14} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 
        =======================================================================
        MAIN NAVIGATION
        Sticky, glassmorphism, logo, search, mega-menus.
        =======================================================================
      */}
                <nav
                    className={`sticky top-0 w-full z-40 transition-all duration-300 border-b ${isScrolled
                        ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-zinc-200 dark:border-zinc-800 py-3 shadow-sm"
                        : "bg-white dark:bg-black border-transparent py-5"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-8">

                        {/* LOGO */}
                        <Link href="/" className="group flex items-center gap-2 shrink-0">
                            <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-bold text-2xl tracking-tighter shadow-lg group-hover:rotate-3 transition-transform duration-300">
                                Y
                            </div>
                            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:opacity-80 transition-opacity">
                                yesistheyes
                            </span>
                        </Link>

                        {/* DESKTOP MENU - Centered */}
                        <div className="hidden lg:flex items-center gap-1">

                            {/* LINK 1: Simple Link */}
                            <Link
                                href="/"
                                className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                            >
                                Home
                            </Link>

                            {/* LINK 2: MEGAMENU (Products) */}
                            <div className="group relative">
                                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 rounded-full transition-all">
                                    Products
                                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-50" />
                                </button>

                                {/* MEGAMENU DROPDOWN PANEL */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                                    <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-6 border border-zinc-100 dark:border-zinc-800 grid grid-cols-2 gap-8 ring-1 ring-black/5 overflow-hidden relative">

                                        {/* Decorative background blob */}
                                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                                        {/* Column 1 */}
                                        <div className="space-y-4">
                                            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Core Features</h3>
                                            <ul className="space-y-2">
                                                <li className="group/item">
                                                    <a href="#" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                                        <div className="w-10 h-10 mt-1 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover/item:scale-110 transition-transform">
                                                            <Zap size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-zinc-900 dark:text-white">Instant Answers</div>
                                                            <p className="text-xs text-zinc-500 mt-1">Get generated decisions in milliseconds.</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="group/item">
                                                    <a href="#" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                                        <div className="w-10 h-10 mt-1 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover/item:scale-110 transition-transform">
                                                            <Layout size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-zinc-900 dark:text-white">Templates</div>
                                                            <p className="text-xs text-zinc-500 mt-1">drag-and-drop layouts for any mood.</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Column 2 */}
                                        <div className="space-y-4">
                                            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Resources</h3>
                                            <ul className="space-y-4">
                                                <li>
                                                    <a href="#" className="block group/link">
                                                        <div className="flex items-center justify-between text-sm font-medium text-zinc-700 dark:text-zinc-200 group-hover/link:text-blue-600 transition-colors">
                                                            Documentation
                                                            <Globe size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                                        </div>
                                                        <p className="text-xs text-zinc-500 mt-1">Learn how to integrate our API.</p>
                                                    </a>
                                                </li>
                                                <hr className="border-dashed border-zinc-200 dark:border-zinc-800" />
                                                <li>
                                                    <a href="#" className="block group/link">
                                                        <div className="flex items-center justify-between text-sm font-medium text-zinc-700 dark:text-zinc-200 group-hover/link:text-blue-600 transition-colors">
                                                            Support Center
                                                            <LifeBuoy size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                                        </div>
                                                        <p className="text-xs text-zinc-500 mt-1">24/7 help for enterprise plans.</p>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="pt-2">
                                                <a href="#" className="flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-black dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition-opacity">
                                                    View All Integrations
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* LINK 3: Simple Dropdown */}
                            <div className="group relative">
                                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 rounded-full transition-all">
                                    Company
                                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-50" />
                                </button>
                                <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                                    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800 py-1 overflow-hidden">
                                        <a href="#" className="block px-4 py-2.5 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors">About Us</a>
                                        <a href="#" className="block px-4 py-2.5 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors">Careers</a>
                                        <a href="#" className="block px-4 py-2.5 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors">Blog</a>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/"
                                className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                            >
                                Pricing
                            </Link>

                        </div>

                        {/* RIGHT SIDE: Search & Actions */}
                        <div className="flex items-center gap-3">

                            {/* Search Bar */}
                            <div className="hidden md:flex items-center relative group">
                                <Search className="absolute left-3 text-zinc-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 h-10 w-64 bg-zinc-100 dark:bg-zinc-900 border-none rounded-full text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 transition-all"
                                />
                            </div>

                            {/* Cart Icon */}
                            <button
                                className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                                onClick={() => setCartOpen(true)}
                            >
                                <ShoppingBag size={20} className="text-zinc-700 dark:text-zinc-300" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-black" />
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 bg-white transition-colors"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* 
          =======================================================================
          MOBILE MENU
          =======================================================================
        */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-2xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
                            {/* <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-4 pr-4 py-3 placeholder:text-white text-white bg-zinc-100 dark:bg-zinc-900 border-none rounded-lg text-sm focus:outline-none"
                            /> */}
                            <nav className="flex flex-col gap-1">
                                <a href="#" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-zinc-50 text-white">Home</a>
                                <a href="#" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-zinc-50 text-white flex justify-between items-center">
                                    Products <ChevronDown size={14} />
                                </a>
                                <a href="#" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-zinc-50 text-white flex justify-between items-center">
                                    Company <ChevronDown size={14} />
                                </a>
                                <a href="#" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-zinc-50 text-white">Pricing</a>
                            </nav>
                        </div>
                    )}

                </nav>
            </header>
            <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
}
