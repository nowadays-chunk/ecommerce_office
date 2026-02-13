"use client";

import React from 'react';

const POSTS = [
    { id: 1, title: "MAX_VELOCITY: PEAK PERFORMANCE", date: "12 OCT 2025", category: "ENGINE_LOGS", excerpt: "Optimizing your physiological output through elite-tier hardware integration." },
    { id: 2, title: "IMPACT_SYNC: THE NEW PROTOCOL", date: "24 AUG 2025", category: "HARDWARE", excerpt: "Breaking down the structural shock-absorption of the Series-X trainers." },
    { id: 3, title: "RECOVERY_SYSTEMS: THE ELITE EDGE", date: "15 APR 2025", category: "OPTIMIZATION", excerpt: "Why the millisecond after training determines your 24-hour performance grid." }
];

export default function FitBlog() {
    return (
        <div className="min-h-screen bg-white text-black font-sans italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[15vw] font-black text-black/5 uppercase select-none pointer-events-none -skew-x-12">PERFORM</div>
                <div className="w-24 h-4 bg-black skew-x-[-12deg] animate-pulse"></div>
                <h1 className="text-7xl lg:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.8] text-black">
                    THE <br /> <span className="bg-black text-white px-8">FEED.</span>
                </h1>
                <p className="max-w-xl text-[12px] font-black uppercase tracking-[0.5em] opacity-40 leading-loose italic animate-pulse">DEPLOYMENT_NARRATIVES // v8.01 // ELITE_INTELLIGENCE.</p>
            </header>

            <main className="max-w-6xl mx-auto space-y-48 relative z-10">
                <div className="grid gap-px bg-black border-[12px] border-black">
                    {POSTS.map((post) => (
                        <div key={post.id} className="bg-white p-12 lg:p-20 flex flex-col lg:flex-row justify-between items-center group hover:bg-black hover:text-white transition-all duration-300">
                            <div className="space-y-8 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <div className="w-8 h-2 bg-black group-hover:bg-white transition-colors"></div>
                                    <p className="text-[12px] font-black uppercase tracking-widest border-l-8 border-black pl-4 group-hover:border-white">{post.category} // {post.date}</p>
                                </div>
                                <h2 className="text-6xl font-black tracking-tighter italic uppercase -skew-x-12 leading-none max-w-2xl">{post.title}</h2>
                                <p className="text-2xl font-black opacity-40 leading-tight max-w-xl group-hover:opacity-100 transition-opacity uppercase">{post.excerpt}</p>
                            </div>
                            <div className="mt-12 lg:mt-0">
                                <button className="text-2xl font-black uppercase tracking-tighter px-16 py-6 border-[8px] border-black group-hover:border-white transform -rotate-2 hover:rotate-0 transition-all">DEPLOY_DATA</button>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="p-16 border-[12px] border-black bg-black text-white space-y-12 -skew-x-6 transform hover:skew-x-0 transition-transform shadow-[40px_40px_0px_rgba(0,0,0,0.15)] group">
                    <h2 className="text-6xl font-black italic uppercase tracking-tighter -skew-x-12">SYNC_PERFORMANCE.</h2>
                    <p className="text-3xl font-black italic uppercase leading-tight italic max-w-3xl">"Stay prioritized in the performance grid. Real-time engine updates. High-velocity Intel. Sync with the elite network."</p>
                    <div className="flex flex-col md:flex-row gap-6">
                        <input type="email" placeholder="IDENTITY@ELITE_ENGINE.CORE" className="flex-1 bg-white text-black px-12 py-6 text-2xl font-black uppercase tracking-tighter outline-none focus:ring-[12px] focus:ring-[#ff0000] transition-all italic" />
                        <button className="bg-white text-black px-16 py-6 text-4xl font-black uppercase tracking-tighter hover:bg-[#ff0000] hover:text-white transition-all transform hover:skew-x-6">SYNC_IDENTITY</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
