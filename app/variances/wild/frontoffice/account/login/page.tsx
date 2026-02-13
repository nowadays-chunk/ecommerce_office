"use client";

import React from 'react';

export default function WildLogin() {
    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] flex flex-col justify-center items-center px-6 py-24 font-serif">
            <div className="max-w-md w-full relative group">
                <div className="absolute -inset-4 bg-[#8b7e66]/5 blur-[60px] rounded-full group-hover:bg-[#8b7e66]/10 transition-all duration-1000"></div>
                <div className="relative bg-white/40 backdrop-blur-3xl p-16 space-y-16 border-2 border-[#8b7e66]/10 rounded-[2rem] shadow-2xl overflow-hidden">
                    <header className="text-center space-y-10">
                        <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.5em] text-[#8b7e66] mx-auto justify-center">
                            <span className="w-12 h-[1px] bg-[#8b7e66]"></span>
                            <span>Tribe_Access</span>
                        </div>
                        <h1 className="text-6xl font-light tracking-tighter uppercase leading-none italic">
                            GATHER <br /> <span className="bg-[#2d2a22] text-[#f4f1ea] px-4 not-italic">AGAIN.</span>
                        </h1>
                        <p className="text-sm font-bold uppercase tracking-widest opacity-40 italic">Continue your foraged journey</p>
                    </header>

                    <form className="space-y-12">
                        <div className="space-y-4 border-b-2 border-[#8b7e66]/20 pb-6 focus-within:border-[#2d2a22] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Bearer_Email</label>
                            <input
                                type="email"
                                placeholder="FORAGER@WILD.LIFE"
                                className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#2d2a22] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="space-y-4 border-b-2 border-[#8b7e66]/20 pb-6 focus-within:border-[#2d2a22] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Secret_Signet</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#2d2a22] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="pt-10 space-y-10">
                            <button className="w-full py-10 bg-[#2d2a22] text-[#f4f1ea] text-3xl font-light uppercase tracking-tighter hover:bg-[#8b7e66] transition-all transform hover:-translate-y-1 shadow-2xl rounded-xl">
                                RETURN_TO_WILD
                            </button>
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="#" className="hover:text-[#2d2a22] transition-colors">LOST_SIGNET?</a>
                                <a href="/variances/wild/frontoffice/account/register" className="hover:text-[#2d2a22] transition-colors">NEW_FORAGER</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-16 border-t border-[#8b7e66]/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">Nature_Auth_v1.08.Raw</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
