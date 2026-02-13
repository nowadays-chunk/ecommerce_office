"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "Rituals of Luminescence", date: "12 Oct 2025", category: "AESTHETIC", excerpt: "How to cultivate a radiant morning sequence that captures the early light." },
    { id: 2, title: "The Pearl-Shell Philosophy", date: "24 Aug 2025", category: "MATERIAL", excerpt: "Exploring the refractive beauty and structural elegance of our signature casing." },
    { id: 3, title: "Aura Care: A Winter Study", date: "15 May 2025", category: "RITUAL", excerpt: "Protecting your shimmer through the shorter cycles of the lunar year." }
];

export default function GlintBlog() {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] font-light italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-px bg-[#ff8fa3] shadow-[0_0_20px_#ff8fa3]"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic text-[#4a3a4a]">REFRACTION_FEED.</h1>
                <p className="max-w-xl text-[10px] font-black uppercase tracking-[0.8em] text-[#ff8fa3]/60 leading-loose italic animate-pulse">Radiant_Narratives // Lumen_Logs // v8.0</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <div className="grid lg:grid-cols-3 gap-12 border-t border-[#ff8fa3]/10 pt-24">
                    {POSTS.map((post) => (
                        <div key={post.id} className="space-y-8 group cursor-pointer bg-white/60 backdrop-blur-3xl rounded-[3rem] p-10 shadow-[0_40px_100px_-20px_rgba(255,143,163,0.1)] border border-[#ff8fa3]/10 hover:-translate-y-4 transition-all duration-700">
                            <div className="aspect-square bg-white rounded-[2rem] overflow-hidden grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[4s] shadow-inner">
                                <img src={`https://images.unsplash.com/photo-${post.id === 1 ? '1540555700478-4be289aefcf1' : post.id === 2 ? '1515377905703-c4788e51af15' : '1522335789203-aabd1fc54bc9'}?auto=format&fit=crop&w=600&q=80`} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-6">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3] italic">{post.category} // {post.date}</p>
                                <h2 className="text-3xl font-black tracking-tighter italic leading-tight group-hover:scale-105 transition-transform origin-left uppercase text-[#4a3a4a]">{post.title}</h2>
                                <p className="text-lg font-light italic opacity-60 leading-relaxed text-[#4a3a4a]/60">{post.excerpt}</p>
                                <button className="text-[10px] font-black uppercase tracking-widest border-b border-[#ff8fa3]/20 pb-1 hover:border-[#ff8fa3] text-[#ff8fa3] transition-all">ENTER_RITUAL</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="py-32 bg-white rounded-[5rem] p-12 lg:p-24 text-center space-y-12 shadow-2xl relative overflow-hidden group border border-[#ff8fa3]/5">
                    <div className="absolute inset-0 bg-[#ff8fa3]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-5xl font-black italic uppercase tracking-tighter text-[#4a3a4a]">CAPTURE_THE_GLINT.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-light italic opacity-60 text-[#4a3a4a]">Subscribe to receive our radiant lookbooks and early ritual access.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                        <input type="email" placeholder="YOUR_AURA@MUSE.COM" className="px-12 py-6 bg-white/80 rounded-full text-xl font-light placeholder:opacity-30 outline-none focus:ring-8 focus:ring-[#ff8fa3]/10 transition-all text-center italic border border-[#ff8fa3]/5" />
                        <button className="px-12 py-6 bg-[#4a3a4a] text-white text-xl font-black uppercase tracking-widest rounded-full hover:bg-[#ff8fa3] transition-all shadow-xl">SYNC_AURA</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
