"use client";

import React from 'react';

export default function GrubRegister() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] flex flex-col justify-center items-center px-6 py-24 font-black">
            <div className="max-w-md w-full relative">
                <div className="absolute -inset-8 bg-[#22c55e]/5 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="relative bg-white p-12 space-y-16 border-4 border-[#2d3a3a]/5 rounded-[4rem] shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 font-black text-[8vw] text-[#2d3a3a]/5 uppercase -rotate-12 pointer-events-none italic">FRESH</div>
                    <header className="space-y-8 relative z-10">
                        <h1 className="text-6xl font-black tracking-tighter uppercase leading-none italic">
                            GATHER <br /> <span className="bg-[#2d3a3a] text-white px-4">START.</span>
                        </h1>
                        <p className="text-sm font-black uppercase tracking-widest opacity-40 italic">Initialize your organic identity</p>
                    </header>

                    <form className="space-y-8 relative z-10">
                        <div className="space-y-4">
                            <div className="space-y-2 border-b-4 border-[#2d3a3a]/5 pb-6 focus-within:border-[#22c55e] transition-colors bg-white">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Gatherer_Name</label>
                                <input type="text" placeholder="ALEX MEADOW" className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#2d3a3a] uppercase tracking-tighter" />
                            </div>
                        </div>

                        <div className="space-y-2 border-b-4 border-[#2d3a3a]/5 pb-6 focus-within:border-[#22c55e] transition-colors bg-white">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Harvest_Email</label>
                            <input
                                type="email"
                                placeholder="HEARTY@GRUB.IO"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#2d3a3a] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="space-y-2 border-b-4 border-[#2d3a3a]/5 pb-6 focus-within:border-[#22c55e] transition-colors bg-white">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Pantry_Key</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#2d3a3a] uppercase tracking-tighter"
                            />
                        </div>

                        <div className="flex items-start space-x-4 p-8 bg-[#22c55e]/5 rounded-[3rem] border-4 border-[#22c55e]/10">
                            <input type="checkbox" className="mt-1 w-6 h-6 rounded-full border-[#2d3a3a] accent-[#22c55e]" />
                            <p className="text-[10px] uppercase font-black tracking-widest opacity-40 italic leading-tight">I agree to the organic terms and community harvest protocols.</p>
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-[#2d3a3a] text-white text-3xl font-black uppercase tracking-tighter hover:bg-[#22c55e] transition-all transform hover:rotate-1 shadow-2xl rounded-[3rem]">
                                JOIN_THE_HARVEST
                            </button>
                            <div className="text-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="/variances/grub/frontoffice/account/login" className="hover:text-[#22c55e] transition-colors">ALREADY_A_GATHERER? SIGN_IN</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t-4 border-[#2d3a3a]/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">Pantry_Registry_v2.01_Hearty</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
