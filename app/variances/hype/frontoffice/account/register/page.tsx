"use client";

import React from 'react';

export default function HypeRegister() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-24 font-mono italic">
            <div className="max-w-md w-full border-8 border-white">
                <div className="bg-black p-12 space-y-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-[10vw] font-black text-white/5 pointer-events-none uppercase">JOIN</div>
                    <header className="space-y-8 relative z-10">
                        <h1 className="text-7xl font-black tracking-tighter uppercase -skew-x-12 leading-none">
                            RECRUIT <br /> <span className="bg-white text-black px-4 italic">NOW.</span>
                        </h1>
                        <p className="text-sm font-black uppercase tracking-widest opacity-40 italic">Initialize your operative status</p>
                    </header>

                    <form className="space-y-10 relative z-10">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative border-4 border-white/20 p-6 focus-within:border-white transition-all bg-white/5">
                                <label className="absolute -top-3 left-4 bg-black px-2 text-[8px] font-black uppercase tracking-widest">ALIAS</label>
                                <input type="text" placeholder="VANCE" className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase" />
                            </div>
                            <div className="relative border-4 border-white/20 p-6 focus-within:border-white transition-all bg-white/5">
                                <label className="absolute -top-3 left-4 bg-black px-2 text-[8px] font-black uppercase tracking-widest">RANK</label>
                                <input type="text" placeholder="ELITE" className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase" />
                            </div>
                        </div>

                        <div className="relative border-4 border-white/20 p-8 focus-within:border-white transition-all bg-white/5">
                            <label className="absolute -top-4 left-4 bg-black px-4 text-[10px] font-black uppercase tracking-widest italic">HASH_ID</label>
                            <input
                                type="email"
                                placeholder="OPERATOR@HYPE.CC"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase"
                            />
                        </div>

                        <div className="relative border-4 border-white/20 p-8 focus-within:border-white transition-all bg-white/5">
                            <label className="absolute -top-4 left-4 bg-black px-4 text-[10px] font-black uppercase tracking-widest italic">ACCESS_CRYPT</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase"
                            />
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-white text-black text-3xl font-black uppercase tracking-tighter hover:bg-black hover:text-white border-4 border-white transition-all transform hover:-rotate-1 shadow-2xl skew-x-[-12deg]">
                                EXECUTE_SIGN_UP
                            </button>
                            <div className="text-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="/variances/hype/frontoffice/account/login" className="hover:line-through">ALREADY_RECRUITED? SIGN_IN</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t-4 border-white/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">ENCRYPTED_SIGNUP_v2.09</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
