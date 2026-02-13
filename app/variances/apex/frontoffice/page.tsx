import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Apex Gear - Elite Competitive Hardware",
    description: "Dominate the arena with pro-grade gaming hardware. Level up your setup with Gen-9 certified gear.",
    keywords: ["gaming gear", "competitive gaming", "high-performance PC", "pro hardware", "Apex gear"],
};

const hardware = [
    { id: 1, name: 'QUANTUM TITAN GPU', price: '$1,499', fps: '+420 FPS', tag: 'ULTRA', color: 'border-[#a855f7]/40' },
    { id: 2, name: 'OMEGA MECH KEYBOARD', price: '$189', fps: '0.1ms LATENCY', tag: 'PRO', color: 'border-[#06b6d4]/40' },
    { id: 3, name: 'NEON SIGHT MONITOR', price: '$850', fps: '360Hz REFRESH', tag: 'ELITE', color: 'border-[#22c55e]/40' },
    { id: 4, name: 'VOID SYNC HEADSET', price: '$220', fps: '7.1 SPATIAL', tag: 'SOUND', color: 'border-[#f97316]/40' },
];

export default function ApexHome() {
    return (
        <div className="space-y-32 pb-32">
            {/* Hero Intro */}
            <section className="relative h-screen flex items-center bg-black overflow-hidden pt-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10 relative z-10">
                        <div className="inline-flex items-center space-x-4 px-4 py-2 bg-gradient-to-r from-[#a855f7]/20 to-transparent border-l-4 border-[#a855f7]">
                            <span className="text-[10px] text-white font-black uppercase tracking-[0.3em]">System_Overload_Detected // Level_10_Admin_Access</span>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-[0.85] uppercase">
                            ELITE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-[#06b6d4] to-[#22c55e]">EQUIPMENT.</span>
                        </h1>
                        <p className="text-xl text-white/40 max-w-lg font-bold italic leading-relaxed">
                            Ascend to the top of the leaderboard with hardware forged in the fires of competitive play.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 pt-8">
                            <button className="px-12 py-6 bg-white text-black font-black uppercase italic tracking-tighter hover:bg-[#a855f7] hover:text-white transition-all shadow-[0_0_50px_rgba(168,85,247,0.3)] skew-x-[-12deg]">
                                ENTER_ARMORY
                            </button>
                            <button className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase italic tracking-tighter hover:border-[#06b6d4] transition-all skew-x-[-12deg]">
                                RECRUIT_DEALS
                            </button>
                        </div>
                    </div>
                    <div className="relative group hidden lg:block">
                        <div className="aspect-square bg-white/5 border-2 border-white/5 p-2 rounded-3xl overflow-hidden relative skew-y-3">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/20 to-[#06b6d4]/20 animate-pulse"></div>
                            <img
                                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[3000ms]"
                                alt="Gaming Setup"
                            />
                            <div className="absolute bottom-8 left-8 text-black bg-white px-6 py-2 skew-x-[-12deg] font-black italic">
                                GEN_9_CERTIFIED
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hardware Feed */}
            <section className="max-w-7xl mx-auto px-6 space-y-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-10">
                    <div>
                        <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter italic">LATEST_HARDWARE</h2>
                        <p className="text-[10px] text-white/20 font-black uppercase tracking-widest mt-2">Update_Log: Feb 2024 Stable_Build</p>
                    </div>
                    <div className="flex space-x-1">
                        {['GPU', 'CPU', 'MOUSE', 'RIGS'].map(t => (
                            <button key={t} className="px-6 py-3 border border-white/5 text-white/40 font-black text-[10px] uppercase hover:border-[#a855f7] hover:text-[#a855f7] transition-all">{t}</button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hardware.map((item) => (
                        <div key={item.id} className={`bg-[#0a0a0a] border-2 ${item.color} p-8 space-y-8 hover:bg-zinc-900 transition-all cursor-pointer group relative overflow-hidden`}>
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rotate-45 group-hover:bg-[#a855f7]/10 transition-colors"></div>
                            <div className="space-y-4">
                                <span className="text-[8px] font-black px-3 py-1 bg-white/5 text-white border border-white/10 uppercase italic">{item.tag}</span>
                                <h3 className="text-xl font-black italic text-white tracking-tighter group-hover:text-[#a855f7] transition-colors">{item.name}</h3>
                            </div>
                            <div className="p-4 bg-black border border-white/5 space-y-1">
                                <p className="text-[8px] font-black text-white/40 uppercase">Performance_Data</p>
                                <p className="text-lg font-black text-[#22c55e] italic">{item.fps}</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="text-2xl font-black text-white tracking-tighter">{item.price}</span>
                                <button className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pro Stats */}
            <section className="bg-gradient-to-b from-black to-[#050505] py-40 border-y border-white/5 relative">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150">🎮</div>
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white leading-none uppercase">JOIN_THE_ELITE</h2>
                    <p className="text-xl font-bold text-white/40 italic">Apex gear isn't just about the hardware. It's about joining a network of champions. Sync your stats, join tournaments, and dominate.</p>
                    <div className="grid grid-cols-3 gap-8 pt-12 text-white">
                        <div>
                            <p className="text-3xl font-black italic text-[#a855f7]">12M+</p>
                            <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">Active_Players</p>
                        </div>
                        <div className="border-x border-white/5">
                            <p className="text-3xl font-black italic text-[#06b6d4]">0.01ms</p>
                            <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">Response_Time</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black italic text-[#22c55e]">98%</p>
                            <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">Pro_Adoption</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
