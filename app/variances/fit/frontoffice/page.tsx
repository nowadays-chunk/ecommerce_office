"use client";

import React from 'react';

const gear = [
    { id: 1, name: 'APEX COMPRESSION 2.0', price: '$120', feature: 'O2 Efficiency +', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'KINETIC ELITE HOODIE', price: '$185', feature: 'Thermal Lock', image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'RAZOR SPRINT SHOES', price: '$220', feature: 'Carbon Plate', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'PULSE WRIST WRAP', price: '$45', feature: 'Support X', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80' },
];

export default function FitHome() {
    return (
        <div className="space-y-1 py-0">
            {/* Dynamic Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
                        className="w-full h-full object-cover opacity-60 grayscale scale-110 animate-pulse_slow"
                        alt="Fit Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
                </div>
                <div className="relative z-10 text-center space-y-12 max-w-6xl px-6">
                    <div className="flex flex-col items-center">
                        <span className="bg-[#bef264] text-black px-4 py-1 text-xs font-black uppercase italic tracking-widest mb-6 skew-x-12">Performance_Override_Active</span>
                        <h1 className="text-7xl md:text-[12rem] font-black text-white italic tracking-tighter leading-none uppercase">
                            READY <br /> <span className="text-transparent [-webkit-text-stroke:2px_#bef264]">TO ACT.</span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-white/60 max-w-2xl mx-auto italic">
                        Elite equipment for those who crave the grind. Every thread engineered for maximum output.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8">
                        <button className="bg-[#bef264] text-black px-16 py-6 rounded-sm font-black text-2xl uppercase tracking-tighter hover:bg-white hover:scale-110 transition-all skew-x-[-12deg]">
                            SHOP_EQUIPMENT
                        </button>
                        <button className="border-2 border-white/20 text-white px-16 py-6 rounded-sm font-black text-2xl uppercase tracking-tighter hover:border-[#bef264] transition-all skew-x-[-12deg]">
                            WATCH_TRAINING
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Divider */}
            <div className="bg-[#bef264] py-4 grid grid-cols-2 md:grid-cols-4 text-black text-xs font-black uppercase tracking-[0.3em] italic text-center">
                <div>Endurance: 98.2%</div>
                <div className="border-l border-black/20">Recovery: 100%</div>
                <div className="border-l border-black/20">Speed: Mach_1</div>
                <div className="border-l border-black/20">Power: Max</div>
            </div>

            {/* Product Feed - High Contrast */}
            <section className="bg-[#0a0a0a] py-32 px-6">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="flex justify-between items-end border-b-2 border-white/5 pb-12">
                        <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter">ELITE_SELECTION</h2>
                        <button className="text-[10px] font-black uppercase tracking-widest text-[#bef264] hover:text-white transition-colors flex items-center gap-2">
                            View All <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {gear.map((item) => (
                            <div key={item.id} className="group relative cursor-pointer">
                                <div className="aspect-[3/4] overflow-hidden bg-black mb-8 border border-white/5 group-hover:border-[#bef264]/40 transition-all">
                                    <img
                                        src={item.image}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale-[50%] group-hover:grayscale-0"
                                        alt={item.name}
                                    />
                                    <div className="absolute top-4 left-4 bg-black/80 text-[#bef264] px-3 py-1 text-[8px] font-black uppercase border border-[#bef264]/40">
                                        {item.feature}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-black italic text-white uppercase">{item.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">In_Stock</span>
                                        <span className="text-xl font-black text-[#bef264]">{item.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className="bg-white py-40 rounded-t-[80px] text-black">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none uppercase">THE_PULSE_NETWORK</h2>
                    <p className="text-xl font-bold opacity-60">Join 40,000+ athletes competing for the top spot. Real-time leaderboards, custom tracking, and exclusive gear access.</p>
                    <button className="bg-black text-[#bef264] px-16 py-8 rounded-full font-black text-2xl uppercase tracking-tighter hover:scale-110 transition-all">
                        JOIN_COMMUNITY
                    </button>
                </div>
            </section>

            <style jsx global>{`
        @keyframes pulse_slow {
          0%, 100% { opacity: 0.6; transform: scale(1.1); }
          50% { opacity: 0.8; transform: scale(1.15); }
        }
        .animate-pulse_slow {
          animation: pulse_slow 8s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
