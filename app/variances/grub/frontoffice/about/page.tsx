"use client";

import React from 'react';

export default function GrubAbout() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-black italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-24 h-24 bg-[#22c55e]/10 border-8 border-white rounded-[3.5rem] flex items-center justify-center p-6 shadow-2xl animate-bounce">
                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase italic leading-none">THE_HARVEST.</h1>
                <p className="max-w-xl text-sm font-black uppercase tracking-widest opacity-40 italic leading-loose">Est. Last Season // Grown with Love // Sustainable_Foraging v2.0 // Community_Driven.</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter bg-[#2d3a3a] text-[#faf9f6] px-8 py-4 inline-block rounded-[3rem] shadow-2xl">OUR_ROOTS.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic opacity-80 decoration-[#22c55e] decoration-8 underline decoration-skip-ink-none">
                            <p>Grub started as a garden project and grew into a community mission. We believe that the best things in life are grown, gathered, and shared.</p>
                            <p>Our philosophy is simple: source directly, support locally, and always prioritize the health of the earth. Every acquisition in our shop supports a local farm or a sustainable forager.</p>
                        </div>
                    </div>
                    <div className="aspect-square bg-white p-12 rounded-[5rem] shadow-2xl border-8 border-white group overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#22c55e]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover rounded-[3rem] group-hover:scale-110 transition-transform duration-[10s]" />
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-6xl font-black italic tracking-tighter uppercase italic">FIELD_FOUNDATIONS.</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.6em] opacity-30 italic">Organic_Growth_v2.08.RAW</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Direct_Gather", desc: "No middle agents. We connect directly with the source ensuring maximum freshness and fair return to growers." },
                            { title: "Eco_Symmetry", desc: "Every package sent is 100% compostable. We leave the earth better than we found it, one delivery at a time." },
                            { title: "Tribe_Growth", desc: "A portion of every purchase goes into our community grant fund, supporting small farmers and eco-innovators." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-16 bg-white rounded-[4rem] shadow-2xl border-4 border-[#2d3a3a]/5 space-y-8 hover:-translate-y-4 transition-all duration-700 text-center relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] italic">{item.title}</h3>
                                <p className="text-xl font-black italic leading-tight text-[#2d3a3a]/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-24 bg-white rounded-[6rem] shadow-2xl text-center space-y-12 border-8 border-[#22c55e]/10 px-12 relative overflow-hidden group">
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#22c55e]/5 blur-[120px] rounded-full group-hover:bg-[#22c55e]/10 transition-all duration-1000"></div>
                    <h2 className="text-6xl font-black italic tracking-tighter uppercase">JOIN_THE_GATHER.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-black italic decoration-[#22c55e] decoration-4 underline">Our family is growing. Become a gatherer today and get fresh updates and seasonal surprises delivered to your pantry.</p>
                    <button className="px-20 py-10 bg-[#2d3a3a] text-white text-4xl font-black uppercase tracking-tighter rounded-[3rem] hover:bg-[#22c55e] transition-all transform hover:rotate-2 shadow-[0_20px_50px_rgba(34,197,94,0.3)]">
                        JOIN_THE_HARVEST
                    </button>
                </section>
            </main>
        </div>
    );
}
