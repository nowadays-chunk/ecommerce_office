"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "The Weight of Ash Wood", date: "12 Oct 2025", category: "MATERIAL", excerpt: "A study on the structural integrity and aesthetic endurance of northern ash." },
    { id: 2, title: "Utility in the Minimalist Studio", date: "24 Aug 2025", category: "LIFESTYLE", excerpt: "How to arrange your workspace for maximum focus and essential clarity." },
    { id: 3, title: "Dispatches from Copenhagen", date: "15 May 2025", category: "STUDIO_LIFE", excerpt: "Reflections on the intersection of modern functionalism and traditional craft." }
];

export default function NordicBlog() {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] font-sans">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-8 h-px bg-[#2d2d2d]/40"></div>
                <h1 className="text-6xl lg:text-9xl font-light tracking-tight uppercase leading-none">THE_STUDIO_LOGS.</h1>
                <p className="max-w-xl text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 leading-loose italic">Craft_Narratives // Material_History // v1.01</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <div className="grid lg:grid-cols-2 gap-24 border-t border-[#2d2d2d]/10 pt-12">
                    {POSTS.map((post) => (
                        <div key={post.id} className="space-y-8 group cursor-pointer">
                            <div className="aspect-[16/9] bg-[#fafafa] overflow-hidden grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[2s]">
                                <img src={`https://images.unsplash.com/photo-${post.id === 1 ? '1540574163026-643ea20ade25' : post.id === 2 ? '1494438639946-1ebd1d20bf85' : '1519710164239-da123dc03ef4'}?auto=format&fit=crop&w=800&q=80`} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-4">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40 italic">{post.category} // {post.date}</p>
                                <h2 className="text-3xl font-light tracking-tight group-hover:opacity-60 transition-opacity uppercase">{post.title}</h2>
                                <p className="text-xl font-light opacity-60 leading-relaxed italic">{post.excerpt}</p>
                                <button className="text-[10px] font-bold uppercase tracking-widest border-b border-[#2d2d2d]/20 pb-1 group-hover:border-[#2d2d2d] transition-all">VIEW_STUDIO_NOTES</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="py-24 bg-[#fafafa] border border-[#2d2d2d]/10 p-12 lg:p-24 text-center space-y-12">
                    <h2 className="text-4xl font-light uppercase tracking-tight">SUBSCRIBE_TO_ESSENTIALS.</h2>
                    <p className="max-w-2xl mx-auto text-xl font-light opacity-60 italic">Receive our quarterly studio dispatches and notifications for new curations.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <input type="email" placeholder="EMAIL_ADDRESS" className="px-12 py-6 bg-white border border-[#2d2d2d]/10 text-xl font-light placeholder:opacity-20 outline-none focus:border-[#2d2d2d] transition-all italic" />
                        <button className="px-12 py-6 bg-[#2d2d2d] text-white text-xl font-bold uppercase tracking-widest hover:opacity-80 transition-all">JOIN_STUDIO</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
