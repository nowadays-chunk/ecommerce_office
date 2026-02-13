"use client";

import React from 'react';

export default function ZenSettings() {
    const tribe = [
        { id: 'ZN-ADM-01', name: 'Elder Silas', role: 'Root_Guardian', focus: 'All_Sanctuaries' },
        { id: 'ZN-ADM-08', name: 'Luna Spirit', role: 'Seed_Keeper', focus: 'Harvest_Logs' },
        { id: 'ZN-ADM-12', name: 'River Flow', role: 'Aura_Guide', focus: 'Tribe_Support' },
    ];

    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-serif italic flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#2d3a3a]/5 p-12 flex flex-col justify-between shadow-2xl">
                <div className="space-y-12">
                    <div className="w-12 h-12 bg-[#22c55e]/20 rounded-full mx-auto"></div>
                    <h2 className="text-3xl font-bold tracking-tighter uppercase italic text-center">ZEN_CORE.</h2>
                    <nav className="space-y-8 text-[10px] font-black uppercase tracking-widest">
                        <a href="/variances/zen/backoffice/dashboard" className="block opacity-40 hover:opacity-100 transition-opacity">HARMONY_VIEW</a>
                        <a href="/variances/zen/backoffice/products" className="block opacity-40 hover:opacity-100 transition-opacity">GARDEN_STOCK</a>
                        <a href="/variances/zen/backoffice/orders" className="block opacity-40 hover:opacity-100 transition-opacity">SOUL_CYCLES</a>
                        <a href="/variances/zen/backoffice/marketing" className="block opacity-40 hover:opacity-100 transition-opacity">TRIBE_REWARDS</a>
                        <a href="/variances/zen/backoffice/analytics" className="block opacity-40 hover:opacity-100 transition-opacity">GROWTH_FLOW</a>
                        <a href="#" className="block text-[#22c55e]">TRIBE_CONFIG</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-[0.3em] text-center">
                    NATURAL_VIBRATION // v2.0
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-center bg-white p-12 rounded-[3rem] shadow-xl border-4 border-white">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e]">TRIBE_CONTROL // OCT 12, 2025</p>
                        <h1 className="text-5xl font-bold tracking-tighter uppercase leading-none italic">THE_TRIBE_CONFIG.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#22c55e] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#2d3a3a] transition-all shadow-lg">INVITE_SPIRIT</button>
                </header>

                <section className="bg-white p-16 rounded-[4rem] shadow-2xl border-4 border-white space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40 px-4">
                        <div className="space-x-12">
                            <button className="text-[#22c55e] border-b-4 border-[#22c55e]">ALL_GUARDIANS</button>
                            <button>SPIRITUAL_ROLES</button>
                            <button>PEACE_LOGS</button>
                        </div>
                        <div className="italic">NURTURING_TRIBE_LINKS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b-4 border-[#faf9f6]">
                                <th className="pb-8">SPIRIT_ID</th>
                                <th className="pb-8">MEMBER_NAME</th>
                                <th className="pb-8">SOUL_ROLE</th>
                                <th className="pb-8">ENERGY_FOCUS</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-bold italic">
                            {tribe.map((m) => (
                                <tr key={m.id} className="border-b-4 border-[#faf9f6] hover:bg-[#faf9f6]/40 transition-colors">
                                    <td className="py-10">#{m.id}</td>
                                    <td className="py-10">{m.name}</td>
                                    <td className="py-10 text-[12px] font-black uppercase tracking-widest text-[#22c55e]">{m.role}</td>
                                    <td className="py-10 opacity-40">{m.focus}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-[10px] font-black text-[#22c55e] border-2 border-[#22c55e] px-6 py-2 rounded-full hover:bg-[#22c55e] hover:text-white transition-all">RELEASE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="bg-[#22c55e] text-white p-16 rounded-[4rem] space-y-8 shadow-[0_30px_60px_-12px_rgba(34,197,94,0.3)]">
                    <h3 className="text-3xl font-bold tracking-tighter uppercase italic">ETERNAL_STABILITY_LOCK.</h3>
                    <p className="text-sm font-bold opacity-80 leading-relaxed italic">
                        The core harmony of the system is rooted in natural law. Any structural adjustments to the communal garden require the collective breathing of the Elder Council. Changes will bloom only after a full lunar cycle of silent reflection.
                    </p>
                </div>
            </main>
        </div>
    );
}
