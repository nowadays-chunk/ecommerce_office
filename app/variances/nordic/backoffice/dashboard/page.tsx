"use client";

import React from 'react';

export default function NordicAdminDashboard() {
    return (
        <div className="min-h-screen bg-[#fafafa] text-[#2c2c2c] font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-100 p-8 flex flex-col justify-between">
                <div className="space-y-10">
                    <h2 className="text-xl font-medium tracking-tight">Nörd_Admin.</h2>
                    <nav className="space-y-4 text-xs font-medium tracking-widest uppercase">
                        <a href="#" className="block text-black">01 Overview</a>
                        <a href="#" className="block text-black/40 hover:text-black transition-colors">02 Inventory</a>
                        <a href="#" className="block text-black/40 hover:text-black transition-colors">03 Shipments</a>
                        <a href="#" className="block text-black/40 hover:text-black transition-colors">04 Customers</a>
                        <a href="#" className="block text-black/40 hover:text-black transition-colors">05 Settings</a>
                    </nav>
                </div>
                <div className="text-[10px] text-black/20 font-medium tracking-widest uppercase">
                    v4.0.0-nordic
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-16 space-y-16">
                <header className="flex justify-between items-end border-b border-gray-100 pb-8">
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Studio Metrics // {new Date().toLocaleDateString()}</p>
                        <h1 className="text-4xl font-medium tracking-tight">Analytics Oversight.</h1>
                    </div>
                    <button className="px-8 py-3 bg-[#2c2c2c] text-white text-xs font-medium uppercase tracking-widest hover:bg-black transition-colors">New Collection</button>
                </header>

                <div className="grid grid-cols-3 gap-8">
                    <div className="bg-white p-10 border border-gray-100 space-y-4">
                        <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Revenue</p>
                        <h3 className="text-4xl font-medium tracking-tight">€42,800.00</h3>
                        <div className="w-12 h-px bg-gray-200"></div>
                        <p className="text-[10px] font-bold text-green-600">+4.2% Growth</p>
                    </div>
                    <div className="bg-white p-10 border border-gray-100 space-y-4">
                        <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Units Sold</p>
                        <h3 className="text-4xl font-medium tracking-tight">1,240</h3>
                        <div className="w-12 h-px bg-gray-200"></div>
                        <p className="text-[10px] font-bold text-black/40">Market Saturation</p>
                    </div>
                    <div className="bg-white p-10 border border-gray-100 space-y-4">
                        <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Avg Order</p>
                        <h3 className="text-4xl font-medium tracking-tight">€345.00</h3>
                        <div className="w-12 h-px bg-gray-200"></div>
                        <p className="text-[10px] font-bold text-black/40">Premium Tier</p>
                    </div>
                </div>

                <section className="bg-white p-12 border border-gray-100 space-y-8">
                    <h2 className="text-2xl font-medium tracking-tight">Recent Studio Activity.</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-bold uppercase tracking-widest text-black/40 border-b border-gray-100">
                                <th className="pb-4 font-bold">Ref</th>
                                <th className="pb-4 font-bold">Customer</th>
                                <th className="pb-4 font-bold">Item</th>
                                <th className="pb-4 font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                            <tr className="border-b border-gray-50">
                                <td className="py-6 text-black/40">#NR-1290</td>
                                <td className="py-6">Anders Jensen</td>
                                <td className="py-6">Oak Dining Chair</td>
                                <td className="py-6"><span className="px-3 py-1 bg-gray-100 text-[10px] uppercase font-bold tracking-widest text-black/60">Dispatched</span></td>
                            </tr>
                            <tr className="border-b border-gray-50">
                                <td className="py-6 text-black/40">#NR-1289</td>
                                <td className="py-6">Siri Larsson</td>
                                <td className="py-6">Wool Area Rug</td>
                                <td className="py-6"><span className="px-3 py-1 bg-gray-100 text-[10px] uppercase font-bold tracking-widest text-black/60">Preparing</span></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
