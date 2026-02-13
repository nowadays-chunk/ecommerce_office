"use client";

import React from 'react';

export default function LuxeContact() {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a] font-serif">
            <header className="py-2 scale-y-125 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 py-24">
                <div className="w-12 h-1 bg-[#d4af37]"></div>
                <h1 className="text-7xl lg:text-9xl font-light tracking-tighter uppercase leading-none italic">INQUIRIES.</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">The_Concierge_Signal // Response_Enforced</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24">
                <section className="space-y-16">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-light italic uppercase tracking-tight border-b-2 border-black/5 pb-6">DIRECT_CHANNELS.</h2>
                        <div className="space-y-12">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] mb-2">Headquarters_Signal</p>
                                <p className="text-4xl font-light italic tracking-tighter">+1 (800) LUXE-ARCHIVE</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] mb-2">Digital_Transmission</p>
                                <p className="text-4xl font-light italic tracking-tighter">concierge@luxe.com</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] mb-2">Physical_Archive</p>
                                <p className="text-2xl font-light italic opacity-60 leading-relaxed">
                                    The Glass Tower, Suite 880<br />
                                    Fifth Avenue, New York<br />
                                    United States of Aesthetics
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 bg-[#f8f8f8] border-l-8 border-[#d4af37] space-y-6">
                        <p className="text-xl font-light italic opacity-80 leading-relaxed">"True service is silent. Our concierge team is available 24/7 for elite tier members, ensuring that every acquisition and inquiry is handled with the utmost discretion and speed."</p>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">— Director of Relations</p>
                    </div>
                </section>

                <form className="space-y-12 p-12 border-2 border-black/5 bg-white shadow-2xl">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-light italic uppercase tracking-tight">TRANSMIT_INQUIRY.</h2>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2 border-b-2 border-black/5 pb-2 focus-within:border-black transition-colors">
                                <label className="text-[8px] font-black uppercase tracking-widest opacity-40">Identity_Name</label>
                                <input type="text" className="w-full bg-transparent outline-none text-xl font-light italic py-2" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2 border-b-2 border-black/5 pb-2 focus-within:border-black transition-colors">
                                <label className="text-[8px] font-black uppercase tracking-widest opacity-40">Signal_Email</label>
                                <input type="email" className="w-full bg-transparent outline-none text-xl font-light italic py-2" placeholder="email@domain.com" />
                            </div>
                        </div>
                        <div className="space-y-2 border-b-2 border-black/5 pb-2 focus-within:border-black transition-colors">
                            <label className="text-[8px] font-black uppercase tracking-widest opacity-40">Inquiry_Subject</label>
                            <select className="w-full bg-transparent outline-none text-xl font-light italic py-2 appearance-none">
                                <option>General_Archives</option>
                                <option>Elite_Acquisition</option>
                                <option>Private_Viewing</option>
                            </select>
                        </div>
                        <div className="space-y-2 border-b-2 border-black/5 pb-2 focus-within:border-black transition-colors">
                            <label className="text-[8px] font-black uppercase tracking-widest opacity-40">Message_Payload</label>
                            <textarea rows={4} className="w-full bg-transparent outline-none text-xl font-light italic py-4 resize-none" placeholder="Describe your inquiry..."></textarea>
                        </div>
                    </div>
                    <button className="w-full py-8 bg-black text-white text-2xl font-light uppercase tracking-tighter hover:bg-[#d4af37] transition-all transform hover:-translate-y-2">
                        EXECUTE_TRANSMISSION
                    </button>
                </form>
            </main>
        </div>
    );
}
