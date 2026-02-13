"use client";

import React from 'react';

export default function NordicRegister() {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] flex flex-col justify-center items-center px-6 py-24 font-sans">
            <div className="max-w-md w-full space-y-16">
                <header className="text-center space-y-8">
                    <div className="w-16 h-1 bg-[#2d2d2d] mx-auto"></div>
                    <h1 className="text-5xl font-light tracking-tighter uppercase leading-none">MEMBERSHIP.</h1>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-40 italic">Initialize your artisan profile</p>
                </header>

                <form className="space-y-10">
                    <div className="space-y-4">
                        <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Full_Name</label>
                            <input type="text" placeholder="Erik Sorenson" className="w-full text-xl font-light italic outline-none bg-transparent placeholder:opacity-5" />
                        </div>
                    </div>

                    <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Registered_Email</label>
                        <input
                            type="email"
                            placeholder="name@nordic.com"
                            className="w-full text-xl font-light italic outline-none bg-transparent placeholder:opacity-5"
                        />
                    </div>

                    <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">New_Key</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full text-xl font-light italic outline-none bg-transparent placeholder:opacity-5"
                        />
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-[#f8f8f8] border border-black/5">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded-none border-black accent-black" />
                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 italic">I accept the simple terms of membership and artisan ethics.</p>
                    </div>

                    <div className="pt-8 space-y-8">
                        <button className="w-full py-8 bg-[#2d2d2d] text-white text-xl font-light uppercase tracking-tighter hover:bg-black transition-all shadow-xl">
                            CREATE_PROFILE
                        </button>
                        <div className="text-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                            <a href="/variances/nordic/frontoffice/account/login" className="hover:text-black transition-colors">ALREADY_MEMBER? SIGN_IN</a>
                        </div>
                    </div>
                </form>

                <footer className="pt-12 border-t-2 border-black/5 text-center">
                    <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30 italic">Artisan_Registry_v1.02</p>
                </footer>
            </div>
        </div>
    );
}
