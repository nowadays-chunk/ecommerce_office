"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "INDUSTRIAL_CORE: THE NEW GRID", date: "20.10.2025", category: "DROP_INTEL", excerpt: "Analyzing the structural shift toward heavy-duty high-fashion." },
    { id: 2, title: "DISRUPTION_LEADERSHIP_v2", date: "15.08.2025", category: "MANIFESTO", excerpt: "Why the status quo is a structural defect in our cultural machine." },
    { id: 3, title: "STEEL_SQUAD_RECRUITMENT", date: "02.04.2025", category: "COMMUNITY", excerpt: "Inside the fabrication lines of our latest metalware collection." }
];

export default function HypeBlog() {
    return (
        <div className="min-h-screen bg-black text-white font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 space-y-12 relative">
                <div className="absolute -top-24 -left-12 text-[15vw] font-black text-white/5 uppercase -rotate-6 select-none pointer-events-none">INTEL</div>
                <div className="w-48 h-16 bg-white text-black font-black flex items-center justify-center text-5xl -skew-x-12">BLOG_v3</div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none -skew-x-12">THE_SOURCE.</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40 italic">Disruptive_Narratives // Grid_Logs // v3.02_LIVE</p>
            </header>

            <main className="max-w-6xl mx-auto space-y-48 relative z-10">
                <div className="grid gap-2 outline-8 outline-white p-2 bg-white">
                    {POSTS.map((post) => (
                        <div key={post.id} className="bg-black p-12 lg:p-20 flex flex-col lg:flex-row justify-between items-center group hover:bg-white hover:text-black transition-all duration-300 -skew-y-1 hover:skew-y-0">
                            <div className="space-y-8 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <div className="w-4 h-4 bg-white group-hover:bg-black transition-colors"></div>
                                    <p className="text-[12px] font-black uppercase tracking-widest bg-white text-black px-4 group-hover:bg-black group-hover:text-white">{post.category} // {post.date}</p>
                                </div>
                                <h2 className="text-6xl font-black tracking-tighter italic uppercase -skew-x-6 leading-none max-w-2xl">{post.title}</h2>
                                <p className="text-2xl font-black opacity-40 leading-tight max-w-xl group-hover:opacity-100 transition-opacity">{post.excerpt}</p>
                            </div>
                            <div className="mt-12 lg:mt-0">
                                <button className="text-2xl font-black uppercase tracking-tighter px-16 py-6 border-8 border-white group-hover:border-black transform rotate-3 hover:rotate-0 transition-all">DECRYPT_DATA</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="p-16 border-8 border-white bg-white text-black space-y-12 -rotate-1 shadow-[40px_40px_0px_rgba(255,255,255,0.2)]">
                    <h2 className="text-6xl font-black italic uppercase tracking-tighter -skew-x-12">OPERATIVE_FEED.</h2>
                    <p className="text-3xl font-black italic uppercase leading-tight italic max-w-3xl">"Stay synchronized with the machine. Real-time drops. No compromise hardware. Join the operative network."</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="email" placeholder="OPERATIVE_ID@GRID.IO" className="flex-1 bg-black text-white px-8 py-6 text-4xl font-black uppercase tracking-tighter outline-none focus:ring-8 focus:ring-black focus:ring-offset-8 transition-all" />
                        <button className="bg-black text-white px-16 py-6 text-4xl font-black uppercase tracking-tighter hover:bg-white hover:text-black border-8 border-black transition-all">SYNC_IDENTITY</button>
                    </div>
                </section>
       main>
        </div>
    );
}
