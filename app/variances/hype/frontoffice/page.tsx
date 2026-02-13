"use client";

import React from 'react';

const products = [
    { id: 1, name: 'VOID_LOGO HOODIE', price: '$180', color: 'bg-zinc-900', hoverColor: 'group-hover:bg-[#ccff00]' },
    { id: 2, name: 'NEON_RUNNER 2.0', price: '$420', color: 'bg-[#ccff00]', hoverColor: 'group-hover:bg-white', textColor: 'text-black' },
    { id: 3, name: 'CYBER_SHELL JACKET', price: '$350', color: 'bg-zinc-800', hoverColor: 'group-hover:bg-[#ccff00]' },
    { id: 4, name: 'STATIC CARGO', price: '$210', color: 'bg-zinc-700', hoverColor: 'group-hover:bg-[#ccff00]' },
];

export default function HypeHome() {
    return (
        <div className="space-y-0">
            {/* Hero Drop */}
            <section className="relative h-[80vh] grid md:grid-cols-2 border-b-[8px] border-white">
                <div className="p-12 flex flex-col justify-between border-b-[8px] md:border-b-0 md:border-r-[8px] border-white bg-white text-black">
                    <div className="space-y-4">
                        <span className="bg-black text-[#ccff00] px-4 py-1 text-sm uppercase">Next Drop in: 02:44:12</span>
                        <h1 className="text-8xl md:text-[10rem] leading-[0.85] tracking-tighter">THE <br /> VOID <br /> LINE.</h1>
                    </div>
                    <button className="w-full py-8 bg-black text-white text-4xl hover:bg-[#ccff00] hover:text-black transition-colors uppercase italic font-black">
                        Register for Access
                    </button>
                </div>
                <div className="relative group overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                        alt="Hype Hero"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-12 right-12 text-black bg-white p-6 rotate-3 border-[4px] border-black">
                        <p className="text-4xl font-black italic">FALL '24</p>
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <div className="bg-[#ccff00] py-4 border-b-[8px] border-white text-black overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block text-2xl uppercase italic flex items-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <span key={i} className="mx-8 font-black flex items-center">
                            FREE GLOBAL SHIPPING ON ORDERS OVER $500 <span className="mx-8">★</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Product Grid - Brutalist Style */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-screen">
                {products.map((p) => (
                    <div key={p.id} className={`group relative flex flex-col border-b-[8px] md:border-b-0 md:border-r-[8px] last:border-r-0 border-white cursor-pointer ${p.color} transition-colors ${p.hoverColor}`}>
                        <div className="p-8 flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <h3 className={`text-4xl leading-tight ${p.textColor || 'text-white'} group-hover:text-black transition-colors`}>{p.name}</h3>
                                <span className={`text-xl ${p.textColor || 'text-[#ccff00]'} border-2 ${p.textColor ? 'border-black' : 'border-[#ccff00]'} px-2 font-mono group-hover:bg-black group-hover:text-white transition-colors`}>{p.price}</span>
                            </div>
                            <div className="pt-24 flex justify-between items-end">
                                <div className={`p-4 border-4 ${p.textColor ? 'border-black' : 'border-white'} group-hover:border-black rounded-full`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className={p.textColor ? 'text-black' : 'text-white'}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </div>
                                <span className="text-[10px] uppercase group-hover:text-black font-black">Limited / 100</span>
                            </div>
                        </div>
                        <div className="h-64 relative bg-black/10">
                            {/* Product Image placeholder - in real usage would be here */}
                            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-10 group-hover:opacity-100 transition-opacity">
                                IMAGE_BLOB.JPG
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
}
