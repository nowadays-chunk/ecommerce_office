"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "NEURAL_PEAK: THE 1ms DIVIDE", date: "OCT 12, 2025", category: "TACTICAL", excerpt: "Analyzing the cognitive threshold of elite-level trigger execution." },
    { id: 2, title: "SQUAD_SYNC: RADIANT_TACTICS", date: "AUG 24, 2025", category: "LOGS", excerpt: "Hardware integration strategies for high-amplitude competitive environments." },
    { id: 3, title: "THE LEGEND_ARC: v8.01 DISCLOSURE", date: "MAY 15, 2025", category: "INTEL", excerpt: "Inside the fabrication of the new Neural Trigger and the future of squad sync." }
];

export default function ApexBlog() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[15vw] font-black text-[#ff3e3e]/5 uppercase select-none pointer-events-none -skew-x-12">LEGEND</div>
                <div className="w-24 h-4 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] skew-x-[-12deg] shadow-[0_0_30px_#ff3e3e]"></div>
                <h1 className="text-7xl lg:text-[12rem] font-black tracking-tighter uppercase italic leading-[0.8] text-white">
                    INTEL <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed]">FEED.</span>
                </h1>
                <p className="max-w-xl text-[12px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/40 leading-loose italic animate-pulse">DEPLOYMENT_NARRATIVES // v8.01.XP // ON_LOG.</p>
            </header>

            <main className="max-w-6xl mx-auto space-y-48 relative z-10">
                <div className="grid gap-px bg-[#ff3e3e]/20 border-4 border-[#ff3e3e]/10">
                    {POSTS.map((post) => (
                        <div key={post.id} className="bg-black p-12 lg:p-20 flex flex-col lg:flex-row justify-between items-center group hover:bg-[#ff3e3e] hover:text-white transition-all duration-300 -skew-x-6 hover:skew-x-0">
                            <div className="space-y-8 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <div className="w-8 h-2 bg-[#ff3e3e] group-hover:bg-white transition-colors"></div>
                                    <p className="text-[12px] font-black uppercase tracking-widest border-l-8 border-[#ff3e3e] pl-4 group-hover:border-white">{post.category} // {post.date}</p>
                                </div>
                                <h2 className="text-6xl font-black tracking-tighter italic uppercase leading-none max-w-2xl">{post.title}</h2>
                                <p className="text-2xl font-black opacity-40 leading-tight max-w-xl group-hover:opacity-100 transition-opacity uppercase">{post.excerpt}</p>
                            </div>
                            <div className="mt-12 lg:mt-0">
                                <button className="text-2xl font-black uppercase tracking-tighter px-16 py-6 border-[8px] border-[#ff3e3e] group-hover:border-white transform -rotate-2 hover:rotate-0 transition-all">DEPLOY_DATA</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="p-16 border-8 border-[#ff3e3e]/20 bg-black text-white space-y-12 -skew-x-12 transform hover:skew-x-0 transition-transform shadow-[0_0_80px_rgba(255,62,62,0.15)] group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3e3e]/5 to-transparent"></div>
                    <h2 className="text-6xl font-black italic uppercase tracking-tighter -skew-x-12 text-white">SYNC_MISSION.</h2>
                    <p className="text-3xl font-black italic uppercase leading-tight italic max-w-3xl text-[#ff3e3e]">"Stay locked in the squad network. Real-time tactical logs. High-intensity intel. Ready for deployment."</p>
                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                        <input type="email" placeholder="PLAYER_ID@APEX_CORE.GG" className="flex-1 bg-black/40 border-2 border-[#ff3e3e]/20 text-[#ff3e3e] px-12 py-6 text-2xl font-black uppercase tracking-tighter outline-none focus:border-[#ff3e3e] transition-all italic" />
                        <button className="bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white px-16 py-6 text-4xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform hover:skew-x-12 shadow-[0_0_50px_rgba(255,62,62,0.4)]">SYNC_IDENTITY</button>
                    </div>
                </section>
       main>
        </div>
    );
}
