"use client";

import React from 'react';

export default function VibeContact() {
    return (
        <div className="min-h-screen bg-[#ffecd1] text-[#ff4d6d] font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-12 h-12 bg-[#ff4d6d] rounded-full animate-bounce"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none text-shadow-retro">TALK!</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">DIRECT_DIAL // VIBE_SUPPORT_v4.20_LIVE</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24 relative z-10">
                <section className="space-y-20">
                    <div className="space-y-12 text-left">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter bg-white text-[#ff4d6d] px-6 py-4 inline-block shadow-[10px_10px_0px_#ff4d6d] transform -rotate-2">FREQ.</h2>
                        <div className="space-y-16">
                            <div className="group cursor-pointer">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]/60 mb-4 italic underline decoration-wavy">Hot_Line_Signal</p>
                                <p className="text-5xl font-black tracking-tighter transition-all group-hover:scale-110 origin-left">800-VIBE-HOT</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]/60 mb-4 italic underline decoration-wavy">Tape_Mail_Trans</p>
                                <p className="text-5xl font-black tracking-tighter transition-all group-hover:bg-[#ff4d6d] group-hover:text-[#ffecd1] px-4 -skew-x-12 inline-block">hello@vibe.fm</p>
                            </div>
                            <div className="pt-8 border-t-8 border-[#ff4d6d]/20">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]/60 mb-4 italic underline decoration-wavy">The_Basement_HQ</p>
                                <p className="text-3xl font-black italic opacity-60 leading-tight">
                                    77 Sunset Blvd, Apt 4B<br />
                                    Echo Park, Los Angeles<br />
                                    The_Analog_Grid
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 bg-white rounded-[3rem] shadow-2xl space-y-6 border-4 border-[#ff4d6d]/10 transform rotate-1">
                        <p className="text-2xl font-black italic uppercase leading-tight italic">"We're here for the late-night sessions and the midday grooves. Our team is usually by the cassette deck ready to help you with your order or your playlist."</p>
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-[#ff4d6d] rounded-full animate-ping"></div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 italic">Signal_Status: LIVE_ON_AIR</p>
                        </div>
                    </div>
                </section>

                <form className="space-y-12 p-12 bg-white rounded-[5rem] shadow-[30px_30px_0px_rgba(255,77,109,0.2)] border-4 border-[#ff4d6d]/5 flex flex-col justify-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-center">RECORD_MESSAGE.</h2>
                        <div className="space-y-8">
                            <div className="relative group">
                                <label className="text-[8px] font-black uppercase tracking-widest mb-2 block text-[#ff4d6d]/40">WHO_IS_THIS?</label>
                                <input type="text" className="w-full bg-[#ffecd1]/40 outline-none text-2xl font-black italic py-4 px-6 rounded-2xl border-4 border-transparent focus:border-[#ff4d6d] transition-all uppercase" placeholder="YOUR NAME" />
                            </div>
                            <div className="relative group">
                                <label className="text-[8px] font-black uppercase tracking-widest mb-2 block text-[#ff4d6d]/40">HOW_TO_REPLY?</label>
                                <input type="email" className="w-full bg-[#ffecd1]/40 outline-none text-2xl font-black italic py-4 px-6 rounded-2xl border-4 border-transparent focus:border-[#ff4d6d] transition-all uppercase" placeholder="HELLO@DOMAIN.COM" />
                            </div>
                            <div className="relative group">
                                <label className="text-[8px] font-black uppercase tracking-widest mb-2 block text-[#ff4d6d]/40">THE_JUICE?</label>
                                <textarea rows={4} className="w-full bg-[#ffecd1]/40 outline-none text-2xl font-black italic py-4 px-6 rounded-2xl border-4 border-transparent focus:border-[#ff4d6d] transition-all uppercase resize-none" placeholder="DESCRIBE THE VIBE..."></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-10 bg-[#ff4d6d] text-[#ffecd1] text-4xl font-black uppercase tracking-tighter rounded-full hover:scale-[1.05] transition-all transform active:scale-95 shadow-2xl mt-12">
                        PRESS_SEND
                    </button>
                </form>
            </main>
        </div>
    );
}
