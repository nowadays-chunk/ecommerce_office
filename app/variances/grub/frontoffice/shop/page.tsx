"use client";

import React from 'react';

const harvest = [
    { id: '1', name: 'Organic Honey crisp Apples', price: '$8.50', category: 'FRUIT', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Wild-Caught Atlantic Salmon', price: '$22.00', category: 'PROTEIN', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Artisanal Sourdough Loaf', price: '$6.20', category: 'BAKERY', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80' },
    { id: '4', name: 'Himalayan Pink Rock Salt', price: '$12.00', category: 'PANTRY', image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=600&q=80' },
];

export default function GrubShop() {
    return (
        <div className="py-24 px-6 lg:px-20 space-y-32 bg-[#faf9f6] text-[#2d3a3a]">
            <header className="max-w-4xl space-y-8">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#22c55e] rounded-xl rotate-12 flex items-center justify-center text-white font-black">G</div>
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-[#22c55e]">Straight from the soil.</span>
                </div>
                <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-[#2d3a3a]">
                    EAT <br /> <span className="text-[#22c55e]">BETTER.</span>
                </h1>
                <p className="text-2xl text-[#2d3a3a]/60 font-medium leading-relaxed max-w-xl italic">
                    Connecting you with local farms and artisanal kitchens. No fillers, no fakes, just real food.
                </p>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {harvest.map((item) => (
                    <a
                        key={item.id}
                        href={`/variances/grub/frontoffice/product/${item.id}`}
                        className="group space-y-8"
                    >
                        <div className="aspect-square bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-12 relative overflow-hidden group-hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(34,197,94,0.15)]">
                            <div className="absolute top-6 right-6 bg-[#22c55e]/10 text-[#22c55e] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{item.category}</div>
                            <img
                                src={item.image}
                                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                                alt="Grub Item"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black tracking-tight text-[#2d3a3a] group-hover:text-[#22c55e] transition-colors">{item.name}</h3>
                            <div className="flex justify-between items-center pt-4 border-t-2 border-[#2d3a3a]/5">
                                <p className="text-2xl font-black text-[#2d3a3a]">{item.price}</p>
                                <div className="w-10 h-10 rounded-full border-2 border-[#2d3a3a]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </main>

            {/* Seasonal Calendar */}
            <section className="bg-[#22c55e] p-12 lg:p-24 text-white space-y-12 rounded-[4rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
                <h2 className="text-3xl lg:text-6xl font-black tracking-tighter uppercase leading-none">THE_HARVEST_CALENDAR</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {['SPRING', 'SUMMER', 'AUTUMN', 'WINTER'].map(s => (
                        <div key={s} className="p-8 border-4 border-white/20 hover:border-white transition-all cursor-pointer group">
                            <p className="text-sm font-black italic tracking-widest opacity-60 group-hover:opacity-100">{s}</p>
                            <p className="text-lg font-bold mt-4">VIEW_LOCAL_CROP</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
