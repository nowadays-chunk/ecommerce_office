"use client";

import React from 'react';

export default function HypeAbout() {
    return (
        <div className="min-h-screen bg-black text-white font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[15vw] font-black text-white/5 uppercase select-none pointer-events-none -rotate-12">DISRUPT</div>
                <div className="w-16 h-1 bg-white"></div>
                <h1 className="text-7xl lg:text-[12rem] font-black tracking-tighter uppercase leading-[0.8] -skew-x-12">
                    THE <br /> <span className="bg-white text-black px-4">MANIFESTO.</span>
                </h1>
                <p className="max-w-xl text-[10px] font-black uppercase tracking-[0.5em] opacity-40 leading-loose">EST_202X // BUILT TO BREAK // NO APOLOGIES // INDUSTRIAL STRENGTH AESTHETICS.</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48 relative z-10">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter border-b-8 border-white pb-8 -skew-x-6">NO_COMPROMISE.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic opacity-80 decoration-white decoration-4 underline">
                            <p>Hype is not a brand. It is a reaction. A structural response to the stagnation of modern consumption.</p>
                            <p>We do not design for the masses. We design for the friction. If it doesn't challenge the observer, it doesn't belong in our catalog.</p>
                        </div>
                    </div>
                    <div className="aspect-[4/5] bg-white p-2 flex items-center justify-center -rotate-2 transform hover:rotate-0 transition-transform duration-500">
                        <div className="w-full h-full bg-black p-4">
                            <img src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover grayscale brightness-125 contrast-150" />
                        </div>
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-6xl font-black italic tracking-tighter uppercase italic -skew-x-12">STRUCTURAL_PILLARS.</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.6em] opacity-30 italic">BRUTALIST_CORE_v3.02.MANIFEST</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Aggressive_Utility", desc: "Form follows friction. If it has no purpose, it is deleted. Every detail is a statement of intent." },
                            { title: "Raw_Selection", desc: "No filters. No polishing. We source materials that retain their industrial soul and structural integrity." },
                            { title: "Total_Disruption", desc: "We exist to challenge the status quo. Every drop is a psychological operation against mediocrity." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-12 border-4 border-white space-y-8 hover:bg-white hover:text-black transition-all duration-300 -skew-y-2 hover:skew-y-0">
                                <h3 className="text-[10px] font-black uppercase tracking-widest bg-white text-black px-2 inline-block shadow-[4px_4px_0px_white]">{item.title}</h3>
                                <p className="text-xl font-black italic leading-tight">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-24 border-y-8 border-white text-center space-y-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-5 transition-opacity"></div>
                    <h2 className="text-6xl font-black italic tracking-tighter uppercase -skew-x-6">JOIN_THE_REBELLION.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-black underline decoration-8">Recruitment is open. Are you structural enough to carry the weight?</p>
                    <button className="px-20 py-10 bg-white text-black text-4xl font-black uppercase tracking-tighter hover:bg-black hover:text-white border-8 border-white transition-all transform hover:rotate-2 shadow-[20px_20px_0px_rgba(255,255,255,0.2)]">
                        INITIALIZE_RECRUIT
                    </button>
                </section>
            </main>
        </div>
    );
}
