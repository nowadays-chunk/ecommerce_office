"use client";

import React from 'react';

export default function WildCheckout() {
    return (
        <div className="py-24 px-6 lg:px-20 max-w-6xl mx-auto space-y-24 bg-[#f4f1ea] text-[#2d2a22] font-serif">
            <header className="flex flex-col md:flex-row justify-between items-end gap-8 border-b-2 border-[#344e41]/10 pb-12">
                <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter text-[#2d2a22] leading-none uppercase">THE_OATH.</h1>
                <div className="text-right space-y-2">
                    <div className="w-16 h-2 bg-[#344e41] ml-auto"></div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#344e41]/40 italic">Log_Code: WD-8821</p>
                </div>
            </header>

            <div className="grid lg:grid-cols-2 gap-24">
                <div className="space-y-20">
                    {/* Wild Coordinates */}
                    <section className="space-y-12">
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-[#dad7cd] bg-[#344e41] px-8 py-4 rounded-full inline-block shadow-xl">DELIVERY_VECTOR</h2>
                        <div className="grid grid-cols-1 gap-10">
                            {[
                                { label: 'RECEIVER_NAME', p: 'Clara Fern' },
                                { label: 'SOUL_EMAIL', p: 'clara@green.fm' },
                                { label: 'STREET_PATH', p: '88 Mossy Path' },
                                { label: 'CITY_BIOME', p: 'Portland, OR' },
                            ].map(f => (
                                <div key={f.label} className="space-y-4">
                                    <label className="text-[10px] font-bold uppercase text-[#344e41]/40 tracking-widest">{f.label}</label>
                                    <input className="w-full bg-white border-2 border-[#344e41]/5 p-6 text-xl font-bold italic outline-none focus:border-[#344e41] transition-all" placeholder={f.p} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Logistics Logic */}
                    <section className="space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#344e41]/40">CARRIER_SIGNAL</h3>
                        <div className="p-8 bg-white border-4 border-[#344e41] space-y-2 transform rotate-1 shadow-2xl relative cursor-pointer hover:bg-[#344e41] hover:text-white transition-all group">
                            <div className="flex justify-between items-center text-2xl font-black uppercase italic italic">
                                <span>GROUND_FLOW</span>
                                <span className="text-[#344e41] group-hover:text-white">FREE</span>
                            </div>
                            <p className="text-sm font-medium opacity-40 italic group-hover:opacity-60">4-6 days via zero-emission relay</p>
                        </div>
                    </section>
                </div>

                {/* Secure Transact Node */}
                <aside className="space-y-16">
                    <div className="bg-white border-2 border-[#344e41]/10 p-12 space-y-12 relative shadow-[40px_40px_100px_rgba(52,78,65,0.05)] rounded-[3rem]">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-[#2d2a22] border-b-2 border-[#344e41]/5 pb-8">COMMUNITY_CONTRIBUTION</h3>
                        <div className="space-y-8 text-xl font-medium italic">
                            <div className="flex justify-between items-start opacity-40">
                                <span>Raw Moss (x1)</span>
                                <span>$22.00</span>
                            </div>
                            <div className="flex justify-between items-start opacity-40">
                                <span>Earth_Logistics</span>
                                <span>$0.00</span>
                            </div>
                            <div className="h-[2px] bg-[#344e41]/10"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#344e41]/40">FINAL_INVESTMENT</span>
                                <span className="text-7xl font-black text-[#344e41] leading-none">$22.00</span>
                            </div>
                        </div>

                        <div className="space-y-10 pt-12 border-t-2 border-[#344e41]/5">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase text-[#344e41]">FINANCIAL_SIGNAL</label>
                                <input className="w-full bg-[#f4f1ea] border-b-4 border-[#344e41] p-6 text-2xl tracking-[0.3em] outline-none font-mono" placeholder="**** **** **** ****" />
                            </div>
                            <button className="w-full py-12 bg-[#344e41] text-[#dad7cd] text-4xl font-black italic uppercase tracking-widest hover:bg-[#2d2a22] transition-all transform hover:-rotate-1 shadow-2xl">
                                CONFIRM_OATH
                            </button>
                        </div>

                        <div className="pt-8 text-center">
                            <p className="text-[9px] font-black text-[#344e41] uppercase tracking-[0.5em] italic">SECURE_EARTH_ENCRYPTION_v1.08</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
