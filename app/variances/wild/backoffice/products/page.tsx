"use client";

import React from 'react';

export default function WildProductManagement() {
  const matter = [
    { id: 'WL-4402', name: 'Foraged Resin Jar', price: '0.4 ETH', stock: 12, cycle: 'Cycle 88' },
    { id: 'WL-4389', name: 'Raw Stone Paper', price: '0.2 ETH', stock: 45, cycle: 'Cycle 72' },
    { id: 'WL-4100', name: 'Deep Valley Mud Mask', price: '0.1 ETH', stock: 85, cycle: 'Cycle 64' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] font-serif italic flex overflow-hidden">
       {/* Sidebar */}
       <aside className="w-80 bg-white border-r border-[#8b7e66]/10 p-12 flex flex-col justify-between shadow-2xl relative z-20">
          <div className="space-y-12">
             <div className="w-16 h-16 bg-white border border-[#2d2a22]/10 rounded-full flex items-center justify-center shadow-xl">
                <div className="w-2 h-2 bg-[#2d2a22]"></div>
             </div>
             <h2 className="text-4xl font-light tracking-tighter uppercase italic leading-none">W_ADMIN.</h2>
             <nav className="space-y-8 text-[12px] font-bold uppercase tracking-widest text-[#8b7e66]">
                <a href="/variances/wild/backoffice/dashboard" className="block opacity-40 hover:text-[#2d2a22] transition-colors">STILL_VIEW</a>
                <a href="#" className="block text-[#2d2a22] border-b border-[#2d2a22] pb-2">RAW_INVENTORY</a>
                <a href="#" className="block hover:text-[#2d2a22] transition-colors">WHISPER_LOGS</a>
                <a href="#" className="block hover:text-[#2d2a22] transition-colors">TRIBAL_NODES</a>
                <a href="#" className="block hover:text-[#2d2a22] transition-colors">ROOT_METRICS</a>
             </nav>
          </div>
          <div className="text-[10px] font-bold opacity-40 uppercase tracking-[0.8em] italic text-center">
             STILL_ENGINE_v1.0.RAW
          </div>
       </aside>

       {/* Main Content */}
       <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto relative bg-[#f4f1ea]">
          <header className="flex justify-between items-center bg-white/40 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl border border-[#8b7e66]/10 group relative overflow-hidden">
             <div className="absolute inset-0 bg-[#8b7e66]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="space-y-2 relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8b7e66] italic">MATTER_VAULT // STILL_CYCLE_SYNC</p>
                <h1 className="text-7xl font-light tracking-tighter uppercase leading-none italic text-[#2d2a22]">THE_RAW_MATTER_LOG.</h1>
             </div>
             <button className="px-16 py-8 bg-[#2d2a22] text-[#f4f1ea] text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-[#8b7e66] transition-all shadow-2xl relative z-10 transform -rotate-1">CATALOG_NEW_MATTER</button>
          </header>

          <section className="bg-white/40 backdrop-blur-3xl p-20 rounded-[5rem] shadow-2xl border border-[#8b7e66]/20 space-y-16 relative overflow-hidden group">
             <div className="flex justify-between items-center text-[12px] font-bold uppercase tracking-widest text-[#8b7e66]/40">
                <div className="space-x-12">
                   <button className="text-[#2d2a22] border-b border-[#2d2a22] pb-1">ALL_RAW_MATTER</button>
                   <button className="hover:text-[#2d2a22] transition-colors">FORAGED</button>
                   <button className="hover:text-[#2d2a22] transition-colors">EARTH_GOODS</button>
                   <button className="hover:text-[#2d2a22] transition-colors">WHISPERS</button>
                </div>
                <div className="animate-pulse italic">LISTENING_FOR_SEARCH_WHISPERS...</div>
             </div>

             <table className="w-full text-left border-collapse border-separate border-spacing-y-4">
                <thead>
                   <tr className="text-[12px] font-bold uppercase tracking-widest opacity-40 text-[#8b7e66]">
                      <th className="px-10 pb-6">NODE_ID</th>
                      <th className="px-10 pb-6">ELEMENTAL_DESIGNATION</th>
                      <th className="px-10 pb-6">STILL_VALUE</th>
                      <th className="px-10 pb-6">TRIBAL_STOCK</th>
                      <th className="px-10 pb-6">SYNC_CYCLE</th>
                      <th className="px-10 pb-6 text-right">ACTIONS</th>
                   </tr>
                </thead>
                <tbody className="text-3xl font-light italic uppercase text-[#2d2a22]/80">
                   {matter.map((item) => (
                      <tr key={item.id} className="bg-white/40 hover:bg-[#8b7e66]/10 transition-colors cursor-pointer group">
                         <td className="p-10 rounded-l-[4rem] border-l-4 border-[#2d2a22]">#{item.id}</td>
                         <td className="p-10 underline decoration-[#8b7e66]/20 group-hover:decoration-[#2d2a22]/60">{item.name}</td>
                         <td className="p-10">{item.price}</td>
                         <td className="p-10">{item.stock}</td>
                         <td className="p-10 text-sm tracking-widest opacity-40">{item.cycle}</td>
                         <td className="p-10 rounded-r-[4rem] text-right space-x-12">
                            <button className="text-xl text-[#2d2a22]/40 hover:text-[#2d2a22] transition-colors">RESTORE</button>
                            <button className="text-xl text-red-200 hover:text-red-400 transition-colors">REMOVE</button>
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
