"use client";

import React from 'react';

export default function LuxeLogin() {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a] flex flex-col justify-center items-center px-6 lg:px-24 py-24 font-serif">
            <div className="max-w-md w-full space-y-16">
                <header className="text-center space-y-6">
                    <div className="w-12 h-1 bg-black mx-auto"></div>
                    <h1 className="text-5xl font-light tracking-tighter uppercase">SIGN_IN.</h1>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-40 italic">Access your curated collection</p>
                </header>

                <form className="space-y-12">
                    <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Bearer_Email</label>
                        <input
                            type="email"
                            placeholder="identity@luxe.com"
                            className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                        />
                    </div>

                    <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Entry_Key</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                        />
                    </div>

                    <div className="pt-8 space-y-8">
                        <button className="w-full py-8 bg-black text-white text-2xl font-light uppercase tracking-tighter hover:bg-[#d4af37] transition-all transform hover:-translate-y-1 shadow-2xl">
                            AUTHORIZE_ENTRY
                        </button>
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                            <a href="#" className="hover:text-black transition-colors">LOST_KEY?</a>
                            <a href="/variances/luxe/frontoffice/account/register" className="hover:text-black transition-colors">CREATE_SIGNET</a>
                        </div>
                    </div>
                </form>

                <footer className="pt-12 border-t-2 border-black/5 text-center">
                    <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30">Secure_Transmission_Enforced_v1.08</p>
                </footer>
            </div>
        </div>
    );
}
