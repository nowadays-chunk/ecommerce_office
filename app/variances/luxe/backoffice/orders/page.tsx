"use client";

import React from 'react';

export default function LuxeOrderManagement() {
    const acquisitions = [
        { id: 'LX-ORD-8802', client: 'Alexander Vanderbilt', amount: '€12,400', status: 'In_Transit' },
        { id: 'LX-ORD-8791', client: 'Elizabeth Rothschild', amount: '€8,500', status: 'Authenticated' },
        { id: 'LX-ORD-8752', client: 'Julian Beaufort', amount: '€24,200', status: 'Delivered' },
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
                        <a href="#" className="block text-[#d4af37]">03_ACQUISITIONS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">04_CLIENTELE</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">05_ARCHIVE</a>
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
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] italic">LOGISTICS_CONTROL // {new Date().getFullYear()}</p>
                        <h1 className="text-6xl font-light italic tracking-tighter uppercase leading-none">THE_ACQUISITION_LOG.</h1>
                    </div>
                    <button className="px-12 py-4 border border-black text-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">EXPORT_LEDGER</button>
                </header>

                <section className="bg-white p-16 border border-black/5 space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40">
                        <div className="space-x-8">
                            <button className="text-black border-b border-black">ALL_LOGS</button>
                            <button>PENDING_AUTH</button>
                            <button>WHITE_GLOVE_TRANSIT</button>
                            <button>ARCHIVE</button>
                        </div>
                        <div>FILTER_BY_CLIET.</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b border-black/5">
                                <th className="pb-6">ACQUISITION_ID</th>
                                <th className="pb-6">CLIENT_ENTITY</th>
                                <th className="pb-6">TOTAL_VALUATION</th>
                                <th className="pb-6">LOGISTICS_STATUS</th>
                                <th className="pb-6 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light italic">
                            {acquisitions.map((ord) => (
                                <tr key={ord.id} className="border-b border-black/5 group hover:bg-[#fcfcfc]">
                                    <td className="py-8">#{ord.id}</td>
                                    <td className="py-8">{ord.client}</td>
                                    <td className="py-8">{ord.amount}</td>
                                    <td className="py-8 text-[12px] font-black uppercase tracking-widest text-[#d4af37]">{ord.status}</td>
                                    <td className="py-8 text-right space-x-6">
                                        <button className="text-[10px] font-black uppercase tracking-widest border border-black/10 px-6 py-2 hover:bg-black hover:text-white transition-all">VIEW_MANIFEST</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
