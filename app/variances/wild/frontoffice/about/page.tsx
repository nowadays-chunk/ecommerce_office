"use client";

import React from 'react';

export default function WildAbout() {
    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] font-serif italic">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-[#8b7e66]/5 blur-[150px] rounded-full group-hover:bg-[#8b7e66]/10 transition-all duration-[2s]"></div>
                <div className="w-16 h-[1px] bg-[#8b7e66] opacity-40"></div>
                <h1 className="text-7xl lg:text-[10rem] font-light tracking-tighter uppercase italic leading-[0.8] text-[#2d2a22]">
                    THE <br /> <span className="text-[#8b7e66] not-italic underline decoration-1 decoration-[#8b7e66]/20 underline-offset-[20px]">UNBOUND.</span>
                </h1>
                <p className="max-w-xl text-[10px] font-bold uppercase tracking-[0.8em] text-[#8b7e66] leading-loose italic animate-pulse">EST_BEFORE_ALL // RAW_MATTER // v1.0.WILD</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48 relative z-10">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-light italic uppercase tracking-tighter border-b border-[#8b7e66]/20 pb-8 text-[#2d2a22] relative">
                            <span className="relative z-10">FORAGED_ROOTS.</span>
                            <div className="absolute bottom-[-10px] left-0 w-32 h-1 bg-[#8b7e66] opacity-40"></div>
                        </h2>
                        <div className="space-y-8 text-2xl font-light leading-relaxed italic opacity-80 text-[#2d2a22]">
                            <p>We believe that the wild is not a place to visit, but a state of being. Our origins are rooted in the discovery of the silent, the raw, and the untamed.</p>
                            <p>Our journey is a return to the essentials. We curate objects that have been forged by the elements—materials that carry the weight of the earth and the breath of the wind.</p>
                        </div>
                    </div>
                    <div className="relative group p-8 bg-white/40 backdrop-blur-3xl rounded-[3rem] shadow-2xl border border-[#8b7e66]/10 overflow-hidden text-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#8b7e66]/10 to-transparent group-hover:opacity-100 transition-opacity"></div>
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-[12s] grayscale brightness-110" />
                        <div className="absolute bottom-12 right-12 text-[8px] font-bold uppercase tracking-[0.8em] text-[#8b7e66] bg-[#f4f1ea] px-6 py-3 rounded-xl shadow-xl">NATURAL_SYNC</div>
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-6xl font-light italic tracking-tighter uppercase italic text-[#2d2a22]">EARTH_AXIOMS.</h2>
                        <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#8b7e66]/40 italic">Nature_Cycle_v4.0.RAW</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Raw_Selection", desc: "No filters. No polishing. We source materials that retain their natural soul and structural honesty." },
                            { title: "Cycle_Return", desc: "Foraging is an act of restoration. Every acquisition supports the preservation of the wild lands we source from." },
                            { title: "Quiet_Endure", desc: "Endurance through silence. Our objects are built to withstand the elements and the passage of generations." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-16 bg-white/20 backdrop-blur-3xl rounded-3xl border border-[#8b7e66]/10 space-y-8 hover:border-[#8b7e66]/40 transition-all duration-1000 text-center group shadow-sm hover:shadow-2xl">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#8b7e66] group-hover:scale-125 transition-transform">{item.title}</h3>
                                <p className="text-xl font-light italic leading-tight text-[#2d2a22]/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-32 bg-white/40 backdrop-blur-3xl rounded-[4rem] text-center space-y-12 relative overflow-hidden group shadow-2xl border border-[#8b7e66]/10 px-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b7e66]/5 to-transparent skew-y-6"></div>
                    <h2 className="text-6xl font-light italic tracking-tighter uppercase text-[#2d2a22]">JOIN_THE_TRIBE.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-light italic text-[#8b7e66] uppercase tracking-tighter decoration-[#8b7e66]/50 underline underline-offset-8">The cycle is ready for your presence. Subscribe to our silent whispers from the wild.</p>
                    <button className="px-24 py-12 bg-[#2d2a22] text-[#f4f1ea] text-4xl font-light uppercase tracking-tighter hover:bg-[#8b7e66] transition-all transform rounded-2xl relative shadow-2xl group/btn overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-[2s]"></div>
                        ENTER_STILLNESS
                    </button>
                </section>
            </main>
        </div>
    );
}
