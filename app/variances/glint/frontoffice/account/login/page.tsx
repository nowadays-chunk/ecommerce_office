"use client";

import React from 'react';

export default function GlintLogin() {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] flex flex-col justify-center items-center px-6 py-24 font-light">
            <div className="max-w-md w-full relative group">
                <div className="absolute -inset-8 bg-[#ff8fa3]/10 blur-[100px] rounded-full group-hover:bg-[#ff8fa3]/20 transition-all duration-1000"></div>
                <div className="relative bg-white/40 backdrop-blur-3xl p-16 space-y-20 border border-[#ff8fa3]/10 rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(255,143,163,0.1)] overflow-hidden">
                    <header className="text-center space-y-10">
                        <div className="flex items-center space-x-4 text-[8px] font-black uppercase tracking-[0.5em] text-[#ff8fa3] mx-auto justify-center">
                            <span className="w-16 h-[1px] bg-[#ff8fa3]"></span>
                            <span>The_Aura_Login</span>
                        </div>
                        <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none">
                            GLOW <br /> <span className="text-[#ff8fa3]">IN.</span>
                        </h1>
                        <p className="text-sm font-light uppercase tracking-widest opacity-40 italic">Continue your beauty ritual</p>
                    </header>

                    <form className="space-y-16">
                        <div className="space-y-4 border-b border-[#ff8fa3]/20 pb-6 focus-within:border-[#ff8fa3] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">Celestial_Email</label>
                            <input
                                type="email"
                                placeholder="MUSE@GLINT.NET"
                                className="w-full text-3xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#4a3a4a] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="space-y-4 border-b border-[#ff8fa3]/20 pb-6 focus-within:border-[#ff8fa3] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">Radiant_Key</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-3xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#4a3a4a] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="pt-10 space-y-10">
                            <button className="w-full py-10 bg-gradient-to-r from-[#ff8fa3] to-[#ffb3c1] text-white text-3xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform shadow-[0_30px_60px_-10px_rgba(255,143,163,0.4)] rounded-full">
                                INITIALIZE_AURA
                            </button>
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="#" className="hover:text-[#ff8fa3] transition-colors">LOST_GLOW?</a>
                                <a href="/variances/glint/frontoffice/account/register" className="hover:text-[#ff8fa3] transition-colors">NEW_MUSE</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-16 border-t border-[#ff8fa3]/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.8em] opacity-30 italic">Spectral_Auth_v4.0_Luminous</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
