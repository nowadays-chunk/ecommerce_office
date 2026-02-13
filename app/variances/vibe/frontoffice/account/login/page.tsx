"use client";

import React from 'react';

export default function VibeLogin() {
    return (
        <div className="min-h-screen bg-[#fff5e6] text-[#ff4d6d] flex flex-col justify-center items-center px-6 py-24 font-serif italic">
            <div className="max-w-md w-full relative group">
                <div className="absolute -inset-4 bg-[#ff4d6d]/5 blur-[60px] rounded-full group-hover:bg-[#ff4d6d]/10 transition-all duration-1000"></div>
                <div className="relative bg-white/40 backdrop-blur-3xl p-12 space-y-16 border-4 border-[#ff4d6d]/10 rounded-t-[4rem] rounded-b-[2rem] shadow-2xl">
                    <header className="text-center space-y-8">
                        <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#ff4d6d]/40 mx-auto justify-center">
                            <span className="w-12 h-[2px] bg-[#ff4d6d]"></span>
                            <span>The_Groove_Access</span>
                        </div>
                        <h1 className="text-6xl font-black tracking-tighter uppercase leading-none">
                            TUNE <br /> <span className="bg-[#ff4d6d] text-white px-4">IN.</span>
                        </h1>
                        <p className="text-sm font-black uppercase tracking-widest opacity-40 italic">Continue the analog journey</p>
                    </header>

                    <form className="space-y-12">
                        <div className="space-y-2 border-b-4 border-[#ff4d6d]/10 pb-4 focus-within:border-[#ff4d6d] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Analog_Email</label>
                            <input
                                type="email"
                                placeholder="vibe@groove.fm"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#ff4d6d] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="space-y-2 border-b-4 border-[#ff4d6d]/10 pb-4 focus-within:border-[#ff4d6d] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Entry_Pass</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#ff4d6d] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-[#ff4d6d] text-white text-3xl font-black uppercase tracking-tighter hover:bg-black transition-all transform hover:-rotate-1 shadow-2xl rounded-full">
                                RECORD_START
                            </button>
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="#" className="hover:text-black transition-colors">LOST_GROOVE?</a>
                                <a href="/variances/vibe/frontoffice/account/register" className="hover:text-black transition-colors">NEW_TRACK</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t-2 border-[#ff4d6d]/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">Analog_Auth_v1.08.Wavy</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
