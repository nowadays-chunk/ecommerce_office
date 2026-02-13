"use client";

import React from 'react';

export default function HypeCheckout() {
    return (
        <div className="py-24 px-6 max-w-7xl mx-auto space-y-24 bg-white">
            <header className="border-b-8 border-black pb-12 flex justify-between items-end">
                <h1 className="text-9xl font-black italic uppercase tracking-tighter leading-none">ORDER_SECURE</h1>
                <div className="text-right space-y-2">
                    <p className="text-xs font-black bg-black text-white px-2 py-1 uppercase">LOG_ID_772</p>
                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest italic">Encrypted_Line_Active</p>
                </div>
            </header>

            <div className="grid lg:grid-cols-2 gap-24">
                <div className="space-y-20">
                    {/* Shipping Terminal */}
                    <section className="space-y-12">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter bg-black text-white px-6 py-4 inline-block">DELIVERY_COORD</h2>
                        <div className="grid grid-cols-1 gap-8">
                            {[
                                { label: 'OPERATOR_NAME', p: 'TYPE_HERE' },
                                { label: 'CONTACT_SIGNAL', p: 'EMAIL_PROTO' },
                                { label: 'DROP_ZONE_STREET', p: 'LOCATION_X' },
                                { label: 'POSTAL_HASH', p: 'ZIP_CODE' },
                            ].map(f => (
                                <div key={f.label} className="space-y-4">
                                    <label className="text-xs font-black uppercase opacity-40">{f.label}</label>
                                    <input className="w-full bg-[#f1f1f1] border-4 border-black p-6 text-xl font-black uppercase italic outline-none focus:bg-[#facc15] transition-all placeholder:text-black/10" placeholder={f.p} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Logistics Block */}
                    <section className="space-y-8 p-12 bg-black text-white transform -rotate-1 skew-x-1">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter">LOGISTICS_MODE</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-4 border-[#facc15] p-6 hover:bg-[#facc15] hover:text-black transition-all cursor-crosshair">
                                <span className="text-xl font-black uppercase italic">RAPID_DEPLOY</span>
                                <span className="text-xs font-black">+$24.00</span>
                            </div>
                            <div className="flex justify-between items-center border-4 border-white/20 p-6 opacity-40">
                                <span className="text-xl font-black uppercase italic">STANDARD_CARGO</span>
                                <span className="text-xs font-black">+$0.00</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Payment Terminal */}
                <div className="space-y-20 flex flex-col justify-between">
                    <section className="space-y-12">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter bg-[#facc15] text-black px-6 py-4 inline-block">CREDIT_GATEWAY</h2>
                        <div className="bg-[#f1f1f1] border-8 border-black p-12 space-y-10 relative">
                            <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 text-[8px] font-black uppercase">AES_256_ACTIVE</div>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase opacity-40">CARD_TOKEN</label>
                                    <input className="w-full bg-white border-4 border-black p-6 font-mono text-2xl tracking-[0.3em] outline-none" placeholder="**** **** **** ****" />
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase opacity-40">EXPIRY</label>
                                        <input className="w-full bg-white border-4 border-black p-6 font-mono text-xl" placeholder="MM/YY" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase opacity-40">CVV_NODE</label>
                                        <input className="w-full bg-white border-4 border-black p-6 font-mono text-xl" placeholder="***" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final Execution */}
                    <div className="border-t-8 border-black pt-12 space-y-12">
                        <div className="flex justify-between items-end">
                            <span className="text-3xl font-black italic uppercase tracking-tighter">GRAND_TOTAL</span>
                            <div className="text-right">
                                <p className="text-[10px] font-black opacity-30 uppercase">Incl. Tax & Surcharges</p>
                                <p className="text-8xl font-black italic tracking-tighter leading-none">$204.00</p>
                            </div>
                        </div>
                        <button className="w-full py-16 bg-black text-white text-6xl font-black italic uppercase tracking-tighter hover:bg-[#facc15] hover:text-black transition-all transform hover:scale-[1.05] shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                            EXECUTE_PAYMENT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
