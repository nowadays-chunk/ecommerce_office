"use client";

import React from 'react';

export default function LuxeAbout() {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a] font-serif">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-px h-24 bg-black/20"></div>
                <h1 className="text-7xl lg:text-[10rem] font-light tracking-tighter uppercase leading-none italic">THE_HERITAGE.</h1>
                <p className="max-w-xl text-xs font-black uppercase tracking-[0.6em] opacity-40 leading-loose">Established 1982 // Dedicated to the preservation of aesthetic excellence and the pursuit of the absolute.</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-light italic uppercase tracking-tight border-b-2 border-black/5 pb-8">OUR_PHILOSOPHY.</h2>
                        <div className="space-y-8 text-xl font-light leading-relaxed italic opacity-80">
                            <p>We believe that luxury is not found in the manifest, but in the latent. It is the silent resonance of a well-crafted object, the weight of history in a single thread, and the uncompromising dedication to a singular vision.</p>
                            <p>Each piece in our archive is selected with a rigorous eye for detail, ensuring that only the most exceptional expressions of artistry are granted entry into our collection.</p>
                        </div>
                    </div>
                    <div className="aspect-[4/5] bg-[#f8f8f8] p-12 flex items-center justify-center grayscale">
                        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-5xl font-light italic tracking-tight uppercase italic">CERTIFIED_CRAFTSMANSHIP.</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30">The_Standards_v1.08</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Pure_Origin", desc: "Every material is traced to its source, ensuring ethical acquisition and uncompromising quality." },
                            { title: "Artisan_Touch", desc: "Hand-finished by master craftsmen who have dedicated lifetimes to perfecting their discipline." },
                            { title: "Timeless_Aura", desc: "Designed to transcend trends, our objects are intended to be passed down through generations." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-12 border-2 border-black/5 space-y-8 hover:border-black transition-all duration-700">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">{item.title}</h3>
                                <p className="text-lg font-light italic opacity-60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-24 border-y-2 border-black/5 text-center space-y-12">
                    <h2 className="text-4xl font-light italic tracking-tight uppercase">JOIN_THE_CIRCLE.</h2>
                    <p className="max-w-2xl mx-auto text-xl font-light italic opacity-60">Membership is by recognition. Experience the archive in its full depth and secure your place among the elite observers of beauty.</p>
                    <button className="px-16 py-8 bg-black text-white text-2xl font-light uppercase tracking-tighter hover:bg-[#d4af37] transition-all transform hover:-translate-y-2">
                        INITIALIZE_MEMBERSHIP
                    </button>
                </section>
            </main>
        </div>
    );
}
