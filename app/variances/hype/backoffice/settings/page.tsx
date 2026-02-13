"use client";

import React from 'react';

export default function HypeSettings() {
    const ops = [
        { id: 'HY-ADM-99', name: 'Controller_X', role: 'GRID_LORD', nodes: 'ROOT_ACCESS' },
        { id: 'HY-ADM-88', name: 'Specter_V8', role: 'CODE_SHREDDER', nodes: 'INVENTORY_ONLY' },
        { id: 'HY-ADM-77', name: 'Null_Operative', role: 'LOGS_CLEANER', nodes: 'DISPATCH_LOGS' },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black border-r-8 border-white p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-white text-black font-black flex items-center justify-center text-4xl -skew-x-12">H_A</div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase -skew-x-12">GRID_CONTROL.</h2>
                    <nav className="space-y-8 text-xl font-black uppercase tracking-tighter">
                        <a href="/variances/hype/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">01_METRICS</a>
                        <a href="/variances/hype/backoffice/products" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">02_INVENTORY</a>
                        <a href="/variances/hype/backoffice/orders" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">03_DISPATCH</a>
                        <a href="/variances/hype/backoffice/marketing" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">04_CAMPAIGNS</a>
                        <a href="/variances/hype/backoffice/analytics" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">05_GRID_DATA</a>
                        <a href="#" className="block bg-[#ff0000] text-white px-4 py-1 -skew-x-6">06_NODE_CONFIG</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.5em] -rotate-90 origin-left translate-y-24 translate-x-4">
                    DISRUPTIVE_ENGINE_v3.02
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 overflow-y-auto h-screen">
                <header className="flex justify-between items-start border-b-8 border-white pb-12">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">NODE_OVERSIGHT // GRID_ACCESS_LIVE</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-none -skew-x-12">THE_NODE_CONFIG.</h1>
                    </div>
                    <button className="px-16 py-6 bg-white text-black text-4xl font-black uppercase tracking-tighter -skew-x-12 hover:bg-[#ff0000] hover:text-white transition-all">INVOKE_NEW_OPERATIVE</button>
                </header>

                <section className="border-8 border-white p-16 space-y-16">
                    <div className="flex justify-between items-center text-2xl font-black uppercase tracking-tighter">
                        <div className="space-x-12">
                            <button className="bg-white text-black px-6 py-1 -skew-x-6">ALL_OPERATIVES</button>
                            <button className="opacity-40 hover:opacity-100">SECURITY_LEVELS</button>
                            <button className="opacity-40 hover:opacity-100">SYSTEM_LOGS</button>
                        </div>
                        <div className="opacity-20 italic">SCANNING_OPERATIVE_IDS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-2xl font-black uppercase tracking-tighter border-b-8 border-white">
                                <th className="pb-8">OP_ID</th>
                                <th className="pb-8">DESIGNATION</th>
                                <th className="pb-8">GRID_ROLE</th>
                                <th className="pb-8">NODE_ACCESS</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase">
                            {ops.map((o) => (
                                <tr key={o.id} className="border-b-4 border-white/10 group hover:bg-[#ff0000] transition-colors">
                                    <td className="py-12">#{o.id}</td>
                                    <td className="py-12 underline decoration-8 decoration-white/10 group-hover:decoration-black/20">{o.name}</td>
                                    <td className="py-12 text-[#ff0000] group-hover:text-black">{o.role}</td>
                                    <td className="py-12 text-sm">{o.nodes}</td>
                                    <td className="py-12 text-right">
                                        <button className="text-xl bg-white text-black px-8 py-2 -skew-x-12 group-hover:bg-black group-hover:text-white">PURGE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="border-8 border-[#ff0000] p-16 space-y-12 bg-black shadow-[20px_20px_0px_#ff0000]">
                    <h3 className="text-6xl font-black tracking-tighter uppercase leading-none -skew-x-12 italic">GRID_LOCK_ACTIVE.</h3>
                    <p className="text-2xl font-black opacity-80 leading-tight uppercase italic -skew-x-6">
                        THE GRID IS SELF-CORRECTING. ANY UNAUTHORIZED ATTEMPT TO MODIFY CORE NODES WILL TRIGGER AN IMMEDIATE SYSTEM PURGE. OPERATIVES ARE SUBJECT TO GRID_LORD OVERSIGHT. NO EXCEPTIONS. NO MERCY.
                    </p>
                </div>
            </main>
        </div>
    );
}
