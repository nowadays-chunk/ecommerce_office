"use client";

import React from 'react';

export default function ZenAbout() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-serif">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-4 h-4 bg-[#22c55e] rounded-full animate-pulse"></div>
                <h1 className="text-7xl lg:text-9xl font-bold tracking-tighter uppercase italic leading-none">THE_VIBRATION.</h1>
                <p className="max-w-2xl text-sm font-medium uppercase tracking-widest opacity-40 italic leading-relaxed">Since the First Seed // Committed to the restoration of natural symmetry and the practice of intentional existence.</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="aspect-square bg-white rounded-full p-24 shadow-2xl border-4 border-white overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-[10s]" />
                    </div>
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold italic uppercase tracking-tight border-b-2 border-[#2d3a3a]/5 pb-8 text-[#22c55e]">OUR_ESSENCE.</h2>
                        <div className="space-y-8 text-2xl font-light leading-relaxed italic opacity-80">
                            <p>We exist in the space between the breath and the movement. Our journey began with a simple question: How can we live in harmony with the cycle of the earth while honoring the spirit of discovery?</p>
                            <p>Every essence we curate is a collaboration with nature, a mindful extraction of the beauty that already exists, refined only by stillness and time.</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-5xl font-bold italic tracking-tight uppercase italic">HARMONIZED_FOUNDATIONS.</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 italic">Mindful_Sourcing_v1.0.Organic</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Root_Wisdom", desc: "Traditional gathering methods that preserve the soil's health and the plant's vibration." },
                            { title: "Pure_Merge", desc: "Minimal processing ensures that the essence remains untainted and fully bio-active." },
                            { title: "Cycle_Return", desc: "Every acquisition results in a direct contribution back to the earth's reforestation efforts." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-16 bg-white rounded-[4rem] shadow-xl border border-[#2d3a3a]/5 space-y-8 hover:shadow-2xl transition-all duration-700 text-center">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">{item.title}</h3>
                                <p className="text-xl font-light italic opacity-60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-32 bg-white rounded-[5rem] shadow-2xl text-center space-y-12 border-4 border-white px-12">
                    <div className="w-12 h-1 bg-[#22c55e] mx-auto opacity-30"></div>
                    <h2 className="text-5xl font-bold italic tracking-tight uppercase">AWAKEN_THE_SOUL.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-light italic opacity-60 leading-relaxed">Join a community of intentional beings. Subscribe to our whispers and receive seasonal essences that align with the earth's rhythm.</p>
                    <button className="px-20 py-10 bg-[#2d3a3a] text-white text-3xl font-bold uppercase tracking-tighter rounded-full hover:bg-[#22c55e] transition-all transform hover:-translate-y-2 shadow-2xl">
                        BEGIN_JOURNEY
                    </button>
                </section>
            </main>
        </div>
    );
}
