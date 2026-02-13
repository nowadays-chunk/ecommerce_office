"use client";

import React from 'react';

export default function GlintAbout() {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] font-light italic">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-[#ff8fa3]/10 blur-[150px] rounded-full group-hover:bg-[#ff8fa3]/20 transition-all duration-[2s]"></div>
                <div className="w-16 h-px bg-[#ff8fa3] shadow-[0_0_15px_#ff8fa3]"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.8] text-[#4a3a4a]">
                    THE <br /> <span className="text-[#ff8fa3]">AURA.</span>
                </h1>
                <p className="max-w-xl text-[10px] font-black uppercase tracking-[0.6em] text-[#ff8fa3]/60 leading-loose italic animate-pulse">LUMEN_ESTABLISHED // v8.01 // SPECTRAL_RADIANCE_ACTIVE</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48 relative z-10">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter border-b border-[#ff8fa3]/20 pb-8 text-[#4a3a4a] relative">
                            <span className="relative z-10">LUMINOUS_HISTORY.</span>
                            <div className="absolute bottom-0 left-0 w-32 h-2 bg-[#ff8fa3] blur-xl opacity-40"></div>
                        </h2>
                        <div className="space-y-8 text-2xl font-light leading-relaxed italic opacity-80 text-[#4a3a4a]">
                            <p>We began as a flicker in the void—a pursuit of the light that resides in the essence of all things beautiful.</p>
                            <p>Our journey is the constant refinement of radiance. We curate objects that don't just reflect light, but amplify it from within, transforming the observer into a muse of luminescence.</p>
                        </div>
                    </div>
                    <div className="relative group p-4 border border-[#ff8fa3]/10 bg-white/40 backdrop-blur-3xl rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(255,143,163,0.15)] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff8fa3]/10 to-transparent group-hover:opacity-100 transition-opacity"></div>
                        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d521?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover rounded-[4rem] group-hover:scale-110 transition-transform duration-[8s]" />
                        <div className="absolute top-8 left-8 text-[8px] font-black uppercase tracking-[0.8em] text-white bg-[#ff8fa3] px-4 py-2 rounded-full shadow-[0_0_20px_#ff8fa3]">SPECTRAL_LOCK</div>
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-6xl font-black italic tracking-tighter uppercase italic text-[#4a3a4a]">AESTHETIC_AXIOMS.</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-[#ff8fa3]/40 italic">Luminous_Ritual_v4.0.GLOW</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Sovereign_Sheen", desc: "Every surface is treated with spectral reverence. We prioritize materials that hold the glow of history and the light of the future." },
                            { title: "Radiant_Ritual", desc: "Acquisition is an act of transformation. We design the flow of beauty to be a meditative experience from cart to unboxing." },
                            { title: "Ethereal_Form", desc: "Lightweight, translucent, and shimmering. Our objects are intended to feel like captured vibrations of aesthetic energy." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-16 bg-white/60 backdrop-blur-3xl rounded-[4rem] border border-[#ff8fa3]/10 space-y-8 hover:border-[#ff8fa3]/40 transition-all duration-700 text-center group shadow-sm hover:shadow-2xl">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3] group-hover:scale-125 transition-transform">{item.title}</h3>
                                <p className="text-xl font-light italic leading-tight text-[#4a3a4a]/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-32 bg-white rounded-[6rem] text-center space-y-12 relative overflow-hidden group shadow-[0_80px_150px_-40px_rgba(255,143,163,0.2)] border border-[#ff8fa3]/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff8fa3]/5 to-transparent via-white to-transparent skew-y-6"></div>
                    <h2 className="text-6xl font-black italic tracking-tighter uppercase text-[#4a3a4a]">EMBODY_THE_GLOW.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-light italic text-[#ff8fa3] uppercase tracking-tighter decoration-[#ff8fa3]/20 underline decoration-8">The aura is ready for expansion. Subscribe to receive our seasonal luminescence.</p>
                    <button className="px-24 py-12 bg-gradient-to-r from-[#ff8fa3] to-[#ffb3c1] text-white text-4xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform shadow-[0_40px_80px_-15px_rgba(255,143,163,0.3)] rounded-full relative overflow-hidden group/btn">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-[1.5s]"></div>
                        ILLUMINATE_IDENTITY
                    </button>
                </section>
            </main>
        </div>
    );
}
