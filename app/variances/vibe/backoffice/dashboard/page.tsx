"use client";

import React from 'react';

export default function VibeAdminDashboard() {
    return (
        <div className="min-h-screen bg-[#fef6e4] text-[#023047] font-serif italic flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r-4 border-[#023047] p-12 flex flex-col justify-between shadow-[8px_0_0_rgba(15,15,15,0.05)]">
                <div className="space-y-12">
                    <div className="text-4xl font-black tracking-tighter text-[#fb8500] uppercase skew-x-[-12deg]">Studio_Ctrl</div>
                    <nav className="space-y-8 text-xs font-black uppercase tracking-widest italic">
                        <a href="#" className="block text-[#fb8500] border-b-2 border-[#fb8500] w-fit">001_MASTER_DESK</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-all hover:translate-x-2">002_THE_VARS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-all hover:translate-x-2">003_SHIP_TRACKS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-all hover:translate-x-2">004_CLIENT_LIST</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-all hover:translate-x-2">005_TAPE_ARCHIVE</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-[0.4em] rotate-1">
                    ANALOG_ENGINE // v3.33_RPM
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-start border-b-4 border-[#023047]/10 pb-12">
                    <div className="space-y-4">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#fb8500]">SESSION_LOG // {new Date().toLocaleDateString()}</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none text-[#023047] skew-x-[-6deg]">GROOVE_ANALYTICS.</h1>
                    </div>
                    <button className="px-16 py-6 bg-[#fb8500] text-white text-xl font-black uppercase tracking-tighter -skew-x-12 hover:rotate-2 transition-transform shadow-lg">CUT_NEW_VINYL</button>
                </header>

                <div className="grid grid-cols-3 gap-12">
                    <div className="bg-white p-12 border-4 border-[#023047] shadow-[12px_12px_0_#ffb703] space-y-6">
                        <p className="text-xs font-black opacity-40 uppercase tracking-widest">CRATE_REVENUE</p>
                        <h3 className="text-6xl font-black tracking-tighter text-[#023047]">$128.4K</h3>
                        <div className="h-1 w-24 bg-[#fb8500]"></div>
                        <p className="text-sm font-bold text-[#fb8500]">WARM_UPS+12%</p>
                    </div>
                    <div className="bg-[#023047] p-12 text-[#fef6e4] shadow-[12px_12px_0_#219ebc] space-y-6">
                        <p className="text-xs font-black opacity-40 uppercase tracking-widest text-[#219ebc]">PRESSING_RATE</p>
                        <h3 className="text-6xl font-black tracking-tighter">98.2%</h3>
                        <div className="h-1 w-24 bg-[#219ebc]"></div>
                        <p className="text-sm font-bold opacity-60">HIGH_FIDELITY</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#219ebc] shadow-[12px_12px_0_#8ecae6] space-y-6">
                        <p className="text-xs font-black opacity-40 uppercase tracking-widest">LISTENERS_ON_DECK</p>
                        <h3 className="text-6xl font-black tracking-tighter text-[#023047]">4.2K</h3>
                        <div className="h-1 w-24 bg-[#219ebc]"></div>
                        <p className="text-sm font-bold text-[#219ebc]">AMPLIFIED_SYNC</p>
                    </div>
                </div>

                <section className="bg-white/50 backdrop-blur-sm p-16 border-4 border-[#023047] space-y-12 shadow-2xl">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#023047]">RECENT_PLAYBACK_LOGS.</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-xs font-black uppercase tracking-widest text-[#023047]/40 border-b-4 border-[#023047]">
                                <th className="pb-8">TRACK_ID</th>
                                <th className="pb-8">LISTENER</th>
                                <th className="pb-8">VERSION</th>
                                <th className="pb-8">OUTPUT</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black uppercase italic tracking-tighter">
                            <tr className="border-b-2 border-[#023047]/10 group hover:bg-[#ffb703]/20">
                                <td className="py-10">#SL-8801</td>
                                <td className="py-10">M. Davis</td>
                                <td className="py-10">Blue In Green</td>
                                <td className="py-10 text-[#fb8500]">REMASTERED</td>
                            </tr>
                            <tr className="border-b-2 border-[#023047]/10 group hover:bg-[#219ebc]/20">
                                <td className="py-10">#SL-8798</td>
                                <td className="py-10">J. Coltrane</td>
                                <td className="py-10">A Love Supreme</td>
                                <td className="py-10 text-[#219ebc]">SENT_TO_LATHE</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
