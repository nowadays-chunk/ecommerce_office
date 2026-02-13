"use client";

import React from 'react';

export default function NordicContact() {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] font-sans">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-8 h-px bg-[#2d2d2d]/40"></div>
                <h1 className="text-7xl lg:text-9xl font-light tracking-tight uppercase leading-none">STUDIO.</h1>
                <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-40 italic">Direct_Channel // Studio_Support_v1.01</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24">
                <section className="space-y-20">
                    <div className="space-y-12 text-left">
                        <h2 className="text-3xl font-light uppercase tracking-tight border-b border-[#2d2d2d]/10 pb-6 text-[#2d2d2d]">CONTACT_POINTS.</h2>
                        <div className="space-y-16">
                            <div className="hover:translate-x-2 transition-transform duration-500">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40 mb-2 italic">Signal_Audio</p>
                                <p className="text-4xl font-light tracking-tight text-[#2d2d2d]">+45 (0) 20 42 88</p>
                            </div>
                            <div className="hover:translate-x-2 transition-transform duration-500">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40 mb-2 italic">Signal_Digital</p>
                                <p className="text-4xl font-light tracking-tight text-[#2d2d2d]">hello@nordic.dk</p>
                            </div>
                            <div className="pt-8 border-t border-[#2d2d2d]/10">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40 mb-2 italic">Studio_Base</p>
                                <p className="text-2xl font-light opacity-60 leading-relaxed">
                                    Vesterbrogade 88, Floor 2<br />
                                    1620 Copenhagen V<br />
                                    Denmark // Nordic_Grid
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 bg-[#fafafa] border border-[#2d2d2d]/10 space-y-6">
                        <p className="text-lg font-light opacity-80 leading-relaxed italic">"Our studio is a space of focus and craftsmanship. We respond to all inquiries within 24 hours during standard studio intervals. We value the clarity of communication as much as the clarity of our designs."</p>
                        <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 bg-[#2d2d2d] rounded-full"></div>
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">Studio_Interval: 09:00 - 17:00 CET</p>
                        </div>
                    </div>
                </section>

                <form className="space-y-12 p-12 bg-white border border-[#2d2d2d]/10">
                    <div className="space-y-12">
                        <h2 className="text-3xl font-light uppercase tracking-tight text-center">TRANSMISSION_FORM.</h2>
                        <div className="space-y-8">
                            <div className="space-y-2 border-b border-[#2d2d2d]/10 focus-within:border-[#2d2d2d] transition-colors pb-2">
                                <label className="text-[8px] font-bold uppercase tracking-widest opacity-40">Alias_Name</label>
                                <input type="text" className="w-full bg-transparent outline-none text-xl font-light py-2" placeholder="Full Name" />
                            </div>
                            <div className="space-y-2 border-b border-[#2d2d2d]/10 focus-within:border-[#2d2d2d] transition-colors pb-2">
                                <label className="text-[8px] font-bold uppercase tracking-widest opacity-40">Signal_Email</label>
                                <input type="email" className="w-full bg-transparent outline-none text-xl font-light py-2" placeholder="email@nordic.dk" />
                            </div>
                            <div className="space-y-2 border-b border-[#2d2d2d]/10 focus-within:border-[#2d2d2d] transition-colors pb-2">
                                <label className="text-[8px] font-bold uppercase tracking-widest opacity-40">Inquiry_Payload</label>
                                <textarea rows={4} className="w-full bg-transparent outline-none text-xl font-light py-4 resize-none" placeholder="How can the studio assist you?"></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-8 bg-[#2d2d2d] text-white text-xl font-bold uppercase tracking-widest hover:bg-black transition-all transform active:scale-95 shadow-xl">
                        EXECUTE_TRANSMISSION
                    </button>
                </form>
            </main>
        </div>
    );
}
