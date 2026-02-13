"use client";

import React from 'react';

export default function GrubContact() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-black italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-16 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_40px_rgba(34,197,94,0.4)]"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic">SAY_HI!</h1>
                <p className="text-sm font-black uppercase tracking-[0.4em] opacity-40 italic">GATHERER_SUPPORT // FRESH_RESPONSE_v2.01</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24 relative z-10">
                <section className="space-y-20">
                    <div className="space-y-12 text-left">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter bg-[#2d3a3a] text-[#faf9f6] px-8 py-4 inline-block rounded-[3rem] shadow-2xl shadow-[#2d3a3a]/20">NODES.</h2>
                        <div className="space-y-16">
                            <div className="group cursor-pointer">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-4 italic decoration-8 underline decoration-[#22c55e]/20">Gatherer_Audio</p>
                                <p className="text-5xl font-black tracking-tighter group-hover:text-[#22c55e] transition-colors transition-transform group-hover:translate-x-4">01-800-GRUB-LOVE</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-4 italic decoration-8 underline decoration-[#22c55e]/20">Messenger_Spirit</p>
                                <p className="text-5xl font-black tracking-tighter group-hover:bg-[#2d3a3a] group-hover:text-white px-6 py-2 rounded-full inline-block transition-all">hello@grub.io</p>
                            </div>
                            <div className="pt-8 border-t-8 border-[#2d3a3a]/10">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-4 italic">The_Greenhouse_Stall</p>
                                <p className="text-3xl font-black italic opacity-60 leading-tight">
                                    Main Barn, Plot 14<br />
                                    Eco Valley, Oregon<br />
                                    Earth_Network_Symmetry
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-16 bg-white rounded-[5rem] shadow-2xl border-8 border-white group overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#22c55e] opacity-20 uppercase italic animate-pulse">GROWING...</div>
                        <p className="text-2xl font-black italic uppercase leading-tight italic text-[#2d3a3a]/80">"We're usually in the field, but our hearts are always open. We respond to every whisper between sunrise and sunset, ensuring your pantry is always stocked with love."</p>
                        <div className="flex items-center space-x-4 mt-8">
                            <div className="w-12 h-2 bg-[#22c55e] rounded-full shadow-[0_0_20px_#22c55e]"></div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 italic text-[#22c55e]">SIGNAL_STATUS: ORGANIC_LIVE</p>
                        </div>
                    </div>
                </section>

                <form className="space-y-12 p-16 bg-white rounded-[6rem] shadow-2xl border-8 border-[#2d3a3a]/5 flex flex-col justify-center group relative overflow-hidden">
                    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#22c55e]/5 blur-[120px] rounded-full"></div>
                    <div className="space-y-12 relative z-10">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-center">SHARE_YOUR_SPROUT.</h2>
                        <div className="space-y-8">
                            <div className="space-y-2 border-b-8 border-[#faf9f6] focus-within:border-[#22c55e] transition-all pb-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Gatherer_Alias</label>
                                <input type="text" className="w-full bg-transparent outline-none text-2xl font-black italic py-2 text-[#2d3a3a] uppercase" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2 border-b-8 border-[#faf9f6] focus-within:border-[#22c55e] transition-all pb-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Harvest_Signal</label>
                                <input type="email" className="w-full bg-transparent outline-none text-2xl font-black italic py-2 text-[#2d3a3a] uppercase" placeholder="HEARTY@GRUB.IO" />
                            </div>
                            <div className="space-y-2 border-b-8 border-[#faf9f6] focus-within:border-[#22c55e] transition-all pb-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Message_Payload</label>
                                <textarea rows={4} className="w-full bg-transparent outline-none text-2xl font-black italic py-4 resize-none text-[#2d3a3a] uppercase" placeholder="Share your thoughts..."></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-12 bg-[#2d3a3a] text-white text-4xl font-black uppercase tracking-tighter rounded-[4rem] hover:bg-[#22c55e] transition-all transform hover:scale-[1.02] shadow-[0_20px_50px_rgba(34,197,94,0.3)] mt-12 relative z-10">
                        SEND_THE_VIBE
                    </button>
                </form>
            </main>
        </div>
    );
}
