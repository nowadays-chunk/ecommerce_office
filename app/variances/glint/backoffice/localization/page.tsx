"use client";

import React from 'react';

export default function GlintLocalization() {
    const refracts = [
        { id: 'GL-REG-01', museum: 'Ethereal_East', token: 'LUMEN_EUR', status: 'Radiating' },
        { id: 'GL-REG-02', museum: 'Silent_West', token: 'LUMEN_USD', status: 'Resting' },
        { id: 'GL-REG-03', museum: 'Luminous_North', token: 'LUMEN_JPY', status: 'Refracting' },
    ];

    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] font-light italic flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#ff8fa3]/10 p-12 flex flex-col justify-between shadow-2xl relative">
                <div className="space-y-12">
                    <div className="w-16 h-px bg-[#ff8fa3] shadow-[0_0_20px_#ff8fa3] mb-8"></div>
                    <h2 className="text-3xl font-black tracking-tighter uppercase italic leading-none">GL_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest text-[#ff8fa3]/60">
                        <a href="/variances/glint/backoffice/dashboard" className="block opacity-40 hover:text-[#4a3a4a] transition-all">LUMEN_VIEW</a>
                        <a href="/variances/glint/backoffice/settings" className="block opacity-40 hover:text-[#4a3a4a] transition-all">REFRACTION_CONFIG</a>
                        <a href="#" className="block text-[#4a3a4a] border-b border-[#ff8fa3] pb-2">SPECTRAL_SYNC</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.8em] italic">
                    LUMEN_SYNC_v8.0
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24 bg-[#fffafd] relative overflow-y-auto h-screen">
                <header className="flex justify-between items-end border-b border-[#ff8fa3]/20 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-[#ff8fa3]/60">SPECTRAL_OVERSIGHT // RESONANCE_SYNC_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic text-[#4a3a4a]">THE_SPECTRAL_SYNC.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#4a3a4a] text-white text-[12px] font-black uppercase tracking-widest rounded-full hover:bg-[#ff8fa3] transition-all shadow-2xl">INVOKE_NEW_RESONANCE</button>
                </header>

                <section className="bg-white/60 backdrop-blur-3xl p-20 rounded-[5rem] shadow-2xl border border-[#ff8fa3]/20 space-y-16">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff8fa3]/40">
                        <div className="space-x-12">
                            <button className="text-[#4a3a4a] border-b border-[#ff8fa3] pb-1">AURA_SYMBOLS</button>
                            <button>LUMEN_DIALECTS</button>
                            <button>MUSEUM_LOCI</button>
                        </div>
                        <div className="animate-pulse italic">SYNCING_GLOBAL_LUMENS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest opacity-40 border-b border-[#ff8fa3]/10">
                                <th className="pb-8">LOCUS_ID</th>
                                <th className="pb-8">MUSEUM_TAG</th>
                                <th className="pb-8">LUMEN_TOKEN</th>
                                <th className="pb-8">AURA_SYNC</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black italic uppercase text-[#4a3a4a]">
                            {refracts.map((r) => (
                                <tr key={r.id} className="border-b border-[#ff8fa3]/10 group hover:bg-[#ff8fa3]/5 transition-colors">
                                    <td className="py-10">#{r.id}</td>
                                    <td className="py-10">{r.museum}</td>
                                    <td className="py-10 text-[12px] font-black uppercase tracking-widest text-[#ff8fa3]">{r.token}</td>
                                    <td className="py-10 opacity-40">{r.status}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-sm border border-[#ff8fa3] px-6 py-2 rounded-full hover:bg-[#ff8fa3] hover:text-white transition-all">REFRACT</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-12 skew-x-[-2deg]">
                    <div className="bg-white/40 backdrop-blur-xl p-12 rounded-[4rem] border border-[#ff8fa3]/10 space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">DEFAULT_AURA_VOICE</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-black italic">Radiant_English</p>
                            <button className="text-[#ff8fa3] text-[10px] font-black uppercase hover:underline">SWAP_AETHER</button>
                        </div>
                    </div>
                    <div className="bg-white/40 backdrop-blur-xl p-12 rounded-[4rem] border border-[#ff8fa3]/10 space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">SPECTRAL_DATA_SYNC</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-black italic">Active_Shimmer</p>
                            <div className="w-16 h-1 bg-[#ff8fa3]/20 relative overflow-hidden">
                                <div className="h-full bg-[#ff8fa3] w-[82%] animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
