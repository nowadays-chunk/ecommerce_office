"use client";

import React from 'react';

const snacks = [
    { id: 1, name: 'Glitchy_Noodles', price: '9.00', emoji: '🍜', color: 'bg-[#fb7185]' },
    { id: 2, name: 'Cyber_Donut_v2', price: '4.50', emoji: '🍩', color: 'bg-[#818cf8]' },
    { id: 3, name: 'Neon_Taco_Extreme', price: '12.00', emoji: '🌮', color: 'bg-[#34d399]' },
    { id: 4, name: 'Mega_Burger_XL', price: '15.90', emoji: '🍔', color: 'bg-[#fbbf24]' },
];

export default function GrubHome() {
    return (
        <div className="space-y-32 pb-32">
            {/* Hero Section */}
            <section className="bg-[#ec4899] rounded-[60px] p-12 md:p-24 border-8 border-[#4c1d95] shadow-[16px_16px_0px_#4c1d95] relative overflow-hidden">
                <div className="absolute top-10 right-10 text-[200px] opacity-10 rotate-12 select-none group-hover:rotate-45 transition-transform">🍕</div>
                <div className="max-w-3xl space-y-12 relative z-10">
                    <div className="inline-block bg-[#facc15] text-[#4c1d95] px-6 py-2 rounded-full font-black uppercase tracking-widest border-4 border-[#4c1d95] -rotate-2">
                        FRESH_DROP_DETECTED
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-[0.85]">
                        CRUSH YOUR <br /> <span className="text-[#facc15] underline decoration-[#4c1d95] underline-offset-8">HUNGER.</span>
                    </h1>
                    <p className="text-2xl font-bold text-[#4c1d95] max-w-xl">
                        The fastest, freshest, and most fun way to stock your fridge. Orders delivered in <span className="bg-white px-2">15mins</span> or it's on us!
                    </p>
                    <div className="flex flex-wrap gap-6 pt-4">
                        <button className="bg-[#4c1d95] text-white px-12 py-6 rounded-[30px] font-black text-2xl hover:scale-105 transition-all shadow-[8px_8px_0px_#facc15]">
                            START_SHOPPING
                        </button>
                        <button className="bg-white text-[#4c1d95] border-4 border-[#4c1d95] px-12 py-6 rounded-[30px] font-black text-2xl hover:bg-[#facc15] transition-all">
                            STORY
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <h2 className="text-5xl font-black italic text-[#4c1d95]">TOP_GRUB_PICKS</h2>
                    <div className="flex space-x-2">
                        {['Veggies', 'Snacks', 'Drinks', 'Sweets'].map(cat => (
                            <button key={cat} className="px-6 py-3 bg-white border-4 border-[#4c1d95] rounded-2xl font-black text-xs uppercase hover:bg-[#facc15] transform hover:-rotate-3 transition-all">{cat}</button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {snacks.map((s) => (
                        <div key={s.id} className="group relative">
                            <div className={`${s.color} aspect-square rounded-[40px] border-4 border-[#4c1d95] flex items-center justify-center text-9xl group-hover:scale-105 transition-all shadow-[8px_8px_0px_#4c1d95]`}>
                                {s.emoji}
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white border-4 border-[#4c1d95] p-6 rounded-[30px] group-hover:bg-[#facc15] transition-colors shadow-lg">
                                <div className="font-black text-[10px] uppercase opacity-40 mb-1">Price_Check</div>
                                <div className="text-3xl font-black italic tracking-tighter text-[#4c1d95]">${s.price}</div>
                            </div>
                            <div className="pt-10 pl-4">
                                <h3 className="text-2xl font-black italic uppercase text-[#4c1d95]">{s.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Marquee Promotion */}
            <div className="bg-[#4c1d95] py-8 rounded-full overflow-hidden whitespace-nowrap border-8 border-[#facc15]">
                <div className="flex animate-marquee_fast font-black text-4xl italic text-white uppercase italic">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <span key={i} className="mx-12">USE CODE_GRUB_50 FOR 50% OFF YOUR FIRST ORDER ★ 🍟 🌭 🥓</span>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @keyframes marquee_fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee_fast {
          animation: marquee_fast 20s linear infinite;
        }
      `}</style>
        </div>
    );
}
