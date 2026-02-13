"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "Lofi Beats for High Living", date: "Oct 20, 2025", category: "PLAYLIST", excerpt: "Curating the ultimate saturated frequency for your analog afternoon." },
    { id: 2, title: "The Return of the Grain", date: "Aug 15, 2025", category: "VIBE_CHECK", excerpt: "Why the digital world is rediscovering the beauty of the imperfect pixel." },
    { id: 3, title: "Chasing Neon: A Sunset Study", date: "Apr 02, 2025", category: "AESTHETIC", excerpt: "A visual journey through the saturated horizons of the urban coast." }
];

export default function VibeBlog() {
    return (
        <div className="min-h-screen bg-[#ffecd1] text-[#ff4d6d] font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-16 bg-[#ff4d6d] rounded-full animate-bounce shadow-2xl"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none text-shadow-retro">TAPE_FEED.</h1>
                <p className="max-w-xl text-xs font-black uppercase tracking-[0.4em] opacity-40 leading-loose">Analog_Narratives // Saturated_Logs // v4.20</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <div className="grid lg:grid-cols-3 gap-12 border-t-8 border-[#ff4d6d]/10 pt-24">
                    {POSTS.map((post) => (
                        <div key={post.id} className="space-y-8 group cursor-pointer bg-white p-10 rounded-[3rem] shadow-[20px_20px_0px_#ff4d6d1a] border-4 border-[#ff4d6d]/5 hover:-translate-y-4 transition-all duration-500">
                            <div className="aspect-square bg-[#ffecd1] rounded-[2rem] overflow-hidden grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[3s]">
                                <img src={`https://images.unsplash.com/photo-${post.id === 1 ? '1514525253361-b83f85f127c0' : post.id === 2 ? '1557672172-298e090bd0f1' : '1550745165-9bc0b252726f'}?auto=format&fit=crop&w=600&q=80`} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-6">
                                <p className="text-[10px] font-black uppercase tracking-widest bg-[#ff4d6d] text-white px-4 py-1 rounded-full inline-block italic">{post.category} // {post.date}</p>
                                <h2 className="text-3xl font-black tracking-tighter italic leading-tight group-hover:scale-105 transition-transform origin-left uppercase">{post.title}</h2>
                                <p className="text-lg font-black opacity-60 leading-relaxed">{post.excerpt}</p>
                                <button className="text-[10px] font-black uppercase tracking-widest underline decoration-[#ff4d6d] decoration-Wavy underline-offset-8">CATCH_WAVE</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="py-32 bg-white rounded-[5rem] p-12 lg:p-24 text-center space-y-12 shadow-2xl relative overflow-hidden group transform -rotate-1">
                    <div className="absolute inset-0 bg-[#ff4d6d]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-5xl font-black italic uppercase tracking-tighter text-[#ff4d6d]">STAY_GROOVY.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-black italic opacity-60">Subscribe to receive monthly tape-links and early access to our saturated drops.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                        <input type="email" placeholder="YOUR_VIBE@EMAIL.COM" className="px-12 py-6 bg-[#ffecd1] rounded-full text-xl font-black placeholder:opacity-30 outline-none focus:ring-8 focus:ring-[#ff4d6d]/20 transition-all text-center italic" />
                        <button className="px-12 py-6 bg-[#ff4d6d] text-white text-xl font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-xl">SYNC_TAPES</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
