"use client";

import React from 'react';

export default function GrubAdminDashboard() {
    return (
        <div className="min-h-screen bg-[#fffdfa] text-[#2d1e12] font-sans flex">
            {/* Sidebar */}
            <aside className="w-72 bg-[#f4ece4] p-10 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#ff6b35] rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg">G</div>
                        <h2 className="text-2xl font-black tracking-tight text-[#2d1e12]">GRUB_HQ</h2>
                    </div>
                    <nav className="space-y-2">
                        <a href="#" className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm text-[#ff6b35] font-bold">
                            <span>01 Kitchen View</span>
                        </a>
                        <a href="#" className="flex items-center space-x-4 p-4 opacity-50 hover:opacity-100 font-bold transition-all">
                            <span>02 Pantry Stock</span>
                        </a>
                        <a href="#" className="flex items-center space-x-4 p-4 opacity-50 hover:opacity-100 font-bold transition-all">
                            <span>03 Order Flow</span>
                        </a>
                        <a href="#" className="flex items-center space-x-4 p-4 opacity-50 hover:opacity-100 font-bold transition-all">
                            <span>04 Guest List</span>
                        </a>
                        <a href="#" className="flex items-center space-x-4 p-4 opacity-50 hover:opacity-100 font-bold transition-all">
                            <span>05 Kitchen Settings</span>
                        </a>
                    </nav>
                </div>
                <div className="text-[10px] font-bold opacity-30 uppercase tracking-widest text-center">
                    CHEF_OS_v2.0_STABLE
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-16 space-y-16">
                <header className="flex justify-between items-center">
                    <div className="space-y-1">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#ff6b35]">Live Service // {new Date().toLocaleTimeString()}</p>
                        <h1 className="text-5xl font-black tracking-tight text-[#2d1e12]">Pantry & Profits.</h1>
                    </div>
                    <button className="px-10 py-4 bg-[#ff6b35] text-white rounded-2xl font-black text-lg hover:bg-[#e85a2a] transition-all shadow-[0_10px_0_#e85a2a] active:translate-y-2 active:shadow-none uppercase">Fire New Order</button>
                </header>

                <div className="grid grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-[#f4ece4] space-y-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b35]/5 rounded-full -translate-x-12 -translate-y-12"></div>
                        <p className="text-xs font-bold text-[#2d1e12]/40 uppercase tracking-widest">Kitchen Revenue</p>
                        <h3 className="text-5xl font-black text-[#2d1e12]">$82.4K</h3>
                        <p className="text-sm font-bold text-green-500 flex items-center">
                            <span>+15% Warm Up</span>
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-[#f4ece4] space-y-4">
                        <p className="text-xs font-bold text-[#2d1e12]/40 uppercase tracking-widest">Table Turn Rate</p>
                        <h3 className="text-5xl font-black text-[#2d1e12]">42m</h3>
                        <p className="text-sm font-bold text-[#ff6b35]">PEAK PERFORMANCE</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-[#f4ece4] space-y-4">
                        <p className="text-xs font-bold text-[#2d1e12]/40 uppercase tracking-widest">Active Chefs</p>
                        <h3 className="text-5xl font-black text-[#2d1e12]">12</h3>
                        <p className="text-sm font-bold text-[#2d1e12]/60">FULL BRIGADE</p>
                    </div>
                </div>

                <section className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-[#f4ece4] space-y-10">
                    <h2 className="text-3xl font-black tracking-tight text-[#2d1e12]">Preparation Queue.</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-xs font-bold uppercase tracking-widest text-[#2d1e12]/30 border-b-4 border-[#fffdfa]">
                                <th className="pb-6">Ticket</th>
                                <th className="pb-6">Order</th>
                                <th className="pb-6">Prep Time</th>
                                <th className="pb-6">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-lg font-bold">
                            <tr className="border-b-4 border-[#fffdfa]">
                                <td className="py-8 text-[#ff6b35]">#TK-4402</td>
                                <td className="py-8">Spiced Lamb Platter (x3)</td>
                                <td className="py-8 italic text-[#2d1e12]/60">12m remain</td>
                                <td className="py-8"><span className="px-5 py-2 bg-orange-100 text-orange-600 rounded-full text-xs uppercase font-black">On the Fire</span></td>
                            </tr>
                            <tr className="border-b-4 border-[#fffdfa]">
                                <td className="py-8 text-[#ff6b35]">#TK-4401</td>
                                <td className="py-8">Truffle Gnudi + Barolo</td>
                                <td className="py-8 italic text-[#2d1e12]/60">Ready</td>
                                <td className="py-8"><span className="px-5 py-2 bg-green-100 text-green-600 rounded-full text-xs uppercase font-black">At the Pass</span></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
