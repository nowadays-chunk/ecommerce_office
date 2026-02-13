"use client";

import React from 'react';

export default function TechRegister() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] flex flex-col justify-center items-center px-6 py-24 font-mono">
            <div className="max-w-md w-full relative">
                <div className="absolute -inset-4 bg-[#00f2ff]/5 blur-3xl rounded-full"></div>
                <div className="relative bg-black/60 p-12 space-y-16 border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 text-[6vw] font-black text-[#00f2ff]/5 uppercase pointer-events-none italic">REGISTER</div>
                    <header className="space-y-8 relative z-10">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-[1px] bg-[#00f2ff]"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">INITIALIZE_NODE://v2.09</span>
                        </div>
                        <h1 className="text-6xl font-black tracking-tighter uppercase italic skew-x-[-12deg] text-white">
                            NEW <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] to-[#0062ff]">ENTITY.</span>
                        </h1>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/60">Allocate neural resources</p>
                    </header>

                    <form className="space-y-8 relative z-10">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative bg-white/5 p-6 border border-white/10 focus-within:border-[#00f2ff] transition-all">
                                <label className="text-[8px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-2 block">NODE_ALIAS</label>
                                <input type="text" placeholder="VANCE_X" className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase" />
                            </div>
                            <div className="relative bg-white/5 p-6 border border-white/10 focus-within:border-[#00f2ff] transition-all">
                                <label className="text-[8px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-2 block">PRIORITY</label>
                                <input type="text" placeholder="LEVEL_01" className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase" />
                            </div>
                        </div>

                        <div className="relative bg-white/5 p-8 border border-white/10 focus-within:border-[#00f2ff] transition-all">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-2 block">INPUT_IDENTIFIER</label>
                            <input
                                type="email"
                                placeholder="ENTITY@CORE.NET"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase"
                            />
                        </div>

                        <div className="relative bg-white/5 p-8 border border-white/10 focus-within:border-[#00f2ff] transition-all">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-2 block">NEW_SECRET_TOKEN</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase"
                            />
                        </div>

                        <div className="flex items-start space-x-4 p-4 bg-[#00f2ff]/5 border border-[#00f2ff]/20">
                            <input type="checkbox" className="mt-1 w-4 h-4 border-[#00f2ff] accent-[#00f2ff] bg-black" />
                            <p className="text-[8px] uppercase font-black tracking-widest text-[#00f2ff]/60">I acknowledge neural integration and system protocols v4.0.</p>
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-gradient-to-r from-[#00f2ff] to-[#0062ff] text-black text-3xl font-black uppercase tracking-tighter hover:scale-[1.02] transition-transform shadow-[0_0_40px_rgba(0,242,255,0.3)]">
                                ALLOCATE_RESOURCES
                            </button>
                            <div className="text-center text-[10px] font-black uppercase tracking-widest italic text-[#00f2ff]/40">
                                <a href="/variances/tech/frontoffice/account/login" className="hover:text-white transition-colors">ENTITY_EXISTS? SIGN_IN</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t border-white/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">NEURAL_REGISTRY_v8.0.12</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
