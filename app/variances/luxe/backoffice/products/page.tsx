"use client";

import React from 'react';

export default function LuxeProductManagement() {
    const products = [
        { id: 'LX-8802', title: 'Absolute Obsidian Vase', price: '€2,400', stock: 12, collection: 'The Absolute' },
        { id: 'LX-8791', title: 'Heritage Silk Scarf', price: '€850', stock: 45, collection: 'Heritage' },
        { id: 'LX-8752', title: 'Gilded Marble Vessel', price: '€4,200', stock: 5, collection: 'The Absolute' },
    ];

    return (
        <div className="min-h-screen bg-[#f8f8f8] text-[#1a1a1a] font-serif flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-black/5 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <h2 className="text-3xl font-light italic uppercase tracking-tighter">LUXE_ADMIN.</h2>
                    <nav className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em]">
                        <a href="/variances/luxe/backoffice/dashboard" className="block opacity-40 hover:opacity-100 transition-opacity">01_OVERSIGHT</a>
                        <a href="#" className="block text-[#d4af37]">02_COLLECTIONS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">03_ACQUISITIONS</a>
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
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] italic">INVENTORY_CONTROL // {new Date().getFullYear()}</p>
                        <h1 className="text-6xl font-light italic tracking-tighter uppercase leading-none">THE_COLLECTION_VAULT.</h1>
                    </div>
                    <button className="px-12 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#d4af37] transition-all">CURATE_NEW_ENTRY</button>
                </header>

                <section className="bg-white p-16 border border-black/5 space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40">
                        <div className="space-x-8">
                            <button className="text-black border-b border-black">ALL_VAULT</button>
                            <button>HERITAGE</button>
                            <button>ABSOLUTE</button>
                        </div>
                        <div>SEARCH_COLLECTION.</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b border-black/5">
                                <th className="pb-6">ID</th>
                                <th className="pb-6">ITEM_DESIGNATION</th>
                                <th className="pb-6">VALUATION</th>
                                <th className="pb-6">RESERVE</th>
                                <th className="pb-6">COLLECTION</th>
                                <th className="pb-6">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light italic">
                            {products.map((product) => (
                                <tr key={product.id} className="border-b border-black/5 group hover:bg-[#fcfcfc]">
                                    <td className="py-8">#{product.id}</td>
                                    <td className="py-8 underline decoration-black/10">{product.title}</td>
                                    <td className="py-8">{product.price}</td>
                                    <td className="py-8">{product.stock}</td>
                                    <td className="py-8 uppercase tracking-widest text-[10px] font-black opacity-60">{product.collection}</td>
                                    <td className="py-8 space-x-6">
                                        <button className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">EDIT</button>
                                        <button className="text-[10px] font-black uppercase tracking-widest text-black/20 hover:text-red-800 transition-colors">VOID</button>
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
