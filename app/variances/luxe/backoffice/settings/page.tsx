"use client";

import React from 'react';

export default function LuxeSettings() {
    const users = [
        { id: 'LX-ADM-01', name: 'Julian Beaufort', role: 'Grand_Administrator', access: 'All_Nodes' },
        { id: 'LX-ADM-08', name: 'Elena Vance', role: 'Collection_Curator', access: 'Heritage_Vault' },
        { id: 'LX-ADM-12', name: 'Arthur Sterling', role: 'Security_Envoy', access: 'Archive_Only' },
    ];

    return (
        <div className="min-h-screen bg-[#f8f8f8] text-[#1a1a1a] font-serif flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-black/5 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <h2 className="text-3xl font-light italic uppercase tracking-tighter">LUXE_ADMIN.</h2>
                    <nav className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em]">
                        <a href="/variances/luxe/backoffice/dashboard" className="block opacity-40 hover:opacity-100 transition-opacity">01_OVERSIGHT</a>
                        <a href="/variances/luxe/backoffice/products" className="block opacity-40 hover:opacity-100 transition-opacity">02_COLLECTIONS</a>
                        <a href="/variances/luxe/backoffice/orders" className="block opacity-40 hover:opacity-100 transition-opacity">03_ACQUISITIONS</a>
                        <a href="/variances/luxe/backoffice/marketing" className="block opacity-40 hover:opacity-100 transition-opacity">04_PROMOTIONS</a>
                        <a href="/variances/luxe/backoffice/analytics" className="block opacity-40 hover:opacity-100 transition-opacity">05_LEDGER_INSIGHTS</a>
                        <a href="#" className="block text-[#d4af37]">06_SECURITY_NODES</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-widest italic">
                    V8.01_SECURE_NODE
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-end border-b border-black/5 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] italic">ACCESS_CONTROL // {new Date().getFullYear()}</p>
                        <h1 className="text-6xl font-light italic tracking-tighter uppercase leading-none">THE_SECURITY_NODES.</h1>
                    </div>
                    <button className="px-12 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#d4af37] transition-all">INVITE_ENVOY</button>
                </header>

                <section className="bg-white p-16 border border-black/5 space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40">
                        <div className="space-x-8">
                            <button className="text-black border-b border-black">ALL_ADMINS</button>
                            <button>SYSTEM_CONFIG</button>
                            <button>ENCRYPTION_LOGS</button>
                        </div>
                        <div>MANAGE_AUTH_POLICIES.</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b border-black/5">
                                <th className="pb-6">USER_ID</th>
                                <th className="pb-6">ENTITY_NAME</th>
                                <th className="pb-6">HIERARCHY_ROLE</th>
                                <th className="pb-6">ACCESS_DEPTH</th>
                                <th className="pb-6 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light italic">
                            {users.map((u) => (
                                <tr key={u.id} className="border-b border-black/5 group hover:bg-[#fcfcfc]">
                                    <td className="py-8">#{u.id}</td>
                                    <td className="py-8">{u.name}</td>
                                    <td className="py-8 text-[12px] font-black uppercase tracking-widest text-[#d4af37]">{u.role}</td>
                                    <td className="py-8 opacity-40">{u.access}</td>
                                    <td className="py-8 text-right space-x-6">
                                        <button className="text-[10px] font-black uppercase tracking-widest border border-black/10 px-6 py-2 hover:bg-black hover:text-white transition-all">REVOKE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="bg-black text-white p-16 space-y-12 shadow-2xl">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span>ENCRYPTION_STATUS: ABSOLUTE</span>
                        <span className="text-[#d4af37]">NODE_8802_SYNCED</span>
                    </div>
                    <div className="h-px bg-white/10"></div>
                    <p className="text-sm font-light italic opacity-60 leading-relaxed max-w-2xl">
                        Global system parameters are locked under Heritage Protocol. Any changes to the core encryption nodes require a dual-key authentication from the Grand Administrator and the Security Envoy.
                    </p>
                </section>
            </main>
        </div>
    );
}
