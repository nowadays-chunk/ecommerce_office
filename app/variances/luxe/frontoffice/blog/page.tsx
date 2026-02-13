"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "The Art of Eternal Craft", date: "Oct 12, 2025", category: "HERITAGE", excerpt: "Exploring the silent patience required to forge the Absolute Collection." },
    { id: 2, title: "Nocturnal Elegance: Winter '25", date: "Sep 24, 2025", category: "SEASONAL", excerpt: "A study in deep obsidian tones and the architecture of night-wear." },
    { id: 3, title: "The Private Archive Disclosure", date: "Aug 15, 2025", category: "EXCLUSIVITY", excerpt: "Granting a rare glimpse into the vaulted origins of our most guarded designs." }
];

export default function LuxeBlog() {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a] font-serif">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-px h-24 bg-black/10"></div>
                <h1 className="text-7xl lg:text-[10rem] font-light tracking-tighter uppercase leading-none italic">THE_JOURNAL.</h1>
                <p className="max-w-xl text-[10px] font-black uppercase tracking-[0.5em] opacity-40 leading-loose">Artisanal_Narratives // Heritage_Logs // v8.01</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <div className="grid lg:grid-cols-2 gap-24 border-t-2 border-black/5 pt-12">
                    {POSTS.map((post) => (
                        <div key={post.id} className="space-y-8 group cursor-pointer">
                            <div className="aspect-[16/9] bg-[#f8f8f8] overflow-hidden grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[2s]">
                                <img src={`https://images.unsplash.com/photo-${post.id === 1 ? '1523275335684-37898b6baf30' : post.id === 2 ? '1490481651871-ab68de25d43d' : '1441986300917-64674bd600d8'}?auto=format&fit=crop&w=800&q=80`} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-4">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] italic">{post.category} // {post.date}</p>
                                <h2 className="text-4xl font-light italic tracking-tight group-hover:underline underline-offset-8">{post.title}</h2>
                                <p className="text-xl font-light italic opacity-60 leading-relaxed max-w-lg">{post.excerpt}</p>
                                <button className="text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-black/10 pb-2 group-hover:border-black transition-all">READ_MANIFESTO</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="py-24 bg-[#f8f8f8] p-12 lg:p-24 text-center space-y-12 border-l-8 border-[#d4af37]">
                    <h2 className="text-5xl font-light italic uppercase tracking-tighter">SUBSCRIBE_TO_HERITAGE.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-light italic opacity-60">Receive the print edition of The Journal and priority notifications for private acquisitions.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <input type="email" placeholder="EMAIL_ADDRESS" className="px-12 py-6 bg-white border-2 border-black/5 text-xl font-light placeholder:opacity-20 outline-none focus:border-black transition-all italic" />
                        <button className="px-12 py-6 bg-black text-white text-xl font-light uppercase tracking-tighter hover:bg-[#d4af37] transition-all">JOIN_DIRECTORY</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
