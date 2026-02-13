"use client";

import React from 'react';

export default function GrubLogin() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] flex flex-col justify-center items-center px-6 py-24 font-black">
            <div className="max-w-md w-full relative group">
                <div className="absolute -inset-4 bg-[#22c55e]/5 blur-[60px] rounded-full"></div>
                <div className="relative bg-white p-12 space-y-16 border-4 border-[#2d3a3a]/5 rounded-[4rem] shadow-2xl overflow-hidden">
                    <header className="text-center space-y-8">
                        <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#22c55e] mx-auto justify-center">
                            <span className="w-12 h-2 bg-[#2d3a3a]"></span>
                            <span>The_Fresh_Access</span>
                        </div>
                        <h1 className="text-6xl font-black tracking-tighter uppercase italic leading-none">
                            GRUB <br /> <span className="text-[#22c55e]">IN.</span>
                        </h1>
                        <p className="text-sm font-black uppercase tracking-widest opacity-40 italic">Continue the harvest journey</p>
                    </header>

                    <form className="space-y-12">
                        <div className="space-y-4 border-b-4 border-[#2d3a3a]/5 pb-6 focus-within:border-[#22c55e] transition-colors bg-white">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Harvest_Email</label>
                            <input
                                type="email"
                                placeholder="HEARTY@GRUB.IO"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#2d3a3a] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="space-y-4 border-b-4 border-[#2d3a3a]/5 pb-6 focus-within:border-[#22c55e] transition-colors bg-white">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Pantry_Key</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#2d3a3a] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-[#2d3a3a] text-white text-3xl font-black uppercase tracking-tighter hover:bg-[#22c55e] transition-all transform hover:rotate-1 shadow-2xl rounded-[3rem]">
                                OPEN_PANTRY
                            </button>
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="#" className="hover:text-[#22c55e] transition-colors">LOST_LIST?</a>
                                <a href="/variances/grub/frontoffice/account/register" className="hover:text-[#22c55e] transition-colors">NEW_GATHERER</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t-4 border-[#2d3a3a]/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">Organic_Auth_v1.08_Fresh</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
