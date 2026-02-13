"use client";

import React from 'react';

export default function WildRegister() {
    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] flex flex-col justify-center items-center px-6 py-24 font-serif">
            <div className="max-w-md w-full relative">
                <div className="absolute -inset-12 bg-[#8b7e66]/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="relative bg-white/40 backdrop-blur-3xl p-16 space-y-16 border-2 border-[#8b7e66]/10 rounded-[3rem] shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 font-black text-[12vw] text-[#2d2a22]/5 uppercase -rotate-12 pointer-events-none italic">SEED</div>
                    <header className="space-y-10 relative z-10 text-center">
                        <h1 className="text-7xl font-light tracking-tighter uppercase leading-none italic">
                            START <br /> <span className="bg-[#2d2a22] text-[#f4f1ea] px-4 not-italic">GROWTH.</span>
                        </h1>
                        <p className="text-sm font-bold uppercase tracking-widest opacity-40 italic">Allocate your foraged identifier</p>
                    </header>

                    <form className="space-y-12 relative z-10">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2 border-b-2 border-[#8b7e66]/20 pb-4 focus-within:border-[#2d2a22] transition-colors">
                                <label className="text-[8px] font-black uppercase tracking-widest opacity-40">NAME</label>
                                <input type="text" placeholder="CLARA FERN" className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#2d2a22] uppercase" />
                            </div>
                            <div className="space-y-2 border-b-2 border-[#8b7e66]/20 pb-4 focus-within:border-[#2d2a22] transition-colors">
                                <label className="text-[8px] font-black uppercase tracking-widest opacity-40">CLAN</label>
                                <input type="text" placeholder="VALLEY" className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#2d2a22] uppercase" />
                            </div>
                        </div>

                        <div className="space-y-2 border-b-2 border-[#8b7e66]/20 pb-6 focus-within:border-[#2d2a22] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Bearer_Email</label>
                            <input
                                type="email"
                                placeholder="FORAGER@WILD.LIFE"
                                className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#2d2a22] uppercase"
                            />
                        </div>

                        <div className="space-y-2 border-b-2 border-[#8b7e66]/20 pb-6 focus-within:border-[#2d2a22] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Secret_Signet</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#2d2a22] uppercase"
                            />
                        </div>

                        <div className="p-8 bg-[#8b7e66]/5 rounded-[2rem] border-2 border-[#8b7e66]/10 text-center">
                            <div className="flex items-center justify-center space-x-6">
                                <input type="checkbox" className="w-6 h-6 border-[#2d2a22] accent-[#2d2a22] bg-white rounded-full" />
                                <p className="text-[10px] uppercase font-black tracking-widest opacity-40 italic leading-tight">I vow to respect the natural cycle and sustainable protocols v1.0.</p>
                            </div>
                        </div>

                        <div className="pt-10 space-y-10">
                            <button className="w-full py-12 bg-[#2d2a22] text-[#f4f1ea] text-4xl font-light uppercase tracking-tighter hover:bg-[#8b7e66] transition-all transform rounded-2xl shadow-[0_40px_80px_-20px_rgba(45,42,34,0.3)]">
                                BEGIN_JOURNEY
                            </button>
                            <div className="text-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="/variances/wild/frontoffice/account/login" className="hover:text-[#2d2a22] transition-colors">ALREADY_FORAGING? SIGN_IN</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-16 border-t border-[#8b7e66]/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.8em] opacity-30 italic">Wild_Registry_v4.1.XP</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
