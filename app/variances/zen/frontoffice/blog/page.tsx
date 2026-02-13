"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "Morning Stillness: A Guide", date: "Cycle 88, 2025", category: "MINDFULNESS", excerpt: "How to cultivate the silent space between thought and action." },
    { id: 2, title: "Ethical Threads: Growing Care", date: "Cycle 72, 2025", category: "ECOLOGY", excerpt: "Tracing the path of our organic linens from seed to sanctuary." },
    { id: 3, title: "The Ritual of Home Sanctuary", date: "Cycle 14, 2025", category: "LIFESTYLE", excerpt: "Arranging your essentials to facilitate the flow of positive energy." }
];

export default function ZenBlog() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-serif italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-1.5 h-16 bg-[#22c55e]/20 rounded-full"></div>
                <h1 className="text-7xl lg:text-[10rem] font-bold tracking-tighter uppercase italic leading-none">THE_WHISPER.</h1>
                <p className="max-w-xl text-sm font-medium uppercase tracking-widest opacity-40 italic">Guided_Narratives // Cycle_Logs // Soul_Link</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <div className="grid lg:grid-cols-3 gap-12 border-t-2 border-[#2d3a3a]/5 pt-24">
                    {POSTS.map((post) => (
                        <div key={post.id} className="space-y-8 group cursor-pointer bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-white hover:-translate-y-4 transition-all duration-700">
                            <div className="aspect-square bg-[#faf9f6] rounded-[2rem] overflow-hidden grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[3s]">
                                <img src={`https://images.unsplash.com/photo-${post.id === 1 ? '1506126613408-eca07ce68773' : post.id === 2 ? '1501676491272-7bbd3e71f7e1' : '1515377905703-c4788e51af15'}?auto=format&fit=crop&w=600&q=80`} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-6">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] italic">{post.category} // {post.date}</p>
                                <h2 className="text-3xl font-bold tracking-tighter italic leading-tight group-hover:text-[#22c55e] transition-colors">{post.title}</h2>
                                <p className="text-lg font-light italic opacity-60 leading-relaxed">{post.excerpt}</p>
                                <button className="text-[10px] font-black uppercase tracking-tighter underline decoration-[#22c55e] decoration-4 underline-offset-8">LISTEN_DEEPER</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="py-32 bg-white rounded-[5rem] p-12 lg:p-24 text-center space-y-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[#22c55e]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-5xl font-bold italic uppercase tracking-tighter text-[#22c55e]">JOIN_THE_BREATH.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-light italic opacity-60">Subscribe to receive monthly meditations and early access to our seasonal harvest.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                        <input type="email" placeholder="YOUR_VIBRATION@EMAIL.COM" className="px-12 py-6 bg-[#faf9f6] rounded-full text-xl font-light placeholder:opacity-30 outline-none focus:ring-4 focus:ring-[#22c55e]/20 transition-all text-center italic" />
                        <button className="px-12 py-6 bg-[#2d3a3a] text-white text-xl font-bold uppercase tracking-tighter rounded-full hover:bg-[#22c55e] transition-all shadow-xl">SYNC_INTENT</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
