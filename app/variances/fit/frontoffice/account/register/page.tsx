"use client";

import React from 'react';

export default function FitRegister() {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-6 py-24 font-sans italic">
            <div className="max-w-md w-full border-12 border-black">
                <div className="bg-white p-12 space-y-16 relative overflow-hidden shadow-[60px_60px_0px_rgba(0,0,0,0.05)]">
                    <div className="absolute top-0 right-0 p-4 text-[10vw] font-black text-black/5 uppercase pointer-events-none italic">JOIN</div>
                    <header className="space-y-8 relative z-10">
                        <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none">
                            START <br /> <span className="bg-black text-white px-4">TRAIN.</span>
                        </h1>
                        <p className="text-sm font-black uppercase tracking-widest opacity-40 italic">Initialize your performance profile</p>
                    </header>

                    <form className="space-y-10 relative z-10">
                        <div className="grid grid-cols-2 gap-px bg-black border-px border-black">
                            <div className="relative bg-white p-6 focus-within:bg-[#f1f1f1] transition-all">
                                <label className="text-[8px] font-black uppercase tracking-widest mb-2 block">ALIAS</label>
                                <input type="text" placeholder="JORDAN_R" className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-black uppercase" />
                            </div>
                            <div className="relative bg-white p-6 focus-within:bg-[#f1f1f1] transition-all">
                                <label className="text-[8px] font-black uppercase tracking-widest mb-2 block">TIER</label>
                                <input type="text" placeholder="ELITE" className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-black uppercase" />
                            </div>
                        </div>

                        <div className="relative border-8 border-black/5 p-8 focus-within:border-black transition-all bg-[#0a0a0a]/5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/60 mb-2 block italic">GEAR_IDENTIFIER</label>
                            <input
                                type="email"
                                placeholder="ATHLETE@FIT.CO"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-black uppercase"
                            />
                        </div>

                        <div className="relative border-8 border-black/5 p-8 focus-within:border-black transition-all bg-[#0a0a0a]/5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/60 mb-2 block italic">SECURE_TOKEN</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-black uppercase"
                            />
                        </div>

                        <div className="flex items-start space-x-4 p-8 bg-black text-white transform hover:-rotate-1 transition-transform cursor-crosshair">
                            <input type="checkbox" className="mt-1 w-6 h-6 border-white accent-white bg-black" />
                            <p className="text-[10px] uppercase font-black tracking-widest italic leading-tight">I acknowledge the performance terms and elite protocols v2.0.</p>
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-black text-white text-4xl font-black uppercase tracking-tighter hover:bg-[#ff0000] transition-all transform hover:skew-x-[-8deg] shadow-2xl">
                                ALLOCATE_SYMBOLS
                            </button>
                            <div className="text-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="/variances/fit/frontoffice/account/login" className="hover:text-black transition-colors underline decoration-2">ALREADY_REGISTERED? SIGN_IN</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t-8 border-black/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">Elite_Athlete_Registry_v4.0.12</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
