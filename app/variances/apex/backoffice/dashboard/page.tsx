"use client";

import React from 'react';

export default function ApexAdminDashboard() {
    return (
        <div className="min-h-screen bg-[#f1f3f6] text-[#1c2e4a] font-sans flex">
            {/* Sidebar */}
            <aside className="w-72 bg-[#1c2e4a] text-white p-10 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                            <span className="text-2xl font-black italic tracking-tighter">A_X</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">Apex_Corp</h2>
                    </div>
                    <nav className="space-y-1">
                        <a href="#" className="flex items-center space-x-4 p-4 bg-[#2a4066] rounded-xl text-white font-semibold">
                            <span>01_HQ_Overview</span>
                        </a>
                        <a href="#" className="flex items-center space-x-4 p-4 opacity-60 hover:opacity-100 hover:bg-white/5 rounded-xl transition-all">
                            <span>02_Global_Assets</span>
                        </a>
                        <a href="#" className="flex items-center space-x-4 p-4 opacity-60 hover:opacity-100 hover:bg-white/5 rounded-xl transition-all">
                            <span>03_Pipeline_Flux</span>
                        </a>
                        <a href="#" className="block p-4 opacity-60 hover:opacity-100 hover:bg-white/5 rounded-xl transition-all">
                            <span>04_Directorship</span>
                        </a>
                        <a href="#" className="block p-4 opacity-60 hover:opacity-100 hover:bg-white/5 rounded-xl transition-all">
                            <span>05_Core_Protocol</span>
                        </a>
                    </nav>
                </div>
                <div className="text-[10px] font-bold opacity-30 uppercase tracking-widest flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>SYSTEM_SYNC_OK</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-16 space-y-16">
                <header className="flex justify-between items-center bg-white p-12 rounded-3xl shadow-sm border border-gray-200">
                    <div className="space-y-2">
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Executive Report // {new Date().toLocaleDateString()}</p>
                        <h1 className="text-4xl font-black tracking-tight text-[#1c2e4a]">Enterprise Analytics.</h1>
                    </div>
                    <div className="flex space-x-4">
                        <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition-all">Export_Q3</button>
                        <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">New_Directive</button>
                    </div>
                </header>

                <div className="grid grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                        <div className="flex justify-between items-start">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Quarterly Revenue</p>
                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-black italic">+8.4%</span>
                        </div>
                        <h3 className="text-5xl font-black text-[#1c2e4a]">$4.24M</h3>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: '74%' }}></div>
                        </div>
                        <p className="text-xs font-bold text-gray-400">Target Pipeline: 74% Complete</p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pipeline Velocity</p>
                        <h3 className="text-5xl font-black text-[#1c2e4a]">14.2d</h3>
                        <p className="text-xs font-bold text-blue-600">OPTIMIZED_FLOW</p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Stakeholder Sync</p>
                        <h3 className="text-5xl font-black text-[#1c2e4a]">99.8%</h3>
                        <p className="text-xs font-bold text-gray-400">UP_TIME_STABLE</p>
                    </div>
                </div>

                <section className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-200 space-y-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-black tracking-tight text-[#1c2e4a]">Global Transaction History.</h2>
                        <span className="text-xs font-bold text-gray-400">Showing 25 of 1,240 records</span>
                    </div>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">
                                <th className="pb-6">TRANS_ID</th>
                                <th className="pb-6">ORIGIN_NODE</th>
                                <th className="pb-6">VALUATION</th>
                                <th className="pb-6">SYNC_STATUS</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-semibold">
                            <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                <td className="py-8 font-mono text-xs opacity-60">#AX-99102</td>
                                <td className="py-8">LONDON_CORE</td>
                                <td className="py-8">$124,500.00</td>
                                <td className="py-8"><span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">VERIFIED</span></td>
                            </tr>
                            <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                <td className="py-8 font-mono text-xs opacity-60">#AX-99100</td>
                                <td className="py-8">TOKYO_NODE</td>
                                <td className="py-8">$88,200.00</td>
                                <td className="py-8"><span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">IN_PROGRESS</span></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
