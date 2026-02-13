"use client";

import React from 'react';

const ORDERS = [
  { id: "WL-420-W", date: "CYCLE 88, 2025", total: "1.2 ETH", status: "HARMONIZED", items: ["Foraged Resin Lamp", "Untamed Wool Throw"] },
  { id: "WL-410-V", date: "CYCLE 72, 2025", total: "0.8 ETH", status: "STILLNESS", items: ["Raw Stone Paper Journal"] },
  { id: "WL-350-S", date: "CYCLE 14, 2025", total: "4.5 ETH", status: "ARCHIVED", items: ["Hand-Carved Cedar Bench"] }
];

export default function WildOrders() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] font-serif italic p-12 lg:p-24 overflow-hidden">
       <header className="flex flex-col mb-32 items-center text-center space-y-12 relative overflow-hidden group">
          <div className="absolute top-0 text-[18vw] font-black text-[#2d2a22]/5 uppercase italic select-none pointer-events-none -rotate-6">WHISPER</div>
          <div className="w-16 h-16 bg-white border border-[#2d2a22]/10 rounded-full flex items-center justify-center shadow-xl">
             <div className="w-2 h-2 bg-[#2d2a22]"></div>
          </div>
          <h1 className="text-7xl lg:text-[10rem] font-light tracking-tighter uppercase leading-none italic text-[#2d2a22]">TRIBE.</h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#8b7e66] italic">THE_ACQUISITION_LOG // v1.0.RAW // STILL_SYNC_ACTIVE.</p>
       </header>

       <div className="max-w-6xl mx-auto space-y-32 relative z-10">
          <div className="grid gap-8">
             {ORDERS.map((order) => (
                <div key={order.id} className="bg-white/40 backdrop-blur-3xl rounded-[3rem] p-12 lg:p-16 shadow-2xl border border-[#2d2a22]/5 group hover:rotate-1 transition-all duration-700 flex flex-col lg:flex-row justify-between items-center">
                   <div className="space-y-6 text-center lg:text-left">
                      <div className="flex items-center space-x-4 justify-center lg:justify-start">
                         <span className="w-3 h-3 bg-[#2d2a22] rounded-full shadow-2xl"></span>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66] italic">NODE_{order.id}</p>
                      </div>
                      <h2 className="text-4xl font-light tracking-tighter italic uppercase text-[#2d2a22]">{order.items.join(" <ROOT> ")}</h2>
                      <p className="text-xl font-light opacity-60 text-[#2d2a22]/60">{order.date} // {order.total}</p>
                   </div>
                   <div className="mt-12 lg:mt-0 flex flex-col items-center lg:items-end space-y-8">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-12 py-5 bg-[#2d2a22] text-[#f4f1ea] rounded-[2rem] shadow-2xl ${order.status === 'STILLNESS' ? 'shadow-[0_20px_50px_rgba(45,42,34,0.35)] animate-pulse' : 'opacity-40 grayscale'}`}>
                         {order.status}
                      </span>
                      <button className="text-[10px] font-bold uppercase tracking-widest border-b border-[#8b7e66]/20 pb-1 hover:border-[#8b7e66] text-[#8b7e66] transition-all">VIEW_STILL_DATA</button>
                   </div>
                </div>
             ))}
          </div>

          <div className="grid md:grid-cols-2 gap-24 pt-24 border-t border-[#8b7e66]/10 items-center">
             <div className="space-y-12">
                <h2 className="text-6xl font-light italic uppercase tracking-tighter text-[#2d2a22]">NATURAL_SYNC.</h2>
                <div className="space-y-8 text-2xl font-light leading-relaxed italic text-[#8b7e66] uppercase tracking-tighter">
                   <p>Your current tribal synchronization: HARMONIZED. Based on your raw acquisitions, your profile is eligible for the Deep Valley early ritual protocol.</p>
                </div>
             </div>
             <div className="p-16 bg-white/40 backdrop-blur-3xl rounded-[4rem] shadow-2xl border border-[#8b7e66]/10 text-center space-y-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#8b7e66]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#8b7e66]/40">TIER: TRIBAL_ELDER</p>
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80" className="w-48 h-48 mx-auto rounded-[3rem] object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[5s] shadow-2xl" />
                <button className="w-full py-10 bg-[#2d2a22] text-[#f4f1ea] text-3xl font-light uppercase tracking-tighter rounded-2xl hover:bg-[#8b7e66] transition-all transform shadow-2xl">INITIATE_NEW_FORAGE</button>
             </div>
          </div>
       </div>
    </div>
  );
}
