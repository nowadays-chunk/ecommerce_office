"use client";

import React from 'react';

export default function GlintContact() {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] font-light italic">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
                <div className="absolute -top-20 text-[15vw] font-black text-[#ff8fa3]/5 uppercase italic select-none pointer-events-none">RADIATE</div>
                <div className="w-16 h-16 bg-white border border-[#ff8fa3]/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,143,163,0.3)] group">
                    <div className="w-6 h-6 bg-[#ff8fa3] rounded-full animate-ping"></div>
                </div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic text-[#4a3a4a]">AURA.</h1>
                <p className="text-[10px] font-black uppercase tracking-[0.8em] text-[#ff8fa3]/60 italic">CELESTIAL_TRANSMIT // v8.0_RADIANT</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24 relative z-10">
                <section className="space-y-20">
                    <div className="space-y-12 text-left">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b border-[#ff8fa3]/20 pb-8 text-[#4a3a4a]">SIGNALS.</h2>
                        <div className="space-y-16">
                            <div className="group cursor-pointer">
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff8fa3] mb-4 italic">The_Luminous_Dial</p>
                                <p className="text-5xl font-black tracking-tighter text-[#4a3a4a] group-hover:scale-110 origin-left transition-transform transition-colors group-hover:text-[#ff8fa3]">01-800-GLINT-GLOW</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff8fa3] mb-4 italic">Spectral_Mail</p>
                                <p className="text-5xl font-black tracking-tighter text-[#4a3a4a] group-hover:bg-[#ff8fa3] group-hover:text-white px-6 py-2 rounded-full inline-block transition-all shadow-xl">muse@glint.net</p>
                            </div>
                            <div className="pt-8 border-t border-[#ff8fa3]/10">
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff8fa3] mb-4 italic">The_Prism_Studio</p>
                                <p className="text-3xl font-light italic text-[#4a3a4a]/60 leading-tight">
                                    Level 88, The Glass Wing<br />
                                    Avenue of Light<br />
                                    Paris // Grid_Radiant
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-16 bg-white/60 backdrop-blur-3xl rounded-[5rem] border border-[#ff8fa3]/10 shadow-[0_60px_120px_-30px_rgba(255,143,163,0.1)] space-y-8 text-center group">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3] italic">AURA_SYNC</h3>
                        <p className="text-2xl font-light italic uppercase leading-tight italic text-[#4a3a4a]/80">"Every whisper received is a refraction of light we cherish. We respond within a single cycle of the moon, ensuring your radiance remains constant."</p>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="w-12 h-px bg-[#ff8fa3] shadow-[0_0_20px_#ff8fa3]"></div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3] italic animate-pulse">FREQUENCY_PEAK_v8.1</p>
                        </div>
                    </div>
                </section>

                <form className="space-y-12 p-16 bg-white rounded-[6rem] shadow-[0_100px_200px_-50px_rgba(255,143,163,0.2)] border border-[#ff8fa3]/5 flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff8fa3]/5 blur-[80px] rounded-full"></div>
                    <div className="space-y-12 relative z-10">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-center text-[#4a3a4a]">TRANSMIT_MUSE.</h2>
                        <div className="space-y-8">
                            <div className="space-y-2 border-b border-[#ff8fa3]/10 focus-within:border-[#ff8fa3] transition-all pb-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">Alias_Identity</label>
                                <input type="text" className="w-full bg-transparent outline-none text-2xl font-light italic py-2 text-[#4a3a4a] uppercase" placeholder="Your Aura Name" />
                            </div>
                            <div className="space-y-2 border-b border-[#ff8fa3]/10 focus-within:border-[#ff8fa3] transition-all pb-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">Signal_Hash</label>
                                <input type="email" className="w-full bg-transparent outline-none text-2xl font-light italic py-2 text-[#4a3a4a] uppercase" placeholder="MUSE@GLINT.NET" />
                            </div>
                            <div className="space-y-2 border-b border-[#ff8fa3]/10 focus-within:border-[#ff8fa3] transition-all pb-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">Aura_Whisper</label>
                                <textarea rows={4} className="w-full bg-transparent outline-none text-2xl font-light italic py-4 resize-none text-[#4a3a4a] uppercase" placeholder="Describe your glow..."></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-12 bg-gradient-to-r from-[#ff8fa3] to-[#ffb3c1] text-white text-4xl font-black uppercase tracking-tighter rounded-full hover:scale-[1.05] transition-all transform shadow-[0_40px_80px_-15px_rgba(255,143,163,0.3)] mt-12 relative z-10 overflow-hidden group/btn">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-[1.5s]"></div>
                        REVEAL_INTENT
                    </button>
                </form>
            </main>
        </div>
    );
}
