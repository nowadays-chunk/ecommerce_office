"use client";

import React from 'react';

export default function GlintSettings() {
    const muses = [
        { id: 'GL-ADM-01', name: 'Isabella Grace', role: 'Radiant_Curator', depth: 'All_Aesthetics' },
        { id: 'GL-ADM-08', name: 'Sophia Moon', role: 'Aura_Architect', depth: 'Sync_Engines' },
        { id: 'GL-ADM-12', name: 'Luna Refraction', role: 'Lumen_Guardian', depth: 'Archive_Only' },
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
                        <a href="/variances/glint/backoffice/products" className="block opacity-40 hover:text-[#4a3a4a] transition-all">AURA_VAULT</a>
                        <a href="/variances/glint/backoffice/orders" className="block opacity-40 hover:text-[#4a3a4a] transition-all">RITUAL_LOGS</a>
                        <a href="/variances/glint/backoffice/marketing" className="block opacity-40 hover:text-[#4a3a4a] transition-all">MEMBER_REFRACTION</a>
                        <a href="/variances/glint/backoffice/analytics" className="block opacity-40 hover:text-[#4a3a4a] transition-all">SHIMMER_STATS</a>
                        <a href="#" className="block text-[#4a3a4a] border-b border-[#ff8fa3] pb-2">REFRACTION_CONFIG</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-[#ff8fa3]/60">OVERSIGHT_CONTROL // REFRACTION_SYNC_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic text-[#4a3a4a]">THE_REFRACTION_CONFIG.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#4a3a4a] text-white text-[12px] font-black uppercase tracking-widest rounded-full hover:bg-[#ff8fa3] transition-all shadow-2xl">INVOKE_NEW_MUSE</button>
                </header>

                <section className="bg-white/60 backdrop-blur-3xl p-20 rounded-[5rem] shadow-2xl border border-[#ff8fa3]/20 space-y-16">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff8fa3]/40">
                        <div className="space-x-12">
                            <button className="text-[#4a3a4a] border-b border-[#ff8fa3] pb-1">ALL_MUSES</button>
                            <button>AURAKEY_LEVELS</button>
                            <button>SYNC_HISTORY</button>
                        </div>
                        <div className="animate-pulse italic">DECRYPTING_AURA_IDENTITIES...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest opacity-40 border-b border-[#ff8fa3]/10">
                                <th className="pb-8">MUSE_ID</th>
                                <th className="pb-8">IDENTITY_NAME</th>
                                <th className="pb-8">RADIANT_ROLE</th>
                                <th className="pb-8">ACCESS_DEPTH</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black italic uppercase text-[#4a3a4a]">
                            {muses.map((m) => (
                                <tr key={m.id} className="border-b border-[#ff8fa3]/10 group hover:bg-[#ff8fa3]/5 transition-colors">
                                    <td className="py-10">#{m.id}</td>
                                    <td className="py-10">{m.name}</td>
                                    <td className="py-10 text-[12px] font-black uppercase tracking-widest text-[#ff8fa3]">{m.role}</td>
                                    <td className="py-10 opacity-40">{m.depth}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-sm border border-[#ff8fa3] px-6 py-2 rounded-full hover:bg-[#ff8fa3] hover:text-white transition-all">DISSOLVE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="bg-white/40 backdrop-blur-xl p-16 rounded-[4rem] border border-[#ff8fa3]/10 space-y-8 shadow-inner">
                    <h3 className="text-3xl font-black tracking-tighter uppercase italic text-[#4a3a4a]">ETH_SHIMMER_LOCK.</h3>
                    <p className="text-sm font-black opacity-40 leading-relaxed uppercase tracking-[0.2em]">
                        THE CORE REFRACTION ENGINE IS PROTECTED BY ETHEREAL AUTHENTICATION. ANY MODIFICATIONS TO THE SYSTEM AURA REQUIRE THE COLLECTIVE RESONANCE OF THE RADIANT CURATORS. ALL ACCESS IS LOGGED IN THE LUMEN ARCHIVE.
                    </p>
                </div>
            </main>
        </div>
    );
}
