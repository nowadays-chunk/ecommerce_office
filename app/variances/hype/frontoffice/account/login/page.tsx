"use client";

import React from 'react';

export default function HypeLogin() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-24 font-mono italic">
            <div className="max-w-md w-full p-px bg-white">
                <div className="bg-black p-12 space-y-16">
                    <header className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-1 bg-white"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">AUTHORIZATION_PHASE</span>
                        </div>
                        <h1 className="text-7xl font-black tracking-tighter uppercase -skew-x-12 leading-none">
                            ENTRY <br /> <span className="bg-white text-black px-4 italic">GRANTED.</span>
                        </h1>
                    </header>

                    <form className="space-y-12">
                        <div className="relative border-4 border-white/20 p-8 focus-within:border-white transition-all bg-white/5">
                            <label className="absolute -top-4 left-4 bg-black px-4 text-[10px] font-black uppercase tracking-widest italic">HASH_ID</label>
                            <input
                                type="email"
                                placeholder="OPERATOR@HYPE.CC"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-10 text-white uppercase"
                            />
                        </div>

                        <div className="relative border-4 border-white/20 p-8 focus-within:border-white transition-all bg-white/5">
                            <label className="absolute -top-4 left-4 bg-black px-4 text-[10px] font-black uppercase tracking-widest italic">ACCESS_CRYPT</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full text-2xl font-black italic outline-none bg-transparent placeholder:opacity-10 text-white uppercase"
                            />
                        </div>

                        <div className="pt-8 space-y-8">
                            <button className="w-full py-10 bg-white text-black text-3xl font-black uppercase tracking-tighter hover:bg-black hover:text-white border-4 border-white transition-all transform hover:rotate-1 shadow-2xl skew-x-[-12deg]">
                                EXECUTE_LOGIN
                            </button>
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                                <a href="#" className="hover:line-through">LOST_CRYPT?</a>
                                <a href="/variances/hype/frontoffice/account/register" className="hover:line-through">RECRUIT_NEW</a>
                            </div>
                        </div>
                    </form>

                    <footer className="pt-12 border-t-4 border-white/5 text-center">
                        <p className="text-[8px] font-black uppercase tracking-[0.6em] opacity-30 italic">BRUTALIST_AUTH_v3.02</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
