"use client";

import React from 'react';

export default function FitAbout() {
    return (
        <div className="min-h-screen bg-white text-black font-sans italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[18vw] font-black text-black/5 uppercase select-none pointer-events-none -skew-x-12">PERFORM</div>
                <div className="w-24 h-4 bg-black skew-x-[-12deg]"></div>
                <h1 className="text-7xl lg:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.8] text-black">
                    THE <br /> <span className="bg-black text-white px-8">ENGINE.</span>
                </h1>
                <p className="max-w-xl text-[12px] font-black uppercase tracking-[0.5em] opacity-40 leading-loose italic animate-pulse">EST_201X // HIGH_VELOCITY_STANDARDS // ELITE_INTEGRATION_CORE.</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48 relative z-10">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter border-b-[12px] border-black pb-8 -skew-x-12">RESULTS_ENFORCED.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic opacity-90 decoration-black decoration-8 underline">
                            <p>Fit is not about style. It is about data. We design for the athlete who demands the highest possible return on every movement.</p>
                            <p>Our philosophy is rooted in the optimization of the human machine. Every piece of gear we deploy is a calculated variable in your performance equation.</p>
                        </div>
                    </div>
                    <div className="aspect-[16/9] bg-black p-1 border-8 border-black transform -rotate-2 hover:rotate-0 transition-all duration-500 shadow-[40px_40px_0px_rgba(0,0,0,0.1)]">
                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover grayscale brightness-90 contrast-125" />
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-7xl font-black italic tracking-tighter uppercase italic -skew-x-12">PERFORMANCE_PILLARS.</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.6em] opacity-30 italic">Elite_Systems_v4.0.XP</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-0 border-8 border-black bg-black">
                        {[
                            { title: "Velocity_Max", desc: "Minimal weight, maximum output. We strip away the unnecessary to enhance the speed of execution." },
                            { title: "Data_Symmetry", desc: "Smart integration is standard. Every item is built to interface with your performance tracking network." },
                            { title: "Impact_Damping", desc: "Engineered resilience. Our hardware absorbs the shock of gravity so you can focus on the push." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-16 bg-white space-y-8 hover:bg-black hover:text-white transition-all duration-300">
                                <h3 className="text-[12px] font-black uppercase tracking-widest border-l-8 border-black pl-4 group-hover:border-white">{item.title}</h3>
                                <p className="text-2xl font-black italic leading-tight">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-24 border-y-[12px] border-black text-center space-y-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity"></div>
                    <h2 className="text-7xl font-black italic tracking-tighter uppercase -skew-x-12">JOIN_THE_ELITE.</h2>
                    <p className="max-w-2xl mx-auto text-3xl font-black italic uppercase leading-tight">The deployment begins now. Are you ready to optimize your output?</p>
                    <button className="px-24 py-12 bg-black text-white text-5xl font-black uppercase tracking-tighter hover:bg-[#ff0000] transition-all transform hover:skew-x-[-12deg] shadow-[30px_30px_0px_rgba(0,0,0,0.15)]">
                        ALLOCATE_READY
                    </button>
                </section>
            </main>
        </div>
    );
}
