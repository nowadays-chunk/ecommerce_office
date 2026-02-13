"use client";

import React from 'react';

const vinyls = [
    { id: '1', title: 'Midnight Jazz Sessions', artist: 'The Blue Note', price: '$45', color: 'bg-[#fb923c]' },
    { id: '2', title: 'Neon Disco nights', artist: 'Retro Glow', price: '$38', color: 'bg-[#ec4899]' },
    { id: '3', title: 'Summer Soul Grooves', artist: 'Golden Era', price: '$52', color: 'bg-[#fbbf24]' },
    { id: '4', title: 'Analog Dreams', artist: 'Synth Wave', price: '$42', color: 'bg-[#818cf8]' },
];

export default function VibeShop() {
    return (
        <div className="py-24 px-6 lg:px-20 space-y-32 bg-[#fffaf0] text-[#432] font-serif">
            <header className="max-w-4xl space-y-8">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full border-4 border-[#fb923c] animate-spin-slow"></div>
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-[#fb923c]">Now Playing: The Record Store</span>
                </div>
                <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter leading-none text-[#432]">
                    ANALOG <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb923c] to-[#ec4899]">VIBRATIONS.</span>
                </h1>
                <p className="text-2xl text-[#432]/60 font-medium leading-relaxed max-w-xl">
                    Explore our hand-picked collection of vintage and modern vinyl. Sourced for the true audiophile and soul seeker.
                </p>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {vinyls.map((v) => (
                    <a
                        key={v.id}
                        href={`/variances/vibe/frontoffice/product/${v.id}`}
                        className="group space-y-8"
                    >
                        <div className="aspect-square bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)] p-8 relative overflow-hidden group-hover:-translate-y-4 group-hover:rotate-2 transition-all duration-700">
                            <div className="absolute inset-0 bg-[#fb923c]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src={`https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80`}
                                className="w-full h-full object-cover rounded-full shadow-2xl animate-spin-slow"
                                alt="Vinyl Record"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#fffaf0] rounded-full flex items-center justify-center border-4 border-[#432]/10">
                                <div className="w-1 h-1 bg-[#432] rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2 text-center">
                            <h3 className="text-2xl font-black italic tracking-tight text-[#432] group-hover:text-[#fb923c] transition-colors">{v.title}</h3>
                            <p className="text-sm font-bold uppercase tracking-widest text-[#432]/40">{v.artist}</p>
                            <p className="text-xl font-black text-[#ec4899] pt-4">{v.price}</p>
                        </div>
                    </a>
                ))}
            </main>

            {/* Genre Selector */}
            <section className="bg-[#432] p-12 lg:p-24 text-white space-y-12 rounded-[4rem]">
                <h2 className="text-4xl lg:text-7xl font-black italic tracking-tighter uppercase text-center">DIG_BY_GENRE</h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    {['SOUL', 'FUNK', 'PSYCH_ROCK', 'JAZZ_FUSION', 'ELECTRO_POP'].map(g => (
                        <button key={g} className="px-10 py-5 border-2 border-[#fb923c] text-[#fb923c] font-black uppercase text-xs tracking-widest hover:bg-[#fb923c] hover:text-white transition-all transform hover:rotate-3 shadow-[8px_8px_0px_0px_rgba(251,146,60,0.2)]">
                            {g}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}
