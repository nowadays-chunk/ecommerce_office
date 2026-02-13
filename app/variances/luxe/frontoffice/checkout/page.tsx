"use client";

import React from 'react';

export default function LuxeCheckout() {
    return (
        <div className="py-24 max-w-6xl mx-auto space-y-24">
            <header className="text-center space-y-6">
                <h1 className="text-5xl font-light tracking-[0.4em] text-white uppercase italic">Secure Acquisition</h1>
                <div className="flex justify-center items-center space-x-12 text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <span className="text-[#b4945c]">01 Selection</span>
                    <span className="text-white">02 Information</span>
                    <span>03 Verification</span>
                </div>
            </header>

            <div className="grid lg:grid-cols-3 gap-24">
                <div className="lg:col-span-2 space-y-16">
                    {/* Shipping Section */}
                    <section className="space-y-10">
                        <h2 className="text-xl font-light tracking-widest text-[#b4945c] uppercase border-b border-[#b4945c]/20 pb-4">Shipping Destination</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { label: 'First Name', placeholder: 'Alexander' },
                                { label: 'Last Name', placeholder: 'Sterling' },
                                { label: 'Address Line 1', placeholder: '100 Mayfair Street' },
                                { label: 'City', placeholder: 'London' },
                                { label: 'Postal Code', placeholder: 'W1J 8AQ' },
                                { label: 'Country', placeholder: 'United Kingdom' },
                            ].map(field => (
                                <div key={field.label} className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-600">{field.label}</label>
                                    <input className="w-full bg-[#0a0a0a] border border-white/10 p-4 text-xs text-white outline-none focus:border-[#b4945c] transition-all" placeholder={field.placeholder} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Payment Section */}
                    <section className="space-y-10">
                        <h2 className="text-xl font-light tracking-widest text-[#b4945c] uppercase border-b border-[#b4945c]/20 pb-4">Payment Method</h2>
                        <div className="bg-white/5 p-12 space-y-8 border border-white/5">
                            <div className="flex items-center space-x-6">
                                <div className="w-4 h-4 border-2 border-[#b4945c] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#b4945c] rounded-full"></div>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">Encrypted Card Entry</span>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Card Number</label>
                                    <input className="w-full bg-black border border-white/5 p-5 text-sm tracking-[0.4em] text-white outline-none focus:border-[#b4945c]" placeholder="**** **** **** ****" />
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Expiry Date</label>
                                        <input className="w-full bg-black border border-white/5 p-5 text-sm uppercase outline-none focus:border-[#b4945c]" placeholder="MM / YY" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Secure Code (CVV)</label>
                                        <input className="w-full bg-black border border-white/5 p-5 text-sm outline-none focus:border-[#b4945c]" placeholder="***" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Acquisition Summary Sidebar */}
                <aside className="space-y-12">
                    <div className="bg-[#111] p-12 border border-[#b4945c]/10 space-y-10 sticky top-32">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#b4945c]">Acquisition Summary</h3>
                        <div className="space-y-6">
                            <div className="flex justify-between text-xs font-light tracking-widest italic text-white/40">
                                <span>Celestial Halo Ring</span>
                                <span>$24,000</span>
                            </div>
                            <div className="flex justify-between text-xs font-light tracking-widest italic text-white/40">
                                <span>Empire Drop Earrings</span>
                                <span>$8,900</span>
                            </div>
                            <div className="h-[1px] bg-white/5"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Total Acquisition</span>
                                <span className="text-3xl font-light text-[#b4945c]">$32,900</span>
                            </div>
                        </div>
                        <button className="w-full py-8 bg-[#b4945c] text-black font-black uppercase text-[12px] tracking-[0.5em] hover:bg-white transition-all shadow-xl">
                            Finalize Transaction
                        </button>
                        <div className="pt-8 text-center space-y-2">
                            <p className="text-[8px] font-bold font-mono text-gray-600 uppercase">AES-256 BANK GRADE ENCRYPTION</p>
                            <p className="text-[8px] font-bold font-mono text-gray-600 uppercase">PRIVATE CONCIERGE ASSURED</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
