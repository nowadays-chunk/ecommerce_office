"use client";

import React from 'react';

const hardware = [
    { id: '1', name: 'NEURAL_LINK_V2', price: 'Ξ 0.42', category: 'CYBERNETICS', status: 'STABLE', sync: '99.9%' },
    { id: '2', name: 'CRYO_COOL_CORE', price: 'Ξ 0.15', category: 'HARDWARE', status: 'OPTIMAL', sync: '100%' },
    { id: '3', name: 'DATA_SHIELD_PRO', price: 'Ξ 0.88', category: 'SECURITY', status: 'ACTIVE', sync: '94.2%' },
    { id: '4', name: 'VOID_DRIVE_8TB', price: 'Ξ 0.22', category: 'STORAGE', status: 'BOOTING', sync: '88.1%' },
];

export default function TechShop() {
    return (
        <div className="py-20 px-6 lg:px-12 space-y-24 bg-[#080b10] text-[#00f2ff]">
            <header className="max-w-4xl space-y-8 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00f2ff]/5 blur-[100px] pointer-events-none"></div>
                <div className="flex items-center space-x-4">
                    <span className="w-12 h-[1px] bg-[#00f2ff]"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Scanning_Multiverse_Nodes...</span>
                </div>
                <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white uppercase italic">
                    CORE_SUPPLY.
                </h1>
                <p className="text-xl text-[#00f2ff]/40 max-w-2xl font-mono leading-relaxed">
                    [SYSTEM_LOG]: Fetching decentralized hardware inventory. All components are quantum-signed and neural-compatible.
                </p>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {hardware.map((item) => (
                    <div key={item.id} className="group relative bg-[#0a0f18] border border-[#00f2ff]/10 p-10 space-y-8 hover:border-[#00f2ff]/60 transition-all cursor-pointer overflow-hidden">
                        {/* Tech Pattern */}
                        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#00f2ff_1px,transparent_1px),linear-gradient(to_bottom,#00f2ff_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        <div className="relative z-10 flex justify-between items-start">
                            <span className="text-[8px] font-black bg-[#00f2ff]/20 px-2 py-1 border border-[#00f2ff]/40 text-[#00f2ff]">{item.category}</span>
                            <div className="text-right">
                                <p className="text-[8px] opacity-40 uppercase">Sync_Rate</p>
                                <p className="text-xs font-mono">{item.sync}</p>
                            </div>
                        </div>

                        <div className="relative z-10 aspect-square bg-black/40 border-b border-[#00f2ff]/20 flex items-center justify-center group-hover:bg-[#00f2ff]/5 transition-colors">
                            <div className="w-32 h-32 rounded-full border border-[#00f2ff]/20 animate-spin-slow flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full border border-[#00f2ff]/40 flex items-center justify-center">
                                    <span className="text-4xl">💿</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-2xl font-black tracking-tighter text-white group-hover:text-[#00f2ff] transition-colors uppercase italic">{item.name}</h3>
                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <p className="text-[8px] opacity-40 uppercase font-bold tracking-widest">Protocol_Cost</p>
                                    <p className="text-xl font-black text-[#00f2ff]">{item.price}</p>
                                </div>
                                <a href={`/variances/tech/frontoffice/product/${item.id}`} className="w-12 h-12 border border-[#00f2ff]/40 flex items-center justify-center hover:bg-[#00f2ff] hover:text-black transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {/* Sub-Category Scanner */}
            <section className="border-t border-[#00f2ff]/10 py-12 flex flex-wrap gap-8 justify-center">
                {['MODULES', 'INTERFACES', 'UPGRADES', 'PROTOCOLS', 'LEGACY_SUPPORT'].map(cat => (
                    <button key={cat} className="group relative px-8 py-4 overflow-hidden border border-[#00f2ff]/20">
                        <div className="absolute inset-0 bg-[#00f2ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#00f2ff] group-hover:text-black">{cat}</span>
                    </button>
                ))}
            </section>
        </div>
    );
}
