"use client";

import React from 'react';

export default function TechLogin() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] flex flex-col justify-center items-center px-6 py-24 font-mono">
            <div className="max-w-md w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#0062ff] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black p-12 space-y-16 border border-white/10 backdrop-blur-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent"></div>
                    <header className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-[2px] bg-[#00f2ff]"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/60 animate-pulse">NEURAL_AUTH_v4.0</span>
                        </div>
                        <h1 className="text-6xl font-black tracking-tighter uppercase italic skew-x-[-12deg] text-white">
                            SYNC <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] to-[#0062ff]">IDENT.</span>
                        </h1>
                    </header>

                    <form className="space-y-12">
                        <div className="relative bg-white/5 p-8 border border-white/10 focus-within:border-[#00f2ff] transition-all">
                            <div className="absolute top-2 right-2 flex space-x-1">
                                <div className="w-1 h-1 bg-[#00f2ff] rounded-full"></div>
                                <div className="w-1 h-1 bg-[#00f2ff] rounded-full opacity-20"></div>
                            </div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40 block mb-2 underline decoration-[#00f2ff]/20 underline-offset-4">INPUT_IDENTIFIER</label>
                            <input
                                type="email"
                                placeholder="NODE_ADMIN@CORE.NET"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase tracking-tighter"
                            />
                        </div>

                        <div className="relative bg-white/5 p-8 border border-white/10 focus-within:border-[#00f2ff] transition-all">
                            <div className="absolute top-2 right-2 flex space-x-1">
                                <div className="w-1 h-1 bg-[#00f2ff] rounded-full"></div>
                                <div className="w-1 h-1 bg-[#00f2ff] rounded-full opacity-20"></div>
                            </div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40 block mb-2 underline decoration-[#00f2ff]/20 underline-offset-4">SECRET_TOKEN</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase tracking-tighter"
                            />
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-gradient-to-r from-[#00f2ff] to-[#0062ff] text-black text-2xl font-black uppercase tracking-tighter transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(0,242,255,0.2)] hover:shadow-[0_0_50px_rgba(0,242,255,0.4)] relative overflow-hidden group/btn">
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                                INITIATE_HANDSHAKE
                            </button>
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic text-[#00f2ff]/40">
                                <a href="#" className="hover:text-white transition-colors">TOKEN_LOSS_v402</a>
                                <a href="/variances/tech/frontoffice/account/register" className="hover:text-white transition-colors">REGISTER_NEW_NODE</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t border-white/5 text-center relative">
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#00f2ff]/30 to-transparent blur-sm"></div>
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">Quantum_Auth_Suite_v1.08.12</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
