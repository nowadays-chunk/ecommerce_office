"use client";

import React from 'react';

export default function LuxeRegister() {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a] flex flex-col justify-center items-center px-6 lg:px-24 py-24 font-serif">
            <div className="max-w-md w-full space-y-16">
                <header className="text-center space-y-6">
                    <div className="w-12 h-1 bg-[#d4af37] mx-auto"></div>
                    <h1 className="text-5xl font-light tracking-tighter uppercase">MEMBERSHIP.</h1>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-40 italic">Initialize your luxury profile</p>
                </header>

                <form className="space-y-10">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">First_Name</label>
                            <input
                                type="text"
                                placeholder="Ariel"
                                className="w-full text-xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                            />
                        </div>
                        <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Last_Name</label>
                            <input
                                type="text"
                                placeholder="Vance"
                                className="w-full text-xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Bearer_Email</label>
                        <input
                            type="email"
                            placeholder="identity@luxe.com"
                            className="w-full text-xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                        />
                    </div>

                    <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Master_Key</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full text-xl font-light italic outline-none bg-transparent placeholder:opacity-10"
                        />
                    </div>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-start space-x-4">
                            <input type="checkbox" className="mt-1 w-4 h-4 rounded-none border-black accent-black" />
                            <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">I accept the terms of the private circle and privacy protocols.</p>
                        </div>
                    </div>

                    <div className="pt-8 space-y-8">
                        <button className="w-full py-8 bg-black text-white text-2xl font-light uppercase tracking-tighter hover:bg-[#d4af37] transition-all transform hover:-translate-y-1 shadow-2xl">
                            CREATE_IDENTITY
                        </button>
                        <div className="text-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                            <a href="/variances/luxe/frontoffice/account/login" className="hover:text-black transition-colors">ALREADY_A_MEMBER? SIGN_IN</a>
                        </div>
                    </div>
                </form>

                <footer className="pt-12 border-t-2 border-black/5 text-center">
                    <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30">Aura_Encrypted_Registration_v2.01</p>
                </footer>
            </div>
        </div>
    );
}
