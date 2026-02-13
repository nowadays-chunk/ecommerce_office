"use client";

import React from 'react';

export default function GlintRegister() {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] flex flex-col justify-center items-center px-6 py-24 font-light">
            <div className="max-w-md w-full relative">
                <div className="absolute -inset-12 bg-gradient-to-tr from-[#ff8fa3]/10 to-transparent blur-[120px] rounded-full"></div>
                <div className="relative bg-white/60 backdrop-blur-3xl p-16 space-y-20 border border-[#ff8fa3]/10 rounded-[5rem] shadow-[0_60px_120px_-30px_rgba(255,143,163,0.15)] overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 font-black text-[10vw] text-[#ff8fa3]/5 uppercase italic pointer-events-none">AURA</div>
                    <header className="space-y-10 relative z-10 text-center">
                        <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none">
                            START <br /> <span className="text-[#ff8fa3]">MUSE.</span>
                        </h1>
                        <p className="text-sm font-light uppercase tracking-widest opacity-40 italic">Allocate your radiant identifier</p>
                    </header>

                    <form className="space-y-12 relative z-10">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2 border-b border-[#ff8fa3]/20 pb-4 focus-within:border-[#ff8fa3] transition-colors">
                                <label className="text-[8px] font-black uppercase tracking-widest text-[#ff8fa3]">ALIAS</label>
                                <input type="text" placeholder="CLARA_V" className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#4a3a4a] uppercase" />
                            </div>
                            <div className="space-y-2 border-b border-[#ff8fa3]/20 pb-4 focus-within:border-[#ff8fa3] transition-colors">
                                <label className="text-[8px] font-black uppercase tracking-widest text-[#ff8fa3]">PROFILE</label>
                                <input type="text" placeholder="RADIAN" className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#4a3a4a] uppercase" />
                            </div>
                        </div>

                        <div className="space-y-2 border-b border-[#ff8fa3]/20 pb-6 focus-within:border-[#ff8fa3] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">Celestial_Email</label>
                            <input
                                type="email"
                                placeholder="MUSE@GLINT.NET"
                                className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#4a3a4a] uppercase"
                            />
                        </div>

                        <div className="space-y-2 border-b border-[#ff8fa3]/20 pb-6 focus-within:border-[#ff8fa3] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">Aura_Cipher</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#4a3a4a] uppercase"
                            />
                        </div>

                        <div className="p-8 bg-gradient-to-br from-[#ff8fa3]/10 to-transparent rounded-[3rem] border border-[#ff8fa3]/10 text-center">
                            <div className="flex items-center justify-center space-x-4">
                                <input type="checkbox" className="w-6 h-6 border-[#ff8fa3] accent-[#ff8fa3] bg-white" />
                                <p className="text-[10px] uppercase font-black tracking-widest text-[#ff8fa3] italic leading-tight">I embrace the radiant terms and beauty protocols v4.0.</p>
                            </div>
                        </div>

                        <div className="pt-10 space-y-10">
                            <button className="w-full py-12 bg-gradient-to-r from-[#ff8fa3] to-[#ffb3c1] text-white text-4xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform shadow-[0_40px_80px_-15px_rgba(255,143,163,0.3)] rounded-full">
                                REVEAL_IDENTITY
                            </button>
                            <div className="text-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="/variances/glint/frontoffice/account/login" className="hover:text-[#ff8fa3] transition-colors">ALREADY_RADIANT? SIGN_IN</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-16 border-t border-[#ff8fa3]/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.8em] opacity-30 italic">Luminous_Registry_v8.1.12</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
