"use client";

import React from 'react';

export default function ApexLogin() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] flex flex-col justify-center items-center px-6 py-24 font-mono italic">
            <div className="max-w-md w-full relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black p-12 space-y-16 border-4 border-[#ff3e3e]/20 clip-path-polygon">
                    <header className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-1 bg-[#ff3e3e]"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/60 animate-pulse">MATCH_ENTRY_v7</span>
                        </div>
                        <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none text-white">
                            SYNC <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed]">START.</span>
                        </h1>
                        <p className="text-sm font-black uppercase tracking-widest opacity-40 italic">Initialize your legend status</p>
                    </header>

                    <form className="space-y-12">
                        <div className="relative bg-[#ff3e3e]/5 p-8 border-2 border-[#ff3e3e]/10 focus-within:border-[#ff3e3e] transition-all">
                            <div className="absolute top-2 right-2 w-2 h-2 bg-[#ff3e3e] skew-x-[-12deg]"></div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 block mb-2 underline decoration-[#ff3e3e]/20 underline-offset-4 italic">PLAYER_IDENT</label>
                            <input
                                type="email"
                                placeholder="LEGEND@APEX.GG"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase tracking-tighter"
                            />
                        </div>

                        <div className="relative bg-[#ff3e3e]/5 p-8 border-2 border-[#ff3e3e]/10 focus-within:border-[#ff3e3e] transition-all">
                            <div className="absolute top-2 right-2 w-2 h-2 bg-[#ff3e3e] skew-x-[-12deg]"></div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 block mb-2 underline decoration-[#ff3e3e]/20 underline-offset-4 italic">SECRET_KEY</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase tracking-tighter"
                            />
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-3xl font-black uppercase tracking-tighter transition-all transform hover:skew-x-[-12deg] active:scale-95 shadow-[0_0_50px_rgba(255,62,62,0.3)] hover:shadow-[0_0_80px_rgba(255,62,62,0.5)]">
                                AUTHORIZE_DEPLOY
                            </button>
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic text-[#ff3e3e]/40">
                                <a href="#" className="hover:text-white transition-colors">LOST_KEY_v702</a>
                                <a href="/variances/apex/frontoffice/account/register" className="hover:text-white transition-colors">RECRUIT_NEW_PLAYER</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t border-[#ff3e3e]/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">Competitive_Auth_Suite_v8.01.XP</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
