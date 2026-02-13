"use client";

import React from 'react';

export default function TechAdminDashboard() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] font-mono italic flex">
            {/* Sidebar */}
            <aside className="w-80 bg-black/40 backdrop-blur-3xl border-r border-[#00f2ff]/20 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-16 h-16 border-2 border-[#00f2ff] relative flex items-center justify-center group overflow-hidden">
                        <div className="absolute inset-0 bg-[#00f2ff]/20 animate-pulse"></div>
                        <span className="relative font-black text-2xl">CORE</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tighter uppercase skew-x-[-12deg] text-white">SYS_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-[0.3em]">
                        <a href="#" className="block text-white border-l-4 border-[#00f2ff] pl-4">DATA_FEED</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">HARDWARE_BANK</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">STREAM_LOGS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">NODE_CONFIG</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">SYSTEM_LOGS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-[0.8em] animate-pulse">
                    NEURAL_OS_v9.01_STABLE
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-end border-b border-[#00f2ff]/20 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">PRIMARY_NODE_OVERSIGHT // {new Date().toISOString()}</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none text-white skew-x-[-12deg]">DATA_STREAM_METRICS.</h1>
                    </div>
                    <button className="px-12 py-5 bg-gradient-to-r from-[#00f2ff] to-[#0062ff] text-black text-xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all shadow-[0_0_50px_rgba(0,242,255,0.3)]">INITIATE_HANDSHAKE</button>
                </header>

                <div className="grid grid-cols-4 gap-6">
                    <div className="bg-black/60 border border-[#00f2ff]/20 p-12 space-y-6 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 text-[8px] font-black text-[#00f2ff]/20 italic group-hover:text-[#00f2ff] transition-colors">STREAMING...</div>
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">THROUGHPUT_REVENUE</p>
                        <h3 className="text-6xl font-black tracking-tighter text-white uppercase">$1.24M</h3>
                        <p className="text-[12px] font-black text-[#22c55e]">UPLINK_STABLE +18%</p>
                    </div>
                    <div className="bg-black/60 border border-[#00f2ff]/20 p-12 space-y-6 relative group overflow-hidden">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">NEURAL_SYNC_RATE</p>
                        <h3 className="text-6xl font-black tracking-tighter text-white uppercase">99.8%</h3>
                        <p className="text-[12px] font-black text-[#00f2ff]">CORE_OPTIMIZED</p>
                    </div>
                    <div className="bg-black/60 border border-[#00f2ff]/20 p-12 space-y-6 relative group overflow-hidden">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">ACTIVE_NODES</p>
                        <h3 className="text-6xl font-black tracking-tighter text-white uppercase">4.2K</h3>
                        <p className="text-[12px] font-black text-[#00f2ff]">LOAD_BALANCED</p>
                    </div>
                    <div className="bg-black/60 border border-[#00f2ff]/20 p-12 space-y-6 relative group overflow-hidden">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">LATENCY_INDEX</p>
                        <h3 className="text-6xl font-black tracking-tighter text-white uppercase">0.1ms</h3>
                        <p className="text-[12px] font-black text-[#00f2ff]">QUANTUM_SYNC</p>
                    </div>
                </div>

                <section className="bg-black/40 border border-[#00f2ff]/10 p-16 space-y-12 shadow-inner">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white skew-x-[-6deg]">CORE_DATA_LOGS.</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest text-[#00f2ff]/40 border-b border-[#00f2ff]/10">
                                <th className="pb-8">NODE_ID</th>
                                <th className="pb-8">STREAM_TYPE</th>
                                <th className="pb-8">LOAD</th>
                                <th className="pb-8">STATUS</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black uppercase tracking-tighter text-white/80">
                            <tr className="border-b border-[#00f2ff]/5 group hover:bg-[#00f2ff]/5">
                                <td className="py-10">#ND-11092</td>
                                <td className="py-10">SILICON_V8_SYNC</td>
                                <td className="py-10">42GB/S</td>
                                <td className="py-10 text-[#00f2ff]">STABLE</td>
                            </tr>
                            <tr className="border-b border-[#00f2ff]/5 group hover:bg-[#00f2ff]/5">
                                <td className="py-10">#ND-11088</td>
                                <td className="py-10">NEURAL_MESH_V2</td>
                                <td className="py-10">1.2TB/S</td>
                                <td className="py-10 text-[#00f2ff]">OPTIMIZING</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
