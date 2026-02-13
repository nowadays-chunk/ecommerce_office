"use client";

import React from 'react';

export default function FitLogin() {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-6 py-24 font-sans italic">
            <div className="max-w-md w-full relative group">
                <div className="absolute -inset-1 bg-black skew-x-[-12deg] opacity-5 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-12 space-y-16 border-8 border-black shadow-[40px_40px_0px_rgba(0,0,0,0.1)] overflow-hidden">
                    <header className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-2 bg-black"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">SYSTEM_SYNC: ACTIVE</span>
                        </div>
                        <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none">
                            LOG <br /> <span className="text-transparent border-t-8 border-black text-black">IN.</span>
                        </h1>
                        <p className="text-sm font-black uppercase tracking-widest opacity-40 italic">Continue the performance cycle</p>
                    </header>

                    <form className="space-y-12">
                        <div className="relative border-8 border-black/5 p-8 focus-within:border-black transition-all bg-[#0a0a0a]/5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/60 block mb-2 italic">GEAR_IDENTIFIER</label>
                            <input
                                type="email"
                                placeholder="ATHLETE@FIT.CO"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-black uppercase tracking-tighter"
                            />
                        </div>

                        <div className="relative border-8 border-black/5 p-8 focus-within:border-black transition-all bg-[#0a0a0a]/5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/60 block mb-2 italic">SECURITY_TOKEN</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-black uppercase tracking-tighter"
                            />
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-black text-white text-3xl font-black uppercase tracking-tighter transition-all transform hover:skew-x-[-12deg] active:scale-95 shadow-xl hover:shadow-[20px_20px_0px_rgba(0,0,0,0.1)]">
                                EXECUTE_SYNC
                            </button>
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="#" className="hover:text-black transition-colors underline decoration-2">LOST_TOKEN?</a>
                                <a href="/variances/fit/frontoffice/account/register" className="hover:text-black transition-colors underline decoration-2">NEW_ATHLETE</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t-8 border-black/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">High_Velocity_Auth_v1.08.12</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
