"use client";

import React from 'react';

export default function NordicLogin() {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] flex flex-col justify-center items-center px-6 py-24 font-sans">
            <div className="max-w-md w-full space-y-16">
                <header className="text-center space-y-8">
                    <div className="w-12 h-[1px] bg-[#999] mx-auto"></div>
                    <h1 className="text-5xl font-light tracking-tighter uppercase leading-none">SIGN_IN.</h1>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-40 italic">Continue with simple access</p>
                </header>

                <form className="space-y-12">
                    <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Registered_Email</label>
                        <input
                            type="email"
                            placeholder="name@nordic.com"
                            className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5"
                        />
                    </div>

                    <div className="space-y-2 border-b-2 border-black/5 pb-4 focus-within:border-black transition-colors">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Security_Key</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full text-2xl font-light italic outline-none bg-transparent placeholder:opacity-5"
                        />
                    </div>

                    <div className="pt-8 space-y-8">
                        <button className="w-full py-8 bg-[#2d2d2d] text-white text-xl font-light uppercase tracking-tighter hover:bg-black transition-all shadow-xl">
                            AUTHORIZE_ACCESS
                        </button>
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic opacity-40">
                            <a href="#" className="hover:text-black transition-colors">KEY_RECOVERY</a>
                            <a href="/variances/nordic/frontoffice/account/register" className="hover:text-black transition-colors">NEW_PROFILE</a>
                        </div>
                    </div>
                </form>

                <footer className="pt-12 border-t-2 border-black/5 text-center">
                    <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30 italic">Minimalist_Auth_v1.02</p>
                </footer>
            </div>
        </div>
    );
}
