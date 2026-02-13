"use client";

import React from 'react';

export default function ZenCheckout() {
    return (
        <div className="py-24 max-w-4xl mx-auto px-6 space-y-20">
            <header className="text-center space-y-4">
                <h1 className="text-5xl font-light text-[#5f634f] lowercase tracking-tighter italic">the conscious checkout.</h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#5f634f]/40">Step 2 of 3 // Sanctuary Details</p>
            </header>

            <div className="grid md:grid-cols-5 gap-20">
                <div className="md:col-span-3 space-y-16">
                    <section className="space-y-10">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#a78b71] border-b border-[#f3f4ef] pb-6">Where shall we send your ritual?</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { label: 'Full Recipient Name', placeholder: 'Sienna Wild' },
                                { label: 'E-mail for Ritual Updates', placeholder: 'sienna@nature.co' },
                                { label: 'Sanctuary Address', placeholder: '22 Forest Lane' },
                                { label: 'City & Region', placeholder: 'Aspen, CO' },
                            ].map(field => (
                                <div key={field.label} className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#5f634f]/40">{field.label}</label>
                                    <input className="w-full bg-white border border-[#f3f4ef] p-5 text-sm text-[#5f634f] outline-none focus:border-[#a78b71] transition-all placeholder:opacity-20" placeholder={field.placeholder} />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#5f634f]/40">Shipping Harmony</h3>
                        <div className="p-8 bg-[#f3f4ef] border border-white space-y-4 relative group cursor-pointer hover:border-[#a78b71] transition-all">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-[#5f634f]">Carbon-Neutral Ground</span>
                                <span className="text-[#a78b71] font-bold">Complimentary</span>
                            </div>
                            <p className="text-[10px] italic text-[#5f634f]/60 italic uppercase tracking-widest">3-5 days via bicycle and EV fleet</p>
                        </div>
                    </section>
                </div>

                <aside className="md:col-span-2 space-y-12">
                    <div className="bg-[#fffdfa] border border-[#f3f4ef] p-12 space-y-10 sticky top-32">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#a78b71]">Ritual Summary</h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-[#5f634f] lowercase tracking-tight">sage & cedar mist</p>
                                    <p className="text-[8px] font-bold text-gray-300 uppercase italic">Qty: 1</p>
                                </div>
                                <span className="text-sm text-[#5f634f]">$42</span>
                            </div>
                            <div className="h-[1px] bg-[#f3f4ef]"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5f634f]/40">Total Contribution</span>
                                <span className="text-3xl font-light text-[#5f634f]">$42</span>
                            </div>
                        </div>

                        <button className="w-full py-6 bg-[#5f634f] text-white font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-[#a78b71] transition-all shadow-xl">
                            Finalize Order
                        </button>

                        <div className="pt-8 text-center bg-white p-4 rounded-lg">
                            <p className="text-[9px] font-bold uppercase text-[#5f634f]/40 tracking-widest mb-2 italic">Impact Detected</p>
                            <p className="text-[10px] font-bold text-[#a78b71]">+12m² forest restored</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
