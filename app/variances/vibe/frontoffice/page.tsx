"use client";

import React from 'react';

const vinyls = [
    { id: 1, artist: 'The Electric Sun', title: 'Solar Flares', price: '$34', color: 'bg-[#ffb703]', image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80' },
    { id: 2, artist: 'Midnight Drive', title: 'Neon Highway', price: '$42', color: 'bg-[#fb8500]', image: 'https://images.unsplash.com/photo-1539375665275-f9ad415ef9ac?auto=format&fit=crop&w=800&q=80' },
    { id: 3, artist: 'Flora & Fauna', title: 'Organic Waves', price: '$29', color: 'bg-[#219ebc]', image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&w=800&q=80' },
    { id: 4, artist: 'Static Echo', title: 'Frequency Shift', price: '$38', color: 'bg-[#8ecae6]', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80' },
];

export default function VibeHome() {
    return (
        <div className="space-y-32 py-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 space-y-12">
                    <div className="space-y-4">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-[#fb8500] italic">Featured Rotation</span>
                        <h1 className="text-7xl md:text-[9rem] font-black italic tracking-tighter leading-[0.8] text-[#023047]">
                            FEEL THE <br /> <span className="text-transparent border-t-4 border-b-4 py-2 border-[#023047] [-webkit-text-stroke:2px_#023047]">GROOVE.</span>
                        </h1>
                    </div>
                    <p className="text-xl italic font-medium text-[#023047]/60 max-w-sm">
                        Premium pressings for the discerning ear. Hand-picked, ultra-clean, and ready to spin.
                    </p>
                    <button className="bg-[#023047] text-[#fef6e4] px-10 py-5 rounded-full font-black italic uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform">
                        Dive Into Crates
                    </button>
                </div>
                <div className="order-1 lg:order-2 relative group">
                    <div className="aspect-square bg-[#fb8500] rounded-full flex items-center justify-center p-8 animate-[spin_20s_linear_infinite] group-hover:pause">
                        <div className="w-full h-full rounded-full bg-[#023047] flex items-center justify-center border-8 border-white/20">
                            <div className="w-1/3 h-1/3 rounded-full bg-[#fb8500] border-4 border-white"></div>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=1000&q=80"
                            className="w-2/3 object-cover rounded-xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rotate-6"
                            alt="Vinyl Record"
                        />
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="space-y-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <h2 className="text-4xl font-black italic tracking-tighter flex items-center gap-4">
                        <span className="w-12 h-1 bg-[#fb8500]"></span>
                        NEW_ARRIVALS
                    </h2>
                    <div className="flex space-x-4">
                        {['A-Z', 'GENRE', 'DATE'].map(f => (
                            <button key={f} className="text-[10px] font-black italic uppercase px-6 py-2 border-2 border-[#023047] hover:bg-[#023047] hover:text-white transition-all">{f}</button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {vinyls.map((v) => (
                        <div key={v.id} className="group cursor-pointer">
                            <div className={`aspect-square ${v.color} p-4 relative mb-6 overflow-hidden transition-all duration-500 group-hover:-translate-y-4 group-hover:rotate-3 shadow-xl`}>
                                <img
                                    src={v.image}
                                    className="w-full h-full object-cover mix-blend-overlay opacity-60"
                                    alt={v.title}
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white p-4 rounded-full shadow-2xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#023047]"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-[#fb8500] tracking-widest">{v.artist}</p>
                                <h3 className="text-xl font-black italic tracking-tighter uppercase">{v.title}</h3>
                                <p className="text-sm font-bold opacity-40">{v.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Texture Section */}
            <section className="bg-[#fb8500] py-40 mx-[-100%] px-[100%] transform -rotate-2 relative">
                <div className="flex animate-marquee_slow whitespace-nowrap">
                    {[1, 2, 3, 4, 5].map(i => (
                        <span key={i} className="text-9xl font-black italic tracking-tighter text-[#023047]/10 mx-20">RECORD_STORE_VIBE</span>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center rotate-2">
                    <div className="max-w-2xl text-center space-y-8 bg-white/20 backdrop-blur-3xl p-16 rounded-3xl border-4 border-white/40">
                        <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter italic">"Music sounds better when it's tactile."</h2>
                        <div className="w-24 h-2 bg-white mx-auto"></div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        @keyframes marquee_slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee_slow {
          animation: marquee_slow 60s linear infinite;
        }
      `}</style>
        </div>
    );
}
