import Link from "next/link";
import { Twitter, Github, Linkedin, Instagram, Send, Globe, Radio } from "lucide-react";

const navigation = {
    product: [
        { name: 'Features', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Changelog', href: '#' },
        { name: 'Docs', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Customers', href: '#' },
        { name: 'Brand', href: '#' },
        { name: 'Contact', href: '#' },
    ],
    resources: [
        { name: 'Community', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'Developers', href: '#' },
    ],
    legal: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'License', href: '#' },
        { name: 'Cookies', href: '#' },
        { name: 'Security', href: '#' },
    ],
    social: [
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'GitHub', href: '#', icon: Github },
        { name: 'LinkedIn', href: '#', icon: Linkedin },
        { name: 'Instagram', href: '#', icon: Instagram },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pt-16 lg:px-8 lg:pt-20 ">

                {/* Top Section: Newsletter & Brand */}
                <div className="xl:grid xl:grid-cols-3 xl:gap-8 mb-10 ">
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black font-bold text-xl">
                                Y
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                                Yes Engine
                            </span>
                        </div>
                        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 max-w-sm">
                            Making the world's decisions faster, smarter, and deeper. Built for the future of intelligence.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Form */}
                    <div className="mt-16 xl:mt-0 xl:col-span-2">
                        <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 md:p-10 border border-zinc-100 dark:border-zinc-800 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative z-10 lg:flex lg:items-center lg:justify-between gap-10">
                                <div className="text-left mb-6 lg:mb-0">
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Subscribe to our newsletter</h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                        The latest AI trends, sent to your inbox weekly. No spam, ever.
                                    </p>
                                </div>
                                <form className="flex-1 flex gap-2 max-w-md">
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2.5 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-full bg-zinc-900 dark:bg-white px-4 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-opacity"
                                    >
                                        <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="mt-10 grid grid-cols-2 max-w-7xl mx-auto gap-8 md:grid-cols-4 lg:gap-16 border-t border-zinc-900/10 dark:border-white/10 pt-10">
                    <div>
                        <h3 className="font-semibold leading-6 text-zinc-900 dark:text-white">Product</h3>
                        <ul role="list" className="mt-3 space-y-2">
                            {navigation.product.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="leading-6 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold leading-6 text-zinc-900 dark:text-white">Company</h3>
                        <ul role="list" className="mt-3 space-y-2">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="leading-6 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold leading-6 text-zinc-900 dark:text-white">Resources</h3>
                        <ul role="list" className="mt-3 space-y-2">
                            {navigation.resources.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="leading-6 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold leading-6 text-zinc-900 dark:text-white">Legal</h3>
                        <ul role="list" className="mt-3 space-y-2">
                            {navigation.legal.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="leading-6 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-zinc-900/10 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs leading-5 text-zinc-500">
                        &copy; 2024 Yes Engine Inc. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors">
                            <Globe size={14} />
                            <span>English (US)</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-green-500 cursor-pointer transition-colors">
                            <div className="w-2 h-2 rounded-full bg-green-500">
                                <div className="w-full h-full rounded-full bg-green-500 animate-ping opacity-75"></div>
                            </div>
                            <span>All Systems Normal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
