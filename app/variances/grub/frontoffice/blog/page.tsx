"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "The Forager's Guide to Winter", date: "Harvest Oct, 2025", category: "FORAGING", excerpt: "Discovering the hidden treasures of the cold soil and the resilience of the roots." },
    { id: 2, title: "Communal Fields: Why We Share", date: "Harvest Aug, 2025", category: "COMMUNITY", excerpt: "The philosophy of the collective harvest and the power of the shared table." },
    { id: 3, title: "Organic Seeds: The Future Growth", date: "Harvest Apr, 2025", category: "AGRICULTURE", excerpt: "How we preserve ancient variety and ensure a resilient food network." }
];

export default function GrubBlog() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-black italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-16 bg-[#22c55e] rounded-full opacity-20 animate-pulse"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic">FIELD_LOGS.</h1>
                <p className="max-w-xl text-sm font-black uppercase tracking-widest opacity-40 italic">Harvest_Narratives // Fresh_Logs // Tribe_Link</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <div className="grid lg:grid-cols-2 gap-24 border-t-8 border-[#2d3a3a]/5 pt-24">
                    {POSTS.map((post) => (
                        <div key={post.id} className="space-y-8 group cursor-pointer bg-white p-12 rounded-[4rem] shadow-2xl border-8 border-white hover:rotate-1 transition-all duration-700">
                            <div className="aspect-[16/9] bg-[#faf9f6] rounded-[3rem] overflow-hidden grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[4s]">
                                <img src={`https://images.unsplash.com/photo-${post.id === 1 ? '1501676491272-7bbd3e71f7e1' : post.id === 2 ? '1523348837708-15d4a09cfac2' : '1502301197179-65228ab57f71'}?auto=format&fit=crop&w=800&q=80`} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-6">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] italic">{post.category} // {post.date}</p>
                                <h2 className="text-4xl font-black tracking-tighter italic leading-tight group-hover:text-[#22c55e] transition-colors uppercase underline decoration-[#22c55e] decoration-8 underline-offset-8 decoration-skip-ink-none">{post.title}</h2>
                                <p className="text-xl font-black opacity-60 leading-relaxed">{post.excerpt}</p>
                                <button className="text-[10px] font-black uppercase tracking-widest bg-[#2d3a3a] text-white px-8 py-4 rounded-full shadow-xl">PLUCK_INTEL</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="py-32 bg-[#2d3a3a] text-[#faf9f6] rounded-[5rem] p-12 lg:p-24 text-center space-y-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none">JOIN_THE_HARVEST.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-black italic opacity-60">Subscribe for early harvest drops and field dispatches from the tribe.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                        <input type="email" placeholder="YOUR_ALIAS@TRIBE.EMAIL" className="px-12 py-6 bg-[#faf9f6] rounded-full text-xl font-black text-[#2d3a3a] placeholder:opacity-30 outline-none focus:ring-8 focus:ring-white/20 transition-all text-center italic" />
                        <button className="px-12 py-6 bg-[#22c55e] text-white text-xl font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-xl">SYNC_FIELD</button>
                    </div>
                </section>
       main>
        </div>
    );
}
