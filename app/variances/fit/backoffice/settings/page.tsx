"use client";

import React from 'react';

export default function FitSettings() {
  const squad = [
    { id: 'FT-ADM-01', name: 'Alpha_Lead', role: 'ENGINE_CHIEF', sync: 'TOTAL_OVERSIGHT' },
    { id: 'FT-ADM-08', name: 'Delta_Two', role: 'HARDWARE_TECH', sync: 'INVENTORY_ONLY' },
    { id: 'FT-ADM-12', name: 'Sigma_Seven', role: 'VELOCITY_SCOUT', sync: 'ORDER_HISTORY' },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans italic flex overflow-hidden">
       {/* Sidebar */}
       <aside className="w-80 bg-black text-white border-r-[12px] border-black p-12 flex flex-col justify-between -skew-x-2 transform origin-top h-full">
          <div className="space-y-24">
             <div className="w-24 h-4 bg-[#ff0000] skew-x-[-12deg] shadow-[0_0_30px_#ff0000]"></div>
             <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">F_ADMIN.</h2>
             <nav className="space-y-12 text-[14px] font-black uppercase tracking-widest -skew-x-12">
                <a href="/variances/fit/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">ENGINE_SYNC</a>
                <a href="/variances/fit/backoffice/products" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">HARDWARE_DATA</a>
                <a href="/variances/fit/backoffice/orders" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">VELOCITY_LOGS</a>
                <a href="/variances/fit/backoffice/marketing" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">SQUAD_PROMOS</a>
                <a href="/variances/fit/backoffice/analytics" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">DATA_ENGINE</a>
                <a href="#" className="block bg-[#ff0000] text-white px-8 py-4 shadow-[10px_10px_0px_#fff]">SYSTEM_LOCK</a>
             </nav>
          </div>
          <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.8em] italic border-t-8 border-white/10 pt-8">
             ELITE_ENGINE_v8.01.XP
          </div>
       </aside>

       {/* Main Content */}
       <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto bg-white">
          <header className="flex justify-between items-center border-[12px] border-black p-16 shadow-[20px_20px_0px_rgba(255,0,0,0.15)] -skew-x-6 transform bg-white">
             <div className="space-y-4">
                <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">CORE_OVERSIGHT // VELOCITY_SYNC_LIVE</p>
                <h1 className="text-8xl font-black tracking-tighter uppercase leading-[0.8] italic">THE_ENGINE_LOCK.</h1>
             </div>
             <button className="px-16 py-8 bg-black text-white text-[16px] font-black uppercase tracking-widest hover:scale-110 transition-all transform hover:skew-x-12 shadow-2xl">DEPLOY_OPERATIVE</button>
          </header>

          <section className="bg-white border-[12px] border-black p-16 shadow-[20px_20px_0px_rgba(0,0,0,0.05)] space-y-16">
             <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-black/40 italic px-4">
                <div className="space-x-12">
                   <button className="text-black border-b-[8px] border-[#ff0000]">ALL_SQUAD</button>
                   <button>SYNC_LEVELS</button>
                   <button>MISSION_LOGS</button>
                </div>
                <div>SCANNING_SQUAD_NODES...</div>
             </div>

             <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="text-[18px] font-black uppercase tracking-widest text-black border-b-[8px] border-black">
                      <th className="pb-8">SQUAD_ID</th>
                      <th className="pb-8">OPERATIVE</th>
                      <th className="pb-8">ENGINE_ROLE</th>
                      <th className="pb-8">SYNC_DEPTH</th>
                      <th className="pb-8 text-right">PROTOCOL</th>
                   </tr>
                </thead>
                <tbody className="text-4xl font-black italic uppercase">
                   {squad.map((o) => (
                      <tr key={o.id} className="border-b-[4px] border-black/10 hover:bg-[#ff0000] hover:text-white transition-all transform hover:scale-[1.01] group cursor-pointer">
                         <td className="py-12">#{o.id}</td>
                         <td className="py-12 underline decoration-[8px] decoration-black/10 group-hover:decoration-white/20">{o.name}</td>
                         <td className="py-12 px-4 italic">{o.role}</td>
                         <td className="py-12 text-sm opacity-40 group-hover:opacity-100">{o.sync}</td>
                         <td className="py-12 text-right">
                            <button className="text-xl bg-black text-white px-8 py-2 -skew-x-12 group-hover:bg-white group-hover:text-black">EJECT</button>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </section>

          <div className="bg-black text-white p-16 space-y-12 shadow-[20px_20px_0px_#ff0000] -skew-x-2">
             <h3 className="text-5xl font-black tracking-tighter uppercase italic leading-none text-[#ff0000]">VELOCITY_PROTECT_ACTIVE.</h3>
             <p className="text-xl font-black opacity-80 leading-tight uppercase italic -skew-x-6 tracking-widest">
                THE ENGINE IS SEALED BY HIGH-VELOCITY ENCRYPTION. ANY ATTEMPT TO TAMPER WITH SYSTEM NODES WILL TRIGGER AN IMMEDIATE SQUAD EJECTION. PERFORMANCE IS MANDATORY. DEVIATION IS NOT PERMITTED.
             </p>
          </div>
       </main>
    </div>
  );
}
