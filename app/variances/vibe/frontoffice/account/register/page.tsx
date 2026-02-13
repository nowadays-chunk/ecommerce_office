"use client";

import React from 'react';

export default function VibeRegister() {
    return (
        <div className="min-h-screen bg-[#fff5e6] text-[#ff4d6d] flex flex-col justify-center items-center px-6 py-24 font-serif italic">
            <div className="max-w-md w-full relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#ff4d6d]/10 to-[#ff8fa3]/5 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="relative bg-white/40 backdrop-blur-3xl p-12 space-y-16 border-4 border-[#ff4d6d]/10 rounded-[4rem] shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 font-black text-[8vw] text-[#ff4d6d]/5 uppercase -rotate-12 pointer-events-none">RECORD</div>
                    <header className="space-y-8 relative z-10">
                        <h1 className="text-6xl font-black tracking-tighter uppercase leading-none">
                            START <br /> <span className="bg-[#ff4d6d] text-white px-4">TRACK.</span>
                        </h1>
                        <p className="text-sm font-black uppercase tracking-widest opacity-40 italic">Initialize your analog soul</p>
                    </header>

                    <form className="space-y-8 relative z-10">
                        <div className="space-y-4">
                            <div className="space-y-2 border-b-4 border-[#ff4d6d]/10 pb-4 focus-within:border-[#ff4d6d] transition-colors">
                                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Alias_Name</label>
                                <input type="text" placeholder="DJ_VANCE" className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#ff4d6d] uppercase tracking-tighter" />
                            </div>
                        </div>

                        <div className="space-y-2 border-b-4 border-[#ff4d6d]/10 pb-4 focus-within:border-[#ff4d6d] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Analog_Email</label>
                            <input
                                type="email"
                                placeholder="vibe@groove.fm"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#ff4d6d] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="space-y-2 border-b-4 border-[#ff4d6d]/10 pb-4 focus-within:border-[#ff4d6d] transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Entry_Pass</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#ff4d6d] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="flex items-start space-x-4 p-6 bg-[#ff4d6d]/5 rounded-[2rem] border-2 border-[#ff4d6d]/10">
                            <input type="checkbox" className="mt-1 w-4 h-4 rounded-full border-[#ff4d6d] accent-[#ff4d6d]" />
                            <p className="text-[10px] uppercase font-black tracking-widest opacity-40 italic leading-tight">I agree to the analog terms and wavy protocols of the community.</p>
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-[#ff4d6d] text-white text-3xl font-black uppercase tracking-tighter hover:bg-black transition-all transform hover:rotate-1 shadow-2xl rounded-full">
                                INITIALIZE_TRACK
                            </button>
                            <div className="text-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="/variances/vibe/frontoffice/account/login" className="hover:text-black transition-colors">ALREADY_RECORDED? SIGN_IN</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t-2 border-[#ff4d6d]/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">Retro_Registry_v1.08.Wavy</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
