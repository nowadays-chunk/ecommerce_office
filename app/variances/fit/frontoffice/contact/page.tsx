"use client";

import React from 'react';

export default function FitContact() {
    return (
        <div className="min-h-screen bg-white text-black font-sans italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-24 h-2 bg-black skew-x-[-24deg] animate-pulse"></div>
                <h1 className="text-7xl lg:text-[12rem] font-black tracking-tighter uppercase leading-none italic -skew-x-12">SIGNALS.</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">DIRECT_COMM_v8 // RESPONSE_PRIORITY_ELITE</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24 relative z-10">
                <section className="space-y-20">
                    <div className="space-y-12 text-left">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter border-b-[12px] border-black pb-8 -skew-x-12">POINTS.</h2>
                        <div className="space-y-16">
                            <div className="group cursor-crosshair">
                                <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-4 italic border-l-4 border-black pl-4">Velocity_Hot_Line</p>
                                <p className="text-6xl font-black tracking-tighter group-hover:scale-110 origin-left transition-transform transition-colors group-hover:text-[#ff0000]">800-FIT-SYNC</p>
                            </div>
                            <div className="group cursor-crosshair">
                                <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-4 italic border-l-4 border-black pl-4">Encrypted_Digital</p>
                                <p className="text-6xl font-black tracking-tighter group-hover:bg-black group-hover:text-white px-6 inline-block transform -skew-x-12">ops@fit.pro</p>
                            </div>
                            <div className="pt-8 border-t-8 border-black/10">
                                <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-4 italic">Athletic_Grid_Sector_01</p>
                                <p className="text-3xl font-black italic opacity-60 leading-tight">
                                    Performance Lab 88<br />
                                    Industrial Park East<br />
                                    Chicago // Hub_A
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 border-8 border-black bg-black text-white space-y-8 -skew-x-6 transform hover:skew-x-0 transition-transform shadow-[30px_30px_0px_rgba(0,0,0,0.1)]">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">COMM_STATUS</h3>
                        <p className="text-2xl font-black italic uppercase leading-tight italic">"Communication is a performance metric. We respond with maximum velocity. If your inquiry is critical to your cycle, it will be prioritized."</p>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-2 bg-[#ff0000] shadow-[0_0_30px_#ff0000]"></div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 italic">OPS_READY_v4.0.12</p>
                        </div>
                    </div>
                </section>

                <form className="space-y-12 p-12 border-12 border-black bg-white shadow-[50px_50px_0px_rgba(0,0,0,0.05)] flex flex-col justify-center">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter -skew-x-12 text-center text-white bg-black py-4">TRANSMIT_DATA.</h2>
                        <div className="space-y-8">
                            <div className="relative border-8 border-black/10 p-6 focus-within:border-black transition-all bg-black/5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-2 block">ATHLETE_ID</label>
                                <input type="text" className="w-full bg-transparent outline-none text-2xl font-black italic py-2 text-black uppercase" placeholder="NAME / ALIAS" />
                            </div>
                            <div className="relative border-8 border-black/10 p-6 focus-within:border-black transition-all bg-black/5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-2 block">DATA_MAIL</label>
                                <input type="email" className="w-full bg-transparent outline-none text-2xl font-black italic py-2 text-black uppercase" placeholder="EMAIL@FIT.PRO" />
                            </div>
                            <div className="relative border-8 border-black/10 p-6 focus-within:border-black transition-all bg-black/5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-2 block">INCIDENT_LOG</label>
                                <textarea rows={4} className="w-full bg-transparent outline-none text-2xl font-black italic py-4 resize-none text-black uppercase" placeholder="WHAT IS THE OBSTACLE?"></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-10 bg-black text-white text-5xl font-black uppercase tracking-tighter hover:bg-[#ff0000] transition-all transform hover:skew-x-[-12deg] active:scale-95 shadow-2xl mt-12">
                        EXECUTE_LOG
                    </button>
                </form>
            </main>
        </div>
    );
}
