"use client";

import React from 'react';

export default function ApexRegister() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] flex flex-col justify-center items-center px-6 py-24 font-mono italic">
            <div className="max-w-md w-full relative">
                <div className="absolute -inset-4 bg-[#ff3e3e]/5 blur-[100px] rounded-full"></div>
                <div className="relative bg-black p-12 space-y-16 border-4 border-[#ff3e3e]/10 overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 font-black text-[10vw] text-[#ff3e3e]/5 uppercase -rotate-12 pointer-events-none italic">RECRUIT</div>
                    <header className="space-y-8 relative z-10">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-1 bg-[#ff3e3e]"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/40">NEW_DEPLOYMENT://v8.09</span>
                        </div>
                        <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none text-white">
                            JOIN <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed]">SQUAD.</span>
                        </h1>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/60 italic">Allocate combat resources</p>
                    </header>

                    <form className="space-y-8 relative z-10">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative bg-[#ff3e3e]/5 p-6 border-2 border-[#ff3e3e]/10 focus-within:border-[#ff3e3e] transition-all">
                                <label className="text-[8px] font-black uppercase tracking-widest text-[#ff3e3e]/40 mb-2 block italic">ALIAS</label>
                                <input type="text" placeholder="Z_REX" className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase" />
                            </div>
                            <div className="relative bg-[#ff3e3e]/5 p-6 border-2 border-[#ff3e3e]/10 focus-within:border-[#ff3e3e] transition-all">
                                <label className="text-[8px] font-black uppercase tracking-widest text-[#ff3e3e]/40 mb-2 block italic">RANK</label>
                                <input type="text" placeholder="APEX" className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase" />
                            </div>
                        </div>

                        <div className="relative bg-[#ff3e3e]/5 p-8 border-2 border-[#ff3e3e]/10 focus-within:border-[#ff3e3e] transition-all">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 mb-2 block italic">PLAYER_IDENT</label>
                            <input
                                type="email"
                                placeholder="LEGEND@APEX.GG"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase"
                            />
                        </div>

                        <div className="relative bg-[#ff3e3e]/5 p-8 border-2 border-[#ff3e3e]/10 focus-within:border-[#ff3e3e] transition-all">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 mb-2 block italic">SECRET_KEY</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase"
                            />
                        </div>

                        <div className="flex items-start space-x-4 p-8 bg-[#ff3e3e]/5 border-2 border-[#ff3e3e]/20 transform hover:-rotate-1 transition-transform">
                            <input type="checkbox" className="mt-1 w-6 h-6 border-[#ff3e3e] accent-[#ff3e3e] bg-black" />
                            <p className="text-[10px] uppercase font-black tracking-widest text-[#ff3e3e]/60 italic leading-tight">I acknowledge neural combat integration and squad protocols v8.0.</p>
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-4xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform skew-x-[-12deg] shadow-[0_0_60px_rgba(255,62,62,0.4)]">
                                ALLOCATE_LEGEND
                            </button>
                            <div className="text-center text-[10px] font-black uppercase tracking-widest italic text-[#ff3e3e]/40">
                                <a href="/variances/apex/frontoffice/account/login" className="hover:text-white transition-colors">ALREADY_DEPLOYED? SIGN_IN</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t border-[#ff3e3e]/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">Player_Registry_v12.0.XP</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
