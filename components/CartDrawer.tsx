"use client";

import React, { useEffect, useState } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const [isRendered, setIsRendered] = useState(false);
    const [isOpenAnimation, setIsOpenAnimation] = useState(false);

    // Handle animation timing
    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
            document.body.style.overflow = "hidden"; // Prevent background scrolling

            // Use a small timeout to ensure the browser paints the 'closed' state first
            // This prevents the drawer from just "appearing" without sliding in
            const timer = setTimeout(() => {
                setIsOpenAnimation(true);
            }, 20);
            return () => clearTimeout(timer);
        } else {
            setIsOpenAnimation(false);
            const timer = setTimeout(() => {
                setIsRendered(false);
                document.body.style.overflow = "";
            }, 300); // Wait for slide-out animation

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isRendered) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpenAnimation ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            />

            {/* Drawer Panel */}
            <div
                className={`fixed top-0 right-0 z-70 h-full w-full sm:w-[400px] bg-white dark:bg-zinc-950 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpenAnimation ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                        <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-lg">
                            <ShoppingBag size={20} />
                        </div>
                        <h2 className="text-lg font-bold text-white">Your Cart</h2>
                        <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold px-2 py-1 rounded-full">3</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Dummy Item 1 */}
                    <div className="flex gap-4 group">
                        <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">👟</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-semibold text-white group-hover:text-blue-600 transition-colors cursor-pointer">Urban Runner V2</h3>
                                <p className="text-sm text-zinc-500">Size: 42 • Color: Black</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="font-bold text-white">$129.00</div>
                                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-1">
                                    <button className="w-6 h-6 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white dark:hover:bg-zinc-800 rounded-md shadow-sm transition-all">
                                        <Minus size={12} />
                                    </button>
                                    <span className="text-xs font-medium w-4 text-center text-white">1</span>
                                    <button className="w-6 h-6 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white dark:hover:bg-zinc-800 rounded-md shadow-sm transition-all">
                                        <Plus size={12} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dummy Item 2 */}
                    <div className="flex gap-4 group">
                        <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🎧</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-semibold text-white group-hover:text-blue-600 transition-colors cursor-pointer">Bass Pro Max</h3>
                                <p className="text-sm text-zinc-500">Color: Space Grey</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="font-bold text-white">$249.00</div>
                                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-1">
                                    <button className="w-6 h-6 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white dark:hover:bg-zinc-800 rounded-md shadow-sm transition-all">
                                        <Minus size={12} />
                                    </button>
                                    <span className="text-xs font-medium w-4 text-center text-white">2</span>
                                    <button className="w-6 h-6 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white dark:hover:bg-zinc-800 rounded-md shadow-sm transition-all">
                                        <Plus size={12} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-zinc-100 dark:border-zinc-800 p-6 space-y-4 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm text-zinc-500">
                            <span>Subtotal</span>
                            <span>$378.00</span>
                        </div>
                        <div className="flex justify-between text-sm text-zinc-500">
                            <span>Taxes</span>
                            <span>$24.50</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                            <span>Total</span>
                            <span>$402.50</span>
                        </div>
                    </div>

                    <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all">
                        Checkout Now <ArrowRight size={18} />
                    </button>
                    <p className="text-xs text-center text-zinc-400">
                        Free shipping on all orders over $500
                    </p>
                </div>
            </div>
        </>
    );
}
