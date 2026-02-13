"use client";

import React from 'react';

export default function ZenContact() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-serif italic">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-1 h-16 bg-[#22c55e]/20 rounded-full"></div>
                <h1 className="text-7xl lg:text-[10rem] font-bold tracking-tighter uppercase italic leading-none">WHISPERS.</h1>
                <p className="text-sm font-medium uppercase tracking-widest opacity-40 italic">Open Communication // Soul_Support_Active</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24">
                <section className="space-y-20">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold italic uppercase tracking-tight border-b-2 border-[#2d3a3a]/5 pb-8 text-[#22c55e]">STILL_CHANNELS.</h2>
                        <div className="space-y-16">
                            <div className="hover:translate-x-4 transition-transform duration-700 group">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-4">Vibration_Signal</p>
                                <p className="text-5xl font-bold tracking-tighter group-hover:text-[#22c55e] transition-colors">ZEN-CIRCLE-01</p>
                            </div>
                            <div className="hover:translate-x-4 transition-transform duration-700 group text-right">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-4">Soul_Transmit</p>
                                <p className="text-5xl font-bold tracking-tighter group-hover:text-[#22c55e] transition-colors">breath@zen.fm</p>
                            </div>
                            <div className="pt-8 border-t-2 border-[#2d3a3a]/5">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-4 italic">The_Garden_Archive</p>
                                <p className="text-3xl font-light italic opacity-60 leading-relaxed">
                                    The Moss Grove, Plot 42<br />
                                    Deep Valley, Kyoto Outer Limits<br />
                                    Earth_Network_Symmetry
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-16 bg-white rounded-[4rem] border border-[#2d3a3a]/5 shadow-2xl space-y-8 text-center">
                        <p className="text-2xl font-light italic opacity-80 leading-relaxed italic">"We listen as much as we speak. Every whisper received is a seed planted. We respond within two cycles of the sun, ensuring your journey remains undisturbed."</p>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-ping"></span>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Frequency_Sync_Active</p>
                        </div>
                    </div>
                </section>

                <form className="space-y-12 p-16 bg-white rounded-[5rem] shadow-2xl border-4 border-white flex flex-col justify-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold italic uppercase tracking-tight text-center">SEND_ENERGY.</h2>
                        <div className="space-y-8">
                            <div className="space-y-2 border-b-4 border-[#faf9f6] focus-within:border-[#22c55e] transition-colors pb-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Vessel_Alias</label>
                                <input type="text" className="w-full bg-transparent outline-none text-2xl font-light italic py-2" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2 border-b-4 border-[#faf9f6] focus-within:border-[#22c55e] transition-colors pb-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Soul_Signal</label>
                                <input type="email" className="w-full bg-transparent outline-none text-2xl font-light italic py-2" placeholder="breath@zen.fm" />
                            </div>
                            <div className="space-y-2 border-b-4 border-[#faf9f6] focus-within:border-[#22c55e] transition-colors pb-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Whisper_Intent</label>
                                <textarea rows={4} className="w-full bg-transparent outline-none text-2xl font-light italic py-4 resize-none" placeholder="What is your vibration?"></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-10 bg-[#2d3a3a] text-white text-3xl font-bold uppercase tracking-tighter rounded-full hover:bg-[#22c55e] transition-all transform hover:-translate-y-2 shadow-2xl mt-12">
                        TRANSMIT_INTENTION
                    </button>
                </form>
            </main>
        </div>
    );
}
