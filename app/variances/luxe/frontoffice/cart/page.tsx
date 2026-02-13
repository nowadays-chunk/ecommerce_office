"use client";

import React from 'react';

const cartItems = [
    { id: '1', name: 'Celestial Halo Ring', price: '$24,000', qty: 1, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80' },
    { id: '2', name: 'Empire Drop Earrings', price: '$8,900', qty: 1, image: 'https://images.unsplash.com/photo-1535633302704-b02f4f141208?auto=format&fit=crop&w=400&q=80' },
];

export default function LuxeCart() {
    return (
        <div className="py-24 flex flex-col items-center">
            <div className="w-full max-w-4xl space-y-20">
                <header className="text-center space-y-4">
                    <h1 className="text-4xl font-light tracking-[0.2em] text-[#b4945c] uppercase">Your Selection</h1>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">Items ready for acquisition</p>
                </header>

                <main className="space-y-12">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row items-center gap-12 py-8 border-b border-white/5 group hover:border-[#b4945c]/20 transition-all">
                            <div className="w-40 aspect-square bg-[#0a0a0a] border border-white/5 p-2 overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                            </div>
                            <div className="flex-1 space-y-2 text-center md:text-left">
                                <h3 className="text-lg font-light tracking-widest text-white uppercase">{item.name}</h3>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Qty: {item.qty}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xl font-light text-[#b4945c]">{item.price}</p>
                                <button className="text-[10px] uppercase font-bold text-red-800/60 hover:text-red-800 transition-colors tracking-widest mt-4">Remove</button>
                            </div>
                        </div>
                    ))}
                </main>

                <footer className="grid md:grid-cols-2 gap-20 pt-12">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Concierge Note</h3>
                            <textarea className="w-full bg-white/5 border border-white/10 p-4 text-xs italic text-gray-400 focus:border-[#b4945c] outline-none transition-all" rows={4} placeholder="Special shipping instructions or gift message..."></textarea>
                        </div>
                    </div>
                    <div className="space-y-8 bg-[#b4945c]/5 p-12 border border-[#b4945c]/10">
                        <div className="space-y-4 font-light text-sm text-white/60">
                            <div className="flex justify-between font-bold">
                                <span className="uppercase tracking-widest">Subtotal</span>
                                <span className="text-[#b4945c]">$32,900</span>
                            </div>
                            <div className="flex justify-between italic">
                                <span>Shipping</span>
                                <span>Complimentary</span>
                            </div>
                        </div>
                        <div className="h-[1px] bg-[#b4945c]/20"></div>
                        <div className="flex justify-between items-end">
                            <span className="text-xs font-bold uppercase tracking-widest text-white">Total Value</span>
                            <span className="text-4xl font-light text-[#b4945c]">$32,900</span>
                        </div>
                        <a href="/variances/luxe/frontoffice/checkout" className="block w-full text-center py-6 bg-[#b4945c] text-black font-black uppercase text-[11px] tracking-[0.3em] hover:bg-white transition-all shadow-2xl">
                            Begin Checkout
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
