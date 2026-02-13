"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "NEURAL_LINK_v9: THE UPGRADE PROTOCOL", date: "2025.10.12.04", category: "CORE_EVOLUTION", excerpt: "Deep dive into the silicon architecture of the latest neural interface." },
    { id: 2, title: "QUANTUM_STABILITY_IN_HARDWARE", date: "2025.08.24.11", category: "LOG_STREAM", excerpt: "How we achieved zero-latency thermal management in the new core modules." },
    { id: 3, title: "DECENTRALIZED_COMMERCE_FUTURE", date: "2025.05.15.08", category: "UNIFIED_DATA", excerpt: "The integration of private blockchain keys into customer identity logs." }
];

export default function TechBlog() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-8 relative group">
                <div className="absolute top-0 right-0 text-[15vw] font-black text-[#0062ff]/5 uppercase select-none pointer-events-none italic -skew-x-12">DATA</div>
                <div className="w-24 h-[1px] bg-[#00f2ff] shadow-[0_0_15px_#00f2ff] animate-pulse"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.8] text-white skew-x-[-12deg]">
                    CONTENT <br /> <span className="text-[#00f2ff] underline decoration-px decoration-[#00f2ff]/20 underline-offset-[24px]">SHREDS.</span>
                </h1>
                <p className="max-w-xl text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40 leading-loose italic animate-pulse">TRANSMISSION_FEED // v9.01 // NEURAL_INSIGHTS_v1.</p>
            </header>

            <main className="max-w-6xl mx-auto space-y-32 relative z-10">
                <div className="grid gap-6">
                    {POSTS.map((post) => (
                        <div key={post.id} className="bg-black/40 backdrop-blur-3xl p-12 lg:p-16 border border-[#00f2ff]/10 hover:border-[#00f2ff] transition-all duration-500 group relative overflow-hidden flex flex-col lg:flex-row justify-between items-center">
                            <div className="absolute top-0 right-0 p-4 text-[8px] font-black text-[#00f2ff]/40 italic group-hover:animate-pulse">STREAMING_INTEL...</div>
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <div className="w-3 h-3 border border-[#00f2ff] rounded-none group-hover:bg-[#00f2ff] transition-all"></div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40">{post.category} // {post.date}</p>
                                </div>
                                <h2 className="text-5xl font-black tracking-tighter italic uppercase text-white leading-none max-w-3xl skew-x-[-6deg] group-hover:scale-105 transition-transform origin-left">{post.title}</h2>
                                <p className="text-xl font-black text-[#00f2ff]/60 max-w-2xl leading-tight">{post.excerpt}</p>
                            </div>
                            <div className="mt-12 lg:mt-0">
                                <button className="text-[10px] font-black uppercase tracking-widest border border-[#00f2ff]/20 px-10 py-4 hover:bg-[#00f2ff] hover:text-black transition-all shadow-[0_0_50px_rgba(0,242,255,0.1)]">DOWNLOAD_PACKAGE</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="bg-white/5 backdrop-blur-3xl p-16 border border-[#00f2ff]/20 text-center space-y-12 relative overflow-hidden group shadow-[0_0_50px_rgba(0,242,255,0.05)]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2ff]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white skew-x-[-6deg]">INITIATE_HANDSHAKE.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-black italic text-[#00f2ff]/60 uppercase tracking-tighter">Enter your neural alias to receive priority hardware specs and data log updates.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                        <input type="email" placeholder="ALIAS@TECH_CORE.EXE" className="px-12 py-6 bg-black border border-[#00f2ff]/20 text-xl font-black text-[#00f2ff] placeholder:opacity-20 outline-none focus:border-[#00f2ff] transition-all italic text-center" />
                        <button className="px-12 py-6 bg-gradient-to-r from-[#00f2ff] to-[#0062ff] text-black text-xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform shadow-[0_0_50px_rgba(0,242,255,0.4)]">SYNC_IDENTITY</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
