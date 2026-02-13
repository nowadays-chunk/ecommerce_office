"use client";

import React from 'react';

export default function TechAnalytics() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black/40 backdrop-blur-3xl border-r border-[#00f2ff]/20 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-16 h-16 border-2 border-[#00f2ff] relative flex items-center justify-center group overflow-hidden">
                        <div className="absolute inset-0 bg-[#00f2ff]/20 animate-pulse"></div>
                        <span className="relative font-black text-2xl text-white">CORE</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tighter uppercase skew-x-[-12deg] text-white">SYS_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-[0.3em]">
                        <a href="/variances/tech/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">DATA_FEED</a>
                        <a href="/variances/tech/backoffice/products" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">HARDWARE_BANK</a>
                        <a href="/variances/tech/backoffice/orders" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">STREAM_LOGS</a>
                        <a href="/variances/tech/backoffice/marketing" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">PROMO_SYNC</a>
                        <a href="#" className="block text-white border-l-4 border-[#00f2ff] pl-4">DATA_ANALYTICS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-[0.8em] animate-pulse">
                    NEURAL_OS_v9.01_STABLE
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24 h-screen overflow-y-auto">
                <header className="flex justify-between items-end border-b border-[#00f2ff]/20 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">DATA_INTELLIGENCE // QUANTUM_GRID_v9.01</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none text-white skew-x-[-12deg]">SYSTEM_METRICS.</h1>
                    </div>
                    <button className="px-12 py-5 border border-[#00f2ff] text-[#00f2ff] text-xl font-black uppercase tracking-tighter hover:shadow-[0_0_50px_#00f2ff] transition-all">FULL_SCAN</button>
                </header>

                <section className="grid grid-cols-2 gap-12">
                    <div className="bg-black/60 border-2 border-[#00f2ff]/40 p-16 space-y-12 shadow-[0_0_80px_rgba(0,242,255,0.1)] relative group overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00f2ff]/5 rounded-full blur-3xl group-hover:bg-[#00f2ff]/20 transition-all"></div>
                        <p className="text-sm font-black uppercase tracking-[0.5em] text-[#00f2ff]/60">NEURAL_STABILITY_INDEX</p>
                        <h3 className="text-8xl font-black tracking-tighter text-white">99.98%</h3>
                        <div className="flex space-x-1 h-12">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div key={i} className={`flex-1 ${Math.random() > 0.1 ? 'bg-[#00f2ff]' : 'bg-[#00f2ff]/20'} animate-pulse`} style={{ animationDelay: `${i * 100}ms` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-black/60 border-2 border-[#b026ff]/40 p-16 space-y-12 shadow-[0_0_80px_rgba(176,38,255,0.1)] border-l-8">
                        <p className="text-sm font-black uppercase tracking-[0.5em] text-[#b026ff]/60">QUANTUM_TRANSFERS_SEC</p>
                        <h3 className="text-8xl font-black tracking-tighter text-white">1.4 PB</h3>
                        <div className="h-4 bg-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ff] to-[#b026ff] w-[75%] animate-shimmer"></div>
                        </div>
                    </div>
                </section>

                <section className="bg-black/40 border border-[#00f2ff]/10 p-16 space-y-12 relative h-64">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40">
                        <span>LOAD_BALANCER_TELEMETRY</span>
                        <span className="animate-pulse">DECRYPTING_STREAM...</span>
                    </div>
                    <div className="flex items-center justify-center space-x-24 opacity-20">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="w-1 h-32 bg-[#00f2ff] animate-ping" style={{ animationDelay: `${i * 400}ms` }}></div>
                        ))}
                    </div>
                    <div className="absolute bottom-8 left-16 right-16 flex justify-between text-[10px] font-black text-[#00f2ff]/20">
                        <span>NODE_001</span>
                        <span>NODE_042</span>
                        <span>NODE_088</span>
                        <span>NODE_124</span>
                    </div>
                </section>
            </main>
        </div>
    );
}
