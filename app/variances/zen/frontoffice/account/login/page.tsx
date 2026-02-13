"use client";

import React from 'react';

export default function ZenLogin() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] flex flex-col justify-center items-center px-6 py-24 font-serif">
            <div className="max-w-md w-full space-y-16 p-12 bg-white rounded-[4rem] shadow-2xl border border-white">
                <header className="text-center space-y-6">
                    <div className="w-4 h-4 bg-[#22c55e] rounded-full mx-auto"></div>
                    <h1 className="text-5xl font-bold tracking-tighter uppercase italic">RETURN.</h1>
                    <p className="text-sm font-medium uppercase tracking-widest opacity-40 italic">Continue your journey in stillness</p>
                </header>

                <form className="space-y-12">
                    <div className="space-y-2 border-b-2 border-[#2d3a3a]/5 pb-4 focus-within:border-[#22c55e] transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Soul_Email</label>
                        <input
                            type="email"
                            placeholder="breath@zen.fm"
                            className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                        />
                    </div>

                    <div className="space-y-2 border-b-2 border-[#2d3a3a]/5 pb-4 focus-within:border-[#22c55e] transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Inner_Key</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                        />
                    </div>

                    <div className="pt-8 space-y-8">
                        <button className="w-full py-8 bg-[#2d3a3a] text-white text-2xl font-bold uppercase tracking-tighter rounded-[3rem] hover:bg-[#22c55e] transition-all transform hover:-translate-y-1 shadow-2xl">
                            RESTORE_SYMMETRY
                        </button>
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                            <a href="#" className="hover:text-[#22c55e] transition-colors">LOST_PATH?</a>
                            <a href="/variances/zen/frontoffice/account/register" className="hover:text-[#22c55e] transition-colors">BEGIN_JOURNEY</a>
                        </div>
                    </div>
                </form>

                <footer className="pt-12 border-t-2 border-[#2d3a3a]/5 text-center">
                    <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30 italic">Mindful_Encryption_v1.08</p>
                </footer>
            </div>
        </div>
    );
}
