"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "The Language of the Deep Valleys", date: "CYCLE 88, 2025", category: "WHISPERS", excerpt: "Deciphering the silent signals of the untamed earth and the spirit of the woods." },
    { id: 2, title: "Raw Matter: A Study in Stone", date: "CYCLE 72, 2025", category: "ESSENTIALS", excerpt: "Why we return to the base elements for our most architectural designs." },
    { id: 3, title: "Quiet Cycles: The Winter Stillness", date: "CYCLE 14, 2025", category: "RITUAL", excerpt: "Embracing the restorative power of the cold months and the return to the core." }
];

export default function WildBlog() {
    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] font-serif italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 text-[18vw] font-black text-[#2d2a22]/5 uppercase italic select-none pointer-events-none -rotate-6">WHISPER</div>
                <div className="w-16 h-16 bg-white border border-[#2d2a22]/10 rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-2 h-2 bg-[#2d2a22]"></div>
                </div>
                <h1 className="text-7xl lg:text-[10rem] font-light tracking-tighter uppercase leading-none italic text-[#2d2a22]">WHISPERS.</h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#8b7e66] italic">THE_TRIBAL_FEED // v1.0.RAW // STILL_SYNC_ACTIVE.</p>
            </header>

            <main className="max-w-6xl mx-auto space-y-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 border-t border-[#8b7e66]/10 pt-24">
                    {POSTS.map((post) => (
                        <div key={post.id} className="space-y-8 group cursor-pointer bg-white/40 backdrop-blur-3xl rounded-[3rem] p-12 shadow-2xl border border-[#2d2a22]/5 hover:-translate-y-4 transition-all duration-700">
                            <div className="aspect-[16/9] bg-white rounded-[2.5rem] overflow-hidden grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[6s]">
                                <img src={`https://images.unsplash.com/photo-${post.id === 1 ? '1441974231531-c6227db76b6e' : post.id === 2 ? '1470071459604-3b5ec3a7fe05' : '1501785888041-af3ef285b470'}?auto=format&fit=crop&w=800&q=80`} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-6">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66] italic">{post.category} // {post.date}</p>
                                <h2 className="text-4xl font-light tracking-tighter italic uppercase text-[#2d2a22] leading-none group-hover:text-[#8b7e66] transition-colors">{post.title}</h2>
                                <p className="text-xl font-light opacity-60 text-[#2d2a22]/60 leading-relaxed italic">{post.excerpt}</p>
                                <button className="text-[10px] font-bold uppercase tracking-widest border-b border-[#8b7e66]/20 pb-1 hover:border-[#8b7e66] text-[#8b7e66] transition-all">LISTEN_STILL</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="py-32 bg-white/40 backdrop-blur-3xl rounded-[4rem] p-12 lg:p-24 text-center space-y-12 shadow-2xl relative overflow-hidden group border border-[#8b7e66]/10">
                    <div className="absolute inset-0 bg-[#8b7e66]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-5xl font-light italic uppercase tracking-tighter text-[#2d2a22]">RELEASE_WHISPER.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-light italic opacity-60 text-[#8b7e66]">Subscribe to receive our silent dispatches and rituals from the deep valley.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                        <input type="email" placeholder="YOUR_ALIAS@WILD.LIFE" className="px-12 py-6 bg-white/80 rounded-2xl text-xl font-light placeholder:opacity-30 outline-none focus:ring-8 focus:ring-[#8b7e66]/10 transition-all text-center italic border border-[#8b7e66]/10" />
                        <button className="px-12 py-6 bg-[#2d2a22] text-[#f4f1ea] text-xl font-light uppercase tracking-tighter rounded-2xl hover:bg-[#8b7e66] transition-all transform shadow-2xl">RELEASE_SIGNAL</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
