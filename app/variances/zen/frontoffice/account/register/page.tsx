"use client";

import React from 'react';

export default function ZenRegister() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] flex flex-col justify-center items-center px-6 py-24 font-serif">
            <div className="max-w-md w-full space-y-16 p-12 bg-white rounded-[4rem] shadow-2xl border border-white">
                <header className="text-center space-y-6">
                    <div className="w-8 h-[2px] bg-[#22c55e] mx-auto"></div>
                    <h1 className="text-5xl font-bold tracking-tighter uppercase italic">BIRTH.</h1>
                    <p className="text-sm font-medium uppercase tracking-widest opacity-40 italic">Initialize your mindful identity</p>
                </header>

                <form className="space-y-10">
                    <div className="space-y-2 border-b-2 border-[#2d3a3a]/5 pb-4 focus-within:border-[#22c55e] transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Vessel_Name</label>
                        <input
                            type="text"
                            placeholder="Sienna Wild"
                            className="w-full text-xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                        />
                    </div>

                    <div className="space-y-2 border-b-2 border-[#2d3a3a]/5 pb-4 focus-within:border-[#22c55e] transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Soul_Email</label>
                        <input
                            type="email"
                            placeholder="breath@zen.fm"
                            className="w-full text-xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                        />
                    </div>

                    <div className="space-y-2 border-b-2 border-[#2d3a3a]/5 pb-4 focus-within:border-[#22c55e] transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Inner_Key</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full text-xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                        />
                    </div>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-start space-x-4">
                            <input type="checkbox" className="mt-1 w-4 h-4 rounded-full border-[#22c55e] accent-[#22c55e]" />
                            <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 italic">I vow to respect the natural cycle and mindful protocols.</p>
                        </div>
                    </div>

                    <div className="pt-8 space-y-8">
                        <button className="w-full py-8 bg-[#2d3a3a] text-white text-2xl font-bold uppercase tracking-tighter rounded-[3rem] hover:bg-[#22c55e] transition-all transform hover:-translate-y-1 shadow-2xl">
                            INITIALIZE_SOUL
                        </button>
                        <div className="text-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                            <a href="/variances/zen/frontoffice/account/login" className="hover:text-[#22c55e] transition-colors">ALREADY_AWAKE? SIGN_IN</a>
                        </div>
                    </div>
                </form>

                <footer className="pt-12 border-t-2 border-[#2d3a3a]/5 text-center">
                    <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30 italic">Ecological_Identity_v1.08</p>
                </footer>
            </div>
        </div>
    );
}
