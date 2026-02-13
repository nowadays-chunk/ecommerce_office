"use client";

import React from 'react';

export default function WildContact() {
    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] font-serif italic">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
                <div className="absolute -top-20 text-[18vw] font-black text-[#2d2a22]/5 uppercase italic select-none pointer-events-none -rotate-6">WHISPER</div>
                <div className="w-16 h-16 bg-white border border-[#2d2a22]/10 rounded-full flex items-center justify-center shadow-2xl group">
                    <div className="w-3 h-3 bg-[#2d2a22] rounded-full animate-ping"></div>
                </div>
                <h1 className="text-7xl lg:text-[10rem] font-light tracking-tighter uppercase leading-none italic text-[#2d2a22]">STILL.</h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#8b7e66] italic">TRIBE_SIGNAL // v1.02_WILD</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24 relative z-10">
                <section className="space-y-20">
                    <div className="space-y-12 text-left">
                        <h2 className="text-4xl font-light italic uppercase tracking-tighter border-b border-[#2d2a22]/10 pb-8 text-[#2d2a22]">POINTS.</h2>
                        <div className="space-y-16">
                            <div className="group cursor-pointer">
                                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8b7e66] mb-4 italic">The_Quiet_Line</p>
                                <p className="text-5xl font-light tracking-tighter text-[#2d2a22] group-hover:scale-110 origin-left transition-transform transition-colors group-hover:text-[#8b7e66]">01-WILD-TALK</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8b7e66] mb-4 italic">Tribe_Mail</p>
                                <p className="text-5xl font-light tracking-tighter text-[#2d2a22] group-hover:bg-[#2d2a22] group-hover:text-[#f4f1ea] px-8 py-2 rounded-2xl inline-block transition-all shadow-xl">tribe@wild.life</p>
                            </div>
                            <div className="pt-8 border-t border-[#8b7e66]/10">
                                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8b7e66] mb-4 italic">The_Deep_Valley_HQ</p>
                                <p className="text-3xl font-light italic text-[#2d2a22]/60 leading-tight">
                                    The Moss Grove, Plot 14<br />
                                    High Meadows // West Ridge<br />
                                    Earth_Network_Symmetry
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-16 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-[#2d2a22]/10 shadow-2xl space-y-8 text-center group">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66] italic">SILENT_SYNC</h3>
                        <p className="text-2xl font-light italic uppercase leading-tight italic text-[#2d2a22]/80">"Communication is a ripple in the still water. We respond when the ripple settles, ensuring our words carry the weight of necessity and truth."</p>
                        <div className="flex items-center justify-center space-x-6">
                            <div className="w-16 h-[1px] bg-[#2d2a22] opacity-40 shadow-[0_0_20px_#2d2a22]"></div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66] italic animate-pulse">SIGNAL_STILL_v1.0</p>
                        </div>
                    </div>
                </section>

                <form className="space-y-12 p-16 bg-white/40 backdrop-blur-3xl rounded-[4rem] shadow-2xl border border-[#2d2a22]/5 flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b7e66]/5 blur-[100px] rounded-full"></div>
                    <div className="space-y-12 relative z-10">
                        <h2 className="text-4xl font-light italic uppercase tracking-tighter text-center text-[#2d2a22]">TRANSMIT_WHISPER.</h2>
                        <div className="space-y-10">
                            <div className="space-y-2 border-b-2 border-[#8b7e66]/10 focus-within:border-[#2d2a22] transition-all pb-4">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66]">Tribe_Name</label>
                                <input type="text" className="w-full bg-transparent outline-none text-2xl font-light italic py-2 text-[#2d2a22] uppercase" placeholder="Your Alias" />
                            </div>
                            <div className="space-y-2 border-b-2 border-[#8b7e66]/10 focus-within:border-[#2d2a22] transition-all pb-4">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66]">Spirit_Signal</label>
                                <input type="email" className="w-full bg-transparent outline-none text-2xl font-light italic py-2 text-[#2d2a22] uppercase" placeholder="TRIBE@WILD.LIFE" />
                            </div>
                            <div className="space-y-2 border-b-2 border-[#8b7e66]/10 focus-within:border-[#2d2a22] transition-all pb-4">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66]">Quiet_Message</label>
                                <textarea rows={4} className="w-full bg-transparent outline-none text-2xl font-light italic py-4 resize-none text-[#2d2a22] uppercase" placeholder="Share your whisper..."></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-12 bg-[#2d2a22] text-[#f4f1ea] text-4xl font-light uppercase tracking-tighter rounded-2xl hover:bg-[#8b7e66] transition-all transform shadow-2xl mt-12 relative z-10 overflow-hidden group/btn">
                        <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-[2s]"></div>
                        RELEASE_SIGNAL
                    </button>
                </form>
            </main>
        </div>
    );
}
